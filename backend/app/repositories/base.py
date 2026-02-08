"""Generic base repository for MongoDB CRUD operations."""

from motor.motor_asyncio import AsyncIOMotorCollection
from bson import ObjectId


class BaseRepository:
    def __init__(self, collection: AsyncIOMotorCollection):
        self.collection = collection

    # -- helpers ----------------------------------------------------------

    @staticmethod
    def _id_to_str(doc: dict) -> dict:
        """Convert ObjectId ``_id`` to string ``id`` field."""
        if doc and "_id" in doc:
            doc["id"] = str(doc["_id"])
            del doc["_id"]
        return doc

    @staticmethod
    def _to_object_id(id: str) -> ObjectId:
        if not ObjectId.is_valid(id):
            raise ValueError(f"Invalid ObjectId: {id}")
        return ObjectId(id)

    # -- CRUD -------------------------------------------------------------

    async def create(self, document: dict) -> dict:
        result = await self.collection.insert_one(document)
        document["_id"] = result.inserted_id
        return self._id_to_str(document)

    async def create_many(self, documents: list[dict]) -> list[str]:
        if not documents:
            return []
        result = await self.collection.insert_many(documents)
        return [str(id) for id in result.inserted_ids]

    async def get_by_id(self, id: str) -> dict | None:
        doc = await self.collection.find_one({"_id": self._to_object_id(id)})
        return self._id_to_str(doc) if doc else None

    async def get_all(
        self,
        filter: dict | None = None,
        skip: int = 0,
        limit: int = 100,
        sort: list[tuple[str, int]] | None = None,
    ) -> list[dict]:
        cursor = self.collection.find(filter or {}).skip(skip).limit(limit)
        if sort:
            cursor = cursor.sort(sort)
        return [self._id_to_str(doc) async for doc in cursor]

    async def update(self, id: str, update_data: dict) -> dict | None:
        result = await self.collection.find_one_and_update(
            {"_id": self._to_object_id(id)},
            {"$set": update_data},
            return_document=True,
        )
        return self._id_to_str(result) if result else None

    async def delete(self, id: str) -> bool:
        result = await self.collection.delete_one({"_id": self._to_object_id(id)})
        return result.deleted_count > 0

    async def count(self, filter: dict | None = None) -> int:
        return await self.collection.count_documents(filter or {})

    async def delete_many(self, filter: dict) -> int:
        result = await self.collection.delete_many(filter)
        return result.deleted_count
