"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { FileUpload } from "@/components/upload/FileUpload";
import {
  AlertCircle,
  CheckCircle2,
  Database,
  Loader2,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import {
  uploadInspection,
  getOrCreateDefaultPipeline,
  listInspections,
  runMatching,
  getEnrichedResults,
  runClustering,
  getClusterResults,
  runPredictions,
  getPredictionResults,
} from "@/lib/api-client";
import type { InspectionResponse } from "@/lib/api-client";
import type { RunData } from "@/lib/data";
import type { ClusterStats, PredictionResult } from "@/lib/types";

export interface DynamicResult {
  runData: RunData;
  run1Year: number;
  run2Year: number;
  clusterData?: ClusterStats[];
  predictionData?: PredictionResult[];
}

interface UploadSectionProps {
  onAnalysisComplete?: (result: DynamicResult) => void;
}

export function UploadSection({ onAnalysisComplete }: UploadSectionProps) {
  // Pipeline state
  const [pipelineId, setPipelineId] = useState<string | null>(null);
  const [inspections, setInspections] = useState<InspectionResponse[]>([]);

  // Upload form state
  const [file, setFile] = useState<File | null>(null);
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Comparison state (for stored inspections)
  const [compareRun1, setCompareRun1] = useState("");
  const [compareRun2, setCompareRun2] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisSummary, setAnalysisSummary] = useState<{
    matched: number;
    newCount: number;
    missingCount: number;
    critical: number;
  } | null>(null);

  const loadInspections = useCallback(async () => {
    if (!pipelineId) return;
    try {
      const items = await listInspections(pipelineId);
      setInspections(items);
    } catch {
      // ignore — backend might not be running
    }
  }, [pipelineId]);

  // Initialize pipeline + load inspections
  useEffect(() => {
    (async () => {
      try {
        const pipeline = await getOrCreateDefaultPipeline();
        setPipelineId(pipeline.id);
      } catch {
        // backend not available
      }
    })();
  }, []);

  useEffect(() => {
    loadInspections();
  }, [loadInspections]);

  // ── Upload handler ──
  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setUploadSuccess(false);

    if (!file) {
      setError("Select a CSV or Excel file");
      return;
    }
    if (!year) {
      setError("Enter the inspection year");
      return;
    }

    setLoading(true);
    try {
      await uploadInspection(Number(year), file);
      setFile(null);
      setYear("");
      setUploadSuccess(true);
      await loadInspections();
      // Auto-dismiss success after 4s
      setTimeout(() => setUploadSuccess(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  // ── Analysis handler (from stored inspections) ──
  async function handleRunAnalysis() {
    if (!pipelineId || !compareRun1 || !compareRun2) return;

    setError(null);
    setAnalyzing(true);
    setAnalysisSummary(null);

    try {
      const insp1 = inspections.find((i) => i.id === compareRun1);
      const insp2 = inspections.find((i) => i.id === compareRun2);
      if (!insp1 || !insp2) throw new Error("Inspection not found");

      // run1 = earlier year, run2 = later year
      const [earlier, later] =
        insp1.year <= insp2.year ? [insp1, insp2] : [insp2, insp1];

      const summary = await runMatching(pipelineId, earlier.id, later.id);
      const runData = await getEnrichedResults(earlier.id, later.id);

      let clusterData: ClusterStats[] | undefined;
      try {
        await runClustering(later.id);
        clusterData = await getClusterResults(later.id);
      } catch {
        // clustering may fail — ok
      }

      // Run ML predictions on the later (newer) inspection
      let predictionData: PredictionResult[] | undefined;
      try {
        await runPredictions(later.id);
        predictionData = await getPredictionResults(later.id);
      } catch {
        // predictions may fail if model not available — ok
      }

      setAnalysisSummary({
        matched: summary.total_matched,
        newCount: summary.new_anomalies,
        missingCount: summary.missing_anomalies,
        critical: summary.critical_growth_count,
      });

      onAnalysisComplete?.({
        runData,
        run1Year: earlier.year,
        run2Year: later.year,
        clusterData,
        predictionData,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Analysis failed");
    } finally {
      setAnalyzing(false);
    }
  }

  // Build dropdown options for comparison selects
  const inspectionOptions = inspections.map((i) => ({
    value: i.id,
    label: `${i.year} — ${i.anomaly_count} anomalies (${i.filename})`,
  }));

  const canRunAnalysis =
    compareRun1 && compareRun2 && compareRun1 !== compareRun2 && !analyzing;

  return (
    <section id="upload" className="relative px-6 py-16 scroll-mt-8">
      <div className="mx-auto max-w-3xl relative">
        {/* Penguin decoration */}
        <div className="hidden md:block absolute -left-40 top-12 pointer-events-none select-none opacity-90 -rotate-6">
          <Image
            src="/tidalicon_2.png"
            alt="Tidal penguin skiing"
            width={150}
            height={150}
          />
        </div>

        <h2 className="font-bubble text-3xl md:text-4xl mb-8 text-center">
          Upload Dataset
        </h2>

        {/* ── Upload Form ── */}
        <form onSubmit={handleUpload} className="space-y-4">
          <Card title="Dataset Info">
            <div className="space-y-4">
              <Input
                label="Inspection Year"
                type="number"
                placeholder="e.g. 2030"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </Card>

          <Card title="Data File">
            <FileUpload
              label="Upload CSV or Excel"
              value={file}
              onChange={setFile}
              accept=".csv,.xlsx,.xls"
            />
          </Card>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={loading}
            className="w-full"
          >
            {loading ? "Uploading..." : "Upload to MongoDB"}
          </Button>
        </form>

        {/* ── Upload success ── */}
        {uploadSuccess && (
          <div className="mt-4">
            <Card>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-status-success" />
                <p className="text-sm font-medium text-status-success">
                  Upload complete — select it below to run analysis
                </p>
              </div>
            </Card>
          </div>
        )}

        {/* ── Error display ── */}
        {error && (
          <div className="mt-4">
            <Card>
              <div className="flex items-center gap-3">
                <AlertCircle className="h-4 w-4 shrink-0 text-status-critical" />
                <p className="text-sm text-status-critical">{error}</p>
              </div>
            </Card>
          </div>
        )}

        {/* ── Stored Inspections + Compare ── */}
        <div className="mt-6 space-y-4">
          <Card
            title="Stored Inspections"
            subtitle={`${inspections.length} inspections in MongoDB`}
          >
            {inspections.length === 0 ? (
              <p className="text-sm text-text-muted py-4 text-center">
                No inspections uploaded yet
              </p>
            ) : (
              <div className="space-y-3">
                {inspections.map((insp) => (
                  <div
                    key={insp.id}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Database className="h-4 w-4 text-accent-primary" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-text-primary">
                            {insp.filename}
                          </p>
                          <Badge variant="matched">{insp.year}</Badge>
                        </div>
                        <p className="text-xs text-text-muted">
                          {insp.anomaly_count} anomalies &middot;{" "}
                          {insp.total_records} records &middot;{" "}
                          {new Date(insp.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs font-mono text-text-muted">
                      {insp.id.slice(0, 8)}...
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* ── Compare & Analyze ── */}
          {inspections.length >= 2 && (
            <Card title="Compare & Analyze">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <Select
                      label="Run 1 (earlier)"
                      options={[
                        { value: "", label: "Select inspection..." },
                        ...inspectionOptions,
                      ]}
                      value={compareRun1}
                      onChange={(e) => setCompareRun1(e.target.value)}
                    />
                  </div>
                  <ArrowRight className="h-4 w-4 text-text-muted mt-6 shrink-0" />
                  <div className="flex-1">
                    <Select
                      label="Run 2 (later)"
                      options={[
                        { value: "", label: "Select inspection..." },
                        ...inspectionOptions.filter(
                          (o) => o.value !== compareRun1
                        ),
                      ]}
                      value={compareRun2}
                      onChange={(e) => setCompareRun2(e.target.value)}
                    />
                  </div>
                </div>

                {analyzing && (
                  <div className="flex items-center justify-center gap-3 py-4">
                    <Loader2 className="h-5 w-5 animate-spin text-accent-blue" />
                    <p className="text-sm text-text-muted">
                      Matching anomalies, calculating growth rates, and
                      clustering...
                    </p>
                  </div>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={!canRunAnalysis}
                  loading={analyzing}
                  onClick={handleRunAnalysis}
                >
                  {analyzing ? "Analyzing..." : "Run Analysis"}
                </Button>

                {/* Analysis result summary */}
                {analysisSummary && !analyzing && (
                  <div className="flex items-center gap-3 rounded-lg border border-status-success/30 bg-status-success/10 p-3">
                    <BarChart3 className="h-5 w-5 shrink-0 text-status-success" />
                    <div>
                      <p className="text-sm font-medium text-status-success">
                        Analysis Complete
                      </p>
                      <p className="mt-1 text-xs text-text-muted">
                        {analysisSummary.matched} matched &middot;{" "}
                        {analysisSummary.newCount} new &middot;{" "}
                        {analysisSummary.missingCount} missing &middot;{" "}
                        {analysisSummary.critical} critical — scroll up to view
                        results
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
