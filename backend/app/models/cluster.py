"""Cluster (interaction zone) MongoDB document model."""

from datetime import datetime, timezone
from pydantic import BaseModel, Field


class ClusterDocument(BaseModel):
    inspection_id: str
    pipeline_id: str
    cluster_index: int  # Cluster number from DBSCAN (0-based)

    # Location
    start_distance_ft: float
    end_distance_ft: float
    span_ft: float
    center_distance_ft: float
    avg_clock_position: float | None = None

    # Statistics
    anomaly_count: int
    anomaly_ids: list[str] = []
    max_depth_pct: float
    avg_depth_pct: float
    total_length_in: float
    avg_width_in: float | None = None

    # Risk
    severity_score: float
    is_critical: bool = False
    risk_level: str = "low"  # low | medium | high | critical

    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
