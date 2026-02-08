"""Schemas for Gemini AI endpoints."""

from pydantic import BaseModel, Field


# ── Requests ────────────────────────────────────────────────────────────────

class AnalyzeRequest(BaseModel):
    """Request body for full AI pipeline analysis."""
    comparison: str = Field(
        default="all",
        description=(
            "Which comparison pair to analyze. "
            "Options: '2007_vs_2015', '2007_vs_2022', '2015_vs_2022', or 'all'."
        ),
    )
    focus: str | None = Field(
        default=None,
        description=(
            "Optional focus area: 'anomalies', 'growth', 'clusters', 'predictions', or None for everything."
        ),
    )
    data_context: str | None = Field(
        default=None,
        description="Pre-built data summary from the frontend. When provided, the backend skips CSV loading.",
    )


class ChatRequest(BaseModel):
    """Request body for AI chat (question-answer about the data)."""
    message: str = Field(
        ..., min_length=1, max_length=2000,
        description="User question about the pipeline data.",
    )
    comparison: str = Field(
        default="all",
        description="Which comparison pair context to include.",
    )
    history: list[dict[str, str]] = Field(
        default_factory=list,
        description="Previous conversation turns: [{'role': 'user'|'assistant', 'content': '...'}]",
    )
    data_context: str | None = Field(
        default=None,
        description="Pre-built data summary from the frontend. When provided, the backend skips CSV loading.",
    )


# ── Responses ───────────────────────────────────────────────────────────────

class InsightItem(BaseModel):
    """A single insight produced by the AI."""
    category: str = Field(description="e.g. 'critical', 'growth', 'pattern', 'recommendation'")
    title: str
    detail: str
    severity: str = Field(default="info", description="'critical', 'warning', 'info'")


class AnalyzeResponse(BaseModel):
    """Full AI analysis response."""
    summary: str = Field(description="Executive summary paragraph.")
    insights: list[InsightItem] = Field(default_factory=list)
    recommendations: list[str] = Field(default_factory=list)
    comparison: str


class ChatResponse(BaseModel):
    """AI chat response."""
    reply: str
    sources: list[str] = Field(
        default_factory=list,
        description="Which data files / sections the answer drew from.",
    )
