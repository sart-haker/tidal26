"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { FileUpload } from "@/components/upload/FileUpload";
import { AlertCircle, CheckCircle2, Database } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

interface StoredDataset {
  id: string;
  name: string;
  year: number;
  filename: string;
  row_count: number;
  columns: string[];
  created_at: string;
}

export function UploadSection() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<StoredDataset | null>(null);
  const [datasets, setDatasets] = useState<StoredDataset[]>([]);

  useEffect(() => {
    loadDatasets();
  }, []);

  async function loadDatasets() {
    try {
      const res = await fetch(`${API_BASE}/datasets`);
      if (res.ok) setDatasets(await res.json());
    } catch {
      // ignore — backend might not be running
    }
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name.trim()) {
      setError("Enter a dataset name");
      return;
    }
    if (!file) {
      setError("Select a CSV file");
      return;
    }
    if (!year) {
      setError("Enter the inspection year");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name.trim());
      formData.append("year", year);

      const res = await fetch(`${API_BASE}/datasets`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Upload failed");
      }

      const result = await res.json();
      setSuccess(result);
      setFile(null);
      setName("");
      setYear("");
      loadDatasets();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="upload" className="relative px-6 py-16 scroll-mt-8">
      <div className="mx-auto max-w-3xl relative">
        {/* Penguin decoration - skiing penguin */}
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

        <form onSubmit={handleUpload} className="space-y-4">
          <Card title="Dataset Info">
            <div className="space-y-4">
              <Input
                label="Dataset Name"
                placeholder="e.g. 2015 Inspection Run"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Inspection Year"
                type="number"
                placeholder="e.g. 2015"
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

          {error && (
            <Card>
              <div className="flex items-center gap-3">
                <AlertCircle className="h-4 w-4 shrink-0 text-status-critical" />
                <p className="text-sm text-status-critical">{error}</p>
              </div>
            </Card>
          )}

          {success && (
            <Card>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-status-success" />
                <div>
                  <p className="text-sm font-medium text-status-success">
                    Stored in MongoDB
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    {success.row_count} rows &middot; {success.columns.length}{" "}
                    columns &middot; ID: {success.id}
                  </p>
                </div>
              </div>
            </Card>
          )}

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

        <div className="mt-6">
          <Card
            title="Stored Datasets"
            subtitle={`${datasets.length} datasets in MongoDB`}
          >
            {datasets.length === 0 ? (
              <p className="text-sm text-text-muted py-4 text-center">
                No datasets uploaded yet
              </p>
            ) : (
              <div className="space-y-3">
                {datasets.map((ds) => (
                  <div
                    key={ds.id}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Database className="h-4 w-4 text-accent-primary" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-text-primary">
                            {ds.name}
                          </p>
                          <Badge variant="matched">{ds.year}</Badge>
                        </div>
                        <p className="text-xs text-text-muted">
                          {ds.row_count} rows &middot; {ds.filename} &middot;{" "}
                          {new Date(ds.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs font-mono text-text-muted">
                      {ds.id.slice(0, 8)}...
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
