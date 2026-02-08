"""TTS routes: text-to-speech via ElevenLabs."""

from fastapi import APIRouter, HTTPException
from fastapi.responses import Response
from pydantic import BaseModel, Field

from app.services.tts_service import TTSService

router = APIRouter(prefix="/api/tts", tags=["tts"])


class TTSRequest(BaseModel):
    text: str = Field(..., min_length=1, max_length=5000)
    voice_id: str | None = None


# Lazy singleton (same pattern as GeminiService in ai.py)
_tts: TTSService | None = None


def _get_tts() -> TTSService:
    global _tts
    if _tts is None:
        try:
            _tts = TTSService()
        except ValueError as e:
            raise HTTPException(status_code=503, detail=str(e))
    return _tts


@router.post("/synthesize")
async def synthesize_speech(body: TTSRequest):
    """Convert text to speech. Returns audio/mpeg binary data."""
    svc = _get_tts()
    try:
        audio_bytes = await svc.synthesize(text=body.text, voice_id=body.voice_id)
        return Response(
            content=audio_bytes,
            media_type="audio/mpeg",
            headers={"Content-Disposition": "inline", "Cache-Control": "no-cache"},
        )
    except RuntimeError as e:
        raise HTTPException(status_code=502, detail=str(e))


@router.get("/status")
async def tts_status():
    """Health check for the TTS service."""
    try:
        _get_tts()
        return {"status": "ok", "provider": "elevenlabs"}
    except HTTPException:
        return {"status": "unavailable", "detail": "ELEVENLABS_API_KEY not configured"}
