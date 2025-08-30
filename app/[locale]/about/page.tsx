import fs from 'node:fs';
import path from 'node:path';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {MDXRemote} from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx';

type PageProps = {params: Promise<{locale: string}>};

const SUPPORTED_LOCALES = ['en', 'nb'] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

function resolveLocale(localeParam: string): Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(localeParam)
    ? (localeParam as Locale)
    : 'en';
}

function readAboutMdx(locale: Locale): string | null {
  const filePath = path.join(process.cwd(), 'content', 'about', `${locale}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

export default async function AboutPage({params}: PageProps) {
  const { locale: rawLocale } = await params;
  setRequestLocale(rawLocale);

  const locale = resolveLocale(rawLocale);
  let source = readAboutMdx(locale);

  if (!source && locale !== 'en') {
    source = readAboutMdx('en');
  }

  if (!source) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 md:px-0 py-12 md:py-16 space-y-8 md:space-y-10">
      <article className="prose prose-slate dark:prose-invert">
        <MDXRemote source={source} components={mdxComponents} />
      </article>
    </main>
  );
}
