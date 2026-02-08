"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// UI
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Select } from "@/components/ui/Select";
import { Tabs } from "@/components/ui/Tabs";

// Charts
import { ChartCard } from "@/components/charts/ChartCard";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { ScatterChart } from "@/components/charts/ScatterChart";
import { DonutChart } from "@/components/charts/DonutChart";
import { Histogram } from "@/components/charts/Histogram";

// Data components
import { StatCard } from "@/components/data/StatCard";
import { AnomalyTable } from "@/components/data/AnomalyTable";
import { ExceptionTable } from "@/components/data/ExceptionTable";
import { ClusterTable } from "@/components/data/ClusterTable";
import { PredictionTable } from "@/components/data/PredictionTable";

// Icons
import {
  AlertTriangle,
  CheckCircle,
  Plus,
  Minus,
  Activity,
  Layers,
  Brain,
  Target,
} from "lucide-react";

// Data
import type { RunData } from "@/lib/data";
import { getRunData, getClusterData, getPredictions } from "@/lib/data";
import {
  computeSummaryStats,
  getMatchDistribution,
  groupByEventType,
  getGrowthRateDistribution,
  getConfidenceDistribution,
  getDepthScatterData,
  getWeldOffsetProgression,
  getClusterSeverityData,
  getRiskByDistance,
  getPredictionSummary,
} from "@/lib/data/aggregations";
import { RUN_PAIRS } from "@/lib/constants";
import type { ClusterStats, PredictionResult } from "@/lib/types";
import type { DynamicResult } from "./UploadSection";

const ALL_TABS = [
  { key: "overview", label: "Overview" },
  { key: "matched", label: "Matched Anomalies" },
  { key: "exceptions", label: "New & Missing" },
  { key: "clusters", label: "Clusters" },
  { key: "predictions", label: "ML Predictions" },
];

const TABS_NO_PREDICTIONS = ALL_TABS.filter((t) => t.key !== "predictions");

const DYNAMIC_PAIR_VALUE = "dynamic";

interface AnalysisSectionProps {
  dynamicResult?: DynamicResult | null;
}

export function AnalysisSection({ dynamicResult }: AnalysisSectionProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPair, setSelectedPair] = useState("2015-2022");

  const isDynamic = selectedPair === DYNAMIC_PAIR_VALUE && !!dynamicResult;

  // Build dropdown options: static pairs + dynamic (if available)
  const pairOptions = [
    ...RUN_PAIRS.map((p) => ({
      value: `${p.run1}-${p.run2}`,
      label: p.label,
    })),
    ...(dynamicResult
      ? [
          {
            value: DYNAMIC_PAIR_VALUE,
            label: `${dynamicResult.run1Year} vs ${dynamicResult.run2Year} (Uploaded)`,
          },
        ]
      : []),
  ];

  // Auto-select dynamic pair when a new analysis completes
  const prevDynRef = useRef<DynamicResult | null>(null);
  useEffect(() => {
    if (dynamicResult && dynamicResult !== prevDynRef.current) {
      prevDynRef.current = dynamicResult;
      setSelectedPair(DYNAMIC_PAIR_VALUE);
      setActiveTab("overview");
    }
  }, [dynamicResult]);

  // Resolve data based on mode
  let data: RunData;
  let run1: number;
  let run2: number;
  let clusterData: ClusterStats[] | undefined;
  let predictionData: PredictionResult[] | undefined;

  if (isDynamic) {
    data = dynamicResult.runData;
    run1 = dynamicResult.run1Year;
    run2 = dynamicResult.run2Year;
    clusterData = dynamicResult.clusterData;
    predictionData = dynamicResult.predictionData;
  } else {
    const [y1, y2] = selectedPair.split("-").map(Number);
    run1 = y1;
    run2 = y2;
    data = getRunData(run1, run2);
  }

  const stats = computeSummaryStats(data);

  // Show predictions tab for static data, and for dynamic data when predictions are available
  const hasPredictions = !isDynamic || (predictionData && predictionData.length > 0);
  const tabs = hasPredictions ? ALL_TABS : TABS_NO_PREDICTIONS;

  // Reset to overview if current tab doesn't exist
  if (activeTab === "predictions" && !hasPredictions) {
    setActiveTab("overview");
  }

  return (
    <section id="analysis" className="relative px-6 py-16 scroll-mt-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <h2 className="font-bubble text-3xl md:text-4xl text-text-primary">
              Pipeline Analysis
            </h2>
            {/* Penguin decoration */}
            <div className="hidden sm:block pointer-events-none select-none">
              <Image
                src="/tidalicon_3.png"
                alt="Tidal penguin on snow cloud"
                width={90}
                height={90}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isDynamic && (
              <Badge variant="new">Live</Badge>
            )}
            <Select
              options={pairOptions}
              value={selectedPair}
              onChange={(e) => {
                setSelectedPair(e.target.value);
                setActiveTab("overview");
              }}
            />
          </div>
        </div>

        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <div className="mt-6">
          {activeTab === "overview" && (
            <OverviewTab data={data} stats={stats} run1={run1} run2={run2} />
          )}
          {activeTab === "matched" && <MatchedTab data={data} />}
          {activeTab === "exceptions" && (
            <ExceptionsTab data={data} stats={stats} />
          )}
          {activeTab === "clusters" && (
            <ClustersTab run2={run2} dynamicClusters={isDynamic ? clusterData : undefined} />
          )}
          {activeTab === "predictions" && (
            <PredictionsTab dynamicPredictions={isDynamic ? predictionData : undefined} />
          )}
        </div>
      </div>
    </section>
  );
}

// ── Overview Tab ──
function OverviewTab({
  data,
  stats,
  run1,
  run2,
}: {
  data: ReturnType<typeof getRunData>;
  stats: ReturnType<typeof computeSummaryStats>;
  run1: number;
  run2: number;
}) {
  const matchDist = getMatchDistribution(data);
  const eventTypes = groupByEventType(data.matched);
  const depthScatter = getDepthScatterData(data.matched);
  const weldOffsets = getWeldOffsetProgression(data.welds);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Matched Anomalies"
          value={stats.matchedCount}
          icon={<CheckCircle className="h-4 w-4" />}
          status="success"
        />
        <StatCard
          label="Critical Growth"
          value={stats.criticalCount}
          icon={<AlertTriangle className="h-4 w-4" />}
          status="critical"
        />
        <StatCard
          label="New Anomalies"
          value={stats.newCount}
          icon={<Plus className="h-4 w-4" />}
          status="info"
        />
        <StatCard
          label="Missing Anomalies"
          value={stats.missingCount}
          icon={<Minus className="h-4 w-4" />}
          status="warning"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Match Distribution" subtitle="Matched vs New vs Missing">
          <DonutChart
            data={matchDist}
            centerLabel="Total"
            centerValue={String(
              stats.matchedCount + stats.newCount + stats.missingCount
            )}
          />
        </ChartCard>

        <ChartCard title="Anomaly Types" subtitle="Matched anomalies by type">
          <BarChart
            data={eventTypes as unknown as Record<string, unknown>[]}
            xKey="type"
            series={[{ key: "count", label: "Count", color: "#B8A9E8" }]}
          />
        </ChartCard>

        <ChartCard
          title="Depth Comparison"
          subtitle={`Run ${run1} vs Run ${run2} depth (%)`}
        >
          <ScatterChart
            data={depthScatter as unknown as Record<string, unknown>[]}
            xKey="depth_run1"
            yKey="depth_run2"
            xLabel={`${run1} Depth %`}
            yLabel={`${run2} Depth %`}
          />
        </ChartCard>

        <ChartCard
          title="Weld Offset Progression"
          subtitle="Position correction along pipeline"
        >
          <LineChart
            data={weldOffsets as unknown as Record<string, unknown>[]}
            xKey="distance"
            series={[{ key: "offset", label: "Offset (ft)", color: "#8EC5E8" }]}
          />
        </ChartCard>
      </div>

      <Card title="Analysis Summary">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Years Analyzed"
            value={run2 - run1}
            icon={<Activity className="h-4 w-4" />}
          />
          <StatCard
            label="Anomalies Tracked"
            value={stats.matchedCount}
            icon={<Target className="h-4 w-4" />}
          />
          <StatCard
            label="Critical Flagged"
            value={stats.criticalCount}
            icon={<AlertTriangle className="h-4 w-4" />}
            status={stats.criticalCount > 0 ? "critical" : "success"}
          />
          <StatCard
            label="Welds Aligned"
            value={stats.weldCount}
            icon={<Layers className="h-4 w-4" />}
          />
        </div>
      </Card>
    </div>
  );
}

// ── Matched Anomalies Tab ──
function MatchedTab({ data }: { data: ReturnType<typeof getRunData> }) {
  const growthRates = getGrowthRateDistribution(data.matched);
  const confidences = getConfidenceDistribution(data.matched);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Growth Rate Distribution"
          subtitle="Depth growth rates (%/yr)"
        >
          <Histogram
            data={growthRates}
            xLabel="Growth Rate (%/yr)"
            yLabel="Count"
            bins={20}
          />
        </ChartCard>

        <ChartCard
          title="Confidence Distribution"
          subtitle="Match confidence scores"
        >
          <Histogram
            data={confidences}
            xLabel="Confidence"
            yLabel="Count"
            bins={15}
            color="#8EC5E8"
          />
        </ChartCard>
      </div>

      <Card
        title="Matched Anomalies"
        subtitle="All matched anomaly pairs with growth data"
      >
        <AnomalyTable data={data.matched} maxRows={50} />
      </Card>
    </div>
  );
}

// ── Exceptions Tab ──
function ExceptionsTab({
  data,
  stats,
}: {
  data: ReturnType<typeof getRunData>;
  stats: ReturnType<typeof computeSummaryStats>;
}) {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold text-text-primary">
            New Anomalies
          </h3>
          <Badge variant="new">{stats.newCount}</Badge>
        </div>
        <p className="text-sm text-text-muted">
          Anomalies found in the later run that were not present in the earlier
          run.
        </p>
        <ExceptionTable data={data.newAnomalies} maxRows={50} />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold text-text-primary">
            Missing Anomalies
          </h3>
          <Badge variant="missing">{stats.missingCount}</Badge>
        </div>
        <p className="text-sm text-text-muted">
          Anomalies from the earlier run that were not found in the later run
          (possibly repaired or re-classified).
        </p>
        <ExceptionTable data={data.missing} maxRows={50} />
      </div>
    </div>
  );
}

// ── Clusters Tab ──
function ClustersTab({ run2, dynamicClusters }: { run2: number; dynamicClusters?: ClusterStats[] }) {
  const clusters = dynamicClusters ?? getClusterData(run2);
  const criticalClusters = clusters.filter((c) => c.is_critical).length;
  const avgSeverity =
    clusters.length > 0
      ? Math.round(
          (clusters.reduce((s, c) => s + c.severity_score, 0) /
            clusters.length) *
            10
        ) / 10
      : 0;
  const severityData = getClusterSeverityData(clusters);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          label="Total Clusters"
          value={clusters.length}
          icon={<Layers className="h-4 w-4" />}
        />
        <StatCard
          label="Critical Clusters"
          value={criticalClusters}
          icon={<AlertTriangle className="h-4 w-4" />}
          status={criticalClusters > 0 ? "critical" : "success"}
        />
        <StatCard
          label="Avg Severity"
          value={avgSeverity}
          icon={<Activity className="h-4 w-4" />}
          status={avgSeverity > 40 ? "warning" : "success"}
        />
      </div>

      <ChartCard
        title="Cluster Severity (Top 20)"
        subtitle="Sorted by severity score"
      >
        <BarChart
          data={severityData as unknown as Record<string, unknown>[]}
          xKey="cluster"
          series={[
            { key: "severity_score", label: "Severity", color: "#E8887A" },
          ]}
        />
      </ChartCard>

      <Card title="All Clusters" subtitle={`${run2} inspection year`}>
        <ClusterTable data={clusters} maxRows={30} />
      </Card>
    </div>
  );
}

// ── ML Predictions Tab ──
function PredictionsTab({ dynamicPredictions }: { dynamicPredictions?: PredictionResult[] }) {
  const predictions = dynamicPredictions ?? getPredictions();
  const summary = getPredictionSummary(predictions);
  const riskByDist = getRiskByDistance(predictions);
  const probabilities = predictions.map((p) => p.corrosion_probability);
  const highRiskLocations = predictions
    .filter((p) => p.corrosion_probability > 0.5)
    .sort((a, b) => b.corrosion_probability - a.corrosion_probability);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="High Risk Locations"
          value={summary.highRisk}
          icon={<AlertTriangle className="h-4 w-4" />}
          status="critical"
        />
        <StatCard
          label="Medium Risk"
          value={summary.medRisk}
          icon={<Activity className="h-4 w-4" />}
          status="warning"
        />
        <StatCard
          label="Avg Probability"
          value={`${(summary.avgProbability * 100).toFixed(1)}%`}
          icon={<Brain className="h-4 w-4" />}
        />
        <StatCard
          label="Total Predictions"
          value={summary.total.toLocaleString()}
          icon={<Target className="h-4 w-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Corrosion Risk Along Pipeline"
          subtitle="Average & max probability by distance"
        >
          <AreaChart
            data={riskByDist as unknown as Record<string, unknown>[]}
            xKey="distance"
            series={[
              { key: "max_probability", label: "Max", color: "#E8887A" },
              { key: "avg_probability", label: "Average", color: "#F7C59F" },
            ]}
          />
        </ChartCard>

        <ChartCard
          title="Probability Distribution"
          subtitle="Corrosion probability across all grid points"
        >
          <Histogram
            data={probabilities}
            xLabel="Probability"
            yLabel="Count"
            bins={20}
            color="#B8A9E8"
          />
        </ChartCard>
      </div>

      <Card
        title="High-Risk Locations"
        subtitle={`${highRiskLocations.length} locations above 50% probability`}
      >
        <PredictionTable data={highRiskLocations} maxRows={30} />
      </Card>
    </div>
  );
}
