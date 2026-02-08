"use client";

import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

interface FaqItem {
  icon: ReactNode;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "rounded-2xl bg-white/15 backdrop-blur-sm p-4 md:p-6",
        className
      )}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "border-b border-white/20 last:border-b-0",
          )}
        >
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="flex items-center gap-3 w-full py-4 text-left group"
          >
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-text-primary/70">
              {item.icon}
            </div>
            <span className="flex-1 text-sm md:text-base font-medium text-text-primary/90">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-text-primary/50 transition-transform duration-200 flex-shrink-0",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          {openIndex === index && (
            <div className="pb-4 pl-12 pr-4 text-sm text-text-secondary leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
