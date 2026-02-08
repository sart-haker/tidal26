import Link from "next/link";
import { Upload, Blocks } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-bubble text-4xl md:text-5xl text-text-primary mb-4">
          RCP Track
        </h1>
        <p className="text-text-muted mb-10">
          Pipeline ILI anomaly tracking &amp; analysis
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/upload">
            <Button
              variant="tidal-primary"
              size="lg"
              leftIcon={<Upload className="h-4 w-4" />}
            >
              Upload &amp; Analyze
            </Button>
          </Link>
          <Link href="/playground">
            <Button
              variant="tidal-outline"
              size="lg"
              leftIcon={<Blocks className="h-4 w-4" />}
            >
              Playground
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
