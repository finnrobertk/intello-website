import {useTranslations} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('Pages.about');
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p className="text-gray-600 dark:text-gray-300">{t('body')}</p>
    </div>
  );
}
