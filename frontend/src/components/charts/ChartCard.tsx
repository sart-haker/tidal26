import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function ChartCard({ title, subtitle, children, className }: ChartCardProps) {
  return (
    <Card title={title} subtitle={subtitle} padding="md" className={className}>
      <div className={cn("w-full")}>{children}</div>
    </Card>
  );
}
