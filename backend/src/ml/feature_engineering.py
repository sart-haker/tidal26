"""Feature engineering for corrosion prediction model."""

import pandas as pd
import numpy as np
from typing import Dict, List, Tuple


def convert_clock_to_decimal(clock_str: str) -> float:
    """
    Convert clock position (e.g., '3:30') to decimal hours.
    
    Args:
        clock_str: Clock position string like '3:30' or '12:00'
    
    Returns:
        Decimal clock position (e.g., 3.5 for '3:30')
    """
    if pd.isna(clock_str) or clock_str == 'nan':
        return np.nan
    
    try:
        parts = str(clock_str).split(':')
        hours = int(parts[0])
        minutes = int(parts[1]) if len(parts) > 1 else 0
        return hours + minutes / 60.0
    except:
        return np.nan


def calculate_distance_to_nearest_feature(
    df: pd.DataFrame,
    feature_type: str,
    distance_col: str = 'distance_ft'
) -> pd.Series:
    """
    Calculate distance to nearest feature of a specific type.
    
    Args:
        df: DataFrame with all pipeline features
        feature_type: Type of feature to find (e.g., 'Bend', 'Girth Weld')
        distance_col: Column name for distance
    
    Returns:
        Series with distance to nearest feature
    """
    feature_positions = df[df['event_type_normalized'] == feature_type][distance_col].values
    
    if len(feature_positions) == 0:
        return pd.Series([np.inf] * len(df), index=df.index)
    
    distances = []
    for pos in df[distance_col]:
        if pd.isna(pos):
            distances.append(np.inf)
        else:
            min_dist = np.min(np.abs(feature_positions - pos))
            distances.append(min_dist)
    
    return pd.Series(distances, index=df.index)


def calculate_anomaly_density(
    df: pd.DataFrame,
    radius: float = 50.0,
    distance_col: str = 'distance_ft'
) -> pd.Series:
    """
    Calculate density of anomalies within a radius.
    
    Args:
        df: DataFrame with anomalies
        radius: Radius in feet for density calculation
        distance_col: Column name for distance
    
    Returns:
        Series with anomaly count within radius
    """
    anomaly_positions = df[df['is_anomaly'] == True][distance_col].values
    
    if len(anomaly_positions) == 0:
        return pd.Series([0] * len(df), index=df.index)
    
    densities = []
    for pos in df[distance_col]:
        if pd.isna(pos):
            densities.append(0)
        else:
            # Count anomalies within radius (excluding self if it's an anomaly)
            count = np.sum(np.abs(anomaly_positions - pos) <= radius)
            densities.append(max(0, count - 1))  # Exclude self
    
    return pd.Series(densities, index=df.index)


def extract_bend_features(comments: str) -> Dict[str, float]:
    """
    Extract bend angle and direction from comments.
    
    Args:
        comments: Comment string containing bend information
    
    Returns:
        Dictionary with bend_angle, is_over, is_under, is_left, is_right
    """
    features = {
        'bend_angle': 0.0,
        'is_over': 0,
        'is_under': 0,
        'is_sag': 0,
        'is_left': 0,
        'is_right': 0
    }
    
    if pd.isna(comments):
        return features
    
    comments = str(comments).upper()
    
    # Extract angle
    import re
    angle_match = re.search(r'(\d+)Â°', comments)
    if angle_match:
        features['bend_angle'] = float(angle_match.group(1))
    
    # Direction
    if 'OVER' in comments:
        features['is_over'] = 1
    if 'UNDER' in comments or 'SAG' in comments:
        features['is_under'] = 1
        features['is_sag'] = 1
    if 'LEFT' in comments:
        features['is_left'] = 1
    if 'RIGHT' in comments:
        features['is_right'] = 1
    
    return features


def calculate_elevation_features(
    df: pd.DataFrame,
    window: int = 10
) -> pd.DataFrame:
    """
    Calculate elevation-based features.
    
    Args:
        df: DataFrame with elevation data
        window: Window size for calculating slope
    
    Returns:
        DataFrame with elevation features added
    """
    result = df.copy()
    
    if 'elevation' in result.columns:
        # Elevation change rate (slope)
        result['elevation_slope'] = result['elevation'].diff() / result['log_distance'].diff()
        result['elevation_slope'] = result['elevation_slope'].fillna(0)
        
        # Rolling statistics
        result['elevation_rolling_mean'] = result['elevation'].rolling(window=window, center=True).mean()
        result['elevation_rolling_std'] = result['elevation'].rolling(window=window, center=True).std()
        result['elevation_rolling_std'] = result['elevation_rolling_std'].fillna(0)
    
    return result


def engineer_features(
    df: pd.DataFrame,
    existing_anomalies: pd.DataFrame = None,
) -> pd.DataFrame:
    """
    Engineer all features for corrosion prediction.
    
    Args:
        df: Base DataFrame with pipeline data
        existing_anomalies: DataFrame with existing anomaly locations from previous inspection
    
    Returns:
        DataFrame with engineered features
    """
    print("Engineering features...")
    result = df.copy()
    
    # Remove any duplicate columns before we start
    result = result.loc[:, ~result.columns.duplicated()]
    
    # 1. Convert clock position to decimal (skip if already exists from loader)
    if 'clock_position' in result.columns:
        if 'clock_decimal' not in result.columns:
            result['clock_decimal'] = result['clock_position'].apply(convert_clock_to_decimal)
        
        # Calculate clock position features (top/bottom stress)
        if 'clock_decimal' in result.columns:
            result['is_top_half'] = (result['clock_decimal'] >= 10.5) | (result['clock_decimal'] <= 1.5)
            result['is_bottom_half'] = (result['clock_decimal'] >= 4.5) & (result['clock_decimal'] <= 7.5)
            result['distance_from_6_oclock'] = (result['clock_decimal'] - 6.0).abs()
    
    # 2. Distance to nearest features
    distance_col = 'log_distance' if 'log_distance' in result.columns else 'distance_ft'
    
    feature_types = ['GIRTH_WELD', 'BEND', 'VALVE', 'TEE', 'SUPPORT', 'ATTACHMENT']
    for feature_type in feature_types:
        col_name = f'dist_to_{feature_type.lower()}'
        result[col_name] = calculate_distance_to_nearest_feature(result, feature_type, distance_col)
    
    # 3. Anomaly density (if existing anomalies provided)
    if existing_anomalies is not None and len(existing_anomalies) > 0:
        # Create temp df with existing anomalies marked
        temp_df = result.copy()
        temp_df['is_anomaly'] = False
        
        # Mark existing anomaly locations
        for _, anom in existing_anomalies.iterrows():
            dist = anom.get('log_distance', anom.get('distance_ft', 0))
            mask = (temp_df[distance_col] - dist).abs() < 5  # Within 5 feet
            temp_df.loc[mask, 'is_anomaly'] = True
        
        result['anomaly_density_50ft'] = calculate_anomaly_density(temp_df, radius=50.0, distance_col=distance_col)
        result['anomaly_density_100ft'] = calculate_anomaly_density(temp_df, radius=100.0, distance_col=distance_col)
        
        # Distance to nearest existing anomaly
        result['dist_to_nearest_anomaly'] = calculate_distance_to_nearest_feature(
            temp_df, 'METAL_LOSS', distance_col
        )
    else:
        result['anomaly_density_50ft'] = 0
        result['anomaly_density_100ft'] = 0
        result['dist_to_nearest_anomaly'] = np.inf
    
    # 4. Extract bend features
    if 'comments' in result.columns:
        bend_features_list = result['comments'].apply(extract_bend_features)
        bend_df = pd.DataFrame(bend_features_list.tolist(), index=result.index)
        # Only add columns that don't already exist
        new_cols = [c for c in bend_df.columns if c not in result.columns]
        if new_cols:
            result = pd.concat([result, bend_df[new_cols]], axis=1)
    
    # 5. Elevation features
    if 'elevation' in result.columns:
        result = calculate_elevation_features(result)
    
    # 6. Wall thickness features
    if 'wall_thickness' in result.columns:
        # Thin wall indicator
        result['is_thin_wall'] = (result['wall_thickness'] < 0.4).astype(int)
    
    # 7. Distance from welds (if available)
    if 'dist_upstream_weld' in result.columns and 'dist_downstream_weld' in result.columns:
        result['min_dist_to_weld'] = result[['dist_upstream_weld', 'dist_downstream_weld']].abs().min(axis=1)
        result['in_weld_vicinity'] = (result['min_dist_to_weld'] < 10).astype(int)
    
    # 8. Stress concentration indicator
    result['high_stress_indicator'] = (
        ((result.get('dist_to_bend', np.inf) < 20) & (result.get('bend_angle', 0) > 30)) |
        (result.get('dist_to_attachment', np.inf) < 10) |
        (result.get('is_bottom_half', False) & (result.get('anomaly_density_50ft', 0) > 2))
    ).astype(int)
    
    print(f"  Engineered {len(result.columns)} total features")
    
    return result


def select_model_features(df: pd.DataFrame) -> List[str]:
    """
    Select relevant features for modeling.
    
    Args:
        df: DataFrame with all features
    
    Returns:
        List of feature column names to use in model
    """
    # Core features to include
    core_features = [
        'wall_thickness',
        'elevation',
        'clock_decimal',
        'is_top_half',
        'is_bottom_half',
        'distance_from_6_oclock',
    ]
    
    # Distance features
    distance_features = [col for col in df.columns if col.startswith('dist_to_')]
    
    # Density features
    density_features = [col for col in df.columns if 'density' in col or 'nearest_anomaly' in col]
    
    # Bend features
    bend_features = ['bend_angle', 'is_over', 'is_under', 'is_sag', 'is_left', 'is_right']
    
    # Elevation features
    elevation_features = [col for col in df.columns if 'elevation_' in col]
    
    # Stress features
    stress_features = ['high_stress_indicator', 'in_weld_vicinity', 'is_thin_wall', 'min_dist_to_weld']
    
    # Combine all
    all_features = (
        core_features + distance_features + density_features + 
        bend_features + elevation_features + stress_features
    )
    
    # Filter to only features that exist in the dataframe
    # Use dict.fromkeys to preserve order while removing duplicates
    selected = list(dict.fromkeys(f for f in all_features if f in df.columns))
    
    print(f"Selected {len(selected)} features for modeling")
    return selected
