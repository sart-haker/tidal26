"""
Complete example workflow for corrosion prediction.

This script demonstrates the full pipeline from data processing to prediction.
"""

# import sys
# from pathlib import Path

# # Add parent directory to path
# sys.path.insert(0, str(Path(__file__).parent.parent))


def step1_run_alignment_pipeline():
    """Step 1: Generate comparison data from ILI runs."""
    print("\n" + "="*80)
    print("STEP 1: Running Alignment Pipeline")
    print("="*80)
    print("\nThis generates the comparison files needed for ML training...")
    
    from src.main import run_pipeline
    import os
    
    data_dir = '../../data'
    output_dir = '../../output'
    
    # Run comparisons for all period pairs
    periods = [
        (2007, 2015),
        (2015, 2022),
        (2007, 2022)
    ]
    
    for run1, run2 in periods:
        print(f"\nProcessing {run1} vs {run2}...")
        run_pipeline(
            data_dir=data_dir,
            output_dir=output_dir,
            run1_year=run1,
            run2_year=run2,
            distance_tolerance=10.0,
            clock_tolerance=2.0,
            weld_tolerance=50.0
        )
    
    print("\n✓ Alignment pipeline complete!")
    print(f"  Output files saved to: {output_dir}/")


def step2_train_models():
    """Step 2: Train ML models."""
    print("\n" + "="*80)
    print("STEP 2: Training Machine Learning Models")
    print("="*80)
    print("\nThis will train Random Forest and Gradient Boosting models...")
    
    from ml.train import main as train_main
    
    train_main()
    
    print("\n✓ Model training complete!")


def step3_make_predictions():
    """Step 3: Make predictions for future corrosion."""
    print("\n" + "="*80)
    print("STEP 3: Predicting Future Corrosion Locations")
    print("="*80)
    print("\nUsing the trained model to predict where corrosion will form...")
    
    from ml.predict import main as predict_main
    
    predict_main()
    
    print("\n✓ Predictions complete!")


def main():
    """Run the complete workflow."""
    print("="*80)
    print("CORROSION PREDICTION - COMPLETE WORKFLOW")
    print("="*80)
    print("\nThis script will:")
    print("  1. Process ILI data and identify new anomalies")
    print("  2. Train machine learning models")
    print("  3. Predict future corrosion locations")
    print("\nThis may take several minutes...\n")
    
    try:
        # Step 1: Generate comparison data
        step1_run_alignment_pipeline()
        
        # Step 2: Train models
        step2_train_models()
        
        # Step 3: Make predictions
        step3_make_predictions()
        
        print("\n" + "="*80)
        print("WORKFLOW COMPLETE!")
        print("="*80)
        print("\nResults:")
        print("  - Comparison data: backend/output/")
        print("  - Trained models:  backend/models/")
        print("  - Predictions:     backend/output/predictions_2022_future.csv")
        print("\nNext steps:")
        print("  1. Review the prediction output CSV")
        print("  2. Identify high-risk locations (probability > 0.7)")
        print("  3. Plan inspections for top priority areas")
        print("  4. Update model with new inspection data when available")
        
    except Exception as e:
        print(f"\n❌ Error during workflow: {e}")
        print("\nTroubleshooting:")
        print("  - Ensure data files exist in data/ directory")
        print("  - Check that all dependencies are installed")
        print("  - See backend/src/ml/README.md for details")
        raise


if __name__ == '__main__':
    main()
