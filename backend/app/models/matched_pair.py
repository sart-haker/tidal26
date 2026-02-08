"""Matched anomaly pair MongoDB document model."""

from datetime import datetime, timezone
from pydantic import BaseModel, Field


class MatchedPairDocument(BaseModel):
    pipeline_id: str
    run1_inspection_id: str
    run2_inspection_id: str
    run1_anomaly_id: str
    run2_anomaly_id: str

    # Matching confidence
    confidence: float
    distance_score: float
    clock_score: float
    dimension_score: float

    # Growth metrics
    depth_growth_pct: float | None = None
    depth_growth_rate: float | None = None  # %/year
    length_growth_in: float | None = None
    width_growth_in: float | None = None
    years_between: int = 0
    is_critical_growth: bool = False

    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
