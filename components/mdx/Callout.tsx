'use client';
import { cn } from "@/lib/utils";

type Props = {
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children: React.ReactNode;
  className?: string;
};
const COLORS: Record<NonNullable<Props['type']>, string> = {
  info:    "border-blue-300 bg-blue-50 text-blue-900 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-100",
  success: "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-100",
  warning: "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-100",
  danger:  "border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-100",
};
export default function Callout({ type='info', title, children, className }: Props) {
  return (
    <div className={cn("my-6 rounded-2xl border px-4 py-3", COLORS[type], className)}>
      {title && <div className="mb-1 font-semibold tracking-tight">{title}</div>}
      <div className="leading-7">{children}</div>
    </div>
  );
}
