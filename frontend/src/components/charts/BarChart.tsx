"use client";

import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
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

interface BarChartProps {
  data: Record<string, unknown>[];
  xKey: string;
  series: Series[];
  layout?: "vertical" | "horizontal";
  stacked?: boolean;
  xLabel?: string;
  yLabel?: string;
  height?: number;
}

export function BarChart({
  data,
  xKey,
  series,
  layout = "horizontal",
  stacked = false,
  xLabel,
  yLabel,
  height = 300,
}: BarChartProps) {
  const isVertical = layout === "vertical";

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart
        data={data}
        layout={isVertical ? "vertical" : "horizontal"}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#D0DCE8" />
        {isVertical ? (
          <>
            <XAxis
              type="number"
              stroke="#A0B4C8"
              tick={{ fill: "#2C4A6B", fontSize: 12 }}
              tickLine={false}
              label={xLabel ? { value: xLabel, position: "insideBottom", offset: -5, fill: "#4A6A8A", fontSize: 12 } : undefined}
            />
            <YAxis
              type="category"
              dataKey={xKey}
              stroke="#A0B4C8"
              tick={{ fill: "#2C4A6B", fontSize: 12 }}
              tickLine={false}
              width={80}
              label={yLabel ? { value: yLabel, angle: -90, position: "insideLeft", fill: "#4A6A8A", fontSize: 12 } : undefined}
            />
          </>
        ) : (
          <>
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
          </>
        )}
        <Tooltip content={<ChartTooltip />} />
        <Legend wrapperStyle={{ fontSize: 12, color: "#D0DEE8" }} />
        {series.map((s, i) => (
          <Bar
            key={s.key}
            dataKey={s.key}
            name={s.label}
            fill={s.color || CHART_COLORS[i % CHART_COLORS.length]}
            stackId={stacked ? "stack" : undefined}
            radius={stacked ? undefined : [8, 8, 0, 0]}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
