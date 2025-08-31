import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content", "blog");

export type BlogMeta = {
  title: string; slug: string; date: string;
  tags?: string[]; summary?: string;
};

export function getBlogFile(locale: string, slug: string) {
  const candidate = path.join(ROOT, `${slug}.${locale}.mdx`);
  if (fs.existsSync(candidate)) return candidate;
  return path.join(ROOT, `${slug}.en.mdx`);
}

export function listBlog(locale: string): BlogMeta[] {
  if (!fs.existsSync(ROOT)) return [];
  const files = fs.readdirSync(ROOT).filter(f => f.endsWith(`.${locale}.mdx`) || f.endsWith(".en.mdx"));
  const map = new Map<string, BlogMeta>();
  for (const file of files) {
    const src = fs.readFileSync(path.join(ROOT, file), "utf8");
    const { data } = matter(src);
    if (data?.slug) map.set(data.slug as string, data as BlogMeta);
  }
  return Array.from(map.values()).sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
