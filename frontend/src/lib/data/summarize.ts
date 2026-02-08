/**
 * Builds a compact text summary of the pipeline data for sending to the AI.
 * Uses the in-memory data the frontend already has, so there's no backend CSV
 * loading and the context stays small enough for fast Gemini responses.
 */

import { getRunData, getClusterData, getPredictions, type RunData } from "./index";
import { computeSummaryStats } from "./aggregations";
import type { MatchedAnomaly, ClusterStats, PredictionResult } from "../types";
import { RUN_PAIRS } from "../constants";

// ── Helpers ──────────────────────────────────────────────────────────

function summarizeMatched(matched: MatchedAnomaly[]): string {
  if (matched.length === 0) return "No matched anomalies.";

  const critical = matched.filter((a) => a.is_critical);
  const depths = matched.map((a) => a.depth_run2).filter((v): v is number => v !== null);
  const growthRates = matched
    .map((a) => a.depth_growth_rate)
    .filter((v): v is number => v !== null);
  const fastGrowing = growthRates.filter((r) => Math.abs(r) > 1.0);

  const typeCounts: Record<string, number> = {};
  matched.forEach((a) => {
    typeCounts[a.event_type] = (typeCounts[a.event_type] || 0) + 1;
  });

  const avgConf = matched.reduce((s, a) => s + a.confidence, 0) / matched.length;
  const avgDepth = depths.length > 0 ? depths.reduce((s, d) => s + d, 0) / depths.length : 0;
  const maxDepth = depths.length > 0 ? Math.max(...depths) : 0;
  const avgGrowth =
    growthRates.length > 0 ? growthRates.reduce((s, r) => s + r, 0) / growthRates.length : 0;

  const lines = [
    `Total matched: ${matched.length}, Critical: ${critical.length}`,
    `Types: ${Object.entries(typeCounts).map(([t, c]) => `${t}(${c})`).join(", ")}`,
    `Avg confidence: ${avgConf.toFixed(3)}, Avg depth: ${avgDepth.toFixed(1)}%, Max depth: ${maxDepth}%`,
    `Avg growth rate: ${avgGrowth.toFixed(3)} %/yr, Fast-growing (|rate|>1): ${fastGrowing.length}`,
  ];

  // Top 5 worst by depth
  if (critical.length > 0) {
    const worst = [...critical]
      .sort((a, b) => (b.depth_run2 ?? 0) - (a.depth_run2 ?? 0))
      .slice(0, 5);
    lines.push(
      "Top critical anomalies (by depth):",
      ...worst.map(
        (a) =>
          `  dist=${a.run1_distance}ft, depth=${a.depth_run2}%, growth=${a.depth_growth_rate} %/yr, type=${a.event_type}`
      )
    );
  }

  return lines.join("\n");
}

function summarizeClusters(clusters: ClusterStats[], year: number): string {
  if (clusters.length === 0) return `No clusters for ${year}.`;

  const critical = clusters.filter((c) => c.is_critical);
  const avgSev = clusters.reduce((s, c) => s + c.severity_score, 0) / clusters.length;
  const totalAnomalies = clusters.reduce((s, c) => s + c.anomaly_count, 0);

  const lines = [
    `${year}: ${clusters.length} clusters, ${critical.length} critical, ${totalAnomalies} anomalies total`,
    `Avg severity: ${avgSev.toFixed(1)}, Max depth: ${Math.max(...clusters.map((c) => c.max_depth_pct))}%`,
  ];

  if (critical.length > 0) {
    const worst = [...critical].sort((a, b) => b.severity_score - a.severity_score).slice(0, 3);
    lines.push(
      "Worst critical clusters:",
      ...worst.map(
        (c) =>
          `  #${c.cluster_id}: severity=${c.severity_score.toFixed(1)}, ${c.anomaly_count} anomalies, span=${c.span_ft.toFixed(1)}ft, max_depth=${c.max_depth_pct}%`
      )
    );
  }

  return lines.join("\n");
}

function summarizePredictions(preds: PredictionResult[]): string {
  if (preds.length === 0) return "No ML predictions available.";

  const highRisk = preds.filter((p) => p.corrosion_probability > 0.7);
  const medRisk = preds.filter((p) => p.corrosion_probability > 0.5 && p.corrosion_probability <= 0.7);
  const avg = preds.reduce((s, p) => s + p.corrosion_probability, 0) / preds.length;

  const lines = [
    `Total predictions: ${preds.length}`,
    `High risk (>70%): ${highRisk.length}, Medium risk (50-70%): ${medRisk.length}`,
    `Avg probability: ${(avg * 100).toFixed(1)}%`,
  ];

  if (highRisk.length > 0) {
    const worst = [...highRisk]
      .sort((a, b) => b.corrosion_probability - a.corrosion_probability)
      .slice(0, 5);
    lines.push(
      "Highest risk locations:",
      ...worst.map(
        (p) =>
          `  dist=${p.prediction_distance}ft, prob=${(p.corrosion_probability * 100).toFixed(1)}%, wall=${p.wall_thickness}in, type=${p.event_type_normalized}`
      )
    );
  }

  return lines.join("\n");
}

// ── Main export ──────────────────────────────────────────────────────

export function buildDataSummary(comparison: string = "all"): string {
  const sections: string[] = [];

  // Run comparisons
  const pairs =
    comparison === "all"
      ? RUN_PAIRS
      : RUN_PAIRS.filter(
          (p) => `${p.run1}_vs_${p.run2}` === comparison
        );

  for (const pair of pairs) {
    const data = getRunData(pair.run1, pair.run2);
    const stats = computeSummaryStats(data);

    sections.push(
      `## ${pair.run1} vs ${pair.run2} (${pair.years} years)`,
      `Matched: ${stats.matchedCount}, New: ${stats.newCount}, Missing: ${stats.missingCount}, Welds: ${stats.weldCount}`,
      "",
      "### Matched Anomalies",
      summarizeMatched(data.matched),
      "",
      `### New Anomalies: ${stats.newCount} found in ${pair.run2} not in ${pair.run1}`,
      `### Missing Anomalies: ${stats.missingCount} from ${pair.run1} not in ${pair.run2}`,
    );
  }

  // Clusters
  sections.push("", "## Cluster Analysis");
  for (const year of [2007, 2015, 2022]) {
    sections.push(summarizeClusters(getClusterData(year), year));
  }

  // ML Predictions
  sections.push("", "## ML Corrosion Predictions");
  sections.push(summarizePredictions(getPredictions()));

  return sections.join("\n");
}
