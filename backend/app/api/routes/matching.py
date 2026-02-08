"""Anomaly matching routes: run matching, get results."""

from fastapi import APIRouter, Depends
from app.api.deps import get_matching_service
from app.services.matching_service import MatchingService
from app.schemas.matching import (
    MatchingRequest,
    MatchingSummaryResponse,
    MatchingResultResponse,
    MatchedPairResponse,
)

router = APIRouter(prefix="/api/matching", tags=["matching"])


@router.post("/run", response_model=MatchingSummaryResponse)
async def run_matching(
    body: MatchingRequest,
    svc: MatchingService = Depends(get_matching_service),
):
    """Run anomaly matching between two inspection runs."""
    result = await svc.run_matching(
        pipeline_id=body.pipeline_id,
        run1_inspection_id=body.run1_inspection_id,
        run2_inspection_id=body.run2_inspection_id,
        parameters=body.parameters.model_dump(),
    )
    return MatchingSummaryResponse(**result)


@router.get("/{run1_id}/{run2_id}/results", response_model=MatchingResultResponse)
async def get_matching_results(
    run1_id: str,
    run2_id: str,
    svc: MatchingService = Depends(get_matching_service),
):
    pairs = await svc.get_results(run1_id, run2_id)
    critical_count = sum(1 for p in pairs if p.get("is_critical_growth"))

    return MatchingResultResponse(
        pipeline_id=pairs[0]["pipeline_id"] if pairs else "",
        run1_inspection_id=run1_id,
        run2_inspection_id=run2_id,
        total_matched=len(pairs),
        new_anomalies=0,
        missing_anomalies=0,
        uncertain=0,
        critical_growth_count=critical_count,
        matched_pairs=[_to_response(p) for p in pairs],
    )


@router.get("/{run1_id}/{run2_id}/critical")
async def get_critical_growth(
    run1_id: str,
    run2_id: str,
    svc: MatchingService = Depends(get_matching_service),
):
    return await svc.get_critical_growth(run1_id, run2_id)


def _to_response(doc: dict) -> MatchedPairResponse:
    return MatchedPairResponse(
        id=doc["id"],
        run1_anomaly_id=doc.get("run1_anomaly_id", ""),
        run2_anomaly_id=doc.get("run2_anomaly_id", ""),
        confidence=doc.get("confidence", 0),
        distance_score=doc.get("distance_score", 0),
        clock_score=doc.get("clock_score", 0),
        dimension_score=doc.get("dimension_score", 0),
        depth_growth_pct=doc.get("depth_growth_pct"),
        depth_growth_rate=doc.get("depth_growth_rate"),
        is_critical_growth=doc.get("is_critical_growth", False),
    )
