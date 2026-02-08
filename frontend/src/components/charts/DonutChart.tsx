"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";

interface DonutData {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DonutData[];
  centerLabel?: string;
  centerValue?: string | number;
  height?: number;
}

export function DonutChart({
  data,
  centerLabel,
  centerValue,
  height = 300,
}: DonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="55%"
          outerRadius="80%"
          dataKey="value"
          strokeWidth={0}
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: 12, color: "#D0DEE8" }}
          formatter={(value) => (
            <span className="text-text-secondary">{value}</span>
          )}
        />
        {centerValue !== undefined && (
          <text
            x="50%"
            y="48%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-text-primary text-2xl font-bold"
          >
            {centerValue}
          </text>
        )}
        {centerLabel && (
          <text
            x="50%"
            y="56%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-text-muted text-xs"
          >
            {centerLabel}
          </text>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}
