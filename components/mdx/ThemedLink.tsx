'use client';
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Link> & { underline?: boolean };
export default function ThemedLink({ className, underline=true, ...props }: Props) {
  return (
    <Link
      {...props}
      className={cn(
        "font-medium text-blue-600 dark:text-blue-400 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500/30 rounded",
        underline && "underline underline-offset-4",
        className
      )}
    />
  );
}
