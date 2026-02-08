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
  height?: number;
}

export function BarChart({
  data,
  xKey,
  series,
  layout = "horizontal",
  stacked = false,
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
              tick={{ fill: "#D0DEE8", fontSize: 12 }}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey={xKey}
              stroke="#A0B4C8"
              tick={{ fill: "#D0DEE8", fontSize: 12 }}
              tickLine={false}
              width={80}
            />
          </>
        ) : (
          <>
            <XAxis
              dataKey={xKey}
              stroke="#A0B4C8"
              tick={{ fill: "#D0DEE8", fontSize: 12 }}
              tickLine={false}
            />
            <YAxis
              stroke="#A0B4C8"
              tick={{ fill: "#D0DEE8", fontSize: 12 }}
              tickLine={false}
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
