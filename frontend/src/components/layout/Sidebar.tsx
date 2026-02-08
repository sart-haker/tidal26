"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GitCompare,
  TrendingUp,
  Link2,
  Blocks,
  Activity,
  Upload,
  FileText,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/upload", label: "Upload & Analyze", icon: Upload },
  { href: "/results", label: "Results", icon: FileText },
  { href: "/anomalies", label: "Anomaly Matching", icon: GitCompare },
  { href: "/growth", label: "Growth Analysis", icon: TrendingUp },
  { href: "/welds", label: "Weld Alignment", icon: Link2 },
  { href: "/playground", label: "Playground", icon: Blocks },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-surface">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-border">
        <Activity className="h-6 w-6 text-accent-primary" />
        <div>
          <h1 className="text-sm font-bold text-text-primary tracking-wide">
            RCP Track
          </h1>
          <p className="text-[10px] text-text-muted">Pipeline ILI Analysis</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent-primary/10 text-accent-primary border-l-2 border-accent-primary"
                  : "text-text-secondary hover:bg-surface-hover hover:text-text-primary border-l-2 border-transparent"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-border px-5 py-3">
        <p className="text-[10px] text-text-muted">tidal26 v1.0</p>
      </div>
    </aside>
  );
}
