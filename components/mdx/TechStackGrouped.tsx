import TechStack from "./TechStack";
import { techStack as defaultStack } from "@/config/tech-stack";
import type { TechItem, TechCategory } from "@/config/tech-stack";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";

export type TechStackGroupedProps = {
  items?: TechItem[];
  order?: TechCategory[];
  hideEmpty?: boolean;
  className?: string;
  dividers?: boolean;
  compact?: boolean;
};

const DEFAULT_ORDER: TechCategory[] = [
  "backend",
  "frontend",
  "cloud",
  "infra",
  "ai",
  "other",
];

export default async function TechStackGrouped({
  items = defaultStack,
  order = DEFAULT_ORDER,
  hideEmpty = true,
  className,
  dividers = false,
  compact = false,
}: TechStackGroupedProps) {
  const t = await getTranslations();

  const map = new Map<TechCategory, TechItem[]>();
  for (const cat of order) map.set(cat, []);
  for (const item of items) {
    const arr = map.get(item.category) ?? map.get("other")!;
    arr.push(item);
  }

  return (
    <section className={cn("space-y-4 sm:space-y-0", className)}>
      {order
        .filter((cat) => {
          const list = map.get(cat) ?? [];
          return hideEmpty ? list.length > 0 : true;
        })
        .map((cat, idx, arr) => {
          const list = map.get(cat) ?? [];
          const isLast = idx === arr.length - 1;
          return (
            <div
              key={cat}
              className={cn(
                compact ? "pb-4" : "pb-6",
                dividers && !isLast && "border-b border-border",
                dividers && !isLast && (compact ? "mb-4" : "mb-6")
              )}
            >
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {t(`categories.${cat}`)}
              </h3>
              <TechStack items={list} size={compact ? "compact" : "regular"} />
            </div>
          );
        })}
    </section>
  );
}
