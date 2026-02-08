"""Clustering routes: run analysis, get results."""

from fastapi import APIRouter, Depends, Query
from app.api.deps import get_clustering_service, get_inspection_service
from app.services.clustering_service import ClusteringService
from app.services.inspection_service import InspectionService
from app.schemas.cluster import (
    ClusteringRequest,
    ClusteringSummaryResponse,
    ClusteringResultResponse,
    ClusterResponse,
)

router = APIRouter(prefix="/api/clustering", tags=["clustering"])


@router.post("/run", response_model=ClusteringSummaryResponse)
async def run_clustering(
    body: ClusteringRequest,
    clustering_svc: ClusteringService = Depends(get_clustering_service),
    inspection_svc: InspectionService = Depends(get_inspection_service),
):
    """Run DBSCAN clustering on an inspection's anomalies."""
    inspection = await inspection_svc.get_inspection(body.inspection_id)
    result = await clustering_svc.run_clustering(
        inspection_id=body.inspection_id,
        pipeline_id=inspection["pipeline_id"],
        parameters=body.parameters.model_dump(),
    )
    return ClusteringSummaryResponse(**result)


@router.get("/{inspection_id}/results", response_model=ClusteringResultResponse)
async def get_clustering_results(
    inspection_id: str,
    is_critical: bool | None = Query(None, description="Filter to critical clusters only"),
    svc: ClusteringService = Depends(get_clustering_service),
):
    """Get stored clustering results for an inspection."""
    clusters = await svc.get_results(inspection_id, is_critical)
    critical_count = sum(1 for c in clusters if c.get("is_critical"))
    warning_count = sum(
        1 for c in clusters
        if c.get("severity_score", 0) > 50 and not c.get("is_critical")
    )

    return ClusteringResultResponse(
        inspection_id=inspection_id,
        total_clusters=len(clusters),
        critical_clusters=critical_count,
        warning_clusters=warning_count,
        isolated_anomalies=0,
        clusters=[_to_response(c) for c in clusters],
    )


@router.get("/clusters/{cluster_id}", response_model=ClusterResponse)
async def get_cluster(
    cluster_id: str,
    svc: ClusteringService = Depends(get_clustering_service),
):
    doc = await svc.get_cluster(cluster_id)
    return _to_response(doc)


def _to_response(doc: dict) -> ClusterResponse:
    return ClusterResponse(
        id=doc["id"],
        inspection_id=doc.get("inspection_id", ""),
        pipeline_id=doc.get("pipeline_id", ""),
        cluster_index=doc.get("cluster_index", 0),
        start_distance_ft=doc.get("start_distance_ft", 0),
        end_distance_ft=doc.get("end_distance_ft", 0),
        span_ft=doc.get("span_ft", 0),
        center_distance_ft=doc.get("center_distance_ft", 0),
        avg_clock_position=doc.get("avg_clock_position"),
        anomaly_count=doc.get("anomaly_count", 0),
        anomaly_ids=doc.get("anomaly_ids", []),
        max_depth_pct=doc.get("max_depth_pct", 0),
        avg_depth_pct=doc.get("avg_depth_pct", 0),
        total_length_in=doc.get("total_length_in", 0),
        avg_width_in=doc.get("avg_width_in"),
        severity_score=doc.get("severity_score", 0),
        is_critical=doc.get("is_critical", False),
        risk_level=doc.get("risk_level", "low"),
    )
