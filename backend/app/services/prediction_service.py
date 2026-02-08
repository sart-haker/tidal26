"""ML prediction service — runs corrosion predictions on MongoDB-stored inspections."""

import math
import numpy as np
import pandas as pd
from pathlib import Path
from datetime import datetime, timezone

from app.repositories.anomaly_repository import AnomalyRepository
from app.repositories.inspection_repository import InspectionRepository
from app.core.exceptions import NotFoundError, BadRequestError
from src.ml.model_training import load_model, predict_new_corrosion
from src.ml.feature_engineering import engineer_features

BASE_DIR = Path(__file__).resolve().parents[2]
MODEL_DIR = BASE_DIR / "models"


class PredictionService:
    def __init__(
        self,
        anomaly_repo: AnomalyRepository,
        inspection_repo: InspectionRepository,
        db,
    ):
        self.anomaly_repo = anomaly_repo
        self.inspection_repo = inspection_repo
        self.db = db

    async def run_predictions(
        self,
        inspection_id: str,
        model_name: str = "corrosion_predictor_rf",
        probability_threshold: float = 0.5,
    ) -> dict:
        """Run ML corrosion predictions for an uploaded inspection."""

        # 1. Verify the inspection exists
        inspection = await self.inspection_repo.get_by_id(inspection_id)
        if not inspection:
            raise NotFoundError("Inspection", inspection_id)

        # 2. Load the trained model
        try:
            model, metrics, feature_names = load_model(str(MODEL_DIR), model_name)
        except FileNotFoundError:
            raise BadRequestError(
                f"ML model '{model_name}' not found. Train the model first."
            )

        # 3. Fetch all anomaly/feature rows from MongoDB
        all_rows = await self.anomaly_repo.get_by_inspection(inspection_id)
        if not all_rows:
            raise BadRequestError("No data found for this inspection")

        # 4. Convert MongoDB documents → DataFrame (matching the shape predict.py expects)
        df = self._docs_to_dataframe(all_rows)

        # 5. Identify existing anomalies
        anomaly_df = df[df["is_anomaly"] == True]

        # 6. Create prediction grid — sample every 5 feet along the pipeline
        distance_col = "log_distance"
        min_dist = df[distance_col].min()
        max_dist = df[distance_col].max()

        if pd.isna(min_dist) or pd.isna(max_dist) or max_dist <= min_dist:
            raise BadRequestError("Insufficient distance data for predictions")

        grid_points = np.arange(min_dist, max_dist, 5.0)

        prediction_samples = []
        for point in grid_points:
            df["_temp_dist"] = (df[distance_col] - point).abs()
            nearest_idx = df["_temp_dist"].idxmin()
            if df.loc[nearest_idx, "_temp_dist"] < 10:
                sample = df.loc[nearest_idx].copy()
                sample["prediction_distance"] = point
                prediction_samples.append(sample)

        df.drop("_temp_dist", axis=1, inplace=True)

        if not prediction_samples:
            raise BadRequestError("Could not create prediction grid from data")

        prediction_df = pd.DataFrame(prediction_samples).reset_index(drop=True)

        # 7. Engineer features
        prediction_df = engineer_features(
            df=prediction_df, existing_anomalies=anomaly_df
        )

        # Add years_between if the model expects it
        if "years_between" in feature_names and "years_between" not in prediction_df.columns:
            prediction_df["years_between"] = 7

        # Filter feature_names to only columns that exist
        available_features = [c for c in feature_names if c in prediction_df.columns]

        X_pred = prediction_df[available_features].copy()

        # Cap infinite values
        dist_cols = X_pred.filter(like="dist_to_").columns.tolist()
        if dist_cols:
            finite_max = (
                X_pred[dist_cols].replace([np.inf, -np.inf], np.nan).max().max()
            )
            cap = finite_max * 2 if pd.notna(finite_max) and finite_max > 0 else 100000
            X_pred = X_pred.replace([np.inf, -np.inf], cap)
        else:
            X_pred = X_pred.replace([np.inf, -np.inf], np.nan)

        # Drop rows with NaN
        valid_mask = ~X_pred.isnull().any(axis=1)
        X_pred = X_pred[valid_mask]
        prediction_df = prediction_df.loc[X_pred.index]

        if len(X_pred) == 0:
            raise BadRequestError("Not enough valid data points for prediction")

        # 8. Make predictions
        predictions, probabilities = predict_new_corrosion(
            model=model, X=X_pred, threshold=probability_threshold
        )

        prediction_df["corrosion_probability"] = probabilities
        prediction_df["predicted_corrosion"] = predictions

        # 9. Build output documents
        output_cols = [
            "prediction_distance",
            "corrosion_probability",
            "predicted_corrosion",
            "wall_thickness",
            "elevation",
            "clock_position",
            "event_type_normalized",
            "anomaly_density_50ft",
            "dist_to_bend",
            "dist_to_girth_weld",
        ]
        output_cols = [c for c in output_cols if c in prediction_df.columns]

        result_docs = []
        for _, row in prediction_df[output_cols].iterrows():
            doc = {}
            for col in output_cols:
                val = row[col]
                if isinstance(val, (np.floating, float)):
                    doc[col] = None if (pd.isna(val) or math.isnan(val)) else float(val)
                elif isinstance(val, (np.integer, int)):
                    doc[col] = int(val)
                else:
                    doc[col] = str(val) if pd.notna(val) else None
            result_docs.append(doc)

        # 10. Store in MongoDB (replace any previous predictions for this inspection)
        predictions_collection = self.db["predictions"]
        await predictions_collection.delete_many({"inspection_id": inspection_id})
        if result_docs:
            for doc in result_docs:
                doc["inspection_id"] = inspection_id
            await predictions_collection.insert_many(result_docs)

        high_risk = sum(1 for d in result_docs if (d.get("corrosion_probability") or 0) > 0.7)
        med_risk = sum(
            1 for d in result_docs
            if 0.5 < (d.get("corrosion_probability") or 0) <= 0.7
        )

        return {
            "inspection_id": inspection_id,
            "total_predictions": len(result_docs),
            "high_risk": high_risk,
            "medium_risk": med_risk,
            "low_risk": len(result_docs) - high_risk - med_risk,
        }

    async def get_results(self, inspection_id: str) -> list[dict]:
        """Fetch stored prediction results for an inspection."""
        predictions_collection = self.db["predictions"]
        cursor = predictions_collection.find(
            {"inspection_id": inspection_id},
            {"_id": 0, "inspection_id": 0},
        ).sort("prediction_distance", 1)
        return await cursor.to_list(length=50000)

    def _docs_to_dataframe(self, docs: list[dict]) -> pd.DataFrame:
        """Convert MongoDB anomaly docs to a DataFrame matching the ML pipeline's expected columns."""
        records = []
        for d in docs:
            records.append(
                {
                    "log_distance": d.get("distance_ft", 0),
                    "event_type_normalized": d.get("feature_type", "UNKNOWN"),
                    "is_anomaly": d.get("is_anomaly", False),
                    "depth_percent": d.get("depth_pct"),
                    "length": d.get("anomaly_length_in"),
                    "width": d.get("anomaly_width_in"),
                    "wall_thickness": d.get("wall_thickness_in"),
                    "clock_position": d.get("clock_position"),
                    "clock_decimal": d.get("clock_position_decimal"),
                    "orientation": d.get("internal_external"),
                    "joint_number": d.get("joint_number"),
                    "elevation": d.get("elevation"),
                }
            )
        df = pd.DataFrame(records)
        # Coerce all numeric columns so None → NaN (pandas operations like .diff() fail on None)
        numeric_cols = [
            "log_distance", "depth_percent", "length", "width",
            "wall_thickness", "clock_decimal", "joint_number", "elevation",
        ]
        for col in numeric_cols:
            if col in df.columns:
                df[col] = pd.to_numeric(df[col], errors="coerce")
        df["log_distance"] = df["log_distance"].fillna(0)
        return df
