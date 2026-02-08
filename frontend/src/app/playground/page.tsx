"use client";

import { useState } from "react";

// Layout
import { TopBar } from "@/components/layout/TopBar";

// UI
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Tooltip } from "@/components/ui/Tooltip";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Tabs } from "@/components/ui/Tabs";
import { Skeleton } from "@/components/ui/Skeleton";

// Charts
import { ChartCard } from "@/components/charts/ChartCard";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { ScatterChart } from "@/components/charts/ScatterChart";
import { DonutChart } from "@/components/charts/DonutChart";
import { PieChartComponent } from "@/components/charts/PieChart";
import { Histogram } from "@/components/charts/Histogram";

// Data
import { StatCard } from "@/components/data/StatCard";
import { GrowthIndicator } from "@/components/data/GrowthIndicator";
import { ConfidenceBadge } from "@/components/data/ConfidenceBadge";
import { AnomalyTable } from "@/components/data/AnomalyTable";
import { WeldTable } from "@/components/data/WeldTable";

// Icons
import { AlertTriangle, CheckCircle, Activity, Search } from "lucide-react";

// Sample data
import {
  sampleMatchedAnomalies,
  sampleWeldAlignments,
  anomalyCountByType,
  depthDistribution,
  weldOffsetProgression,
  matchDistribution,
  confidenceScores,
  depthScatter,
  eventTypeDistribution,
  temperatureStyle,
} from "@/lib/sample-data";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-semibold text-text-primary mb-4 mt-10 first:mt-0 border-b border-border pb-2">
      {children}
    </h2>
  );
}

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <TopBar
        title="Component Playground"
        subtitle="All reusable UI components for RCP Track"
      />
      <div className="p-6 space-y-2 max-w-7xl">
        {/* ===== BUTTONS ===== */}
        <SectionTitle>Buttons</SectionTitle>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button leftIcon={<Search className="h-4 w-4" />}>
              With Icon
            </Button>
            <Button variant="outline" leftIcon={<Activity className="h-4 w-4" />}>
              Run Pipeline
            </Button>
          </div>
        </div>

        {/* ===== BADGES ===== */}
        <SectionTitle>Badges</SectionTitle>
        <div className="flex flex-wrap gap-3 items-center">
          <Badge variant="critical">Critical</Badge>
          <Badge variant="matched">Matched</Badge>
          <Badge variant="new">New</Badge>
          <Badge variant="missing">Missing</Badge>
          <Badge variant="uncertain">Uncertain</Badge>
          <Badge variant="default">Default</Badge>
        </div>

        {/* ===== STAT CARDS ===== */}
        <SectionTitle>Stat Cards</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Matched Anomalies"
            value="348"
            change={12}
            changeLabel="vs prev run"
            icon={<CheckCircle className="h-5 w-5" />}
            status="success"
            sparklineData={[280, 295, 310, 305, 320, 335, 348]}
          />
          <StatCard
            label="Critical"
            value="24"
            change={-8}
            changeLabel="vs prev run"
            icon={<AlertTriangle className="h-5 w-5" />}
            status="critical"
            sparklineData={[30, 28, 26, 25, 27, 25, 24]}
          />
          <StatCard
            label="New Anomalies"
            value="1,878"
            change={18}
            changeLabel="vs prev run"
            status="info"
            sparklineData={[1200, 1350, 1500, 1600, 1700, 1800, 1878]}
          />
          <StatCard
            label="Avg Confidence"
            value="0.76"
            change={3.2}
            changeLabel="improvement"
            status="warning"
            sparklineData={[0.68, 0.70, 0.71, 0.73, 0.74, 0.75, 0.76]}
          />
        </div>

        {/* ===== GROWTH INDICATORS & CONFIDENCE BADGES ===== */}
        <SectionTitle>Growth Indicators & Confidence Badges</SectionTitle>
        <Card padding="md">
          <div className="flex flex-wrap gap-6 items-center">
            <div className="space-y-1">
              <p className="text-xs text-text-muted">Normal</p>
              <GrowthIndicator rate={0.43} />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-text-muted">Warning</p>
              <GrowthIndicator rate={1.14} />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-text-muted">Critical</p>
              <GrowthIndicator rate={2.86} />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-text-muted">Negative</p>
              <GrowthIndicator rate={-0.09} />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-text-muted">Null</p>
              <GrowthIndicator rate={null} />
            </div>
            <div className="border-l border-border pl-6 flex flex-wrap gap-4 items-center">
              <div className="space-y-1">
                <p className="text-xs text-text-muted">High</p>
                <ConfidenceBadge score={0.92} />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-text-muted">Medium</p>
                <ConfidenceBadge score={0.67} />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-text-muted">Low</p>
                <ConfidenceBadge score={0.45} />
              </div>
            </div>
          </div>
        </Card>

        {/* ===== AREA CHART ===== */}
        <SectionTitle>Area Chart</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard
            title="Anomaly Depth Distribution"
            subtitle="Average depth % by pipeline distance (ft)"
          >
            <AreaChart
              data={depthDistribution}
              xKey="distance"
              series={[
                { key: "run2015", label: "2015 Run" },
                { key: "run2022", label: "2022 Run" },
              ]}
            />
          </ChartCard>
          <ChartCard
            title="Stacked Area — Depth Distribution"
            subtitle="Cumulative anomaly depth by run"
          >
            <AreaChart
              data={depthDistribution}
              xKey="distance"
              series={[
                { key: "run2015", label: "2015 Run" },
                { key: "run2022", label: "2022 Run" },
              ]}
              stacked
            />
          </ChartCard>
        </div>

        {/* ===== BAR CHARTS ===== */}
        <SectionTitle>Bar Charts</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard
            title="Anomaly Count by Type"
            subtitle="Grouped by inspection run"
          >
            <BarChart
              data={anomalyCountByType}
              xKey="type"
              series={[
                { key: "run2015", label: "2015 Run" },
                { key: "run2022", label: "2022 Run" },
              ]}
            />
          </ChartCard>
          <ChartCard
            title="Anomaly Count — Horizontal"
            subtitle="Horizontal layout with categories"
          >
            <BarChart
              data={anomalyCountByType}
              xKey="type"
              series={[
                { key: "run2015", label: "2015 Run" },
                { key: "run2022", label: "2022 Run" },
              ]}
              layout="vertical"
              height={280}
            />
          </ChartCard>
          <ChartCard
            title="Stacked Bar Chart"
            subtitle="Stacked anomaly count by type"
          >
            <BarChart
              data={anomalyCountByType}
              xKey="type"
              series={[
                { key: "run2015", label: "2015 Run" },
                { key: "run2022", label: "2022 Run" },
              ]}
              stacked
            />
          </ChartCard>
        </div>

        {/* ===== LINE CHART ===== */}
        <SectionTitle>Line Charts</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard
            title="Weld Offset Progression"
            subtitle="Positional drift along pipeline distance (ft)"
          >
            <LineChart
              data={weldOffsetProgression}
              xKey="distance"
              series={[{ key: "offset", label: "Offset (ft)" }]}
            />
          </ChartCard>
          <ChartCard
            title="Average Temperature"
            subtitle="Multi-series line chart with high, average, and low"
          >
            <LineChart
              data={temperatureStyle}
              xKey="month"
              series={[
                { key: "high", label: "High", color: "#F59E0B" },
                { key: "average", label: "Average", color: "#7C5CFC" },
                { key: "low", label: "Low", color: "#06B6D4" },
              ]}
            />
          </ChartCard>
        </div>

        {/* ===== SCATTER PLOT ===== */}
        <SectionTitle>Scatter Plot</SectionTitle>
        <ChartCard
          title="Run 1 vs Run 2 Depth Correlation"
          subtitle="Each point represents a matched anomaly"
        >
          <ScatterChart
            data={depthScatter}
            xKey="depth_run1"
            yKey="depth_run2"
            xLabel="Run 1 Depth (%)"
            yLabel="Run 2 Depth (%)"
            height={350}
          />
        </ChartCard>

        {/* ===== DONUT & PIE ===== */}
        <SectionTitle>Donut & Pie Charts</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard
            title="Anomaly Match Distribution"
            subtitle="Breakdown of matched, new, and missing anomalies"
          >
            <DonutChart
              data={matchDistribution}
              centerValue="3,652"
              centerLabel="total"
            />
          </ChartCard>
          <ChartCard
            title="Event Type Distribution"
            subtitle="Anomaly types in 2022 inspection run"
          >
            <PieChartComponent data={eventTypeDistribution} />
          </ChartCard>
        </div>

        {/* ===== HISTOGRAM ===== */}
        <SectionTitle>Histogram</SectionTitle>
        <ChartCard
          title="Confidence Score Distribution"
          subtitle="Distribution of matching confidence scores across all anomaly pairs"
        >
          <Histogram
            data={confidenceScores}
            bins={10}
            xLabel="Confidence Score"
            yLabel="Count"
          />
        </ChartCard>

        {/* ===== TABLES ===== */}
        <SectionTitle>Tables</SectionTitle>
        <Card title="Matched Anomalies" subtitle="2015 vs 2022 — sortable columns" padding="none">
          <AnomalyTable data={sampleMatchedAnomalies} />
        </Card>
        <div className="mt-4">
          <Card title="Weld Alignment" subtitle="2015 vs 2022 — positional offsets" padding="none">
            <WeldTable data={sampleWeldAlignments} />
          </Card>
        </div>

        {/* ===== FORM CONTROLS ===== */}
        <SectionTitle>Form Controls</SectionTitle>
        <Card padding="md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Input
              label="Search Anomalies"
              placeholder="Enter distance or type..."
            />
            <Input
              label="With Error"
              placeholder="Invalid input"
              error="Distance must be a positive number"
            />
            <Select
              label="Run Comparison"
              options={[
                { value: "2007-2015", label: "2007 vs 2015" },
                { value: "2015-2022", label: "2015 vs 2022" },
                { value: "2007-2022", label: "2007 vs 2022" },
              ]}
            />
          </div>
          <div className="mt-6">
            <Tabs
              tabs={[
                { key: "overview", label: "Overview" },
                { key: "matched", label: "Matched" },
                { key: "new", label: "New" },
                { key: "missing", label: "Missing" },
              ]}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
            <div className="p-4 text-sm text-text-secondary">
              Active tab: <span className="text-accent-primary font-medium">{activeTab}</span>
            </div>
          </div>
        </Card>

        {/* ===== TOOLTIPS ===== */}
        <SectionTitle>Tooltips</SectionTitle>
        <div className="flex flex-wrap gap-4">
          <Tooltip content="This anomaly has a growth rate above 2.0 %/yr">
            <Button variant="outline">Hover for info</Button>
          </Tooltip>
          <Tooltip content={
            <div className="space-y-1">
              <p className="font-medium">Metal Loss #300</p>
              <p className="text-text-muted">Depth: 13% → 20%</p>
              <p className="text-text-muted">Growth: +1.0 %/yr</p>
            </div>
          } side="bottom">
            <Button variant="secondary">Rich tooltip</Button>
          </Tooltip>
          <Tooltip content="Critical: Immediate attention required" side="right">
            <Badge variant="critical">Hover me</Badge>
          </Tooltip>
        </div>

        {/* ===== SKELETONS ===== */}
        <SectionTitle>Loading Skeletons</SectionTitle>
        <Card padding="md">
          <div className="space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex gap-3 mt-4">
              <Skeleton className="h-24 w-32 rounded-lg" />
              <Skeleton className="h-24 w-32 rounded-lg" />
              <Skeleton className="h-24 w-32 rounded-lg" />
            </div>
          </div>
        </Card>

        {/* ===== CARDS ===== */}
        <SectionTitle>Cards</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card title="Default Card" padding="md">
            <p className="text-sm text-text-secondary">
              Standard card with title and padding.
            </p>
          </Card>
          <Card
            title="With Subtitle"
            subtitle="Additional context"
            padding="md"
          >
            <p className="text-sm text-text-secondary">
              Card with title and subtitle.
            </p>
          </Card>
          <Card
            title="With Action"
            headerAction={<Button size="sm" variant="outline">View All</Button>}
            padding="md"
          >
            <p className="text-sm text-text-secondary">
              Card with a header action button.
            </p>
          </Card>
        </div>

        {/* Bottom spacer */}
        <div className="h-10" />
      </div>
    </>
  );
}
