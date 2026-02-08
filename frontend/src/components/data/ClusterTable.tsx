"use client";

import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { formatDistance } from "@/lib/utils";
import type { ClusterStats, ColumnDef } from "@/lib/types";

interface ClusterTableProps {
  data: ClusterStats[];
  maxRows?: number;
  className?: string;
}

const columns: ColumnDef<ClusterStats>[] = [
  {
    key: "cluster_id",
    header: "ID",
    sortable: true,
    render: (val) => `#${val}`,
  },
  {
    key: "center_distance_ft",
    header: "Center (ft)",
    sortable: true,
    render: (val) => formatDistance(val as number),
  },
  {
    key: "span_ft",
    header: "Span (ft)",
    sortable: true,
    render: (val) => `${(val as number).toFixed(1)}`,
  },
  {
    key: "anomaly_count",
    header: "Anomalies",
    sortable: true,
    render: (val) => String(val),
  },
  {
    key: "max_depth_pct",
    header: "Max Depth %",
    sortable: true,
    render: (val) => {
      const v = val as number;
      const color = v >= 40 ? "text-status-critical" : v >= 25 ? "text-status-warning" : "text-text-primary";
      return <span className={color}>{v.toFixed(1)}%</span>;
    },
  },
  {
    key: "severity_score",
    header: "Severity",
    sortable: true,
    render: (val) => {
      const v = val as number;
      const color = v >= 50 ? "text-status-critical" : v >= 30 ? "text-status-warning" : "text-text-primary";
      return <span className={`font-medium ${color}`}>{v.toFixed(1)}</span>;
    },
  },
  {
    key: "is_critical",
    header: "Status",
    render: (val) =>
      val ? (
        <Badge variant="critical">Critical</Badge>
      ) : (
        <Badge variant="default">Normal</Badge>
      ),
  },
];

export function ClusterTable({ data, maxRows, className }: ClusterTableProps) {
  return (
    <DataTable
      columns={columns as unknown as ColumnDef<Record<string, unknown>>[]}
      data={data as unknown as Record<string, unknown>[]}
      maxRows={maxRows}
      className={className}
    />
  );
}
