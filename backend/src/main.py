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

    # Step 2: Extract and match welds
    print("\nMatching girth welds...")
    welds1 = extract_welds(df_run1)
    welds2 = extract_welds(df_run2)
    print(f"  {run1_year} welds: {len(welds1)}")
    print(f"  {run2_year} welds: {len(welds2)}")

    weld_matches = match_welds(welds1, welds2, weld_tolerance)
    weld_offsets = calculate_weld_offsets(weld_matches)
    print(f"  Matched welds: {len(weld_offsets)}")
    if len(weld_offsets) > 0:
        print(f"  Avg offset: {weld_offsets['offset'].mean():.2f} ft")
        print(f"  Offset range: [{weld_offsets['offset'].min():.2f}, {weld_offsets['offset'].max():.2f}] ft")

    # Step 3: Build correction and apply
    print("\nCorrecting positions...")
    correction_fn = build_correction_function(weld_offsets)
    df_run2 = correct_positions(df_run2, correction_fn)

    # Step 4: Match anomalies
    print("\nMatching anomalies...")
    anomalies1 = extract_anomalies(df_run1)
    anomalies2 = extract_anomalies(df_run2)
    print(f"  {run1_year} anomalies: {len(anomalies1)}")
    print(f"  {run2_year} anomalies: {len(anomalies2)}")

    # Compute overlap region (where both runs have anomaly data)
    dist_col1 = "log_distance"
    dist_col2 = "corrected_distance" if "corrected_distance" in anomalies2.columns else "log_distance"
    overlap_start = max(anomalies1[dist_col1].min(), anomalies2[dist_col2].min()) - distance_tolerance
    overlap_end = min(anomalies1[dist_col1].max(), anomalies2[dist_col2].max()) + distance_tolerance
    print(f"  Overlap region: {overlap_start:.0f} - {overlap_end:.0f} ft")

    # Only match within overlap region for better results
    a1_overlap = anomalies1[(anomalies1[dist_col1] >= overlap_start) & (anomalies1[dist_col1] <= overlap_end)]
    a2_overlap = anomalies2[(anomalies2[dist_col2] >= overlap_start) & (anomalies2[dist_col2] <= overlap_end)]
    print(f"  {run1_year} in overlap: {len(a1_overlap)}")
    print(f"  {run2_year} in overlap: {len(a2_overlap)}")

    results = match_anomalies(a1_overlap, a2_overlap, distance_tolerance, clock_tolerance)
    print(f"  Matched: {len(results['matched'])}")
    print(f"  New in {run2_year}: {len(results['new'])}")
    print(f"  Missing from {run1_year}: {len(results['missing'])}")
    print(f"  Uncertain: {len(results['uncertain'])}")

    # Step 5: Calculate growth
    years_between = RUN_DATES[run2_year] - RUN_DATES[run1_year]
    print(f"\nCalculating growth rates ({years_between} years)...")
    growth_df = calculate_all_growth(results["matched"], df_run1, df_run2, years_between)
    growth_df = flag_critical(growth_df)
    critical_count = growth_df["is_critical"].sum()
    print(f"  Critical anomalies (>{2.0}%/yr): {critical_count}")

    # Step 6: Output
    os.makedirs(output_dir, exist_ok=True)
    prefix = f"{run1_year}_vs_{run2_year}"

    # Matched anomalies with growth
    growth_path = os.path.join(output_dir, f"{prefix}_matched_anomalies.csv")
    growth_df.to_csv(growth_path, index=False)
    print(f"\nSaved: {growth_path}")

    # New anomalies
    new_df = df_run2[df_run2["original_index"].isin(results["new"])]
    new_path = os.path.join(output_dir, f"{prefix}_new_anomalies.csv")
    new_df.to_csv(new_path, index=False)
    print(f"Saved: {new_path}")

    # Missing anomalies
    missing_df = df_run1[df_run1["original_index"].isin(results["missing"])]
    missing_path = os.path.join(output_dir, f"{prefix}_missing_anomalies.csv")
    missing_df.to_csv(missing_path, index=False)
    print(f"Saved: {missing_path}")

    # Weld alignment
    weld_path = os.path.join(output_dir, f"{prefix}_weld_alignment.csv")
    weld_offsets.to_csv(weld_path, index=False)
    print(f"Saved: {weld_path}")

    # Summary
    print(f"\n=== Summary ===")
    print(f"Welds matched: {len(weld_offsets)} / {min(len(welds1), len(welds2))}")
    print(f"Anomalies matched: {len(results['matched'])} / {len(anomalies2)}")
    print(f"New anomalies: {len(results['new'])}")
    print(f"Missing anomalies: {len(results['missing'])}")
    print(f"Uncertain matches: {len(results['uncertain'])}")
    print(f"Critical growth: {critical_count}")

    if len(growth_df) > 0 and "depth_growth_rate" in growth_df.columns:
        valid_growth = growth_df.dropna(subset=["depth_growth_rate"])
        if len(valid_growth) > 0:
            top10 = valid_growth.nlargest(10, "depth_growth_rate")
            print(f"\nTop 10 fastest-growing anomalies:")
            print(top10[["run1_idx", "run2_idx", "depth_run1", "depth_run2",
                          "depth_growth_rate", "confidence"]].to_string(index=False))

    return {
        "weld_offsets": weld_offsets,
        "growth": growth_df,
        "results": results,
        "df_run1": df_run1,
        "df_run2": df_run2,
    }


def run_all_comparisons(data_dir: str, output_dir: str):
    pairs = [(2007, 2015), (2015, 2022), (2007, 2022)]
    for r1, r2 in pairs:
        print(f"\n{'='*60}")
        run_pipeline(data_dir, output_dir, r1, r2)
        print()


if __name__ == "__main__":
    data_dir = os.path.join(os.path.dirname(__file__), "..", "..", "data")
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
