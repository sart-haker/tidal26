"use client";

import { DataTable } from "@/components/ui/DataTable";
import { cn } from "@/lib/cn";
import { formatDistance } from "@/lib/utils";
import type { WeldAlignment, ColumnDef } from "@/lib/types";

interface WeldTableProps {
  data: WeldAlignment[];
  maxRows?: number;
  className?: string;
}

const columns: ColumnDef<WeldAlignment>[] = [
  {
    key: "joint_number",
    header: "Joint #",
    render: (val) => <span className="font-mono">{String(val)}</span>,
  },
  {
    key: "run1_distance",
    header: "Run 1 Distance",
    render: (val) => formatDistance(val as number),
  },
  {
    key: "run2_distance",
    header: "Run 2 Distance",
    render: (val) => formatDistance(val as number),
  },
  {
    key: "offset",
    header: "Offset",
    render: (val) => {
      const offset = val as number;
      return (
        <span
          className={cn(
            "font-mono text-xs font-medium",
            Math.abs(offset) > 10
              ? "text-status-warning"
              : Math.abs(offset) > 5
              ? "text-status-info"
              : "text-text-primary"
          )}
        >
          {offset >= 0 ? "+" : ""}
          {offset.toFixed(2)} ft
        </span>
      );
    },
  },
];

export function WeldTable({ data, maxRows, className }: WeldTableProps) {
  return (
    <DataTable
      columns={columns as unknown as ColumnDef<Record<string, unknown>>[]}
      data={data as unknown as Record<string, unknown>[]}
      maxRows={maxRows}
      className={className}
    />
  );
}
