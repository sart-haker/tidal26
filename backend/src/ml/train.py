### Main script for training corrosion prediction model ###

# import sys

# from pathlib import Path

# # Add parent directory to path
# sys.path.insert(0, str(Path(__file__).parent.parent))
import os
import numpy as np
import pandas as pd
from src.ml.dataset_preparation import prepare_dataset, create_multi_period_dataset
from src.ml.model_training import train_model, cross_validate_model, save_model
from sklearn.model_selection import train_test_split

from pathlib import Path
BASE_DIR = Path(__file__).resolve().parents[2] 
DATA_DIR = BASE_DIR / "data"
OUTPUT_DIR = BASE_DIR / "output"
MODEL_DIR = BASE_DIR / "models"

def main():
    """
    Main training pipeline for corrosion prediction model.
    """
    print("=" * 60)
    print("CORROSION PREDICTION MODEL TRAINING")
    print("=" * 60)
    
    # Configuration
    data_dir = DATA_DIR
    output_dir = OUTPUT_DIR
    model_dir = MODEL_DIR
    
    # Create output directories
    os.makedirs(model_dir, exist_ok=True)
    
    # Option 1: Train on single period
    # X, y = prepare_dataset(
    #     run1_year=2007,
    #     run2_year=2015,
    #     data_dir=data_dir,
    #     output_dir=output_dir
    # )
    
    # Option 2: Train on multiple periods (RECOMMENDED)
    X, y = create_multi_period_dataset(
        data_dir=data_dir,
        output_dir=output_dir,
        periods=[(2007, 2015), (2015, 2022)]
    )
    
    # Clean combined data: cap infinities, drop rows with NaN (no fake median fill)
    dist_cols = X.filter(like='dist_to_').columns.tolist()
    if dist_cols:
        finite_max = X[dist_cols].replace([np.inf, -np.inf], np.nan).max().max()
        cap_value = finite_max * 2 if pd.notna(finite_max) and finite_max > 0 else 100000
        X = X.replace([np.inf, -np.inf], cap_value)
        print(f"\n  Capped infinite distance values at {cap_value:.1f}")
    else:
        X = X.replace([np.inf, -np.inf], np.nan)

    remaining_nan = X.isna().any(axis=1).sum()
    if remaining_nan > 0:
        print(f"  Dropping {remaining_nan} rows with NaN values ({remaining_nan/len(X)*100:.1f}%)")
        valid_idx = X.dropna().index
        X = X.loc[valid_idx]
        y = y.loc[valid_idx]

    print(f"\nRemaining NaN after cleaning: {X.isna().sum().sum()}")
    
    # Split data
    print("\n" + "=" * 60)
    print("SPLITTING DATA")
    print("=" * 60)
    
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    X_train, X_val, y_train, y_val = train_test_split(
        X_train, y_train, test_size=0.2, random_state=42, stratify=y_train
    )
    
    print(f"Training set:   {len(X_train)} samples")
    print(f"Validation set: {len(X_val)} samples")
    print(f"Test set:       {len(X_test)} samples")
    
    # Train Random Forest model
    print("\n" + "=" * 60)
    print("TRAINING RANDOM FOREST MODEL")
    print("=" * 60)
    
    rf_model, rf_metrics = train_model(
        X_train=X_train,
        y_train=y_train,
        X_val=X_val,
        y_val=y_val,
        model_type='random_forest',
        n_estimators=200,
        max_depth=15,
        min_samples_split=20,
        min_samples_leaf=10,
        class_weight='balanced',
        random_state=42
    )
    
    # Save model
    save_model(
        model=rf_model,
        metrics=rf_metrics,
        feature_names=X_train.columns.tolist(),
        output_dir=model_dir,
        model_name='corrosion_predictor_rf'
    )
    
    # Optional: Train Gradient Boosting model
    print("\n" + "=" * 60)
    print("TRAINING GRADIENT BOOSTING MODEL")
    print("=" * 60)
    
    gb_model, gb_metrics = train_model(
        X_train=X_train,
        y_train=y_train,
        X_val=X_val,
        y_val=y_val,
        model_type='gradient_boosting',
        n_estimators=150,
        learning_rate=0.1,
        max_depth=6,
        min_samples_split=20,
        min_samples_leaf=10,
        random_state=42
    )
    
    save_model(
        model=gb_model,
        metrics=gb_metrics,
        feature_names=X_train.columns.tolist(),
        output_dir=model_dir,
        model_name='corrosion_predictor_gb'
    )
    
    # Evaluate on test set
    print("\n" + "=" * 60)
    print("FINAL TEST SET EVALUATION")
    print("=" * 60)
    
    from sklearn.metrics import classification_report, roc_auc_score
    
    # Random Forest on test
    rf_pred = rf_model.predict(X_test)
    rf_proba = rf_model.predict_proba(X_test)[:, 1]
    
    print("\n--- Random Forest Test Results ---")
    print(classification_report(y_test, rf_pred, target_names=['No Corrosion', 'New Corrosion']))
    print(f"ROC AUC: {roc_auc_score(y_test, rf_proba):.4f}")
    
    # Gradient Boosting on test
    gb_pred = gb_model.predict(X_test)
    gb_proba = gb_model.predict_proba(X_test)[:, 1]
    
    print("\n--- Gradient Boosting Test Results ---")
    print(classification_report(y_test, gb_pred, target_names=['No Corrosion', 'New Corrosion']))
    print(f"ROC AUC: {roc_auc_score(y_test, gb_proba):.4f}")
    
    # Cross-validation (optional, takes longer)
    # print("\n" + "=" * 60)
    # print("CROSS-VALIDATION")
    # print("=" * 60)
    # 
    # cv_results = cross_validate_model(
    #     X=X,
    #     y=y,
    #     model_type='random_forest',
    #     n_splits=5,
    #     n_estimators=200,
    #     max_depth=15,
    #     class_weight='balanced',
    #     random_state=42
    # )
    
    print("\n" + "=" * 60)
    print("TRAINING COMPLETE!")
    print("=" * 60)
    print(f"\nModels saved to: {model_dir}/")
    print("You can now use these models to predict new corrosion locations.")


if __name__ == '__main__':
    main()
