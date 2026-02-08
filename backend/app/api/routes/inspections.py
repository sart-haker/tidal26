"""Inspection routes: CRUD + CSV upload."""

from datetime import datetime, timezone
from fastapi import APIRouter, Depends, UploadFile, File, Form
from app.api.deps import get_inspection_service, get_analytics_service, get_pipeline_repo
from app.services.inspection_service import InspectionService
from app.services.analytics_service import AnalyticsService
from app.repositories.pipeline_repository import PipelineRepository
from app.schemas.inspection import InspectionResponse, InspectionListResponse
from app.core.exceptions import NotFoundError

router = APIRouter(prefix="/api/inspections", tags=["inspections"])


@router.post("/upload", response_model=InspectionResponse, status_code=201)
async def upload_inspection(
    pipeline_id: str = Form(...),
    year: int = Form(...),
    file: UploadFile = File(...),
    service: InspectionService = Depends(get_inspection_service),
):
    """Upload a CSV file to create a new inspection with anomalies."""
    content = await file.read()
    result = await service.upload_csv(pipeline_id, year, content, file.filename or "upload.csv")
    return _to_response(result)


@router.post("/upload-simple", response_model=InspectionResponse, status_code=201)
async def upload_inspection_simple(
    year: int = Form(...),
    file: UploadFile = File(...),
    service: InspectionService = Depends(get_inspection_service),
    pipeline_repo: PipelineRepository = Depends(get_pipeline_repo),
):
    """Simplified upload: auto-creates/reuses a default pipeline."""
    existing = await pipeline_repo.get_all(filter={"name": "Default Pipeline"}, limit=1)
    if existing:
        pipeline_id = existing[0]["id"]
    else:
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
        created = await pipeline_repo.create(doc)
        pipeline_id = created["id"]

    content = await file.read()
    result = await service.upload_csv(pipeline_id, year, content, file.filename or "upload.csv")
    return _to_response(result)


@router.get("/pipeline/{pipeline_id}", response_model=InspectionListResponse)
async def list_inspections(
    pipeline_id: str,
    service: InspectionService = Depends(get_inspection_service),
):
    items = await service.get_by_pipeline(pipeline_id)
    return InspectionListResponse(
        inspections=[_to_response(i) for i in items],
        total=len(items),
    )


@router.get("/{inspection_id}", response_model=InspectionResponse)
async def get_inspection(
    inspection_id: str,
    service: InspectionService = Depends(get_inspection_service),
):
    result = await service.get_inspection(inspection_id)
    return _to_response(result)


@router.get("/{inspection_id}/overview")
async def get_inspection_overview(
    inspection_id: str,
    analytics: AnalyticsService = Depends(get_analytics_service),
):
    return await analytics.get_inspection_overview(inspection_id)


@router.delete("/{inspection_id}", status_code=204)
async def delete_inspection(
    inspection_id: str,
    service: InspectionService = Depends(get_inspection_service),
):
    deleted = await service.delete_inspection(inspection_id)
    if not deleted:
        raise NotFoundError("Inspection", inspection_id)


def _to_response(doc: dict) -> InspectionResponse:
    return InspectionResponse(
        id=doc["id"],
        pipeline_id=doc.get("pipeline_id", ""),
        year=doc.get("year", 0),
        tool_type=doc.get("tool_type", ""),
        total_records=doc.get("total_records", 0),
        anomaly_count=doc.get("anomaly_count", 0),
        filename=doc.get("filename", ""),
        status=doc.get("status", ""),
        created_at=str(doc.get("created_at", "")),
    )
