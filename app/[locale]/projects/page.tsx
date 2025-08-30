import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { listProjects } from '@/lib/projects';

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('projects');
  const items = listProjects(locale);

  return (
    <main className="mx-auto max-w-4xl px-4 md:px-0 py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
      <p className="mt-2 text-muted-foreground">{t('intro')}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((p) => (
          <article key={p.slug} className="rounded-xl border p-4 hover:bg-accent/40 transition">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-sm text-muted-foreground">{[p.role, p.year].filter(Boolean).join(' · ')}</p>
            {p.summary && <p className="mt-2 text-sm">{p.summary}</p>}
            {p.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {p.tags.map((tg) => (
                  <span key={tg} className="rounded-full border px-2 py-0.5">
                    {tg}
                  </span>
                ))}
              </div>
            ) : null}
            <Link href={`/${locale}/projects/${p.slug}`} className="mt-4 inline-block text-primary underline underline-offset-4">
              {t('readMore')} →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

