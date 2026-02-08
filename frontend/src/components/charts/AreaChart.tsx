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
  xLabel?: string;
  yLabel?: string;
  height?: number;
}

export function AreaChart({
  data,
  xKey,
  series,
  stacked = false,
  xLabel,
  yLabel,
  height = 300,
}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#D0DCE8" />
        <XAxis
          dataKey={xKey}
          stroke="#A0B4C8"
          tick={{ fill: "#2C4A6B", fontSize: 12 }}
          tickLine={false}
          label={xLabel ? { value: xLabel, position: "insideBottom", offset: -5, fill: "#4A6A8A", fontSize: 12 } : undefined}
        />
        <YAxis
          stroke="#A0B4C8"
          tick={{ fill: "#2C4A6B", fontSize: 12 }}
          tickLine={false}
          label={yLabel ? { value: yLabel, angle: -90, position: "insideLeft", fill: "#4A6A8A", fontSize: 12 } : undefined}
        />
        <Tooltip content={<ChartTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: 12, color: "#D0DEE8" }}
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
