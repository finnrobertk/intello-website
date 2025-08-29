import {useTranslations} from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');
  return (
    <section className="py-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
    </section>
  );
}
