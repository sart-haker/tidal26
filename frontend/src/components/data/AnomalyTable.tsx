"use client";

import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { GrowthIndicator } from "./GrowthIndicator";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { formatDistance, formatClockPosition } from "@/lib/utils";
import type { MatchedAnomaly, ColumnDef } from "@/lib/types";

interface AnomalyTableProps {
  data: MatchedAnomaly[];
  maxRows?: number;
  className?: string;
}

const columns: ColumnDef<MatchedAnomaly>[] = [
  {
    key: "event_type",
    header: "Type",
    render: (val) => (
      <Badge variant="default">{String(val)}</Badge>
    ),
  },
  {
    key: "run1_distance",
    header: "Run 1 Dist",
    render: (val) => formatDistance(val as number),
  },
  {
    key: "run2_distance",
    header: "Run 2 Dist",
    render: (val) => formatDistance(val as number),
  },
  {
    key: "run1_clock",
    header: "Clock 1",
    render: (val) => formatClockPosition(val as number | null),
  },
  {
    key: "run2_clock",
    header: "Clock 2",
    render: (val) => formatClockPosition(val as number | null),
  },
  {
    key: "depth_change",
    header: "Depth Chg",
    render: (val) =>
      val !== null ? `${(val as number) >= 0 ? "+" : ""}${(val as number).toFixed(1)}%` : "—",
  },
  {
    key: "depth_growth_rate",
    header: "Growth Rate",
    render: (val) => <GrowthIndicator rate={val as number | null} />,
  },
  {
    key: "confidence",
    header: "Confidence",
    render: (val) => <ConfidenceBadge score={val as number} />,
  },
  {
    key: "is_critical",
    header: "Status",
    render: (val) =>
      val ? (
        <Badge variant="critical">Critical</Badge>
      ) : (
        <Badge variant="matched">OK</Badge>
      ),
  },
];

export function AnomalyTable({ data, maxRows, className }: AnomalyTableProps) {
  return (
    <DataTable
      columns={columns as unknown as ColumnDef<Record<string, unknown>>[]}
      data={data as unknown as Record<string, unknown>[]}
      maxRows={maxRows}
      className={className}
    />
  );
}
