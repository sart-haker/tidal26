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


# --- Enriched response models (match frontend RunData shape) ---

class EnrichedMatchedAnomaly(BaseModel):
    run1_idx: int
    run2_idx: int
    confidence: float
    event_type: str
    run1_distance: float
    run2_distance: float
    run1_clock: float | None = None
    run2_clock: float | None = None
    depth_run1: float | None = None
    depth_run2: float | None = None
    depth_change: float | None = None
    depth_growth_rate: float | None = None
    length_run1: float | None = None
    length_run2: float | None = None
    length_change: float | None = None
    length_growth_rate: float | None = None
    width_run1: float | None = None
    width_run2: float | None = None
    width_change: float | None = None
    width_growth_rate: float | None = None
    is_critical: bool


class EnrichedExceptionAnomaly(BaseModel):
    original_index: int
    log_distance: float
    event_type_normalized: str
    clock_decimal: float | None = None
    depth_percent: float | None = None
    length: float | None = None
    width: float | None = None
    joint_number: float | None = None


class EnrichedMatchingResponse(BaseModel):
    run1_year: int
    run2_year: int
    matched: list[EnrichedMatchedAnomaly]
    newAnomalies: list[EnrichedExceptionAnomaly]
    missing: list[EnrichedExceptionAnomaly]
    welds: list[dict] = []
