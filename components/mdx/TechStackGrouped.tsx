import TechStack from "./TechStack";
import { techStack as defaultStack } from "@/config/tech-stack";
import type { TechItem, TechCategory } from "@/config/tech-stack";
import { getTranslations } from "next-intl/server";

export type TechStackGroupedProps = {
  items?: TechItem[];
  order?: TechCategory[];
  hideEmpty?: boolean;
  className?: string;
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
}: TechStackGroupedProps) {
  const t = await getTranslations();

  const map = new Map<TechCategory, TechItem[]>();
  for (const cat of order) map.set(cat, []);
  for (const item of items) {
    const arr = map.get(item.category) ?? map.get("other")!;
    arr.push(item);
  }

  return (
    <section className={className}>
      {order.map((cat) => {
        const list = map.get(cat) ?? [];
        if (hideEmpty && list.length === 0) return null;
        return (
          <div key={cat} className="mb-6 last:mb-0">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t(`categories.${cat}`)}
            </h3>
            <TechStack items={list} />
          </div>
        );
      })}
    </section>
  );
}
