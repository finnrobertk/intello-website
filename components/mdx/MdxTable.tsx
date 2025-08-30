import { cn } from "@/lib/utils";
export function Table(props: React.HTMLAttributes<HTMLTableElement>) {
  return <table {...props} className={cn("w-full border-separate border-spacing-0 text-sm", props.className)} />;
}
export function THead(props: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead {...props} className={cn("[&_th]:bg-neutral-100 dark:[&_th]:bg-neutral-900/40", props.className)} />;
}
export function TBody(props: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props} className={cn("[&_td]:border-t [&_td]:border-neutral-200 dark:[&_td]:border-neutral-800", props.className)} />;
}
export function Tr(props: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr {...props} className={cn("hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40", props.className)} />;
}
export function Th(props: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th {...props} className={cn("px-3 py-2 text-left font-semibold", props.className)} />;
}
export function Td(props: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td {...props} className={cn("px-3 py-2 align-top", props.className)} />;
}
