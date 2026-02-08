"""AI / Gemini routes: full analysis and chat Q&A."""

from fastapi import APIRouter, HTTPException
from app.services.gemini_service import GeminiService
from app.schemas.gemini import (
    AnalyzeRequest,
    AnalyzeResponse,
    ChatRequest,
    ChatResponse,
)

router = APIRouter(prefix="/api/ai", tags=["ai"])

# Lazy-initialised singleton so we don't fail at import time if the key is missing
_gemini: GeminiService | None = None


def _get_gemini() -> GeminiService:
    global _gemini
    if _gemini is None:
        try:
            _gemini = GeminiService()
        except ValueError as e:
            raise HTTPException(status_code=503, detail=str(e))
    return _gemini


@router.post("/analyze", response_model=AnalyzeResponse)
async def analyze_pipeline(body: AnalyzeRequest):
    """Run a full AI-powered analysis on pipeline output data.

    Returns an executive summary, categorised insights, and actionable
    recommendations drawn from matched anomalies, growth rates, clusters,
    and ML model predictions.
    """
    svc = _get_gemini()
    try:
        result = await svc.analyze(
            comparison=body.comparison,
            focus=body.focus,
            data_context=body.data_context,
        )
        return AnalyzeResponse(**result)
    except RuntimeError as e:
        raise HTTPException(status_code=502, detail=str(e))


@router.post("/chat", response_model=ChatResponse)
async def chat_with_data(body: ChatRequest):
    """Ask the AI a question about the pipeline data.

    Supports conversational context via the `history` field so follow-up
    questions can reference prior answers.
    """
    svc = _get_gemini()
    try:
        result = await svc.chat(
            message=body.message,
            comparison=body.comparison,
            history=body.history,
            data_context=body.data_context,
        )
        return ChatResponse(**result)
    except RuntimeError as e:
        raise HTTPException(status_code=502, detail=str(e))


@router.get("/status")
async def ai_status():
    """Health check for the AI service – confirms the Gemini key is set."""
    try:
        _get_gemini()
        return {"status": "ok", "model": "gemini-2.0-flash"}
    except HTTPException:
        return {"status": "unavailable", "detail": "GEMINI_API_KEY not configured"}
