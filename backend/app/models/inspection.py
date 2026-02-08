"""Inspection MongoDB document model."""

from datetime import datetime, timezone
from pydantic import BaseModel, Field


class InspectionDocument(BaseModel):
    pipeline_id: str
    year: int
    tool_type: str = "MFL"
    total_records: int = 0
    anomaly_count: int = 0
    filename: str = ""
    status: str = "uploaded"  # uploaded | processing | completed | failed
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
