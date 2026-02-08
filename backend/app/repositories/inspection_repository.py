"""Inspection data-access layer."""

from app.repositories.base import BaseRepository


class InspectionRepository(BaseRepository):

    async def get_by_pipeline(self, pipeline_id: str) -> list[dict]:
        return await self.get_all(
            filter={"pipeline_id": pipeline_id},
            sort=[("year", 1)],
        )

    async def get_by_pipeline_and_year(
        self, pipeline_id: str, year: int
    ) -> dict | None:
        doc = await self.collection.find_one(
            {"pipeline_id": pipeline_id, "year": year}
        )
        return self._id_to_str(doc) if doc else None
