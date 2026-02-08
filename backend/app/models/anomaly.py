"""Anomaly MongoDB document model."""

from datetime import datetime, timezone
from pydantic import BaseModel, Field


class AnomalyDocument(BaseModel):
    inspection_id: str
    pipeline_id: str

    # Position
    distance_ft: float
    clock_position: str | None = None
    clock_position_decimal: float | None = None

    # Characteristics
    feature_type: str = "Metal Loss"
    is_anomaly: bool = True
    depth_pct: float | None = None
    depth_in: float | None = None
    anomaly_length_in: float | None = None
    anomaly_width_in: float | None = None
    wall_thickness_in: float | None = None

    # Classification
    internal_external: str | None = None
    joint_number: float | None = None
    severity: str = "low"  # low | medium | high | critical

    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
