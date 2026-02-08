"use client";

import { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { CHART_COLORS } from "@/lib/constants";

interface HistogramProps {
  data: number[];
  bins?: number;
  xLabel?: string;
  yLabel?: string;
  color?: string;
  height?: number;
}

export function Histogram({
  data,
  bins = 10,
  xLabel,
  yLabel,
  color = CHART_COLORS[0],
  height = 300,
}: HistogramProps) {
  const binData = useMemo(() => {
    if (!data.length) return [];
    const min = Math.min(...data);
    const max = Math.max(...data);
    const binWidth = (max - min) / bins || 1;
    const result = Array.from({ length: bins }, (_, i) => ({
      bin: `${(min + i * binWidth).toFixed(2)}`,
      count: 0,
    }));
    data.forEach((v) => {
      let idx = Math.floor((v - min) / binWidth);
      if (idx >= bins) idx = bins - 1;
      result[idx].count++;
    });
    return result;
  }, [data, bins]);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={binData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#D0DCE8" />
        <XAxis
          dataKey="bin"
          stroke="#A0B4C8"
          tick={{ fill: "#D0DEE8", fontSize: 11 }}
          tickLine={false}
          label={
            xLabel
              ? { value: xLabel, position: "insideBottom", offset: -5, fill: "#D0DEE8", fontSize: 12 }
              : undefined
          }
        />
        <YAxis
          stroke="#A0B4C8"
          tick={{ fill: "#D0DEE8", fontSize: 12 }}
          tickLine={false}
          label={
            yLabel
              ? { value: yLabel, angle: -90, position: "insideLeft", fill: "#D0DEE8", fontSize: 12 }
              : undefined
          }
        />
        <Tooltip content={<ChartTooltip />} />
        <Bar dataKey="count" name="Count" fill={color} radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
