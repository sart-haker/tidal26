"""Matched anomaly pair data-access layer."""

from app.repositories.base import BaseRepository


class MatchedPairRepository(BaseRepository):

    async def get_by_inspections(
        self, run1_id: str, run2_id: str
    ) -> list[dict]:
        return await self.get_all(
            filter={
                "run1_inspection_id": run1_id,
                "run2_inspection_id": run2_id,
            },
            sort=[("confidence", -1)],
            limit=50000,
        )

    async def get_critical_growth(
        self, run1_id: str, run2_id: str
    ) -> list[dict]:
        return await self.get_all(
            filter={
                "run1_inspection_id": run1_id,
                "run2_inspection_id": run2_id,
                "is_critical_growth": True,
            },
            sort=[("depth_growth_rate", -1)],
            limit=50000,
        )

    async def delete_by_inspections(self, run1_id: str, run2_id: str) -> int:
        return await self.delete_many(
            {
                "run1_inspection_id": run1_id,
                "run2_inspection_id": run2_id,
            }
        )
