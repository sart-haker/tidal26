import { GROWTH_THRESHOLDS, CONFIDENCE_THRESHOLDS } from "./constants";

export function formatClockPosition(decimal: number | null): string {
  if (decimal === null || decimal === undefined) return "—";
  const hours = Math.floor(decimal);
  const minutes = Math.round((decimal - hours) * 60);
  return `${hours}:${minutes.toString().padStart(2, "0")}`;
}

export function formatGrowthRate(rate: number | null): string {
  if (rate === null || rate === undefined) return "—";
  const sign = rate >= 0 ? "+" : "";
  return `${sign}${rate.toFixed(2)} %/yr`;
}

export function formatConfidence(score: number): string {
  return `${(score * 100).toFixed(0)}%`;
}

export function formatDistance(ft: number): string {
  return `${ft.toFixed(1)} ft`;
}

export function getGrowthSeverity(
  rate: number | null
): "critical" | "warning" | "normal" {
  if (rate === null) return "normal";
  const abs = Math.abs(rate);
  if (abs >= GROWTH_THRESHOLDS.critical) return "critical";
  if (abs >= GROWTH_THRESHOLDS.warning) return "warning";
  return "normal";
}

export function getConfidenceLevel(
  score: number
): "high" | "medium" | "low" {
  if (score >= CONFIDENCE_THRESHOLDS.high) return "high";
  if (score >= CONFIDENCE_THRESHOLDS.medium) return "medium";
  return "low";
}
