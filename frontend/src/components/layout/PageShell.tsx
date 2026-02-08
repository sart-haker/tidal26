"use client";

import { Sidebar } from "./Sidebar";
import type { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-64 flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
