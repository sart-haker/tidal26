"use client";

import { cn } from "@/lib/cn";
import type { ColumnDef } from "@/lib/types";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import { useState, useMemo } from "react";

interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  sortable?: boolean;
  onRowClick?: (row: T) => void;
  maxRows?: number;
  className?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  sortable = true,
  onRowClick,
  maxRows,
  className,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleSort = (key: string) => {
    if (!sortable) return;
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sortedData = useMemo(() => {
    let result = [...data];
    if (sortKey) {
      result.sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (aVal === null || aVal === undefined) return 1;
        if (bVal === null || bVal === undefined) return -1;
        if (typeof aVal === "number" && typeof bVal === "number") {
          return sortDir === "asc" ? aVal - bVal : bVal - aVal;
        }
        const aStr = String(aVal);
        const bStr = String(bVal);
        return sortDir === "asc"
          ? aStr.localeCompare(bStr)
          : bStr.localeCompare(aStr);
      });
    }
    if (maxRows) result = result.slice(0, maxRows);
    return result;
  }, [data, sortKey, sortDir, maxRows]);

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={cn(
                  "px-3 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-text-muted",
                  sortable && col.sortable !== false && "cursor-pointer select-none hover:text-text-secondary"
                )}
                style={{ width: col.width }}
                onClick={() =>
                  col.sortable !== false && handleSort(String(col.key))
                }
              >
                <span className="inline-flex items-center gap-1">
                  {col.header}
                  {sortable && col.sortable !== false && (
                    <span className="text-text-muted">
                      {sortKey === String(col.key) ? (
                        sortDir === "asc" ? (
                          <ChevronUp className="h-3 w-3" />
                        ) : (
                          <ChevronDown className="h-3 w-3" />
                        )
                      ) : (
                        <ChevronsUpDown className="h-3 w-3" />
                      )}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "border-b border-border/50 transition-colors",
                i % 2 === 1 && "bg-surface-hover/30",
                onRowClick && "cursor-pointer hover:bg-surface-hover"
              )}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col) => {
                const value = row[col.key as keyof T];
                return (
                  <td key={String(col.key)} className="px-3 py-2.5 text-text-primary">
                    {col.render ? col.render(value, row) : String(value ?? "—")}
                  </td>
                );
              })}
            </tr>
          ))}
          {sortedData.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="px-3 py-8 text-center text-text-muted"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
