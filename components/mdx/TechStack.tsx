'use client';

import { cn } from "@/lib/utils";

type TechItem = {
  label: string;
  category?: "backend" | "frontend" | "cloud" | "ai" | "other";
};

type Props = {
  items: TechItem[];
  className?: string;
};

const COLORS: Record<NonNullable<TechItem["category"]>, string> = {
  backend: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100",
  frontend: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100",
  cloud: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-100",
  ai: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
  other: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100",
};

export default function TechStack({ items, className }: Props) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item, i) => (
        <span
          key={i}
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            COLORS[item.category ?? "other"]
          )}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
