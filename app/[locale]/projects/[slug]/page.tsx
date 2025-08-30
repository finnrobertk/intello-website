import fs from "node:fs";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectFile } from "@/lib/projects";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");

  const file = getProjectFile(locale, slug);
  const source = fs.readFileSync(file, "utf8");

  return (
    <main className="mx-auto max-w-3xl px-4 md:px-0 py-12 md:py-16">
      <article className="prose prose-slate dark:prose-invert">
        <MDXRemote source={source} />
      </article>
      <Link
        href={`/${locale}/projects`}
        className="mt-8 inline-block text-primary underline underline-offset-4"
      >
        ← {t("back")}
      </Link>
    </main>
  );
}
