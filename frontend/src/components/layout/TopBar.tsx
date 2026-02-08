import type { ReactNode } from "react";

interface TopBarProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export function TopBar({ title, subtitle, actions }: TopBarProps) {
  return (
    <header className="flex items-center justify-between border-b border-border bg-surface/50 backdrop-blur-sm px-6 py-4">
      <div>
        <h1 className="text-lg font-semibold text-text-primary">{title}</h1>
        {subtitle && (
          <p className="text-xs text-text-muted mt-0.5">{subtitle}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </header>
  );
}
