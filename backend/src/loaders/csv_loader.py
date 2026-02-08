import numpy as np
import pandas as pd

from src.utils.normalization import get_column_mapping, normalize_event_type, is_reference_point, is_anomaly
from src.utils.clock_position import parse_clock_position


def load_csv(filepath: str) -> pd.DataFrame:
    return pd.read_csv(filepath)


def normalize_dataframe(df: pd.DataFrame, year: int) -> pd.DataFrame:
    mapping = get_column_mapping(year)
    # Only rename columns that exist in the dataframe
    rename_map = {k: v for k, v in mapping.items() if k in df.columns}
    df = df.rename(columns=rename_map)
    # Normalize event types
    df["event_type_normalized"] = df["event_type"].apply(normalize_event_type)
    df["is_reference"] = df["event_type_normalized"].apply(is_reference_point)
    df["is_anomaly"] = df["event_type_normalized"].apply(is_anomaly)
    # Parse clock position
    df["clock_decimal"] = df["clock_position"].apply(parse_clock_position)
    # Ensure log_distance is numeric
    df["log_distance"] = pd.to_numeric(df["log_distance"], errors="coerce")
    # Ensure depth_percent is numeric
    if "depth_percent" in df.columns:
        df["depth_percent"] = pd.to_numeric(df["depth_percent"], errors="coerce")
    # Ensure length and width are numeric
    for col in ["length", "width"]:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")
    # Parse joint_number as float (some have decimals like 70.01)
    if "joint_number" in df.columns:
        df["joint_number"] = pd.to_numeric(df["joint_number"], errors="coerce")
    # Add original index
    df["original_index"] = df.index
    # Handle orientation normalization for 2007 (uses "NO"/"YES" vs "ID"/"OD")
    if year == 2007 and "orientation" in df.columns:
        df["orientation"] = df["orientation"].map(
            lambda x: "External" if str(x).strip().upper() == "NO"
            else "Internal" if str(x).strip().upper() == "YES"
            else x
        )
    return df


def normalize_uploaded_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    # Step 1: Clean column names (collapse multi-line headers, strip whitespace)
    df.columns = [" ".join(str(c).split()).strip() for c in df.columns]

    # Step 2: Try standard mapping first
    mapping = get_column_mapping("upload")
    rename_map = {k: v for k, v in mapping.items() if k in df.columns}
    df = df.rename(columns=rename_map)

    # Step 3: Fuzzy-match common ILI report column names if standard mapping missed them
    _FUZZY_MAP = {
        "log_distance": ["ILI Wheel Count", "Distance [ft", "Log Distance", "Chainage"],
        "event_type": ["Event Description", "Feature Type", "Feature", "Event Type", "Anomaly Type"],
        "depth_percent": ["Metal Loss Depth [%", "Depth [%", "Depth Pct"],
        "depth_inches": ["Metal Loss Depth [in", "Depth [in"],
        "length": ["Length [in", "Anomaly Length"],
        "width": ["Width [in", "Anomaly Width"],
        "clock_position": ["O'clock", "Clock Position", "Clock [", "Oclock"],
        "orientation": ["ID/OD", "Internal/External", "Int/Ext"],
        "joint_number": ["Joint Number", "Joint No", "Joint #"],
        "joint_length": ["Joint Length"],
        "wall_thickness": ["WT [in", "Wall Thickness"],
        "elevation": ["Elevation [ft", "Elevation"],
        "pdesign": ["Pdesign", "Design Pressure"],
        "smys": ["SMYS"],
    }
    for target, patterns in _FUZZY_MAP.items():
        if target in df.columns:
            continue  # already mapped
        for col in df.columns:
            col_lower = col.lower()
            if any(p.lower() in col_lower for p in patterns):
                df = df.rename(columns={col: target})
                break

    # Step 4: Normalize event types (handle missing column)
    if "event_type" in df.columns:
        df["event_type_normalized"] = df["event_type"].apply(normalize_event_type)
    else:
        df["event_type_normalized"] = "UNKNOWN"
    df["is_reference"] = df["event_type_normalized"].apply(is_reference_point)
    df["is_anomaly"] = df["event_type_normalized"].apply(is_anomaly)

    # Step 5: Parse clock position (handle missing column)
    if "clock_position" in df.columns:
        df["clock_decimal"] = df["clock_position"].apply(parse_clock_position)
    else:
        df["clock_decimal"] = np.nan

    # Step 6: Coerce numeric columns
    if "log_distance" in df.columns:
        df["log_distance"] = pd.to_numeric(df["log_distance"], errors="coerce")
    else:
        df["log_distance"] = 0.0

    if "depth_percent" in df.columns:
        df["depth_percent"] = pd.to_numeric(df["depth_percent"], errors="coerce")
    for col in ["length", "width"]:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")
    if "joint_number" in df.columns:
        df["joint_number"] = pd.to_numeric(df["joint_number"], errors="coerce")
    df["original_index"] = df.index
    return df


def load_and_normalize(data_dir: str) -> dict[int, pd.DataFrame]:
    datasets = {}
    for year in [2007, 2015, 2022]:
        filepath = f"{data_dir}/{year}.csv"
        df = load_csv(filepath)
        datasets[year] = normalize_dataframe(df, year)
    return datasets
