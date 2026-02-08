"use client";

import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
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
  dashed?: boolean;
}

interface LineChartProps {
  data: Record<string, unknown>[];
  xKey: string;
  series: Series[];
  xLabel?: string;
  yLabel?: string;
  height?: number;
}

export function LineChart({
  data,
  xKey,
  series,
  xLabel,
  yLabel,
  height = 300,
}: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data}>
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
        <Legend wrapperStyle={{ fontSize: 12, color: "#D0DEE8" }} />
        {series.map((s, i) => (
          <Line
            key={s.key}
            type="monotone"
            dataKey={s.key}
            name={s.label}
            stroke={s.color || CHART_COLORS[i % CHART_COLORS.length]}
            strokeWidth={2}
            strokeDasharray={s.dashed ? "5 5" : undefined}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
