import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
DATA_PATH = BASE_DIR / 'output' / 'anomaly_comparisons' / '2007_vs_2015_matched_anomalies.csv'
OUTPUT_PATH = BASE_DIR / 'output' / 'predictions' / 'corrosion_rates_predictions.csv'

def run_prediction():
    print(" Loading data from:", DATA_PATH)

    if not os.path.exists(DATA_PATH):
        print(f" Error: Could not find {DATA_PATH}. Please ensure the CSV is in the 'data' folder.")
        return

    df = pd.read_csv(DATA_PATH)
    df_model = pd.get_dummies(df, columns=['event_type'], drop_first=True)
    features = ['run1_distance', 'run1_clock', 'depth_run1', 'length_run1', 'width_run1']
    features += [col for col in df_model.columns if 'eventtype' in col]

    X = df_model[features]
    y = df_model['depth_growth_rate']


    # We use a Random Forest to capture non-linear corrosion trends
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X, y)

    df['predicted_growth_rate'] = model.predict(df[features])
    df['predicted_depth_5_years'] = df['depth_run2'] + (df['predicted_growth_rate'] * 5)

    os.makedirs(OUTPUT_PATH.parent, exist_ok=True)
    df.to_csv(OUTPUT_PATH, index=False)
    print(f"= Success! 5-year predictions saved to: {OUTPUT_PATH}")

if __name__ == "__main__":
    run_prediction()
