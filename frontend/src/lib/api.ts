import type { AnalysisSummary, AnalysisDetail, SchemaInfo } from "./types";

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
