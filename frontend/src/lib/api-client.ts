/**
 * Typed API client for the FastAPI backend.
 * All dynamic (uploaded CSV) data flows through these functions.
 */

import type { RunData } from "./data";
import type { ClusterStats, PredictionResult } from "./types";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// -- Types matching backend schemas ------------------------------------------

export interface InspectionResponse {
  id: string;
  pipeline_id: string;
  year: number;
  tool_type: string;
  total_records: number;
  anomaly_count: number;
  filename: string;
  status: string;
  created_at: string;
}

export interface MatchingSummary {
  pipeline_id: string;
  status: string;
  total_matched: number;
  new_anomalies: number;
  missing_anomalies: number;
  critical_growth_count: number;
}

export interface ClusteringSummary {
  inspection_id: string;
  total_clusters: number;
  critical_clusters: number;
}

export interface PredictionSummary {
  inspection_id: string;
  total_predictions: number;
  high_risk: number;
  medium_risk: number;
  low_risk: number;
}

interface PipelineResponse {
  id: string;
  name: string;
}

// -- Helpers -----------------------------------------------------------------

async function fetchJSON<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: "Request failed" }));
    throw new Error(err.detail || `HTTP ${res.status}`);
  }
  return res.json();
}

// -- API functions -----------------------------------------------------------

export async function checkHealth(): Promise<boolean> {
  try {
    await fetchJSON(`${API_BASE}/health`);
    return true;
  } catch {
    return false;
  }
}

export async function getOrCreateDefaultPipeline(): Promise<PipelineResponse> {
  return fetchJSON<PipelineResponse>(`${API_BASE}/pipelines/default`);
}

export async function uploadInspection(
  year: number,
  file: File
): Promise<InspectionResponse> {
  const formData = new FormData();
  formData.append("year", String(year));
  formData.append("file", file);
  return fetchJSON<InspectionResponse>(
    `${API_BASE}/inspections/upload-simple`,
    { method: "POST", body: formData }
  );
}

export async function listInspections(
  pipelineId: string
): Promise<InspectionResponse[]> {
  const res = await fetchJSON<{ inspections: InspectionResponse[] }>(
    `${API_BASE}/inspections/pipeline/${pipelineId}`
  );
  return res.inspections;
}

export async function runMatching(
  pipelineId: string,
  run1Id: string,
  run2Id: string
): Promise<MatchingSummary> {
  return fetchJSON<MatchingSummary>(`${API_BASE}/matching/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pipeline_id: pipelineId,
      run1_inspection_id: run1Id,
      run2_inspection_id: run2Id,
      parameters: {},
    }),
  });
}

export async function getEnrichedResults(
  run1Id: string,
  run2Id: string
): Promise<RunData & { run1_year: number; run2_year: number }> {
  return fetchJSON(`${API_BASE}/matching/${run1Id}/${run2Id}/enriched`);
}

export async function runClustering(
  inspectionId: string
): Promise<ClusteringSummary> {
  return fetchJSON<ClusteringSummary>(`${API_BASE}/clustering/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inspection_id: inspectionId, parameters: {} }),
  });
}

interface BackendCluster {
  cluster_index: number;
  start_distance_ft: number;
  end_distance_ft: number;
  span_ft: number;
  center_distance_ft: number;
  avg_clock_position: number | null;
  anomaly_count: number;
  max_depth_pct: number;
  avg_depth_pct: number;
  total_length_in: number;
  avg_width_in: number | null;
  severity_score: number;
  is_critical: boolean;
}

export async function getClusterResults(
  inspectionId: string
): Promise<ClusterStats[]> {
  const res = await fetchJSON<{ clusters: BackendCluster[] }>(
    `${API_BASE}/clustering/${inspectionId}/results`
  );
  return (res.clusters ?? []).map((c) => ({
    cluster_id: c.cluster_index,
    start_distance_ft: c.start_distance_ft,
    end_distance_ft: c.end_distance_ft,
    span_ft: c.span_ft,
    center_distance_ft: c.center_distance_ft,
    avg_clock_position: c.avg_clock_position ?? 0,
    anomaly_count: c.anomaly_count,
    max_depth_pct: c.max_depth_pct,
    avg_depth_pct: c.avg_depth_pct,
    total_length_in: c.total_length_in,
    avg_width_in: c.avg_width_in ?? 0,
    severity_score: c.severity_score,
    is_critical: c.is_critical,
  }));
}

// -- Predictions -------------------------------------------------------------

export async function runPredictions(
  inspectionId: string
): Promise<PredictionSummary> {
  return fetchJSON<PredictionSummary>(`${API_BASE}/predictions/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inspection_id: inspectionId }),
  });
}

export async function getPredictionResults(
  inspectionId: string
): Promise<PredictionResult[]> {
  const res = await fetchJSON<{ predictions: PredictionResult[] }>(
    `${API_BASE}/predictions/${inspectionId}/results`
  );
  return res.predictions ?? [];
}
