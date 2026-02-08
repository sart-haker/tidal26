"use client";

import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import type { PieLabelRenderProps } from "recharts";
import { ChartTooltip } from "./ChartTooltip";

interface PieData {
  name: string;
  value: number;
  color: string;
}

interface PieChartComponentProps {
  data: PieData[];
  height?: number;
}

export function PieChartComponent({
  data,
  height = 300,
}: PieChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius="80%"
          dataKey="value"
          strokeWidth={0}
          label={(props: PieLabelRenderProps) =>
            `${props.name ?? ""} ${(((props.percent as number) ?? 0) * 100).toFixed(0)}%`
          }
          labelLine={{ stroke: "#565A75" }}
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: 12, color: "#8B8FA8" }}
          formatter={(value) => (
            <span className="text-text-secondary">{value}</span>
          )}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}
