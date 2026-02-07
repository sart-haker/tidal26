import pandas as pd
import numpy as np

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


def load_and_normalize(data_dir: str) -> dict[int, pd.DataFrame]:
    datasets = {}
    for year in [2007, 2015, 2022]:
        filepath = f"{data_dir}/{year}.csv"
        df = load_csv(filepath)
        datasets[year] = normalize_dataframe(df, year)
    return datasets
