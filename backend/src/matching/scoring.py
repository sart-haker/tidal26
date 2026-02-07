import math
from src.utils.clock_position import clock_distance


def distance_score(dist1: float, dist2: float, tolerance: float = 5.0) -> float:
    if dist1 is None or dist2 is None or math.isnan(dist1) or math.isnan(dist2):
        return 0.0
    return max(0.0, 1.0 - abs(dist1 - dist2) / tolerance)


def clock_score(clock1: float, clock2: float, tolerance: float = 1.5) -> float:
    if clock1 is None or clock2 is None:
        return 0.5  # neutral score when clock data is missing
    cd = clock_distance(clock1, clock2)
    return max(0.0, 1.0 - cd / tolerance)


def dimension_score(
    len1, wid1, dep1,
    len2, wid2, dep2,
    len_tol: float = 3.0,
    wid_tol: float = 3.0,
    dep_tol: float = 20.0,
) -> float:
    scores = []
    pairs = [
        (len1, len2, len_tol),
        (wid1, wid2, wid_tol),
        (dep1, dep2, dep_tol),
    ]
    for v1, v2, tol in pairs:
        if _is_valid(v1) and _is_valid(v2):
            scores.append(max(0.0, 1.0 - abs(v1 - v2) / tol))
    if not scores:
        return 0.5  # neutral when no dimensions available
    return sum(scores) / len(scores)


def overall_score(
    dist_score: float,
    clk_score: float,
    dim_score: float,
    weights: tuple = (0.5, 0.3, 0.2),
) -> float:
    return weights[0] * dist_score + weights[1] * clk_score + weights[2] * dim_score


def _is_valid(val) -> bool:
    if val is None:
        return False
    try:
        return not math.isnan(val)
    except TypeError:
        return False
