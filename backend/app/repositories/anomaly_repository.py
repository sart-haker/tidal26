"""Anomaly data-access layer."""

from app.repositories.base import BaseRepository


class AnomalyRepository(BaseRepository):

    async def get_by_inspection(
        self, inspection_id: str, skip: int = 0, limit: int = 10000
    ) -> list[dict]:
        return await self.get_all(
            filter={"inspection_id": inspection_id},
            skip=skip,
            limit=limit,
            sort=[("distance_ft", 1)],
        )

    async def get_anomalies_only(self, inspection_id: str) -> list[dict]:
        """Return only rows where is_anomaly is True (excludes welds, etc.)."""
        return await self.get_all(
            filter={"inspection_id": inspection_id, "is_anomaly": True},
            limit=50000,
            sort=[("distance_ft", 1)],
        )

    async def get_by_distance_range(
        self, inspection_id: str, min_ft: float, max_ft: float
    ) -> list[dict]:
        return await self.get_all(
            filter={
                "inspection_id": inspection_id,
                "distance_ft": {"$gte": min_ft, "$lte": max_ft},
            },
            limit=50000,
        )

    async def get_critical(
        self, inspection_id: str, min_depth_pct: float = 40.0
    ) -> list[dict]:
        return await self.get_all(
            filter={
                "inspection_id": inspection_id,
                "is_anomaly": True,
                "depth_pct": {"$gte": min_depth_pct},
            },
            sort=[("depth_pct", -1)],
            limit=50000,
        )

    async def get_stats(self, inspection_id: str) -> dict:
        """Return aggregate stats for an inspection."""
        pipeline = [
            {"$match": {"inspection_id": inspection_id, "is_anomaly": True}},
            {
                "$group": {
                    "_id": None,
                    "total": {"$sum": 1},
                    "avg_depth_pct": {"$avg": "$depth_pct"},
                    "max_depth_pct": {"$max": "$depth_pct"},
                }
            },
        ]
        results = await self.collection.aggregate(pipeline).to_list(1)
        if results:
            return results[0]
        return {"total": 0, "avg_depth_pct": None, "max_depth_pct": None}

    async def delete_by_inspection(self, inspection_id: str) -> int:
        return await self.delete_many({"inspection_id": inspection_id})
