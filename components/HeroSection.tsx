import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden rounded-2xl border bg-white/70 px-6 py-20 shadow-sm backdrop-blur-sm sm:px-10 dark:border-neutral-900 dark:bg-neutral-950/70">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,0,0,0.06),transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.06),transparent)]" />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50">
          {t('title')}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-300">
          {t('subtitle')}
        </p>
        <div className="flex items-center justify-center">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center rounded-md border border-neutral-200 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 active:bg-neutral-700 dark:border-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
