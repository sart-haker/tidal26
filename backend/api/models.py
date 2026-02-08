from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class AnalysisSummary(BaseModel):
    id: str
    name: str
    run1_year: int
    run2_year: int
    created_at: datetime
    status: str
    matched_count: Optional[int] = None
    new_count: Optional[int] = None
    missing_count: Optional[int] = None
    uncertain_count: Optional[int] = None
    critical_count: Optional[int] = None
    weld_count: Optional[int] = None


class AnalysisDetail(AnalysisSummary):
    matched_anomalies: list[dict]
    new_anomalies: list[dict]
    missing_anomalies: list[dict]
    uncertain_matches: list[dict]
    weld_alignments: list[dict]
    distance_tolerance: float
    clock_tolerance: float
    weld_tolerance: float
