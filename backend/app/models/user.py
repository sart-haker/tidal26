"""User MongoDB document model."""

from datetime import datetime, timezone
from pydantic import BaseModel, Field


class UserDocument(BaseModel):
    email: str
    hashed_password: str
    full_name: str = ""
    role: str = "viewer"  # viewer | analyst | admin
    is_active: bool = True
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
