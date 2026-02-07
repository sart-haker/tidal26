import math
import pandas as pd
import numpy as np


def _safe_val(val):
    if val is None:
        return None
    try:
        if math.isnan(val):
            return None
    except TypeError:
        return None
    return float(val)


def calculate_growth(
    run1_anomaly: pd.Series,
    run2_anomaly: pd.Series,
    years_between: float,
) -> dict:
    result = {}
    for metric, col in [("depth", "depth_percent"), ("length", "length"), ("width", "width")]:
        v1 = _safe_val(run1_anomaly.get(col))
        v2 = _safe_val(run2_anomaly.get(col))
        if v1 is not None and v2 is not None and years_between > 0:
            result[f"{metric}_run1"] = v1
            result[f"{metric}_run2"] = v2
            result[f"{metric}_change"] = v2 - v1
            result[f"{metric}_growth_rate"] = (v2 - v1) / years_between
        else:
            result[f"{metric}_run1"] = v1
            result[f"{metric}_run2"] = v2
            result[f"{metric}_change"] = None
            result[f"{metric}_growth_rate"] = None
    return result


def calculate_all_growth(
    matches: list[dict],
    df_run1: pd.DataFrame,
    df_run2: pd.DataFrame,
    years_between: float,
) -> pd.DataFrame:
    rows = []
    for match in matches:
        r1 = df_run1.loc[df_run1["original_index"] == match["run1_idx"]].iloc[0]
        r2 = df_run2.loc[df_run2["original_index"] == match["run2_idx"]].iloc[0]
        growth = calculate_growth(r1, r2, years_between)
        row = {
            "run1_idx": match["run1_idx"],
            "run2_idx": match["run2_idx"],
            "confidence": match["confidence"],
            "event_type": r1.get("event_type_normalized", ""),
            "run1_distance": r1.get("log_distance"),
            "run2_distance": r2.get("log_distance"),
            "run1_clock": r1.get("clock_decimal"),
            "run2_clock": r2.get("clock_decimal"),
            **growth,
        }
        rows.append(row)
    return pd.DataFrame(rows)


def flag_critical(growth_df: pd.DataFrame, depth_threshold: float = 2.0) -> pd.DataFrame:
    df = growth_df.copy()
    df["is_critical"] = df["depth_growth_rate"].apply(
        lambda x: x is not None and not (isinstance(x, float) and math.isnan(x)) and x > depth_threshold
    )
    return df
