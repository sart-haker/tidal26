import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

client: AsyncIOMotorClient = None
db = None


async def connect_db():
    global client, db
    mongo_uri = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
    client = AsyncIOMotorClient(mongo_uri)
    db = client["tidal26"]
    # Create indexes
    await db.analyses.create_index("created_at")
    await db.analyses.create_index("status")


async def close_db():
    global client
    if client:
        client.close()


def get_db():
    return db
