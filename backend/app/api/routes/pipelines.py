"""Pipeline CRUD routes."""

from fastapi import APIRouter, Depends
from app.api.deps import get_pipeline_repo, get_analytics_service
from app.repositories.pipeline_repository import PipelineRepository
from app.services.analytics_service import AnalyticsService
from app.schemas.pipeline import PipelineCreate, PipelineResponse, PipelineListResponse
from app.core.exceptions import NotFoundError
from datetime import datetime, timezone

router = APIRouter(prefix="/api/pipelines", tags=["pipelines"])


@router.post("", response_model=PipelineResponse, status_code=201)
async def create_pipeline(
    body: PipelineCreate,
    repo: PipelineRepository = Depends(get_pipeline_repo),
):
    doc = body.model_dump()
    now = datetime.now(timezone.utc)
    doc["created_at"] = now
    doc["updated_at"] = now
    result = await repo.create(doc)
    return _to_response(result)


@router.get("", response_model=PipelineListResponse)
async def list_pipelines(
    skip: int = 0,
    limit: int = 50,
    repo: PipelineRepository = Depends(get_pipeline_repo),
):
    items = await repo.get_all(skip=skip, limit=limit)
    total = await repo.count()
    return PipelineListResponse(
        pipelines=[_to_response(p) for p in items],
        total=total,
    )


# NOTE: /default MUST come before /{pipeline_id} to avoid route conflict
@router.get("/default", response_model=PipelineResponse)
async def get_or_create_default_pipeline(
    repo: PipelineRepository = Depends(get_pipeline_repo),
):
    """Get or create a default pipeline for simplified uploads."""
    existing = await repo.get_all(filter={"name": "Default Pipeline"}, limit=1)
    if existing:
        return _to_response(existing[0])

    now = datetime.now(timezone.utc)
    doc = {
        "name": "Default Pipeline",
        "diameter_ft": 2.5,
        "length_ft": 0,
        "wall_thickness_in": 0,
        "material": "",
        "location": "",
        "created_at": now,
        "updated_at": now,
    }
    result = await repo.create(doc)
    return _to_response(result)


@router.get("/{pipeline_id}", response_model=PipelineResponse)
async def get_pipeline(
    pipeline_id: str,
    repo: PipelineRepository = Depends(get_pipeline_repo),
):
    doc = await repo.get_by_id(pipeline_id)
    if not doc:
        raise NotFoundError("Pipeline", pipeline_id)
    return _to_response(doc)


@router.get("/{pipeline_id}/summary")
async def get_pipeline_summary(
    pipeline_id: str,
    analytics: AnalyticsService = Depends(get_analytics_service),
):
    return await analytics.get_pipeline_summary(pipeline_id)


@router.delete("/{pipeline_id}", status_code=204)
async def delete_pipeline(
    pipeline_id: str,
    repo: PipelineRepository = Depends(get_pipeline_repo),
):
    deleted = await repo.delete(pipeline_id)
    if not deleted:
        raise NotFoundError("Pipeline", pipeline_id)


def _to_response(doc: dict) -> PipelineResponse:
    return PipelineResponse(
        id=doc["id"],
        name=doc["name"],
        diameter_ft=doc.get("diameter_ft", 2.5),
        length_ft=doc.get("length_ft", 0),
        wall_thickness_in=doc.get("wall_thickness_in", 0),
        material=doc.get("material", ""),
        location=doc.get("location", ""),
        created_at=str(doc.get("created_at", "")),
    )
