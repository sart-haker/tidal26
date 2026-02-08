"use client";

import { cn } from "@/lib/cn";
import { Upload, FileText, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";

interface FileUploadProps {
  label: string;
  value: File | null;
  onChange: (file: File | null) => void;
  accept?: string;
  className?: string;
}

export function FileUpload({
  label,
  value,
  onChange,
  accept = ".csv",
  className,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file && (file.name.endsWith(".csv") || file.name.endsWith(".xlsx") || file.name.endsWith(".xls"))) {
        onChange(file);
      }
    },
    [onChange]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] ?? null;
      onChange(file);
    },
    [onChange]
  );

  if (value) {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-xl border border-border bg-surface p-4",
          className
        )}
      >
        <FileText className="h-5 w-5 shrink-0 text-accent-primary" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-text-primary">
            {value.name}
          </p>
          <p className="text-xs text-text-muted">
            {(value.size / 1024).toFixed(1)} KB
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            onChange(null);
            if (inputRef.current) inputRef.current.value = "";
          }}
          className="rounded-lg p-1.5 text-text-muted hover:bg-surface-hover hover:text-text-primary transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-8 transition-colors",
        dragOver
          ? "border-accent-primary bg-accent-primary/5"
          : "border-border hover:border-text-muted",
        className
      )}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <Upload className="h-8 w-8 text-text-muted" />
      <p className="text-sm font-medium text-text-primary">{label}</p>
      <p className="text-xs text-text-muted">
        Drag & drop a CSV file, or click to browse
      </p>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}
