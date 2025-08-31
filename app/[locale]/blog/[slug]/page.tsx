import fs from "node:fs";
import { getTranslations } from "next-intl/server";
import { getBlogFile } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const file = getBlogFile(locale, slug);
  const source = fs.readFileSync(file, "utf8");
  const t = await getTranslations("blog");
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <article className="prose prose-slate dark:prose-invert">
        <MDXRemote source={source} />
      </article>
      <a
        href={`/${locale}/blog`}
        className="mt-8 inline-block text-primary underline underline-offset-4"
      >
        ← {t("back")}
      </a>
    </main>
  );
}
