import * as React from "react";
import { cn } from "@/lib/cn";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", type = "button", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50";

    const variants: Record<string, string> = {
      default:
        "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200",
      outline:
        "border border-neutral-200 bg-transparent text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900",
    };

    return (
      <button ref={ref} type={type} className={cn(base, variants[variant], "px-5 py-2.5", className)} {...props} />
    );
  }
);
Button.displayName = "Button";
