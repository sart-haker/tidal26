"""Pipeline MongoDB document model."""

from datetime import datetime, timezone
from pydantic import BaseModel, Field


class PipelineDocument(BaseModel):
    name: str
    diameter_ft: float = 2.5
    length_ft: float = 57000.0
    wall_thickness_in: float = 0.344
    material: str = "Carbon Steel"
    location: str = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
