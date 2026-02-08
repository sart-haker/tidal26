"""MongoDB async connection using Motor."""

import certifi
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.config import settings


class Database:
    client: AsyncIOMotorClient | None = None


db = Database()


async def connect_to_mongo() -> None:
    db.client = AsyncIOMotorClient(
        settings.MONGODB_URI,
        tlsCAFile=certifi.where(),
        serverSelectionTimeoutMS=10000,
    )
    # Ping to verify connection
    try:
        await db.client.admin.command("ping")
        print(f"Connected to MongoDB: {settings.MONGODB_DATABASE}")
    except Exception as e:
        print(f"WARNING: MongoDB ping failed ({e}). Server will start but DB calls may fail.")


async def close_mongo_connection() -> None:
    if db.client:
        db.client.close()
        print("Closed MongoDB connection")


def get_database() -> AsyncIOMotorDatabase:
    return db.client[settings.MONGODB_DATABASE]
