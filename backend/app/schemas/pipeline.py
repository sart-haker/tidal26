"""Pipeline request / response schemas."""

from pydantic import BaseModel


class PipelineCreate(BaseModel):
    name: str
    diameter_ft: float = 2.5
    length_ft: float = 57000.0
    wall_thickness_in: float = 0.344
    material: str = "Carbon Steel"
    location: str = ""


class PipelineResponse(BaseModel):
    id: str
    name: str
    diameter_ft: float
    length_ft: float
    wall_thickness_in: float
    material: str
    location: str
    created_at: str


class PipelineListResponse(BaseModel):
    pipelines: list[PipelineResponse]
    total: int
