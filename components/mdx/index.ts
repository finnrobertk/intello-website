import Callout from "./Callout";
import ThemedLink from "./ThemedLink";
import MdxImage from "./MdxImage";
import CodeBlock from "./CodeBlock";
import { Table, THead, TBody, Tr, Th, Td } from "./MdxTable";

export const mdxComponents = {
  // HTML tag overrides:
  a: ThemedLink,
  img: MdxImage,
  pre: CodeBlock,
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: Tr,
  th: Th,
  td: Td,

  // Custom components:
  Callout,
};

export type MdxComponents = typeof mdxComponents;
