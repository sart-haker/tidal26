"use client";

import {
  ResponsiveContainer,
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { CHART_COLORS } from "@/lib/constants";

interface Series {
  key: string;
  label: string;
  color?: string;
}

interface AreaChartProps {
  data: Record<string, unknown>[];
  xKey: string;
  series: Series[];
  stacked?: boolean;
  height?: number;
}

export function AreaChart({
  data,
  xKey,
  series,
  stacked = false,
  height = 300,
}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#252945" />
        <XAxis
          dataKey={xKey}
          stroke="#565A75"
          tick={{ fill: "#8B8FA8", fontSize: 12 }}
          tickLine={false}
        />
        <YAxis
          stroke="#565A75"
          tick={{ fill: "#8B8FA8", fontSize: 12 }}
          tickLine={false}
        />
        <Tooltip content={<ChartTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: 12, color: "#8B8FA8" }}
        />
        {series.map((s, i) => (
          <Area
            key={s.key}
            type="monotone"
            dataKey={s.key}
            name={s.label}
            stroke={s.color || CHART_COLORS[i % CHART_COLORS.length]}
            fill={s.color || CHART_COLORS[i % CHART_COLORS.length]}
            fillOpacity={0.15}
            strokeWidth={2}
            stackId={stacked ? "stack" : undefined}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}
