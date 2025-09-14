import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content", "projects");

export type ProjectMeta = {
  title: string;
  slug: string;
  role?: string;
  year?: string;
  tags?: string[];
  summary?: string;
};

function fileFor(locale: string, slug: string) {
  const loc = path.join(ROOT, `${slug}.${locale}.mdx`);
  if (fs.existsSync(loc)) return loc;
  const en = path.join(ROOT, `${slug}.en.mdx`);
  return fs.existsSync(en) ? en : null;
}

export function getProject(locale: string, slug: string): { meta: ProjectMeta; content: string } {
  const file = fileFor(locale, slug);
  if (!file) throw new Error(`Project not found: ${slug} (${locale})`);
  const src = fs.readFileSync(file, "utf8");
  const { data, content } = matter(src);
  const meta = data as ProjectMeta;
  // Validate that the frontmatter slug matches the requested slug
  if (!meta?.slug || meta.slug !== slug) {
    throw new Error(`Project not found: ${slug} (${locale})`);
  }
  return { meta, content };
}

export function listProjects(locale: string): ProjectMeta[] {
  const files = fs.readdirSync(ROOT).filter((f) => f.endsWith(".mdx"));
  // prefer locale file when both exist (map by slug)
  const map = new Map<string, ProjectMeta>();
  for (const f of files) {
    const src = fs.readFileSync(path.join(ROOT, f), "utf8");
    const { data } = matter(src);
    const pm = data as ProjectMeta;
    if (!pm?.slug) continue;
    const isLocale = f.endsWith(`.${locale}.mdx`);
    // write if not exists, or override EN with locale version
    if (!map.has(pm.slug) || isLocale) map.set(pm.slug, pm);
  }
  return Array.from(map.values());
}
