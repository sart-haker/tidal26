"""Anomaly query routes."""

from fastapi import APIRouter, Depends, Query
from app.api.deps import get_anomaly_repo
from app.repositories.anomaly_repository import AnomalyRepository
from app.schemas.anomaly import AnomalyResponse, AnomalyListResponse
from app.core.exceptions import NotFoundError

router = APIRouter(prefix="/api/anomalies", tags=["anomalies"])


@router.get("/inspection/{inspection_id}", response_model=AnomalyListResponse)
async def list_anomalies(
    inspection_id: str,
    skip: int = 0,
    limit: int = 200,
    anomalies_only: bool = True,
    repo: AnomalyRepository = Depends(get_anomaly_repo),
):
    if anomalies_only:
        items = await repo.get_anomalies_only(inspection_id)
    else:
        items = await repo.get_by_inspection(inspection_id, skip=skip, limit=limit)
    total = len(items)
    return AnomalyListResponse(
        anomalies=[_to_response(a) for a in items[:limit]],
        total=total,
    )


@router.get("/inspection/{inspection_id}/critical", response_model=AnomalyListResponse)
async def list_critical_anomalies(
    inspection_id: str,
    min_depth_pct: float = Query(40.0, description="Minimum depth percentage"),
    repo: AnomalyRepository = Depends(get_anomaly_repo),
):
    items = await repo.get_critical(inspection_id, min_depth_pct)
    return AnomalyListResponse(
        anomalies=[_to_response(a) for a in items],
        total=len(items),
    )


@router.get("/inspection/{inspection_id}/range", response_model=AnomalyListResponse)
async def list_anomalies_by_range(
    inspection_id: str,
    min_ft: float = Query(..., description="Start distance (feet)"),
    max_ft: float = Query(..., description="End distance (feet)"),
    repo: AnomalyRepository = Depends(get_anomaly_repo),
):
    items = await repo.get_by_distance_range(inspection_id, min_ft, max_ft)
    return AnomalyListResponse(
        anomalies=[_to_response(a) for a in items],
        total=len(items),
    )


@router.get("/inspection/{inspection_id}/stats")
async def get_anomaly_stats(
    inspection_id: str,
    repo: AnomalyRepository = Depends(get_anomaly_repo),
):
    return await repo.get_stats(inspection_id)


@router.get("/{anomaly_id}", response_model=AnomalyResponse)
async def get_anomaly(
    anomaly_id: str,
    repo: AnomalyRepository = Depends(get_anomaly_repo),
):
    doc = await repo.get_by_id(anomaly_id)
    if not doc:
        raise NotFoundError("Anomaly", anomaly_id)
    return _to_response(doc)


def _to_response(doc: dict) -> AnomalyResponse:
    return AnomalyResponse(
        id=doc["id"],
        inspection_id=doc.get("inspection_id", ""),
        pipeline_id=doc.get("pipeline_id", ""),
        distance_ft=doc.get("distance_ft", 0),
        clock_position=doc.get("clock_position"),
        clock_position_decimal=doc.get("clock_position_decimal"),
        feature_type=doc.get("feature_type", "Unknown"),
        depth_pct=doc.get("depth_pct"),
        anomaly_length_in=doc.get("anomaly_length_in"),
        anomaly_width_in=doc.get("anomaly_width_in"),
        wall_thickness_in=doc.get("wall_thickness_in"),
        internal_external=doc.get("internal_external"),
        joint_number=doc.get("joint_number"),
        severity=doc.get("severity", "low"),
    )
