import type { AnalysisSummary, AnalysisDetail, SchemaInfo, AiAnalysis, AiChatMessage } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function uploadAndAnalyze(formData: FormData): Promise<AnalysisSummary> {
  const res = await fetch(`${API_BASE}/analyze`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Analysis failed");
  }
  return res.json();
}

export async function listAnalyses(): Promise<AnalysisSummary[]> {
  const res = await fetch(`${API_BASE}/analyses`);
  if (!res.ok) throw new Error("Failed to fetch analyses");
  return res.json();
}

export async function getAnalysis(id: string): Promise<AnalysisDetail> {
  const res = await fetch(`${API_BASE}/analyses/${id}`);
  if (!res.ok) throw new Error("Failed to fetch analysis");
  return res.json();
}

export async function deleteAnalysis(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/analyses/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete analysis");
}

export async function getSchema(): Promise<SchemaInfo> {
  const res = await fetch(`${API_BASE}/schema`);
  if (!res.ok) throw new Error("Failed to fetch schema");
  return res.json();
}

// ── AI / Gemini ──────────────────────────────────────────────────────────

export async function runAiAnalysis(
  comparison: string = "all",
  focus?: string,
  dataContext?: string,
): Promise<AiAnalysis> {
  const res = await fetch(`${API_BASE}/ai/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      comparison,
      focus: focus || null,
      data_context: dataContext || null,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: "AI analysis failed" }));
    throw new Error(err.detail || "AI analysis failed");
  }
  return res.json();
}

export async function sendAiChat(
  message: string,
  comparison: string = "all",
  history: AiChatMessage[] = [],
  dataContext?: string,
): Promise<{ reply: string; sources: string[] }> {
  const res = await fetch(`${API_BASE}/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      comparison,
      history: history.map((m) => ({ role: m.role, content: m.content })),
      data_context: dataContext || null,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: "AI chat failed" }));
    throw new Error(err.detail || "AI chat failed");
  }
  return res.json();
}

export async function getAiStatus(): Promise<{ status: string; model?: string }> {
  const res = await fetch(`${API_BASE}/ai/status`);
  if (!res.ok) throw new Error("Failed to check AI status");
  return res.json();
}
