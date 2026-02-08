"""Clustering business logic – bridges MongoDB and the existing AnomalyClusterDetector."""

import pandas as pd
import numpy as np
from datetime import datetime, timezone

from app.repositories.anomaly_repository import AnomalyRepository
from app.repositories.cluster_repository import ClusterRepository
from app.core.exceptions import NotFoundError, BadRequestError

# --- Use the EXISTING algorithm (not reimplemented) ---------------------
from src.clustering.cluster_detector import AnomalyClusterDetector


class ClusteringService:
    def __init__(
        self,
        anomaly_repo: AnomalyRepository,
        cluster_repo: ClusterRepository,
    ):
        self.anomaly_repo = anomaly_repo
        self.cluster_repo = cluster_repo

    # -- run clustering ---------------------------------------------------

    async def run_clustering(
        self, inspection_id: str, pipeline_id: str, parameters: dict
    ) -> dict:
        """
        Full flow:
        1. Fetch anomalies from MongoDB
        2. Convert to DataFrame for the existing algorithm
        3. Run detect_clusters() + analyze_clusters()
        4. Store cluster documents back to MongoDB
        5. Return summary
        """

        # 1. Fetch anomalies
        anomalies = await self.anomaly_repo.get_anomalies_only(inspection_id)
        if not anomalies:
            raise BadRequestError(
                f"No anomalies found for inspection {inspection_id}"
            )

        # 2. Convert to DataFrame expected by the algorithm
        df = pd.DataFrame(anomalies)
        df["is_anomaly"] = True  # All rows from get_anomalies_only are anomalies

        # Ensure required columns exist with correct types
        for col in ["depth_pct", "anomaly_length_in", "anomaly_width_in"]:
            if col not in df.columns:
                df[col] = np.nan
            df[col] = pd.to_numeric(df[col], errors="coerce")

        if "distance_ft" not in df.columns:
            raise BadRequestError("Anomaly data missing distance_ft column")

        df["distance_ft"] = pd.to_numeric(df["distance_ft"], errors="coerce")

        # 3. Run EXISTING algorithm
        detector = AnomalyClusterDetector(
            longitudinal_tolerance_ft=parameters.get("longitudinal_tolerance_ft", 10.0),
            circumferential_tolerance_deg=parameters.get("circumferential_tolerance_deg", 90),
            min_anomalies=parameters.get("min_anomalies", 2),
            pipe_diameter_ft=parameters.get("pipe_diameter_ft", 2.5),
        )

        clustered_df = detector.detect_clusters(df)
        if clustered_df.empty:
            return {
                "inspection_id": inspection_id,
                "status": "completed",
                "total_clusters": 0,
                "critical_clusters": 0,
                "isolated_anomalies": len(anomalies),
            }

        cluster_stats = detector.analyze_clusters(clustered_df)

        # 4. Clear previous clusters for this inspection, then store new ones
        await self.cluster_repo.delete_by_inspection(inspection_id)

        anomaly_id_list = [a.get("id", "") for a in anomalies]
        cluster_docs = []

        for _, row in cluster_stats.iterrows():
            cid = int(row["cluster_id"])
            member_indices = clustered_df[clustered_df["cluster_id"] == cid].index.tolist()
            member_ids = [anomaly_id_list[i] for i in member_indices if i < len(anomaly_id_list)]

            # Risk level
            sev = row["severity_score"]
            if row["is_critical"]:
                risk = "critical"
            elif sev > 50:
                risk = "high"
            elif sev > 20:
                risk = "medium"
            else:
                risk = "low"

            doc = {
                "inspection_id": inspection_id,
                "pipeline_id": pipeline_id,
                "cluster_index": cid,
                "start_distance_ft": float(row["start_distance_ft"]),
                "end_distance_ft": float(row["end_distance_ft"]),
                "span_ft": float(row["span_ft"]),
                "center_distance_ft": float(row["center_distance_ft"]),
                "avg_clock_position": (
                    float(row["avg_clock_position"])
                    if pd.notna(row["avg_clock_position"])
                    else None
                ),
                "anomaly_count": int(row["anomaly_count"]),
                "anomaly_ids": member_ids,
                "max_depth_pct": float(row["max_depth_pct"]),
                "avg_depth_pct": float(row["avg_depth_pct"]),
                "total_length_in": float(row["total_length_in"]),
                "avg_width_in": (
                    float(row["avg_width_in"])
                    if pd.notna(row["avg_width_in"])
                    else None
                ),
                "severity_score": float(sev),
                "is_critical": bool(row["is_critical"]),
                "risk_level": risk,
                "created_at": datetime.now(timezone.utc),
            }
            cluster_docs.append(doc)

        if cluster_docs:
            await self.cluster_repo.create_many(cluster_docs)

        n_isolated = int((clustered_df["cluster_id"] == -1).sum())
        n_critical = int(cluster_stats["is_critical"].sum())
        n_warning = int(((cluster_stats["severity_score"] > 50) & ~cluster_stats["is_critical"]).sum())

        return {
            "inspection_id": inspection_id,
            "status": "completed",
            "total_clusters": len(cluster_stats),
            "critical_clusters": n_critical,
            "warning_clusters": n_warning,
            "isolated_anomalies": n_isolated,
        }

    # -- queries ----------------------------------------------------------

    async def get_results(
        self, inspection_id: str, is_critical: bool | None = None
    ) -> list[dict]:
        return await self.cluster_repo.get_by_inspection(inspection_id, is_critical)

    async def get_cluster(self, cluster_id: str) -> dict:
        doc = await self.cluster_repo.get_by_id(cluster_id)
        if not doc:
            raise NotFoundError("Cluster", cluster_id)
        return doc
