import math
import re


def parse_clock_position(clock_str) -> float | None:
    if clock_str is None:
        return None
    if isinstance(clock_str, (int, float)):
        if math.isnan(clock_str):
            return None
        return float(clock_str)
    s = str(clock_str).strip()
    if not s:
        return None
    # Try hh:mm:ss or hh:mm format
    match = re.match(r"^(\d{1,2}):(\d{2})(?::(\d{2}))?$", s)
    if match:
        hours = int(match.group(1))
        minutes = int(match.group(2))
        return hours + minutes / 60.0
    # Try bare numeric
    try:
        return float(s)
    except ValueError:
        return None


def clock_distance(pos1: float, pos2: float) -> float:
    if pos1 is None or pos2 is None:
        return float("inf")
    # Normalize to 0-12
    p1 = pos1 % 12
    p2 = pos2 % 12
    diff = abs(p1 - p2)
    return min(diff, 12 - diff)
