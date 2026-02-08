"""Export backend output CSVs to frontend static TypeScript data files."""

import json
import math
import pandas as pd
from pathlib import Path

BACKEND_OUTPUT = Path(__file__).parent / "output"
FRONTEND_DATA = Path(__file__).parent.parent / "frontend" / "src" / "lib" / "data"

COMPARISONS = [
    (2007, 2015),
    (2015, 2022),
    (2007, 2022),
]

CLUSTER_YEARS = [2007, 2015, 2022]

# Columns the frontend TypeScript interfaces expect
MATCHED_COLS = [
    "run1_idx", "run2_idx", "confidence", "event_type",
    "run1_distance", "run2_distance", "run1_clock", "run2_clock",
    "depth_run1", "depth_run2", "depth_change", "depth_growth_rate",
    "length_run1", "length_run2", "length_change", "length_growth_rate",
    "width_run1", "width_run2", "width_change", "width_growth_rate",
    "is_critical",
]

NEW_MISSING_COLS = [
    "original_index", "log_distance", "event_type_normalized",
    "clock_decimal", "depth_percent", "length", "width", "joint_number",
]

WELD_COLS = [
    "run1_idx", "run2_idx", "joint_number",
    "run1_distance", "run2_distance", "offset",
]

CLUSTER_COLS = [
    "cluster_id", "start_distance_ft", "end_distance_ft", "span_ft",
    "center_distance_ft", "avg_clock_position", "anomaly_count",
    "max_depth_pct", "avg_depth_pct", "total_length_in", "avg_width_in",
    "severity_score", "is_critical",
]

PREDICTION_COLS = [
    "prediction_distance", "corrosion_probability", "predicted_corrosion",
    "wall_thickness", "elevation", "clock_position", "event_type_normalized",
    "anomaly_density_50ft", "dist_to_bend", "dist_to_girth_weld",
]


def parse_clock_to_decimal(val) -> float | None:
    """Convert clock string like '05:00' to decimal hours like 5.0."""
    if val is None or (isinstance(val, float) and math.isnan(val)):
        return None
    s = str(val).strip()
    if not s or s == "nan":
        return None
    try:
        parts = s.split(":")
        hours = int(parts[0])
        minutes = int(parts[1]) if len(parts) > 1 else 0
        return round(hours + minutes / 60.0, 4)
    except (ValueError, IndexError):
        return None


def clean_for_json(val):
    """Convert NaN/inf to None for JSON serialization."""
    if isinstance(val, float) and (math.isnan(val) or math.isinf(val)):
        return None
    return val


def df_to_records(df: pd.DataFrame, cols: list[str]) -> list[dict]:
    """Convert DataFrame to list of dicts, selecting only specified columns."""
    available = [c for c in cols if c in df.columns]
    subset = df[available].copy()

    # Convert clock_position strings to decimal numbers
    if "clock_position" in subset.columns:
        subset["clock_position"] = subset["clock_position"].apply(parse_clock_to_decimal)

    records = subset.to_dict(orient="records")
    # Clean NaN/inf → null
    return [{k: clean_for_json(v) for k, v in row.items()} for row in records]


def write_ts_file(path: Path, content: str):
    """Write a TypeScript file and report."""
    path.write_text(content, encoding="utf-8")
    print(f"  Wrote {path.name} ({path.stat().st_size:,} bytes)")


def export_run(run1: int, run2: int):
    """Export a single run comparison to a .ts file."""
    prefix = f"{run1}_vs_{run2}"
    tag = f"{run1}-vs-{run2}"

    matched_path = BACKEND_OUTPUT / f"{prefix}_matched_anomalies.csv"
    new_path = BACKEND_OUTPUT / f"{prefix}_new_anomalies.csv"
    missing_path = BACKEND_OUTPUT / f"{prefix}_missing_anomalies.csv"
    weld_path = BACKEND_OUTPUT / f"{prefix}_weld_alignment.csv"

    matched = df_to_records(pd.read_csv(matched_path), MATCHED_COLS) if matched_path.exists() else []
    new = df_to_records(pd.read_csv(new_path), NEW_MISSING_COLS) if new_path.exists() else []
    missing = df_to_records(pd.read_csv(missing_path), NEW_MISSING_COLS) if missing_path.exists() else []
    welds = df_to_records(pd.read_csv(weld_path), WELD_COLS) if weld_path.exists() else []

    # Build short variable names matching existing .ts file format
    ts = 'import type { MatchedAnomaly, NewAnomaly, MissingAnomaly, WeldAlignment } from "../types";\n'
    ts += f"export const matched: MatchedAnomaly[] = {json.dumps(matched, indent=2)};\n\n"
    ts += f"export const newAnomalies: NewAnomaly[] = {json.dumps(new, indent=2)};\n\n"
    ts += f"export const missing: MissingAnomaly[] = {json.dumps(missing, indent=2)};\n\n"
    ts += f"export const welds: WeldAlignment[] = {json.dumps(welds, indent=2)};\n"

    # Map run pair to filename
    name_map = {
        (2007, 2015): "run-2007-vs-2015.ts",
        (2015, 2022): "run-2015-vs-2022.ts",
        (2007, 2022): "run-2007-vs-2022.ts",
    }
    write_ts_file(FRONTEND_DATA / name_map[(run1, run2)], ts)
    print(f"    matched={len(matched)}, new={len(new)}, missing={len(missing)}, welds={len(welds)}")


def export_clusters():
    """Export cluster stats for all years into clusters.ts."""
    ts = 'import type { ClusterStats } from "../types";\n\n'

    for year in CLUSTER_YEARS:
        path = BACKEND_OUTPUT / f"{year}_cluster_stats.csv"
        if path.exists():
            records = df_to_records(pd.read_csv(path), CLUSTER_COLS)
        else:
            records = []
        ts += f"export const clusters{year}: ClusterStats[] = {json.dumps(records, indent=2)};\n\n"
        print(f"    {year}: {len(records)} clusters")

    write_ts_file(FRONTEND_DATA / "clusters.ts", ts)


def export_predictions():
    """Export ML predictions into predictions.ts."""
    path = BACKEND_OUTPUT / "predictions_2022_future.csv"
    if path.exists():
        records = df_to_records(pd.read_csv(path), PREDICTION_COLS)
    else:
        records = []

    ts = 'import type { PredictionResult } from "../types";\n\n'
    ts += f"export const predictions: PredictionResult[] = {json.dumps(records, indent=2)};\n"

    write_ts_file(FRONTEND_DATA / "predictions.ts", ts)
    print(f"    {len(records)} prediction points")


def main():
    print("=" * 60)
    print("EXPORTING BACKEND DATA → FRONTEND STATIC FILES")
    print("=" * 60)

    print(f"\nSource: {BACKEND_OUTPUT}")
    print(f"Target: {FRONTEND_DATA}\n")

    print("Run comparisons:")
    for run1, run2 in COMPARISONS:
        print(f"\n  {run1} vs {run2}:")
        export_run(run1, run2)

    print(f"\nClusters:")
    export_clusters()

    print(f"\nPredictions:")
    export_predictions()

    print("\n" + "=" * 60)
    print("EXPORT COMPLETE!")
    print("=" * 60)


if __name__ == "__main__":
    main()
