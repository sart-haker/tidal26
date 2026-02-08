import { cn } from "@/lib/cn";
import Image from "next/image";
import type { ReactNode } from "react";

interface SponsorLogoProps {
  src: string;
  alt: string;
  href?: string;
  className?: string;
}

export function SponsorLogo({ src, alt, href, className }: SponsorLogoProps) {
  const img = (
    <Image
      src={src}
      alt={alt}
      width={160}
      height={48}
      className={cn(
        "h-12 max-w-[160px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
        className
      )}
    />
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {img}
      </a>
    );
  }

  return img;
}

interface SponsorGridProps {
  children: ReactNode;
  className?: string;
}

export function SponsorGrid({ children, className }: SponsorGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center",
        className
      )}
    >
      {children}
    </div>
  );
}
