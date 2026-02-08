"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui/Skeleton";
import { StatCard } from "@/components/data/StatCard";
import { AnomalyTable } from "@/components/data/AnomalyTable";
import { WeldTable } from "@/components/data/WeldTable";
import { DataTable } from "@/components/ui/DataTable";
import { getAnalysis } from "@/lib/api";
import { formatDistance, formatClockPosition } from "@/lib/utils";
import type { AnalysisDetail, ColumnDef, NewAnomaly, MissingAnomaly } from "@/lib/types";
import { GitCompare, AlertTriangle, PlusCircle, MinusCircle, Link2 } from "lucide-react";

const newAnomalyColumns: ColumnDef<NewAnomaly>[] = [
  {
    key: "event_type_normalized",
    header: "Type",
    render: (val) => (
      <Badge variant="default">{String(val)}</Badge>
    ),
  },
  {
    key: "log_distance",
    header: "Distance",
    render: (val) => formatDistance(val as number),
  },
  {
    key: "clock_decimal",
    header: "Clock",
    render: (val) => formatClockPosition(val as number | null),
  },
  {
    key: "depth_percent",
    header: "Depth %",
    render: (val) => (val !== null && val !== undefined ? `${(val as number).toFixed(1)}%` : "—"),
  },
  {
    key: "length",
    header: "Length (in)",
    render: (val) => (val !== null && val !== undefined ? (val as number).toFixed(2) : "—"),
  },
  {
    key: "width",
    header: "Width (in)",
    render: (val) => (val !== null && val !== undefined ? (val as number).toFixed(2) : "—"),
  },
  {
    key: "joint_number",
    header: "Joint #",
    render: (val) => (val !== null && val !== undefined ? String(val) : "—"),
  },
];

const TABS = [
  { key: "matched", label: "Matched" },
  { key: "new", label: "New" },
  { key: "missing", label: "Missing" },
  { key: "welds", label: "Welds" },
];

export default function ResultDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [analysis, setAnalysis] = useState<AnalysisDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("matched");

  useEffect(() => {
    async function load() {
      try {
        const data = await getAnalysis(id);
        setAnalysis(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) {
    return (
      <>
        <TopBar title="Loading..." />
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-24 rounded-xl" />
            ))}
          </div>
          <Skeleton className="h-96 rounded-xl" />
        </div>
      </>
    );
  }

  if (error || !analysis) {
    return (
      <>
        <TopBar title="Error" />
        <div className="p-6">
          <Card>
            <p className="text-sm text-status-critical">{error || "Analysis not found"}</p>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar
        title={analysis.name}
        subtitle={`${analysis.run1_year} vs ${analysis.run2_year} — ${new Date(analysis.created_at).toLocaleDateString()}`}
      />

      <div className="p-6 space-y-6">
        {/* Summary stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <StatCard
            label="Matched"
            value={analysis.matched_count ?? 0}
            status="success"
            icon={<GitCompare className="h-4 w-4" />}
          />
          <StatCard
            label="New Anomalies"
            value={analysis.new_count ?? 0}
            status="info"
            icon={<PlusCircle className="h-4 w-4" />}
          />
          <StatCard
            label="Missing"
            value={analysis.missing_count ?? 0}
            status="warning"
            icon={<MinusCircle className="h-4 w-4" />}
          />
          <StatCard
            label="Critical"
            value={analysis.critical_count ?? 0}
            status="critical"
            icon={<AlertTriangle className="h-4 w-4" />}
          />
          <StatCard
            label="Welds Matched"
            value={analysis.weld_count ?? 0}
            status="info"
            icon={<Link2 className="h-4 w-4" />}
          />
        </div>

        {/* Tolerance info */}
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span>Distance tolerance: {analysis.distance_tolerance} ft</span>
          <span>Clock tolerance: {analysis.clock_tolerance} hrs</span>
          <span>Weld tolerance: {analysis.weld_tolerance} ft</span>
        </div>

        {/* Tabs */}
        <Card padding="none">
          <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} className="px-4" />

          <div className="p-4">
            {activeTab === "matched" && (
              <AnomalyTable data={analysis.matched_anomalies} />
            )}

            {activeTab === "new" && (
              <DataTable
                columns={newAnomalyColumns as unknown as ColumnDef<Record<string, unknown>>[]}
                data={analysis.new_anomalies as unknown as Record<string, unknown>[]}
              />
            )}

            {activeTab === "missing" && (
              <DataTable
                columns={newAnomalyColumns as unknown as ColumnDef<Record<string, unknown>>[]}
                data={analysis.missing_anomalies as unknown as Record<string, unknown>[]}
              />
            )}

            {activeTab === "welds" && (
              <WeldTable data={analysis.weld_alignments} />
            )}
          </div>
        </Card>
      </div>
    </>
  );
}
