"""FastAPI application entry point."""

from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pymongo.errors import PyMongoError

from app.config import settings
from app.database import connect_to_mongo, close_mongo_connection

# Route modules
from app.api.routes import auth, pipelines, inspections, anomalies, clustering, matching, ai, predictions, tts


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup / shutdown events."""
    await connect_to_mongo()
    yield
    await close_mongo_connection()


app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# CORS – allow the Next.js frontend and any other configured origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Global error handler for database failures
@app.exception_handler(PyMongoError)
async def pymongo_error_handler(request: Request, exc: PyMongoError):
    return JSONResponse(
        status_code=503,
        content={"detail": f"Database error: {exc}"},
    )


# Register routers
app.include_router(auth.router)
app.include_router(pipelines.router)
app.include_router(inspections.router)
app.include_router(anomalies.router)
app.include_router(clustering.router)
app.include_router(matching.router)
app.include_router(ai.router)
app.include_router(predictions.router)
app.include_router(tts.router)


@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": settings.APP_NAME}
