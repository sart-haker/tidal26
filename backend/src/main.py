import os
import sys
import pandas as pd

from src.loaders.csv_loader import load_and_normalize
from src.alignment.weld_matcher import extract_welds, match_welds, calculate_weld_offsets
from src.alignment.position_corrector import build_correction_function, correct_positions
from src.matching.anomaly_matcher import extract_anomalies, match_anomalies
from src.analysis.growth_calculator import calculate_all_growth, flag_critical

# Inspection dates for computing years between runs
RUN_DATES = {
    2007: 2007,
    2015: 2015,
    2022: 2022,
}


def run_pipeline_from_dataframes(
    df_run1: pd.DataFrame,
    df_run2: pd.DataFrame,
    run1_year: int,
    run2_year: int,
    distance_tolerance: float = 10.0,
    clock_tolerance: float = 2.0,
    weld_tolerance: float = 50.0,
) -> dict:
    """Core pipeline: weld matching, position correction, anomaly matching, growth calculation.
    Accepts already-normalized DataFrames. Used by both CLI and API."""

    # Step 2: Extract and match welds
    welds1 = extract_welds(df_run1)
    welds2 = extract_welds(df_run2)

    weld_matches = match_welds(welds1, welds2, weld_tolerance)
    weld_offsets = calculate_weld_offsets(weld_matches)

    # Step 3: Build correction and apply
    correction_fn = build_correction_function(weld_offsets)
    df_run2 = correct_positions(df_run2, correction_fn)

    # Step 4: Match anomalies
    anomalies1 = extract_anomalies(df_run1)
    anomalies2 = extract_anomalies(df_run2)

    # Compute overlap region
    dist_col1 = "log_distance"
    dist_col2 = "corrected_distance" if "corrected_distance" in anomalies2.columns else "log_distance"
    overlap_start = max(anomalies1[dist_col1].min(), anomalies2[dist_col2].min()) - distance_tolerance
    overlap_end = min(anomalies1[dist_col1].max(), anomalies2[dist_col2].max()) + distance_tolerance

    a1_overlap = anomalies1[(anomalies1[dist_col1] >= overlap_start) & (anomalies1[dist_col1] <= overlap_end)]
    a2_overlap = anomalies2[(anomalies2[dist_col2] >= overlap_start) & (anomalies2[dist_col2] <= overlap_end)]

    results = match_anomalies(a1_overlap, a2_overlap, distance_tolerance, clock_tolerance)

    # Step 5: Calculate growth
    years_between = run2_year - run1_year
    growth_df = calculate_all_growth(results["matched"], df_run1, df_run2, years_between)
    growth_df = flag_critical(growth_df)

    return {
        "weld_offsets": weld_offsets,
        "growth": growth_df,
        "results": results,
        "df_run1": df_run1,
        "df_run2": df_run2,
    }


def run_pipeline(
    data_dir: str,
    output_dir: str,
    run1_year: int = 2007,
    run2_year: int = 2015,
    distance_tolerance: float = 10.0,
    clock_tolerance: float = 2.0,
    weld_tolerance: float = 50.0,
):
    print(f"=== ILI Data Alignment Pipeline ===")
    print(f"Comparing {run1_year} vs {run2_year}\n")

    # Step 1: Load and normalize
    print("Loading and normalizing data...")
    datasets = load_and_normalize(data_dir)
    df_run1 = datasets[run1_year]
    df_run2 = datasets[run2_year]
    print(f"  {run1_year}: {len(df_run1)} rows")
    print(f"  {run2_year}: {len(df_run2)} rows")

    # Steps 2-5: Core pipeline
    pipeline_result = run_pipeline_from_dataframes(
        df_run1, df_run2, run1_year, run2_year,
        distance_tolerance, clock_tolerance, weld_tolerance,
    )
    weld_offsets = pipeline_result["weld_offsets"]
    growth_df = pipeline_result["growth"]
    results = pipeline_result["results"]
    df_run2 = pipeline_result["df_run2"]

    print(f"  Matched welds: {len(weld_offsets)}")
    print(f"  Matched anomalies: {len(results['matched'])}")
    print(f"  New in {run2_year}: {len(results['new'])}")
    print(f"  Missing from {run1_year}: {len(results['missing'])}")
    print(f"  Uncertain: {len(results['uncertain'])}")
    critical_count = growth_df["is_critical"].sum() if len(growth_df) > 0 else 0
    print(f"  Critical anomalies (>{2.0}%/yr): {critical_count}")

    # Step 6: Output
    os.makedirs(output_dir, exist_ok=True)
    prefix = f"{run1_year}_vs_{run2_year}"

    growth_path = os.path.join(output_dir, f"{prefix}_matched_anomalies.csv")
    growth_df.to_csv(growth_path, index=False)
    print(f"\nSaved: {growth_path}")

    new_df = df_run2[df_run2["original_index"].isin(results["new"])]
    new_path = os.path.join(output_dir, f"{prefix}_new_anomalies.csv")
    new_df.to_csv(new_path, index=False)
    print(f"Saved: {new_path}")

    missing_df = df_run1[df_run1["original_index"].isin(results["missing"])]
    missing_path = os.path.join(output_dir, f"{prefix}_missing_anomalies.csv")
    missing_df.to_csv(missing_path, index=False)
    print(f"Saved: {missing_path}")

    weld_path = os.path.join(output_dir, f"{prefix}_weld_alignment.csv")
    weld_offsets.to_csv(weld_path, index=False)
    print(f"Saved: {weld_path}")

    print(f"\n=== Summary ===")
    print(f"Anomalies matched: {len(results['matched'])}")
    print(f"New anomalies: {len(results['new'])}")
    print(f"Missing anomalies: {len(results['missing'])}")
    print(f"Critical growth: {critical_count}")

    return pipeline_result


def run_all_comparisons(data_dir: str, output_dir: str):
    pairs = [(2007, 2015), (2015, 2022), (2007, 2022)]
    for r1, r2 in pairs:
        print(f"\n{'='*60}")
        run_pipeline(data_dir, output_dir, r1, r2)
        print()


if __name__ == "__main__":
    data_dir = os.path.join(os.path.dirname(__file__), "..", "data")
    output_dir = os.path.join(os.path.dirname(__file__), "..", "output")

    if len(sys.argv) >= 3:
        run1 = int(sys.argv[1])
        run2 = int(sys.argv[2])
        run_pipeline(data_dir, output_dir, run1, run2)
    elif len(sys.argv) == 2 and sys.argv[1] == "all":
        run_all_comparisons(data_dir, output_dir)
    else:
        # Default: run all comparisons
        run_all_comparisons(data_dir, output_dir)
