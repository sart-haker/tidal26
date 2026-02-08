import { TopBar } from "@/components/layout/TopBar";

export default function Home() {
  return (
    <>
      <TopBar
        title="Dashboard"
        subtitle="Pipeline ILI anomaly tracking overview"
      />
      <div className="p-6">
        <div className="flex items-center justify-center h-64 rounded-xl border border-border border-dashed bg-surface/50">
          <p className="text-text-muted text-sm">
            Dashboard coming soon. Visit{" "}
            <a href="/playground" className="text-accent-primary hover:underline">
              /playground
            </a>{" "}
            to see all components.
          </p>
        </div>
      </div>
    </>
  );
}
