import HeroSection from '@/components/HeroSection';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TechStack from '@/components/mdx/TechStack';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Pages.home');

  return (
    <div>
      <HeroSection />
      <section className="py-12">
        <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground text-neutral-600 dark:text-neutral-300">
          {t('intro')}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={`/${locale}/about`} className="w-full sm:w-auto">
            <Button variant="default" className="w-full sm:w-auto">{t('cta')}</Button>
          </Link>
          <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">{t('contactCta')}</Button>
          </Link>
        </div>
      </section>

      {/* Tech Stack section */}
      <section className="mt-12 md:mt-16">
        <div className="mx-auto max-w-3xl px-4 md:px-0">
          <h2 className="text-xl font-semibold tracking-tight mb-4">{t('techStackTitle')}</h2>
          <TechStack
            items={[
              { label: 'Kotlin', category: 'backend' },
              { label: 'Java', category: 'backend' },
              { label: 'Spring Boot', category: 'backend' },
              { label: 'Next.js', category: 'frontend' },
              { label: 'React', category: 'frontend' },
              { label: 'GCP', category: 'cloud' },
              { label: 'Azure', category: 'cloud' },
              { label: 'AI/ML', category: 'ai' }
            ]}
          />
          <Link
            href={`/${locale}/about`}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:opacity-80 mt-4 block text-center"
          >
            {t('viewDetails')}
          </Link>
        </div>
      </section>
    </div>
  );
}

