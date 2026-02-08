"""Pipeline data-access layer."""

from app.repositories.base import BaseRepository


class PipelineRepository(BaseRepository):

    async def get_by_name(self, name: str) -> dict | None:
        doc = await self.collection.find_one({"name": name})
        return self._id_to_str(doc) if doc else None
