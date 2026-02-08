"""Script for making predictions with trained model."""

import os
from pathlib import Path
import pandas as pd
import numpy as np

from src.ml.model_training import load_model, predict_new_corrosion
from src.ml.feature_engineering import engineer_features, select_model_features
from src.loaders.csv_loader import load_and_normalize

BASE_DIR = Path(__file__).resolve().parents[2]
DATA_DIR = BASE_DIR / "data"
OUTPUT_DIR = BASE_DIR / "output" / "predictions"
MODEL_DIR = BASE_DIR / "models"


def predict_future_corrosion(
    baseline_year: int,
    data_dir: str = None,
    model_dir: str = None,
    model_name: str = 'corrosion_predictor_rf',
    output_file: str = None,
    probability_threshold: float = 0.5
):
    """
    Predict where new corrosion is likely to form.
    
    Args:
        baseline_year: Year of baseline inspection
        data_dir: Directory with ILI data
        model_dir: Directory with trained model
        model_name: Name of model to load
        output_file: Path to save predictions
        probability_threshold: Threshold for classification
    """
    # Use defaults from BASE_DIR if not provided
    if data_dir is None:
        data_dir = str(DATA_DIR)
    if model_dir is None:
        model_dir = str(MODEL_DIR)

    print("=" * 60)
    print("CORROSION PREDICTION")
    print("=" * 60)
    
    # Load model
    print(f"\nLoading model: {model_name}")
    model, metrics, feature_names = load_model(model_dir, model_name)
    print(f"  Model loaded successfully")
    print(f"  Validation ROC AUC: {metrics['validation']['roc_auc']:.4f}")
    
    # Load baseline data
    print(f"\nLoading baseline data from {baseline_year}...")
    datasets = load_and_normalize(data_dir)
    baseline_data = datasets[baseline_year]
    print(f"  Loaded {len(baseline_data)} rows")
    
    # Get existing anomalies
    baseline_anomalies = baseline_data[baseline_data.get('is_anomaly', False) == True]
    print(f"  Found {len(baseline_anomalies)} existing anomalies")
    
    # Create prediction grid (sample every 5 feet)
    distance_col = 'log_distance' if 'log_distance' in baseline_data.columns else 'distance_ft'
    min_dist = baseline_data[distance_col].min()
    max_dist = baseline_data[distance_col].max()
    
    grid_points = np.arange(min_dist, max_dist, 5.0)
    print(f"\nCreating prediction grid: {len(grid_points)} points")
    
    # Sample features at each grid point
    prediction_samples = []
    for point in grid_points:
        baseline_data['_temp_dist'] = (baseline_data[distance_col] - point).abs()
        nearest_idx = baseline_data['_temp_dist'].idxmin()
        
        if baseline_data.loc[nearest_idx, '_temp_dist'] < 10:
            sample = baseline_data.loc[nearest_idx].copy()
            sample['prediction_distance'] = point
            prediction_samples.append(sample)
    
    baseline_data.drop('_temp_dist', axis=1, inplace=True)
    
    prediction_df = pd.DataFrame(prediction_samples).reset_index(drop=True)
    print(f"  Created {len(prediction_df)} prediction samples")
    
    # Engineer features
    print("\nEngineering features...")
    prediction_df = engineer_features(
        df=prediction_df,
        existing_anomalies=baseline_anomalies
    )
    
    # Add known metadata that multi-period models expect (real value, not fabricated)
    if 'years_between' in feature_names and 'years_between' not in prediction_df.columns:
        prediction_df['years_between'] = 7  # typical inspection interval

    # Check for remaining missing columns — warn and skip rather than fabricating zeros
    missing_cols = [col for col in feature_names if col not in prediction_df.columns]
    if missing_cols:
        print(f"  Warning: Missing features for prediction (skipping): {missing_cols}")
        feature_names = [col for col in feature_names if col in prediction_df.columns]

    # Select features matching model
    X_pred = prediction_df[feature_names].copy()

    # Cap infinite values at realistic maximum (no fake median fill)
    dist_cols = X_pred.filter(like='dist_to_').columns.tolist()
    if dist_cols:
        finite_max = X_pred[dist_cols].replace([np.inf, -np.inf], np.nan).max().max()
        cap_value = finite_max * 2 if pd.notna(finite_max) and finite_max > 0 else 100000
        X_pred = X_pred.replace([np.inf, -np.inf], cap_value)
        print(f"  Capped infinite distance values at {cap_value:.1f}")
    else:
        X_pred = X_pred.replace([np.inf, -np.inf], np.nan)

    # Drop rows with NaN rather than imputing fake values
    nan_rows = X_pred.isnull().any(axis=1).sum()
    if nan_rows > 0:
        print(f"  Dropping {nan_rows} prediction points with incomplete data ({nan_rows/len(X_pred)*100:.1f}%)")
        valid_mask = ~X_pred.isnull().any(axis=1)
        X_pred = X_pred[valid_mask]
        prediction_df = prediction_df.loc[X_pred.index]
    
    # Make predictions
    print("\nMaking predictions...")
    predictions, probabilities = predict_new_corrosion(
        model=model,
        X=X_pred,
        threshold=probability_threshold
    )
    
    # Add predictions to dataframe
    prediction_df['corrosion_probability'] = probabilities
    prediction_df['predicted_corrosion'] = predictions
    
    # Summary
    high_risk_count = (probabilities > 0.7).sum()
    medium_risk_count = ((probabilities > 0.5) & (probabilities <= 0.7)).sum()
    low_risk_count = (probabilities <= 0.5).sum()
    
    print("\n" + "=" * 60)
    print("PREDICTION SUMMARY")
    print("=" * 60)
    print(f"High risk (>70% probability):     {high_risk_count:4d} locations")
    print(f"Medium risk (50-70% probability): {medium_risk_count:4d} locations")
    print(f"Low risk (<50% probability):      {low_risk_count:4d} locations")
    
    # Get top 20 highest risk locations
    top_risk = prediction_df.nlargest(20, 'corrosion_probability')
    
    print("\n" + "=" * 60)
    print("TOP 20 HIGHEST RISK LOCATIONS")
    print("=" * 60)
    print(f"{'Distance (ft)':<15} {'Probability':<15} {'Clock Pos':<15} {'Elevation (ft)':<15}")
    print("-" * 60)
    
    for idx, row in top_risk.iterrows():
        dist = row.get('prediction_distance', row.get(distance_col, 0))
        prob = row['corrosion_probability']
        clock = row.get('clock_position', 'N/A')
        elev = row.get('elevation', row.get('Height[ft]', 'N/A'))
        
        print(f"{dist:<15.1f} {prob:<15.3f} {str(clock):<15} {str(elev):<15}")
    
    # Save predictions
    if output_file is None:
        output_file = str(OUTPUT_DIR / f'predictions_{baseline_year}_future_corrosion.csv')
    
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    # Select relevant columns for output
    output_cols = [
        'prediction_distance', 'corrosion_probability', 'predicted_corrosion',
        'wall_thickness', 'elevation', 'clock_position', 'event_type_normalized',
        'anomaly_density_50ft', 'dist_to_bend', 'dist_to_girth_weld'
    ]
    output_cols = [col for col in output_cols if col in prediction_df.columns]
    
    prediction_df[output_cols].to_csv(output_file, index=False)
    print(f"\nPredictions saved to: {output_file}")
    
    return prediction_df


def main():
    """Main prediction pipeline."""
    
    # Example: Predict future corrosion based on 2022 data
    predictions = predict_future_corrosion(
        baseline_year=2022,
        data_dir=str(DATA_DIR),
        model_dir=str(MODEL_DIR),
        model_name='corrosion_predictor_rf',  # or 'corrosion_predictor_gb'
        output_file=str(OUTPUT_DIR / 'predictions_2022_future.csv'),
        probability_threshold=0.5
    )
    
    print("\n" + "=" * 60)
    print("PREDICTION COMPLETE!")
    print("=" * 60)


if __name__ == '__main__':
    main()
