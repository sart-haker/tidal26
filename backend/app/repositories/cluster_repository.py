"""Cluster (interaction zone) data-access layer."""

from app.repositories.base import BaseRepository


class ClusterRepository(BaseRepository):

    async def get_by_inspection(
        self, inspection_id: str, is_critical: bool | None = None
    ) -> list[dict]:
        filter: dict = {"inspection_id": inspection_id}
        if is_critical is not None:
            filter["is_critical"] = is_critical
        return await self.get_all(
            filter=filter,
            sort=[("severity_score", -1)],
            limit=50000,
        )

    async def delete_by_inspection(self, inspection_id: str) -> int:
        return await self.delete_many({"inspection_id": inspection_id})
