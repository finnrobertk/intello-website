import HeroSection from '@/components/HeroSection';
import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/i18n';

export default async function HomePage({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations('Pages.home');

  return (
    <div>
      <HeroSection />
      <section className="py-12">
        <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground text-neutral-600 dark:text-neutral-300">
          {t('intro')}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={`/${params.locale}/about`} className="w-full sm:w-auto">
            <Button variant="default" className="w-full sm:w-auto">{t('cta')}</Button>
          </Link>
          <Link href={`/${params.locale}/contact`} className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">{t('contactCta')}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
