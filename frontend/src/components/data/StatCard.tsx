"use client";

import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: ReactNode;
  sparklineData?: number[];
  status?: "success" | "warning" | "critical" | "info";
  className?: string;
}

const statusColors = {
  success: "text-status-success",
  warning: "text-status-warning",
  critical: "text-status-critical",
  info: "text-status-info",
};

const sparklineColors = {
  success: "#10B981",
  warning: "#F59E0B",
  critical: "#EF4444",
  info: "#6366F1",
};

export function StatCard({
  label,
  value,
  change,
  changeLabel,
  icon,
  sparklineData,
  status = "info",
  className,
}: StatCardProps) {
  const TrendIcon = change && change > 0 ? TrendingUp : TrendingDown;

  return (
    <Card padding="md" className={cn("relative overflow-hidden", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
            {label}
          </p>
          <p className={cn("text-2xl font-bold", statusColors[status])}>
            {value}
          </p>
          {change !== undefined && (
            <div className="flex items-center gap-1 text-xs">
              <TrendIcon
                className={cn(
                  "h-3 w-3",
                  change >= 0 ? "text-status-success" : "text-status-critical"
                )}
              />
              <span
                className={
                  change >= 0 ? "text-status-success" : "text-status-critical"
                }
              >
                {change >= 0 ? "+" : ""}
                {typeof change === "number" ? change.toFixed(1) : change}%
              </span>
              {changeLabel && (
                <span className="text-text-muted">{changeLabel}</span>
              )}
            </div>
          )}
        </div>
        {icon && (
          <div className={cn("p-2 rounded-lg bg-surface-hover", statusColors[status])}>
            {icon}
          </div>
        )}
      </div>
      {sparklineData && sparklineData.length > 0 && (
        <div className="mt-3 -mx-1">
          <ResponsiveContainer width="100%" height={40}>
            <LineChart
              data={sparklineData.map((v, i) => ({ i, v }))}
            >
              <Line
                type="monotone"
                dataKey="v"
                stroke={sparklineColors[status]}
                strokeWidth={1.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
}
