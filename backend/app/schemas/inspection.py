"""Inspection request / response schemas."""

from pydantic import BaseModel


class InspectionCreate(BaseModel):
    pipeline_id: str
    year: int
    tool_type: str = "MFL"


class InspectionResponse(BaseModel):
    id: str
    pipeline_id: str
    year: int
    tool_type: str
    total_records: int
    anomaly_count: int
    filename: str
    status: str
    created_at: str


class InspectionListResponse(BaseModel):
    inspections: list[InspectionResponse]
    total: int
