"""User data-access layer."""

from app.repositories.base import BaseRepository


class UserRepository(BaseRepository):

    async def get_by_email(self, email: str) -> dict | None:
        doc = await self.collection.find_one({"email": email})
        return self._id_to_str(doc) if doc else None
