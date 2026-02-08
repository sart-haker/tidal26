"""ElevenLabs TTS service — converts text to speech audio."""

from __future__ import annotations

import logging

import httpx

from app.config import settings

logger = logging.getLogger(__name__)

ELEVENLABS_BASE_URL = "https://api.elevenlabs.io/v1"


class TTSService:
    """Thin wrapper around the ElevenLabs REST API for text-to-speech."""

    def __init__(self) -> None:
        if not settings.ELEVENLABS_API_KEY:
            raise ValueError("ELEVENLABS_API_KEY is not configured")
        self.api_key = settings.ELEVENLABS_API_KEY
        self.default_voice_id = settings.ELEVENLABS_VOICE_ID
        self._client = httpx.AsyncClient(timeout=30.0)

    async def synthesize(self, text: str, voice_id: str | None = None) -> bytes:
        """Convert text to speech audio (mp3 bytes)."""
        vid = voice_id or self.default_voice_id
        url = f"{ELEVENLABS_BASE_URL}/text-to-speech/{vid}"

        headers = {
            "xi-api-key": self.api_key,
            "Content-Type": "application/json",
            "Accept": "audio/mpeg",
        }

        payload = {
            "text": text,
            "model_id": "eleven_multilingual_v2",
            "voice_settings": {
                "stability": 0.6,
                "similarity_boost": 0.75,
            },
        }

        try:
            response = await self._client.post(url, json=payload, headers=headers)
            response.raise_for_status()
            return response.content
        except httpx.HTTPStatusError as e:
            logger.error("ElevenLabs API error %s: %s", e.response.status_code, e.response.text)
            raise RuntimeError(f"ElevenLabs API error: {e.response.status_code}") from e
        except httpx.RequestError as e:
            logger.error("ElevenLabs request error: %s", e)
            raise RuntimeError(f"ElevenLabs request failed: {e}") from e

    async def close(self) -> None:
        """Close the underlying HTTP client."""
        await self._client.aclose()
