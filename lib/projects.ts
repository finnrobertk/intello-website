import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content", "projects");

export type ProjectMeta = {
  title: string; slug: string; role?: string; year?: string;
  tags?: string[]; summary?: string;
};

export function getProjectFile(locale: string, slug: string) {
  const candidate = path.join(ROOT, `${slug}.${locale}.mdx`);
  if (fs.existsSync(candidate)) return candidate;
  // fallback to en
  return path.join(ROOT, `${slug}.en.mdx`);
}

export function listProjects(locale: string): ProjectMeta[] {
  const files = fs.readdirSync(ROOT).filter(f => f.endsWith(`.${locale}.mdx`) || f.endsWith(".en.mdx"));
  // prefer locale file when both exist by using a map with slug key
  const map = new Map<string, ProjectMeta>();
  for (const file of files) {
    const src = fs.readFileSync(path.join(ROOT, file), "utf8");
    const { data } = matter(src);
    const meta = data as unknown as ProjectMeta;
    if (typeof meta?.slug === 'string') {
      map.set(meta.slug, meta);
    }
  }
  return Array.from(map.values());
}
