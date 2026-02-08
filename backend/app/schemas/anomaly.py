"""Anomaly request / response schemas."""

from pydantic import BaseModel


class AnomalyResponse(BaseModel):
    id: str
    inspection_id: str
    pipeline_id: str
    distance_ft: float
    clock_position: str | None = None
    clock_position_decimal: float | None = None
    feature_type: str
    depth_pct: float | None = None
    anomaly_length_in: float | None = None
    anomaly_width_in: float | None = None
    wall_thickness_in: float | None = None
    internal_external: str | None = None
    joint_number: float | None = None
    severity: str


class AnomalyListResponse(BaseModel):
    anomalies: list[AnomalyResponse]
    total: int


class AnomalyStatsResponse(BaseModel):
    total: int
    by_severity: dict[str, int]
    by_feature_type: dict[str, int]
    avg_depth_pct: float | None
    max_depth_pct: float | None
