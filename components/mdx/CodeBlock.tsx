import React from "react";

type Props = React.HTMLAttributes<HTMLPreElement> & {
  'data-lang'?: string;
};
export default function CodeBlock({ children, className, ...rest }: Props) {
  // Minimal, theme-friendly code block; can be upgraded to Shiki later
  return (
    <pre
      {...rest}
      className={
        "my-4 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm dark:border-neutral-800 dark:bg-neutral-900/40 " +
        (className ?? "")
      }
    >
      <code className="leading-6">{children}</code>
    </pre>
  );
}
