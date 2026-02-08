"""Analytics / dashboard aggregation service."""

from app.repositories.anomaly_repository import AnomalyRepository
from app.repositories.cluster_repository import ClusterRepository
from app.repositories.inspection_repository import InspectionRepository
from app.repositories.matched_pair_repository import MatchedPairRepository


class AnalyticsService:
    def __init__(
        self,
        anomaly_repo: AnomalyRepository,
        cluster_repo: ClusterRepository,
        inspection_repo: InspectionRepository,
        matched_pair_repo: MatchedPairRepository,
    ):
        self.anomaly_repo = anomaly_repo
        self.cluster_repo = cluster_repo
        self.inspection_repo = inspection_repo
        self.matched_pair_repo = matched_pair_repo

    async def get_pipeline_summary(self, pipeline_id: str) -> dict:
        """High-level summary for a pipeline dashboard."""
        inspections = await self.inspection_repo.get_by_pipeline(pipeline_id)

        summary_per_year = []
        total_critical_clusters = 0

        for insp in inspections:
            iid = insp["id"]
            clusters = await self.cluster_repo.get_by_inspection(iid)
            critical = [c for c in clusters if c.get("is_critical")]
            total_critical_clusters += len(critical)

            summary_per_year.append({
                "inspection_id": iid,
                "year": insp["year"],
                "anomaly_count": insp.get("anomaly_count", 0),
                "total_clusters": len(clusters),
                "critical_clusters": len(critical),
            })

        return {
            "pipeline_id": pipeline_id,
            "inspections": summary_per_year,
            "total_inspections": len(inspections),
            "total_critical_clusters": total_critical_clusters,
        }

    async def get_inspection_overview(self, inspection_id: str) -> dict:
        """Detailed overview for a single inspection."""
        stats = await self.anomaly_repo.get_stats(inspection_id)
        clusters = await self.cluster_repo.get_by_inspection(inspection_id)
        critical = [c for c in clusters if c.get("is_critical")]
        warning = [c for c in clusters if c.get("severity_score", 0) > 50 and not c.get("is_critical")]

        return {
            "inspection_id": inspection_id,
            "anomaly_count": stats.get("total", 0),
            "avg_depth_pct": stats.get("avg_depth_pct"),
            "max_depth_pct": stats.get("max_depth_pct"),
            "total_clusters": len(clusters),
            "critical_clusters": len(critical),
            "warning_clusters": len(warning),
        }
