import {getTranslations, setRequestLocale} from 'next-intl/server';

export default async function ContactPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Pages.contact');
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p className="text-gray-600 dark:text-gray-300">{t('body')}</p>
    </div>
  );
}
