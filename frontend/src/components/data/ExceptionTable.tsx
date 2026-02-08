"use client";

import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { formatDistance, formatClockPosition } from "@/lib/utils";
import type { NewAnomaly, MissingAnomaly, ColumnDef } from "@/lib/types";

type ExceptionAnomaly = NewAnomaly | MissingAnomaly;

interface ExceptionTableProps {
  data: ExceptionAnomaly[];
  maxRows?: number;
  className?: string;
}

const columns: ColumnDef<ExceptionAnomaly>[] = [
  {
    key: "event_type_normalized",
    header: "Type",
    render: (val) => <Badge variant="default">{String(val)}</Badge>,
  },
  {
    key: "log_distance",
    header: "Distance (ft)",
    sortable: true,
    render: (val) => (val !== null ? formatDistance(val as number) : "—"),
  },
  {
    key: "clock_decimal",
    header: "Clock",
    render: (val) => formatClockPosition(val as number | null),
  },
  {
    key: "depth_percent",
    header: "Depth %",
    sortable: true,
    render: (val) => (val !== null ? `${(val as number).toFixed(1)}%` : "—"),
  },
  {
    key: "length",
    header: "Length (in)",
    render: (val) => (val !== null ? (val as number).toFixed(2) : "—"),
  },
  {
    key: "width",
    header: "Width (in)",
    render: (val) => (val !== null ? (val as number).toFixed(2) : "—"),
  },
  {
    key: "joint_number",
    header: "Joint #",
    render: (val) => (val !== null ? String(val) : "—"),
  },
];

export function ExceptionTable({ data, maxRows, className }: ExceptionTableProps) {
  return (
    <DataTable
      columns={columns as unknown as ColumnDef<Record<string, unknown>>[]}
      data={data as unknown as Record<string, unknown>[]}
      maxRows={maxRows}
      className={className}
    />
  );
}
