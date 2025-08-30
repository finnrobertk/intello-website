import { cn } from "@/lib/utils";
import { techStack, TechItem } from "@/config/tech-stack";

type Size = "regular" | "compact";

const COLORS: Record<NonNullable<TechItem["category"]>, string> = {
  backend: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100",
  frontend: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100",
  cloud: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-100",
  infra: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
  ai: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
  other: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100",
};

export default function TechStack({ items = techStack, size = "regular" }: { items?: TechItem[]; size?: Size }) {
  return (
    <div className={cn("flex flex-wrap gap-2", size === "compact" && "gap-1.5")}> 
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <span
            key={i}
            className={cn(
              "flex items-center gap-2 rounded-full font-medium",
              size === "compact" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
              COLORS[item.category ?? "other"]
            )}
          >
            {Icon && <Icon className={cn(size === "compact" ? "h-3.5 w-3.5" : "h-4 w-4")} />}
            {item.label}
          </span>
        );
      })}
    </div>
  );
}
