"""ML prediction routes."""

from fastapi import APIRouter, Depends
from pydantic import BaseModel

from app.api.deps import get_prediction_service
from app.services.prediction_service import PredictionService

router = APIRouter(prefix="/api/predictions", tags=["predictions"])


class RunPredictionRequest(BaseModel):
    inspection_id: str
    model_name: str = "corrosion_predictor_rf"


class PredictionSummary(BaseModel):
    inspection_id: str
    total_predictions: int
    high_risk: int
    medium_risk: int
    low_risk: int


class PredictionResult(BaseModel):
    prediction_distance: float | None = None
    corrosion_probability: float | None = None
    predicted_corrosion: int | None = None
    wall_thickness: float | None = None
    elevation: float | None = None
    clock_position: str | None = None
    event_type_normalized: str | None = None
    anomaly_density_50ft: float | None = None
    dist_to_bend: float | None = None
    dist_to_girth_weld: float | None = None


class PredictionResultsResponse(BaseModel):
    predictions: list[PredictionResult]


@router.post("/run", response_model=PredictionSummary, status_code=201)
async def run_predictions(
    body: RunPredictionRequest,
    svc: PredictionService = Depends(get_prediction_service),
):
    result = await svc.run_predictions(
        inspection_id=body.inspection_id,
        model_name=body.model_name,
    )
    return PredictionSummary(**result)


@router.get("/{inspection_id}/results", response_model=PredictionResultsResponse)
async def get_prediction_results(
    inspection_id: str,
    svc: PredictionService = Depends(get_prediction_service),
):
    results = await svc.get_results(inspection_id)
    return PredictionResultsResponse(predictions=results)
