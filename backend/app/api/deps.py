"""FastAPI dependency injection providers."""

from fastapi import Depends, Header
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.database import get_database
from app.core.security import decode_access_token
from app.core.exceptions import UnauthorizedError

# Repositories
from app.repositories.pipeline_repository import PipelineRepository
from app.repositories.inspection_repository import InspectionRepository
from app.repositories.anomaly_repository import AnomalyRepository
from app.repositories.cluster_repository import ClusterRepository
from app.repositories.matched_pair_repository import MatchedPairRepository
from app.repositories.user_repository import UserRepository

# Services
from app.services.inspection_service import InspectionService
from app.services.clustering_service import ClusteringService
from app.services.matching_service import MatchingService
from app.services.analytics_service import AnalyticsService


# -- database -------------------------------------------------------------

def get_db() -> AsyncIOMotorDatabase:
    return get_database()


# -- repositories ---------------------------------------------------------

def get_pipeline_repo(db=Depends(get_db)) -> PipelineRepository:
    return PipelineRepository(db.pipelines)


def get_inspection_repo(db=Depends(get_db)) -> InspectionRepository:
    return InspectionRepository(db.inspections)


def get_anomaly_repo(db=Depends(get_db)) -> AnomalyRepository:
    return AnomalyRepository(db.anomalies)


def get_cluster_repo(db=Depends(get_db)) -> ClusterRepository:
    return ClusterRepository(db.clusters)


def get_matched_pair_repo(db=Depends(get_db)) -> MatchedPairRepository:
    return MatchedPairRepository(db.matched_pairs)


def get_user_repo(db=Depends(get_db)) -> UserRepository:
    return UserRepository(db.users)


# -- services -------------------------------------------------------------

def get_inspection_service(
    inspection_repo=Depends(get_inspection_repo),
    anomaly_repo=Depends(get_anomaly_repo),
) -> InspectionService:
    return InspectionService(inspection_repo, anomaly_repo)


def get_clustering_service(
    anomaly_repo=Depends(get_anomaly_repo),
    cluster_repo=Depends(get_cluster_repo),
) -> ClusteringService:
    return ClusteringService(anomaly_repo, cluster_repo)


def get_matching_service(
    anomaly_repo=Depends(get_anomaly_repo),
    inspection_repo=Depends(get_inspection_repo),
    matched_pair_repo=Depends(get_matched_pair_repo),
) -> MatchingService:
    return MatchingService(anomaly_repo, inspection_repo, matched_pair_repo)


def get_analytics_service(
    anomaly_repo=Depends(get_anomaly_repo),
    cluster_repo=Depends(get_cluster_repo),
    inspection_repo=Depends(get_inspection_repo),
    matched_pair_repo=Depends(get_matched_pair_repo),
) -> AnalyticsService:
    return AnalyticsService(anomaly_repo, cluster_repo, inspection_repo, matched_pair_repo)


# -- auth -----------------------------------------------------------------

async def get_current_user(
    authorization: str = Header(default=None),
    user_repo: UserRepository = Depends(get_user_repo),
) -> dict:
    if not authorization or not authorization.startswith("Bearer "):
        raise UnauthorizedError("Missing or invalid Authorization header")

    token = authorization.split(" ", 1)[1]
    user_id = decode_access_token(token)
    if not user_id:
        raise UnauthorizedError("Invalid or expired token")

    user = await user_repo.get_by_id(user_id)
    if not user or not user.get("is_active", False):
        raise UnauthorizedError("User not found or inactive")

    return user


async def get_current_user_optional(
    authorization: str = Header(default=None),
    user_repo: UserRepository = Depends(get_user_repo),
) -> dict | None:
    """Same as get_current_user but returns None instead of raising."""
    if not authorization or not authorization.startswith("Bearer "):
        return None
    try:
        return await get_current_user(authorization, user_repo)
    except Exception:
        return None
