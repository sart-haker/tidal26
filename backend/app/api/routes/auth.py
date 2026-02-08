"""Auth routes: register, login, me."""

from fastapi import APIRouter, Depends
from app.api.deps import get_user_repo, get_current_user
from app.repositories.user_repository import UserRepository
from app.schemas.auth import RegisterRequest, LoginRequest, TokenResponse, UserResponse
from app.core.security import hash_password, verify_password, create_access_token
from app.core.exceptions import BadRequestError, UnauthorizedError

router = APIRouter(prefix="/api/auth", tags=["auth"])


@router.post("/register", response_model=TokenResponse)
async def register(body: RegisterRequest, user_repo: UserRepository = Depends(get_user_repo)):
    existing = await user_repo.get_by_email(body.email)
    if existing:
        raise BadRequestError("Email already registered")

    doc = {
        "email": body.email,
        "hashed_password": hash_password(body.password),
        "full_name": body.full_name,
        "role": "analyst",
        "is_active": True,
    }
    user = await user_repo.create(doc)
    token = create_access_token(user["id"])
    return TokenResponse(access_token=token)


@router.post("/login", response_model=TokenResponse)
async def login(body: LoginRequest, user_repo: UserRepository = Depends(get_user_repo)):
    user = await user_repo.get_by_email(body.email)
    if not user or not verify_password(body.password, user["hashed_password"]):
        raise UnauthorizedError("Invalid email or password")

    token = create_access_token(user["id"])
    return TokenResponse(access_token=token)


@router.get("/me", response_model=UserResponse)
async def me(current_user: dict = Depends(get_current_user)):
    return UserResponse(
        id=current_user["id"],
        email=current_user["email"],
        full_name=current_user.get("full_name", ""),
        role=current_user.get("role", "viewer"),
    )
