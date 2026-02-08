"use client";

import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { formatDistance } from "@/lib/utils";
import type { PredictionResult, ColumnDef } from "@/lib/types";

interface PredictionTableProps {
  data: PredictionResult[];
  maxRows?: number;
  className?: string;
}

const columns: ColumnDef<PredictionResult>[] = [
  {
    key: "prediction_distance",
    header: "Distance (ft)",
    sortable: true,
    render: (val) => formatDistance(val as number),
  },
  {
    key: "corrosion_probability",
    header: "Probability",
    sortable: true,
    render: (val) => {
      const v = val as number;
      const pct = (v * 100).toFixed(1);
      const color =
        v > 0.7 ? "text-status-critical" : v > 0.5 ? "text-status-warning" : "text-status-success";
      return <span className={`font-medium ${color}`}>{pct}%</span>;
    },
  },
  {
    key: "wall_thickness",
    header: "Wall (in)",
    render: (val) => (val !== null ? `${(val as number).toFixed(3)}` : "—"),
  },
  {
    key: "anomaly_density_50ft",
    header: "Density (50ft)",
    sortable: true,
    render: (val) => String(val),
  },
  {
    key: "dist_to_bend",
    header: "To Bend (ft)",
    render: (val) => (val !== null ? `${(val as number).toFixed(1)}` : "—"),
  },
  {
    key: "dist_to_girth_weld",
    header: "To Weld (ft)",
    render: (val) => (val !== null ? `${(val as number).toFixed(1)}` : "—"),
  },
  {
    key: "predicted_corrosion",
    header: "Risk",
    render: (_, row) => {
      const r = row as unknown as PredictionResult;
      if (r.corrosion_probability > 0.7)
        return <Badge variant="critical">High</Badge>;
      if (r.corrosion_probability > 0.5)
        return <Badge variant="uncertain">Medium</Badge>;
      return <Badge variant="matched">Low</Badge>;
    },
  },
];

export function PredictionTable({ data, maxRows, className }: PredictionTableProps) {
  return (
    <DataTable
      columns={columns as unknown as ColumnDef<Record<string, unknown>>[]}
      data={data as unknown as Record<string, unknown>[]}
      maxRows={maxRows}
      className={className}
    />
  );
}
