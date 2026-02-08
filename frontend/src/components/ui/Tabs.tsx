"use client";

import { cn } from "@/lib/cn";

interface Tab {
  key: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (key: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div className={cn("flex border-b border-border", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={cn(
            "px-4 py-2.5 text-sm font-medium transition-colors relative",
            activeTab === tab.key
              ? "text-accent-primary"
              : "text-text-muted hover:text-text-secondary"
          )}
        >
          {tab.label}
          {activeTab === tab.key && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
