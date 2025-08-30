"use client";

import { cn } from "@/lib/utils";
import Icon from "@/src/assets/brand/intello-icon-currentColor.svg";

type Props = {
  className?: string;
  title?: string;
  "aria-label"?: string;
};

// Icon-only logo using an SVG that follows currentColor.
// Control size and color via Tailwind (e.g., "h-8 w-8 text-primary dark:text-white").
export default function IconLogo({ className, title = "Intello", ...rest }: Props) {
  return (
    <Icon
      className={cn("h-8 w-8 block fill-current", className)}
      role="img"
      aria-label={rest["aria-label"] ?? "Intello logo"}
      title={title}
    />
  );
}
