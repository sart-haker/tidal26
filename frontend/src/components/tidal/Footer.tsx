import { cn } from "@/lib/cn";
import { Activity } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("relative bg-background", className)}>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2.5">
            <Activity className="h-5 w-5 text-accent-primary" />
            <span className="font-bubble text-lg text-white">PenguinPipe</span>
          </div>
          <p className="text-sm text-text-secondary">
            Henry Pham &middot; Ronielle Maranan &middot; Sarthak Giri &middot; Aniruddha Kasture
          </p>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} PenguinPipe &middot; Built at TIDAL Hack &apos;26
          </p>
        </div>
      </div>
    </footer>
  );
}
