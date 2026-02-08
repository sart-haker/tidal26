"""Model training and evaluation for corrosion prediction."""

import pandas as pd
import numpy as np
from typing import Dict, Tuple, Any, List
import pickle
import json
from pathlib import Path

def train_model(
    X_train: pd.DataFrame,
    y_train: pd.Series,
    X_val: pd.DataFrame,
    y_val: pd.Series,
    model_type: str = 'random_forest',
    **model_params
) -> Tuple[Any, Dict]:
    """
    Train a corrosion prediction model.
    
    Args:
        X_train: Training features
        y_train: Training target
        X_val: Validation features
        y_val: Validation target
        model_type: Type of model ('random_forest', 'xgboost', 'logistic')
        **model_params: Additional model parameters
    
    Returns:
        Tuple of (trained_model, metrics_dict)
    """
    print(f"\n=== Training {model_type.upper()} Model ===")
    
    # Import required libraries
    try:
        from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
        from sklearn.linear_model import LogisticRegression
        from sklearn.metrics import (
            accuracy_score, precision_score, recall_score, f1_score,
            roc_auc_score, classification_report, confusion_matrix
        )
    except ImportError:
        print("ERROR: scikit-learn not installed. Install with: pip install scikit-learn")
        raise
    
    # Initialize model
    if model_type == 'random_forest':
        default_params = {
            'n_estimators': 100,
            'max_depth': 10,
            'min_samples_split': 20,
            'min_samples_leaf': 10,
            'class_weight': 'balanced',
            'random_state': 42,
            'n_jobs': -1
        }
        default_params.update(model_params)
        model = RandomForestClassifier(**default_params)
        
    elif model_type == 'gradient_boosting':
        default_params = {
            'n_estimators': 100,
            'learning_rate': 0.1,
            'max_depth': 5,
            'min_samples_split': 20,
            'min_samples_leaf': 10,
            'random_state': 42
        }
        default_params.update(model_params)
        model = GradientBoostingClassifier(**default_params)
        
    elif model_type == 'logistic':
        default_params = {
            'class_weight': 'balanced',
            'random_state': 42,
            'max_iter': 1000
        }
        default_params.update(model_params)
        model = LogisticRegression(**default_params)
        
    else:
        raise ValueError(f"Unknown model type: {model_type}")
    
    print(f"Model parameters: {model.get_params()}")
    
    # Train model
    print("Training...")
    model.fit(X_train, y_train)
    
    # Predictions
    y_train_pred = model.predict(X_train)
    y_val_pred = model.predict(X_val)
    
    y_train_proba = model.predict_proba(X_train)[:, 1]
    y_val_proba = model.predict_proba(X_val)[:, 1]
    
    # Calculate metrics
    metrics = {
        'train': {
            'accuracy': accuracy_score(y_train, y_train_pred),
            'precision': precision_score(y_train, y_train_pred, zero_division=0),
            'recall': recall_score(y_train, y_train_pred, zero_division=0),
            'f1': f1_score(y_train, y_train_pred, zero_division=0),
            'roc_auc': roc_auc_score(y_train, y_train_proba),
        },
        'validation': {
            'accuracy': accuracy_score(y_val, y_val_pred),
            'precision': precision_score(y_val, y_val_pred, zero_division=0),
            'recall': recall_score(y_val, y_val_pred, zero_division=0),
            'f1': f1_score(y_val, y_val_pred, zero_division=0),
            'roc_auc': roc_auc_score(y_val, y_val_proba),
        }
    }
    
    # Print results
    print("\n--- Training Metrics ---")
    for metric, value in metrics['train'].items():
        print(f"  {metric}: {value:.4f}")
    
    print("\n--- Validation Metrics ---")
    for metric, value in metrics['validation'].items():
        print(f"  {metric}: {value:.4f}")
    
    print("\n--- Validation Confusion Matrix ---")
    cm = confusion_matrix(y_val, y_val_pred)
    print(f"  TN: {cm[0, 0]:4d}  |  FP: {cm[0, 1]:4d}")
    print(f"  FN: {cm[1, 0]:4d}  |  TP: {cm[1, 1]:4d}")
    
    print("\n--- Validation Classification Report ---")
    print(classification_report(y_val, y_val_pred, target_names=['No Corrosion', 'New Corrosion']))
    
    # Feature importance
    if hasattr(model, 'feature_importances_'):
        feature_importance = pd.DataFrame({
            'feature': X_train.columns,
            'importance': model.feature_importances_
        }).sort_values('importance', ascending=False)
        
        print("\n--- Top 15 Most Important Features ---")
        for idx, row in feature_importance.head(15).iterrows():
            print(f"  {row['feature']:30s}: {row['importance']:.4f}")
        
        metrics['feature_importance'] = feature_importance.to_dict('records')
    
    return model, metrics


def cross_validate_model(
    X: pd.DataFrame,
    y: pd.Series,
    model_type: str = 'random_forest',
    n_splits: int = 5,
    **model_params
) -> Dict:
    """
    Perform cross-validation.
    
    Args:
        X: Features
        y: Target
        model_type: Type of model
        n_splits: Number of CV folds
        **model_params: Model parameters
    
    Returns:
        Dictionary with CV results
    """
    try:
        from sklearn.model_selection import cross_val_score, StratifiedKFold
        from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
        from sklearn.linear_model import LogisticRegression
    except ImportError:
        print("ERROR: scikit-learn not installed")
        raise
    
    print(f"\n=== Cross-Validation ({n_splits} folds) ===")
    
    # Initialize model
    if model_type == 'random_forest':
        model = RandomForestClassifier(**model_params)
    elif model_type == 'gradient_boosting':
        model = GradientBoostingClassifier(**model_params)
    elif model_type == 'logistic':
        model = LogisticRegression(**model_params)
    else:
        raise ValueError(f"Unknown model type: {model_type}")
    
    # Cross-validation
    cv = StratifiedKFold(n_splits=n_splits, shuffle=True, random_state=42)
    
    scoring_metrics = ['accuracy', 'precision', 'recall', 'f1', 'roc_auc']
    cv_results = {}
    
    for metric in scoring_metrics:
        scores = cross_val_score(model, X, y, cv=cv, scoring=metric, n_jobs=-1)
        cv_results[metric] = {
            'mean': scores.mean(),
            'std': scores.std(),
            'scores': scores.tolist()
        }
        print(f"{metric:10s}: {scores.mean():.4f} (+/- {scores.std():.4f})")
    
    return cv_results


def save_model(
    model: Any,
    metrics: Dict,
    feature_names: List[str],
    output_dir: str,
    model_name: str = 'corrosion_predictor'
):
    """
    Save trained model and metadata.
    
    Args:
        model: Trained model
        metrics: Metrics dictionary
        feature_names: List of feature names
        output_dir: Directory to save model
        model_name: Name for the model file
    """
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    # Save model
    model_path = output_path / f"{model_name}.pkl"
    with open(model_path, 'wb') as f:
        pickle.dump(model, f)
    print(f"\nModel saved to: {model_path}")
    
    # Save metrics
    metrics_path = output_path / f"{model_name}_metrics.json"
    with open(metrics_path, 'w') as f:
        json.dump(metrics, f, indent=2)
    print(f"Metrics saved to: {metrics_path}")
    
    # Save feature names
    features_path = output_path / f"{model_name}_features.json"
    with open(features_path, 'w') as f:
        json.dump({'features': feature_names}, f, indent=2)
    print(f"Features saved to: {features_path}")
    
    # Save feature importance plot if available
    if 'feature_importance' in metrics:
        try:
            import matplotlib.pyplot as plt
            
            fi_df = pd.DataFrame(metrics['feature_importance'])
            
            plt.figure(figsize=(10, 8))
            top_features = fi_df.head(20)
            plt.barh(range(len(top_features)), top_features['importance'])
            plt.yticks(range(len(top_features)), top_features['feature'])
            plt.xlabel('Importance')
            plt.title('Top 20 Feature Importances')
            plt.tight_layout()
            
            plot_path = output_path / f"{model_name}_feature_importance.png"
            plt.savefig(plot_path, dpi=300, bbox_inches='tight')
            plt.close()
            print(f"Feature importance plot saved to: {plot_path}")
        except ImportError:
            print("matplotlib not installed - skipping feature importance plot")


def load_model(model_dir: str, model_name: str = 'corrosion_predictor') -> Tuple[Any, Dict, List[str]]:
    """
    Load a trained model.
    
    Args:
        model_dir: Directory containing the model
        model_name: Name of the model file
    
    Returns:
        Tuple of (model, metrics, feature_names)
    """
    model_path = Path(model_dir)
    
    # Load model
    with open(model_path / f"{model_name}.pkl", 'rb') as f:
        model = pickle.load(f)
    
    # Load metrics
    with open(model_path / f"{model_name}_metrics.json", 'r') as f:
        metrics = json.load(f)
    
    # Load features
    with open(model_path / f"{model_name}_features.json", 'r') as f:
        feature_names = json.load(f)['features']
    
    return model, metrics, feature_names


def predict_new_corrosion(
    model: Any,
    X: pd.DataFrame,
    threshold: float = 0.5
) -> Tuple[np.ndarray, np.ndarray]:
    """
    Predict locations likely to develop new corrosion.
    
    Args:
        model: Trained model
        X: Features for prediction
        threshold: Probability threshold for classification
    
    Returns:
        Tuple of (predictions, probabilities)
    """
    probabilities = model.predict_proba(X)[:, 1]
    predictions = (probabilities >= threshold).astype(int)
    
    return predictions, probabilities