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
  height?: number;
}

export function LineChart({
  data,
  xKey,
  series,
  height = 300,
}: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data}>
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
        <Legend wrapperStyle={{ fontSize: 12, color: "#8B8FA8" }} />
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
