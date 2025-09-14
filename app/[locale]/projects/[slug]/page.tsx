import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProject } from "@/lib/projects";
import { mdxComponents } from "@/components/mdx";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");

  let meta, content;
  try {
    const res = getProject(locale, slug);
    meta = res.meta;
    content = res.content;
  } catch (e) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 md:px-0 py-12 md:py-16">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
        <div className="mt-2 text-sm text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
          {meta.role && (
            <span><span className="font-medium">{t("labels.role")}:</span> {meta.role}</span>
          )}
          {meta.year && (
            <span><span className="font-medium">{t("labels.year")}:</span> {meta.year}</span>
          )}
        </div>
        {meta.tags?.length ? (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">{t("labels.tags")}:</span>
            {meta.tags.map((tag) => (
              <span key={tag} className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <article className="prose prose-slate dark:prose-invert">
        <MDXRemote source={content} components={mdxComponents} />
      </article>

      <Link href={`/${locale}/projects`} className="mt-8 inline-block text-primary underline underline-offset-4">
        ← {t("back")}
      </Link>
    </main>
  );
}
