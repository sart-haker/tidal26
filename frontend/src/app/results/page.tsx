"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { listAnalyses, deleteAnalysis } from "@/lib/api";
import type { AnalysisSummary } from "@/lib/types";
import { Trash2, ExternalLink, Upload } from "lucide-react";

export default function ResultsPage() {
  const [analyses, setAnalyses] = useState<AnalysisSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAnalyses();
  }, []);

  async function loadAnalyses() {
    try {
      setLoading(true);
      const data = await listAnalyses();
      setAnalyses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load analyses");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    try {
      await deleteAnalysis(id);
      setAnalyses((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete");
    }
  }

  return (
    <>
      <TopBar
        title="Analysis Results"
        subtitle="View and manage past analysis runs"
        actions={
          <Link href="/upload">
            <Button variant="primary" size="sm" leftIcon={<Upload className="h-4 w-4" />}>
              New Analysis
            </Button>
          </Link>
        }
      />

      <div className="p-6 space-y-4">
        {loading && (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-20 w-full rounded-xl" />
            ))}
          </div>
        )}

        {error && (
          <Card>
            <p className="text-sm text-status-critical">{error}</p>
          </Card>
        )}

        {!loading && analyses.length === 0 && (
          <Card>
            <div className="flex flex-col items-center gap-3 py-8">
              <p className="text-sm text-text-muted">No analyses yet</p>
              <Link href="/upload">
                <Button variant="primary" size="sm">
                  Upload & Analyze
                </Button>
              </Link>
            </div>
          </Card>
        )}

        {analyses.map((analysis) => (
          <Link key={analysis.id} href={`/results/${analysis.id}`}>
            <Card className="hover:border-accent-primary/40 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-text-primary">
                        {analysis.name}
                      </p>
                      <Badge variant="matched">
                        {analysis.run1_year} vs {analysis.run2_year}
                      </Badge>
                      {(analysis.critical_count ?? 0) > 0 && (
                        <Badge variant="critical">
                          {analysis.critical_count} critical
                        </Badge>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-4 text-xs text-text-muted">
                      <span>
                        {new Date(analysis.created_at).toLocaleDateString()}
                      </span>
                      <span>Matched: {analysis.matched_count ?? 0}</span>
                      <span>New: {analysis.new_count ?? 0}</span>
                      <span>Missing: {analysis.missing_count ?? 0}</span>
                      <span>Welds: {analysis.weld_count ?? 0}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-text-muted" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDelete(analysis.id);
                    }}
                    className="rounded-lg p-1.5 text-text-muted hover:bg-surface-hover hover:text-status-critical transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
