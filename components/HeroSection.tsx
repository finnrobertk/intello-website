import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden rounded-2xl border bg-white/70 px-6 py-20 shadow-sm backdrop-blur-sm sm:px-10 dark:border-neutral-900 dark:bg-neutral-950/70">
      {/* Subtle background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,0,0,0.06),transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 -z-10 bg-gradient-to-r from-primary/10 to-transparent dark:from-primary/20" />

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50">
          {t('title')}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-300">
          {t('subtitle')}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* Primary CTA: Hire me */}
          <Link href={`/${locale}/contact`}>
            <Button variant="default" className="bg-primary text-white hover:opacity-90">
              {t('cta')}
            </Button>
          </Link>
          {/* Secondary CTAs: Read more, Contact */}
          <Link href={`/${locale}/about`}>
            <Button variant="outline">{useTranslations('Pages.home')('cta')}</Button>
          </Link>
          <Link href={`/${locale}/contact`}>
            <Button variant="outline">{useTranslations('Pages.home')('contactCta')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
