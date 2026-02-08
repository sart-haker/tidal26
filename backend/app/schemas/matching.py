"""Anomaly matching request / response schemas."""

from pydantic import BaseModel


class MatchingParameters(BaseModel):
    distance_tolerance: float = 10.0
    clock_tolerance: float = 2.0
    weld_tolerance: float = 50.0


class MatchingRequest(BaseModel):
    pipeline_id: str
    run1_inspection_id: str
    run2_inspection_id: str
    parameters: MatchingParameters = MatchingParameters()


class MatchedPairResponse(BaseModel):
    id: str
    run1_anomaly_id: str
    run2_anomaly_id: str
    confidence: float
    distance_score: float
    clock_score: float
    dimension_score: float
    depth_growth_pct: float | None = None
    depth_growth_rate: float | None = None
    is_critical_growth: bool


class MatchingResultResponse(BaseModel):
    pipeline_id: str
    run1_inspection_id: str
    run2_inspection_id: str
    total_matched: int
    new_anomalies: int
    missing_anomalies: int
    uncertain: int
    critical_growth_count: int
    matched_pairs: list[MatchedPairResponse]


class MatchingSummaryResponse(BaseModel):
    pipeline_id: str
    status: str
    total_matched: int
    new_anomalies: int
    missing_anomalies: int
    critical_growth_count: int
