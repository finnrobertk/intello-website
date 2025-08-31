import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-black px-6 py-20 sm:px-10">
      {/* Subtle radial decoration inspired by Intello logo */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-indigo-500/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <div className="relative bg-black/70 backdrop-blur-sm rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.05)] p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base text-neutral-200 sm:text-lg">
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
        </div>
      </div>
    </section>
  );
}
