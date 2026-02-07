import pandas as pd
import numpy as np


def extract_welds(df: pd.DataFrame) -> pd.DataFrame:
    welds = df[df["event_type_normalized"] == "GIRTH_WELD"].copy()
    welds = welds[["joint_number", "log_distance", "original_index"]].reset_index(drop=True)
    welds = welds.dropna(subset=["log_distance"])
    return welds


def match_welds(
    welds_run1: pd.DataFrame,
    welds_run2: pd.DataFrame,
    distance_tolerance: float = 50.0,
) -> list[dict]:
    matches = []
    used_run2 = set()

    # First pass: match by joint_number where both are available
    for i, w1 in welds_run1.iterrows():
        if pd.isna(w1["joint_number"]):
            continue
        # Find run2 welds with matching joint number (exact or within rounding)
        candidates = welds_run2[
            (welds_run2["joint_number"].notna())
            & (abs(welds_run2["joint_number"] - w1["joint_number"]) < 1.0)
            & (~welds_run2.index.isin(used_run2))
        ]
        if len(candidates) == 0:
            continue
        # Pick the closest by distance
        dists = abs(candidates["log_distance"] - w1["log_distance"])
        best_idx = dists.idxmin()
        if dists[best_idx] <= distance_tolerance:
            w2 = welds_run2.loc[best_idx]
            matches.append({
                "run1_idx": w1["original_index"],
                "run2_idx": w2["original_index"],
                "joint_number": w1["joint_number"],
                "run1_distance": w1["log_distance"],
                "run2_distance": w2["log_distance"],
                "offset": w2["log_distance"] - w1["log_distance"],
            })
            used_run2.add(best_idx)

    # Second pass: match remaining welds by closest distance
    matched_run1 = {m["run1_idx"] for m in matches}
    for i, w1 in welds_run1.iterrows():
        if w1["original_index"] in matched_run1:
            continue
        candidates = welds_run2[~welds_run2.index.isin(used_run2)]
        if len(candidates) == 0:
            break
        dists = abs(candidates["log_distance"] - w1["log_distance"])
        best_idx = dists.idxmin()
        if dists[best_idx] <= distance_tolerance:
            w2 = welds_run2.loc[best_idx]
            matches.append({
                "run1_idx": w1["original_index"],
                "run2_idx": w2["original_index"],
                "joint_number": w1["joint_number"],
                "run1_distance": w1["log_distance"],
                "run2_distance": w2["log_distance"],
                "offset": w2["log_distance"] - w1["log_distance"],
            })
            used_run2.add(best_idx)

    return matches


def calculate_weld_offsets(matches: list[dict]) -> pd.DataFrame:
    df = pd.DataFrame(matches)
    if len(df) == 0:
        return df
    df = df.sort_values("run1_distance").reset_index(drop=True)
    return df
