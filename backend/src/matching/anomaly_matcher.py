import pandas as pd
import numpy as np

from src.matching.scoring import distance_score, clock_score, dimension_score, overall_score


def extract_anomalies(df: pd.DataFrame) -> pd.DataFrame:
    anomalies = df[df["is_anomaly"]].copy()
    cols = ["original_index", "event_type_normalized", "clock_decimal", "depth_percent", "length", "width"]
    if "corrected_distance" in anomalies.columns:
        cols.insert(1, "corrected_distance")
    else:
        cols.insert(1, "log_distance")
    available = [c for c in cols if c in anomalies.columns]
    return anomalies[available].reset_index(drop=True)


def _get_distance(row: pd.Series) -> float:
    if "corrected_distance" in row.index:
        return row["corrected_distance"]
    return row["log_distance"]


def find_candidates(
    anomaly: pd.Series,
    anomalies_pool: pd.DataFrame,
    distance_tolerance: float = 5.0,
    clock_tolerance: float = 1.5,
) -> list[dict]:
    anom_dist = _get_distance(anomaly)
    candidates = []
    for _, cand in anomalies_pool.iterrows():
        cand_dist = _get_distance(cand)
        if pd.isna(anom_dist) or pd.isna(cand_dist):
            continue
        if abs(anom_dist - cand_dist) > distance_tolerance:
            continue
        ds = distance_score(anom_dist, cand_dist, distance_tolerance)
        cs = clock_score(anomaly.get("clock_decimal"), cand.get("clock_decimal"), clock_tolerance)
        dims = dimension_score(
            anomaly.get("length"), anomaly.get("width"), anomaly.get("depth_percent"),
            cand.get("length"), cand.get("width"), cand.get("depth_percent"),
        )
        total = overall_score(ds, cs, dims)
        candidates.append({
            "pool_idx": cand["original_index"],
            "distance_score": ds,
            "clock_score": cs,
            "dimension_score": dims,
            "total_score": total,
            "distance_diff": abs(anom_dist - cand_dist),
        })
    candidates.sort(key=lambda x: x["total_score"], reverse=True)
    return candidates


def match_anomalies(
    anomalies_run1: pd.DataFrame,
    anomalies_run2: pd.DataFrame,
    distance_tolerance: float = 5.0,
    clock_tolerance: float = 1.5,
) -> dict:
    matched = []
    new_anomalies = []
    uncertain = []
    used_run1 = set()

    for _, anom2 in anomalies_run2.iterrows():
        # Only consider run1 anomalies not yet matched
        available = anomalies_run1[~anomalies_run1["original_index"].isin(used_run1)]
        candidates = find_candidates(anom2, available, distance_tolerance, clock_tolerance)

        if len(candidates) == 0:
            new_anomalies.append(int(anom2["original_index"]))
        elif len(candidates) == 1 and candidates[0]["total_score"] >= 0.5:
            best = candidates[0]
            matched.append({
                "run1_idx": best["pool_idx"],
                "run2_idx": int(anom2["original_index"]),
                "confidence": best["total_score"],
                "scores": {
                    "distance": best["distance_score"],
                    "clock": best["clock_score"],
                    "dimension": best["dimension_score"],
                },
            })
            used_run1.add(best["pool_idx"])
        elif len(candidates) >= 1 and candidates[0]["total_score"] >= 0.5:
            best = candidates[0]
            matched.append({
                "run1_idx": best["pool_idx"],
                "run2_idx": int(anom2["original_index"]),
                "confidence": best["total_score"],
                "scores": {
                    "distance": best["distance_score"],
                    "clock": best["clock_score"],
                    "dimension": best["dimension_score"],
                },
            })
            used_run1.add(best["pool_idx"])
            if len(candidates) > 1 and candidates[1]["total_score"] >= 0.4:
                uncertain.append({
                    "run1_idx": best["pool_idx"],
                    "run2_idx": int(anom2["original_index"]),
                    "confidence": best["total_score"],
                    "other_candidates": [c["pool_idx"] for c in candidates[1:3]],
                })
        else:
            new_anomalies.append(int(anom2["original_index"]))

    # Find missing: run1 anomalies not matched by any run2
    all_run1_indices = set(anomalies_run1["original_index"].astype(int))
    missing = sorted(all_run1_indices - used_run1)

    return {
        "matched": matched,
        "new": new_anomalies,
        "missing": missing,
        "uncertain": uncertain,
    }
