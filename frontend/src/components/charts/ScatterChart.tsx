"use client";

import {
  ResponsiveContainer,
  ScatterChart as RechartsScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ZAxis,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { CHART_COLORS } from "@/lib/constants";

interface ScatterChartProps {
  data: Record<string, unknown>[];
  xKey: string;
  yKey: string;
  xLabel?: string;
  yLabel?: string;
  color?: string;
  height?: number;
}

export function ScatterChart({
  data,
  xKey,
  yKey,
  xLabel,
  yLabel,
  color = CHART_COLORS[0],
  height = 300,
}: ScatterChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsScatterChart>
        <CartesianGrid strokeDasharray="3 3" stroke="#D0DCE8" />
        <XAxis
          dataKey={xKey}
          name={xLabel || xKey}
          stroke="#A0B4C8"
          tick={{ fill: "#2C4A6B", fontSize: 12 }}
          tickLine={false}
          label={
            xLabel
              ? { value: xLabel, position: "insideBottom", offset: -5, fill: "#4A6A8A", fontSize: 12 }
              : undefined
          }
        />
        <YAxis
          dataKey={yKey}
          name={yLabel || yKey}
          stroke="#A0B4C8"
          tick={{ fill: "#2C4A6B", fontSize: 12 }}
          tickLine={false}
          label={
            yLabel
              ? { value: yLabel, angle: -90, position: "insideLeft", fill: "#4A6A8A", fontSize: 12 }
              : undefined
          }
        />
        <ZAxis range={[40, 40]} />
        <Tooltip content={<ChartTooltip />} />
        <Scatter data={data} fill={color} opacity={0.7} />
      </RechartsScatterChart>
    </ResponsiveContainer>
  );
}
