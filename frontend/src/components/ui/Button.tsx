"use client";

import { cn } from "@/lib/cn";
import type { ButtonVariant, ButtonSize } from "@/lib/types";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-primary text-white hover:bg-accent-light active:bg-accent-primary/80",
  secondary:
    "bg-surface text-text-primary hover:bg-surface-hover border border-border",
  outline:
    "bg-transparent text-text-secondary border border-border hover:bg-surface-hover hover:text-text-primary",
  ghost:
    "bg-transparent text-text-secondary hover:bg-surface-hover hover:text-text-primary",
  danger:
    "bg-status-critical text-white hover:bg-status-critical/80 active:bg-status-critical/60",
  "tidal-primary":
    "bg-accent-primary text-white hover:bg-blue-600 active:bg-blue-700 shadow-lg shadow-blue-500/25",
  "tidal-outline":
    "bg-transparent text-accent-primary border-2 border-accent-primary hover:bg-accent-primary hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2.5 text-base",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  );
}
