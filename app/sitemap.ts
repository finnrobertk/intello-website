// app/sitemap.ts
import type { MetadataRoute } from 'next';
import fs from 'node:fs';
import path from 'node:path';

// 1) Hent locales fra generateStaticParams i [locale]/layout
import { generateStaticParams as getLocaleParams } from './[locale]/layout';

const SITE = 'https://intello.no';

// Justér om du har flere statiske sider under hvert språk
const STATIC_PATHS = ['', 'about', 'projects', 'contact'];

/**
 * Finn prosjekt-slugs fra mappestruktur.
 * Støtter to konvensjoner:
 *  A) app/[locale]/projects/[slug]/page.mdx
 *  B) content/projects/[slug].mdx
 */
function getProjectSlugs(locales: string[]): { slug: string; mtime?: Date }[] {
  const seen = new Map<string, Date | undefined>();

  // A) app/[locale]/projects/[slug]/page.mdx
  const appDir = path.join(process.cwd(), 'app');
  for (const locale of locales) {
    const projectsDir = path.join(appDir, locale, 'projects');
    if (fs.existsSync(projectsDir) && fs.statSync(projectsDir).isDirectory()) {
      for (const entry of fs.readdirSync(projectsDir)) {
        const slugDir = path.join(projectsDir, entry);
        if (fs.statSync(slugDir).isDirectory()) {
          const pageMdx = path.join(slugDir, 'page.mdx');
          if (fs.existsSync(pageMdx)) {
            const stat = fs.statSync(pageMdx);
            const prev = seen.get(entry);
            const newest = prev && stat.mtime < prev ? prev : stat.mtime;
            seen.set(entry, newest);
          }
        } else if (entry.endsWith('.mdx')) {
          // Alternativ: app/[locale]/projects/[slug].mdx
          const slug = entry.replace(/\.mdx$/, '');
          const stat = fs.statSync(path.join(projectsDir, entry));
          const prev = seen.get(slug);
          const newest = prev && stat.mtime < prev ? prev : stat.mtime;
          seen.set(slug, newest);
        }
      }
    }
  }

  // B) content/projects/[slug].mdx
  const contentProjects = path.join(process.cwd(), 'content', 'projects');
  if (fs.existsSync(contentProjects) && fs.statSync(contentProjects).isDirectory()) {
    for (const entry of fs.readdirSync(contentProjects)) {
      if (entry.endsWith('.mdx')) {
        const slug = entry.replace(/\.mdx$/, '');
        const stat = fs.statSync(path.join(contentProjects, entry));
        const prev = seen.get(slug);
        const newest = prev && stat.mtime < prev ? prev : stat.mtime;
        seen.set(slug, newest);
      }
    }
  }

  return Array.from(seen.entries()).map(([slug, mtime]) => ({ slug, mtime }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = getLocaleParams().map((l) => l.locale); // ['en', 'nb'] fra din layout
  const entries: MetadataRoute.Sitemap = [];

  // Statiske sider per språk
  for (const locale of locales) {
    for (const p of STATIC_PATHS) {
      const url = p ? `${SITE}/${locale}/${p}` : `${SITE}/${locale}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: p === '' ? 1 : 0.7,
      });
    }
  }

  // Prosjekt-slugs → sider per språk
  const projects = getProjectSlugs(locales);
  for (const { slug, mtime } of projects) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE}/${locale}/projects/${slug}`,
        lastModified: mtime ?? new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return entries;
}
