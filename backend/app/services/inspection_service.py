"""Inspection + CSV upload business logic."""

import io
import math
import pandas as pd
from datetime import datetime, timezone

from app.repositories.inspection_repository import InspectionRepository
from app.repositories.anomaly_repository import AnomalyRepository
from app.core.exceptions import NotFoundError, BadRequestError
from src.loaders.csv_loader import normalize_uploaded_dataframe
from src.utils.clock_position import parse_clock_position


class InspectionService:
    def __init__(
        self,
        inspection_repo: InspectionRepository,
        anomaly_repo: AnomalyRepository,
    ):
        self.inspection_repo = inspection_repo
        self.anomaly_repo = anomaly_repo

    # -- queries ----------------------------------------------------------

    async def get_inspection(self, inspection_id: str) -> dict:
        doc = await self.inspection_repo.get_by_id(inspection_id)
        if not doc:
            raise NotFoundError("Inspection", inspection_id)
        return doc

    async def get_by_pipeline(self, pipeline_id: str) -> list[dict]:
        return await self.inspection_repo.get_by_pipeline(pipeline_id)

    # -- CSV upload -------------------------------------------------------

    async def upload_csv(
        self,
        pipeline_id: str,
        year: int,
        file_content: bytes,
        filename: str,
    ) -> dict:
        """Parse a CSV file and store its anomalies in MongoDB."""

        # Read CSV
        try:
            df = pd.read_csv(io.BytesIO(file_content))
        except Exception as e:
            raise BadRequestError(f"Failed to parse CSV: {e}")

        if df.empty:
            raise BadRequestError("CSV file is empty")

        # Normalize columns using existing loader logic
        df = normalize_uploaded_dataframe(df)

        # Create inspection record
        anomaly_mask = df["is_anomaly"] == True
        inspection_doc = {
            "pipeline_id": pipeline_id,
            "year": year,
            "tool_type": "MFL",
            "total_records": len(df),
            "anomaly_count": int(anomaly_mask.sum()),
            "filename": filename,
            "status": "processing",
            "created_at": datetime.now(timezone.utc),
            "updated_at": datetime.now(timezone.utc),
        }
        inspection = await self.inspection_repo.create(inspection_doc)
        inspection_id = inspection["id"]

        # Convert rows to anomaly documents and bulk-insert
        anomaly_docs = []
        for _, row in df.iterrows():
            clock_str = row.get("clock_position")
            clock_decimal = None
            if pd.notna(clock_str):
                clock_decimal = parse_clock_position(clock_str)

            depth = row.get("depth_percent") or row.get("depth_pct")
            depth = float(depth) if pd.notna(depth) else None

            # Classify severity
            severity = "low"
            if depth is not None:
                if depth >= 60:
                    severity = "critical"
                elif depth >= 40:
                    severity = "high"
                elif depth >= 20:
                    severity = "medium"

            doc = {
                "inspection_id": inspection_id,
                "pipeline_id": pipeline_id,
                "distance_ft": float(row.get("log_distance", 0) or 0),
                "clock_position": str(clock_str) if pd.notna(clock_str) else None,
                "clock_position_decimal": clock_decimal,
                "feature_type": row.get("event_type_normalized", "Unknown"),
                "is_anomaly": bool(row.get("is_anomaly", False)),
                "depth_pct": depth,
                "anomaly_length_in": _safe_float(row.get("length")),
                "anomaly_width_in": _safe_float(row.get("width")),
                "wall_thickness_in": _safe_float(row.get("wall_thickness")),
                "internal_external": row.get("orientation"),
                "joint_number": _safe_float(row.get("joint_number")),
                "severity": severity,
                "created_at": datetime.now(timezone.utc),
            }
            anomaly_docs.append(doc)

        await self.anomaly_repo.create_many(anomaly_docs)

        # Mark inspection complete
        await self.inspection_repo.update(
            inspection_id, {"status": "completed", "updated_at": datetime.now(timezone.utc)}
        )

        return await self.inspection_repo.get_by_id(inspection_id)

    # -- delete -----------------------------------------------------------

    async def delete_inspection(self, inspection_id: str) -> bool:
        await self.anomaly_repo.delete_by_inspection(inspection_id)
        return await self.inspection_repo.delete(inspection_id)


def _safe_float(val) -> float | None:
    if val is None:
        return None
    try:
        f = float(val)
        return None if math.isnan(f) else f
    except (ValueError, TypeError):
        return None
