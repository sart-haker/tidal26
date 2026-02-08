import type { MatchedAnomaly, WeldAlignment, ClusterStats, PredictionResult } from "../types";
import { CHART_COLORS } from "../constants";
import type { RunData } from "./index";

export function computeSummaryStats(data: RunData) {
  const { matched, newAnomalies, missing, welds } = data;
  const critical = matched.filter((a) => a.is_critical).length;
  const avgConfidence =
    matched.length > 0
      ? matched.reduce((s, a) => s + a.confidence, 0) / matched.length
      : 0;
  return {
    matchedCount: matched.length,
    newCount: newAnomalies.length,
    missingCount: missing.length,
    criticalCount: critical,
    weldCount: welds.length,
    avgConfidence,
  };
}

export function getMatchDistribution(data: RunData) {
  return [
    { name: "Matched", value: data.matched.length, color: "#10B981" },
    { name: "New", value: data.newAnomalies.length, color: "#3B82F6" },
    { name: "Missing", value: data.missing.length, color: "#8B5CF6" },
  ];
}

export function groupByEventType(matched: MatchedAnomaly[]) {
  const counts: Record<string, number> = {};
  matched.forEach((a) => {
    counts[a.event_type] = (counts[a.event_type] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);
}

export function getGrowthRateDistribution(matched: MatchedAnomaly[]): number[] {
  return matched
    .map((a) => a.depth_growth_rate)
    .filter((v): v is number => v !== null);
}

export function getConfidenceDistribution(matched: MatchedAnomaly[]): number[] {
  return matched.map((a) => a.confidence);
}

export function getDepthScatterData(matched: MatchedAnomaly[]) {
  return matched
    .filter((a) => a.depth_run1 !== null && a.depth_run2 !== null)
    .map((a) => ({
      depth_run1: a.depth_run1 as number,
      depth_run2: a.depth_run2 as number,
      event_type: a.event_type,
    }));
}

export function getWeldOffsetProgression(welds: WeldAlignment[]) {
  const sorted = [...welds].sort((a, b) => a.run1_distance - b.run1_distance);
  // Sample every Nth weld to keep chart readable
  const step = Math.max(1, Math.floor(sorted.length / 50));
  return sorted
    .filter((_, i) => i % step === 0)
    .map((w) => ({
      distance: Math.round(w.run1_distance),
      offset: Math.round(w.offset * 100) / 100,
    }));
}

export function getClusterSeverityData(clusters: ClusterStats[]) {
  return clusters
    .sort((a, b) => b.severity_score - a.severity_score)
    .slice(0, 20)
    .map((c) => ({
      cluster: `#${c.cluster_id}`,
      severity_score: Math.round(c.severity_score * 10) / 10,
      anomaly_count: c.anomaly_count,
      is_critical: c.is_critical,
    }));
}

export function getRiskByDistance(predictions: PredictionResult[]) {
  const sorted = [...predictions]
    .filter((p) => p.prediction_distance > 0)
    .sort((a, b) => a.prediction_distance - b.prediction_distance);

  // Bin into ~100 groups
  if (sorted.length === 0) return [];
  const binSize = Math.max(
    100,
    Math.ceil((sorted[sorted.length - 1].prediction_distance - sorted[0].prediction_distance) / 100)
  );

  const bins: Record<number, { sum: number; count: number; max: number }> = {};
  sorted.forEach((p) => {
    const bin = Math.floor(p.prediction_distance / binSize) * binSize;
    if (!bins[bin]) bins[bin] = { sum: 0, count: 0, max: 0 };
    bins[bin].sum += p.corrosion_probability;
    bins[bin].count += 1;
    bins[bin].max = Math.max(bins[bin].max, p.corrosion_probability);
  });

  return Object.entries(bins)
    .map(([dist, { sum, count, max }]) => ({
      distance: Number(dist),
      avg_probability: Math.round((sum / count) * 1000) / 1000,
      max_probability: Math.round(max * 1000) / 1000,
    }))
    .sort((a, b) => a.distance - b.distance);
}

export function getPredictionSummary(predictions: PredictionResult[]) {
  const highRisk = predictions.filter((p) => p.corrosion_probability > 0.7).length;
  const medRisk = predictions.filter(
    (p) => p.corrosion_probability > 0.5 && p.corrosion_probability <= 0.7
  ).length;
  const avg =
    predictions.length > 0
      ? predictions.reduce((s, p) => s + p.corrosion_probability, 0) / predictions.length
      : 0;
  return { highRisk, medRisk, avgProbability: Math.round(avg * 1000) / 1000, total: predictions.length };
}
