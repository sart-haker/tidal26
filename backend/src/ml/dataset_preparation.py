### Dataset preparation for corrosion prediction model ###

import pandas as pd
import numpy as np
from typing import Dict, Tuple, List
from src.ml.feature_engineering import engineer_features, select_model_features
from src.loaders.csv_loader import load_and_normalize

from pathlib import Path
BASE_DIR = Path(__file__).resolve().parents[2] 
DATA_DIR = BASE_DIR / "data"
OUTPUT_DIR = BASE_DIR / "output"


def create_training_samples(
    baseline_data: pd.DataFrame,
    future_data: pd.DataFrame,
    new_anomalies: pd.DataFrame,
    grid_spacing: float = 5.0,
    negative_sample_ratio: float = 3.0,
    random_state: int = 42
) -> Tuple[pd.DataFrame, pd.Series]:
    """
    Create training samples with positive (new corrosion) and negative (no corrosion) examples.
    
    Args:
        baseline_data: Normalized data from baseline inspection (e.g., 2007 or 2015)
        future_data: Normalized data from future inspection (e.g., 2015 or 2022)
        new_anomalies: DataFrame with new anomalies detected in future inspection
        grid_spacing: Spacing in feet for sampling negative examples
        negative_sample_ratio: Ratio of negative to positive samples
        random_state: Random seed for reproducibility
    
    Returns:
        Tuple of (features_df, target_series)
    """
    print(f"\nCreating training samples...")
    print(f"  New anomalies to learn from: {len(new_anomalies)}")
    
    # Distance column
    distance_col = 'log_distance' if 'log_distance' in baseline_data.columns else 'distance_ft'
    
    # Extract positive samples (locations where new corrosion formed)
    positive_samples = []
    for idx, anom in new_anomalies.iterrows():
        sample_dist = anom.get('log_distance', anom.get('distance_ft', None))
        if sample_dist is None:
            continue
            
        # Find nearest location in baseline data
        baseline_data['_temp_dist'] = (baseline_data[distance_col] - sample_dist).abs()
        nearest_idx = baseline_data['_temp_dist'].idxmin()
        
        if baseline_data.loc[nearest_idx, '_temp_dist'] < 10:  # Within 10 feet
            sample = baseline_data.loc[nearest_idx].copy()
            sample['target'] = 1  # Corrosion formed here
            sample['sample_type'] = 'positive'
            positive_samples.append(sample)
    
    baseline_data.drop('_temp_dist', axis=1, inplace=True, errors='ignore')
    
    print(f"  Positive samples extracted: {len(positive_samples)}")
    
    # Create grid for negative sampling
    min_dist = baseline_data[distance_col].min()
    max_dist = baseline_data[distance_col].max()
    grid_points = np.arange(min_dist, max_dist, grid_spacing)
    
    # Filter grid points: remove those near new anomalies
    new_anom_positions = new_anomalies['log_distance'].values if 'log_distance' in new_anomalies.columns else \
                         new_anomalies['distance_ft'].values
    
    negative_grid = []
    for point in grid_points:
        # Check if this point is far from any new anomaly
        min_dist_to_anom = np.min(np.abs(new_anom_positions - point))
        if min_dist_to_anom > 20:  # At least 20 feet away from any new corrosion
            negative_grid.append(point)
    
    # Sample negative examples
    np.random.seed(random_state)
    n_negative = int(len(positive_samples) * negative_sample_ratio)
    n_negative = min(n_negative, len(negative_grid))  # Don't exceed available points
    
    sampled_negative_positions = np.random.choice(negative_grid, size=n_negative, replace=False)
    
    negative_samples = []
    for pos in sampled_negative_positions:
        baseline_data['_temp_dist'] = (baseline_data[distance_col] - pos).abs()
        nearest_idx = baseline_data['_temp_dist'].idxmin()
        
        sample = baseline_data.loc[nearest_idx].copy()
        sample['target'] = 0  # No corrosion formed here
        sample['sample_type'] = 'negative'
        negative_samples.append(sample)
    
    baseline_data.drop('_temp_dist', axis=1, inplace=True, errors='ignore')
    
    print(f"  Negative samples extracted: {len(negative_samples)}")
    
    # Combine all samples
    all_samples = positive_samples + negative_samples
    samples_df = pd.DataFrame(all_samples)
    
    # Shuffle
    samples_df = samples_df.sample(frac=1, random_state=random_state).reset_index(drop=True)
    
    print(f"  Total samples: {len(samples_df)}")
    print(f"  Class balance: {samples_df['target'].value_counts().to_dict()}")
    
    return samples_df


def prepare_dataset(
    run1_year: int,
    run2_year: int,
    data_dir: Path | str = DATA_DIR,
    output_dir: Path | str = OUTPUT_DIR,
) -> Tuple[pd.DataFrame, pd.Series]:
    """
    Prepare complete dataset for model training.
    
    Args:
        run1_year: Baseline inspection year
        run2_year: Future inspection year
        data_dir: Directory with raw ILI data
        output_dir: Directory with processed analysis outputs
    
    Returns:
        Tuple of (X: features DataFrame, y: target Series)
    """
    print(f"\n=== Preparing Dataset: {run1_year} → {run2_year} ===")
    
    # Load the processed comparison data
    from src.loaders.csv_loader import load_and_normalize
    datasets = load_and_normalize(data_dir)
    
    baseline_data = datasets[run1_year]
    future_data = datasets[run2_year]
    
    # Load new anomalies
    new_anom_path = f"{output_dir}/{run1_year}_vs_{run2_year}_new_anomalies.csv"
    try:
        new_anomalies = pd.read_csv(new_anom_path)
        print(f"Loaded {len(new_anomalies)} new anomalies from {new_anom_path}")
    except FileNotFoundError:
        print(f"ERROR: Could not find {new_anom_path}")
        print("Please run the alignment pipeline first to generate comparison files.")
        raise
    
    # Get existing anomalies from baseline (for context features)
    baseline_anomalies = baseline_data[baseline_data.get('is_anomaly', False) == True]
    
    # Create samples
    samples_df = create_training_samples(
        baseline_data=baseline_data,
        future_data=future_data,
        new_anomalies=new_anomalies,
        grid_spacing=5.0,
        negative_sample_ratio=3.0
    )
    
    # Engineer features using baseline data context
    print("\nEngineering features...")
    samples_with_features = engineer_features(
        df=samples_df,
        existing_anomalies=baseline_anomalies
    )
    
    # Select features for modeling
    feature_cols = select_model_features(samples_with_features)
    
    # Prepare X and y
    X = samples_with_features[feature_cols].copy()
    y = samples_with_features['target'].copy()
    
    # Drop any duplicate columns
    X = X.loc[:, ~X.columns.duplicated()]
    
    # Handle missing values
    print(f"\nHandling missing values...")
    print(f"  Missing values per feature:")
    missing_counts = X.isnull().sum()
    for col in missing_counts[missing_counts > 0].index:
        print(f"    {col}: {missing_counts[col]} ({missing_counts[col]/len(X)*100:.1f}%)")
    
    # Fill missing values
    for col in X.columns:
        col_data = X[col]
        # Guard against duplicate columns returning a DataFrame
        if isinstance(col_data, pd.DataFrame):
            col_data = col_data.iloc[:, 0]
            X = X.loc[:, ~X.columns.duplicated()]
        if col_data.dtype in ['float64', 'int64', 'float32', 'int32']:
            # For numeric, use median
            X[col] = col_data.fillna(col_data.median())
        else:
            # For categorical, use mode or 'unknown'
            X[col] = col_data.fillna('unknown')
    
    # Handle infinite values
    X = X.replace([np.inf, -np.inf], np.nan)
    for col in X.columns:
        col_data = X[col]
        if isinstance(col_data, pd.DataFrame):
            col_data = col_data.iloc[:, 0]
            X = X.loc[:, ~X.columns.duplicated()]
        if col_data.isnull().any():
            median_val = col_data.median()
            X[col] = col_data.fillna(median_val if pd.notna(median_val) else 0)
    
    print(f"\nFinal dataset shape: {X.shape}")
    print(f"Target distribution:")
    print(y.value_counts())
    
    return X, y


def create_multi_period_dataset(
    data_dir: Path | str = DATA_DIR,
    output_dir: Path | str = OUTPUT_DIR,
    periods: List[Tuple[int, int]] = [(2007, 2015), (2015, 2022)]
) -> Tuple[pd.DataFrame, pd.Series]:
    """
    Create a dataset combining multiple time periods.
    
    Args:
        data_dir: Directory with raw ILI data
        output_dir: Directory with processed analysis outputs
        periods: List of (baseline_year, future_year) tuples
    
    Returns:
        Tuple of (X: features DataFrame, y: target Series)
    """
    print("\n=== Creating Multi-Period Dataset ===")
    
    all_X = []
    all_y = []
    
    for run1_year, run2_year in periods:
        try:
            X, y = prepare_dataset(run1_year, run2_year, data_dir, output_dir)
            
            # Add period identifier
            X['period'] = f"{run1_year}_{run2_year}"
            X['years_between'] = run2_year - run1_year
            
            all_X.append(X)
            all_y.append(y)
            
        except Exception as e:
            print(f"Warning: Could not prepare {run1_year} → {run2_year}: {e}")
            continue
    
    if len(all_X) == 0:
        raise ValueError("No datasets could be prepared!")
    
    # Combine all periods
    X_combined = pd.concat(all_X, axis=0, ignore_index=True)
    y_combined = pd.concat(all_y, axis=0, ignore_index=True)
    
    print(f"\nCombined dataset shape: {X_combined.shape}")
    print(f"Total samples: {len(X_combined)}")
    print(f"Target distribution:")
    print(y_combined.value_counts())
    
    return X_combined, y_combined
