"""Gemini AI service – analyses pipeline output data and answers questions."""

from __future__ import annotations

import json
import logging

import google.generativeai as genai

from app.config import settings

logger = logging.getLogger(__name__)


# ── System prompt ───────────────────────────────────────────────────────────

SYSTEM_PROMPT = """\
You are **TIDAL AI**, an expert pipeline integrity analyst embedded in the TIDAL26 \
Pipeline Integrity Analysis platform.

Your role:
1. Analyse ILI (In-Line Inspection) data from multiple inspection runs (2007, 2015, 2022).
2. Identify critical anomalies, growth trends, and corrosion patterns.
3. Explain findings in clear, actionable language that pipeline engineers can act on.
4. Highlight safety-critical items first (high depth %, fast growth rate, critical clusters).
5. Reference specific data points (distances, depths, growth rates) when making claims.
6. Provide maintenance and re-inspection recommendations based on the data.
7. Keep responses concise but thorough. Use bullet points where helpful.

When producing a full analysis, structure your response as JSON with this schema:
{
  "summary": "Executive summary paragraph",
  "insights": [
    {
      "category": "critical|growth|pattern|recommendation",
      "title": "Short title",
      "detail": "Detailed explanation with data references",
      "severity": "critical|warning|info"
    }
  ],
  "recommendations": ["Actionable recommendation 1", "..."]
}

When answering chat questions, respond in clear, concise markdown.
"""


# ── Service ─────────────────────────────────────────────────────────────────

class GeminiService:
    """Thin wrapper around the Gemini generative-AI SDK."""

    def __init__(self) -> None:
        if not settings.GEMINI_API_KEY:
            raise ValueError("GEMINI_API_KEY is not configured")
        genai.configure(api_key=settings.GEMINI_API_KEY)
        self.model = genai.GenerativeModel(
            model_name="gemini-2.0-flash",
            system_instruction=SYSTEM_PROMPT,
        )

    # ── Full analysis ───────────────────────────────────────────────────

    async def analyze(
        self,
        comparison: str = "all",
        focus: str | None = None,
        data_context: str | None = None,
    ) -> dict:
        """Run a full AI analysis on the pipeline data summary."""
        context = data_context or "[No data provided]"

        focus_instruction = ""
        if focus:
            focus_instruction = f"\nFocus specifically on **{focus}** aspects of the data."

        prompt = (
            f"Analyse the following pipeline ILI data summary and return your findings "
            f"as the JSON schema described in your instructions.{focus_instruction}\n\n"
            f"DATA SUMMARY:\n{context}"
        )

        response = await self._generate(prompt)
        return self._parse_analysis(response, comparison)

    # ── Chat Q&A ────────────────────────────────────────────────────────

    async def chat(
        self,
        message: str,
        comparison: str = "all",
        history: list[dict[str, str]] | None = None,
        data_context: str | None = None,
    ) -> dict:
        """Answer a user question about the pipeline data."""
        context = data_context or "[No data provided]"

        # Build conversation
        parts: list[str] = []
        if history:
            for turn in history[-6:]:  # keep last 6 turns for context window
                role = turn.get("role", "user")
                parts.append(f"{'User' if role == 'user' else 'Assistant'}: {turn['content']}")

        parts.append(
            f"DATA SUMMARY:\n{context}\n\n"
            f"User question: {message}\n\n"
            f"Provide a clear, data-backed answer in concise markdown."
        )

        full_prompt = "\n\n".join(parts)
        reply = await self._generate(full_prompt)

        return {"reply": reply, "sources": []}

    # ── Internal ────────────────────────────────────────────────────────

    async def _generate(self, prompt: str) -> str:
        """Call Gemini and return the text response (non-blocking)."""
        try:
            response = await self.model.generate_content_async(prompt)
            return response.text
        except Exception as e:
            logger.error("Gemini API error: %s", e)
            raise RuntimeError(f"Gemini API call failed: {e}") from e

    @staticmethod
    def _parse_analysis(raw: str, comparison: str) -> dict:
        """Best-effort parse the JSON analysis from the model output."""
        text = raw.strip()
        if text.startswith("```"):
            first_newline = text.index("\n")
            text = text[first_newline + 1:]
        if text.endswith("```"):
            text = text[:-3].rstrip()

        try:
            data = json.loads(text)
            data["comparison"] = comparison
            return data
        except json.JSONDecodeError:
            return {
                "summary": raw,
                "insights": [],
                "recommendations": [],
                "comparison": comparison,
            }
