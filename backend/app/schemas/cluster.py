"""Clustering request / response schemas."""

from pydantic import BaseModel


class ClusteringParameters(BaseModel):
    longitudinal_tolerance_ft: float = 10.0
    circumferential_tolerance_deg: float = 90.0
    min_anomalies: int = 2
    pipe_diameter_ft: float = 2.5


class ClusteringRequest(BaseModel):
    inspection_id: str
    parameters: ClusteringParameters = ClusteringParameters()


class ClusterResponse(BaseModel):
    id: str
    inspection_id: str
    pipeline_id: str
    cluster_index: int
    start_distance_ft: float
    end_distance_ft: float
    span_ft: float
    center_distance_ft: float
    avg_clock_position: float | None = None
    anomaly_count: int
    anomaly_ids: list[str]
    max_depth_pct: float
    avg_depth_pct: float
    total_length_in: float
    avg_width_in: float | None = None
    severity_score: float
    is_critical: bool
    risk_level: str


class ClusteringResultResponse(BaseModel):
    inspection_id: str
    total_clusters: int
    critical_clusters: int
    warning_clusters: int
    isolated_anomalies: int
    clusters: list[ClusterResponse]


class ClusteringSummaryResponse(BaseModel):
    inspection_id: str
    status: str
    total_clusters: int
    critical_clusters: int
    isolated_anomalies: int
