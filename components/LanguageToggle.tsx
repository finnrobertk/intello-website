"use client";
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const search = useSearchParams();
  const router = useRouter();
  const t = useTranslations('Language');

  const other = locale === 'en' ? 'nb' : 'en';

  return (
    <button
      className="rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={() => {
        // Replace the first path segment (locale)
        const segments = pathname.split('/');
        // ['', 'en', '...'] -> index 1
        if (segments.length > 1) {
          segments[1] = other;
        }
        const newPath = segments.join('/') || `/${other}`;
        const qs = search.toString();
        router.replace(qs ? `${newPath}?${qs}` : newPath);
      }}
      aria-label={other === 'en' ? t('english') : t('norwegian')}
    >
      {other === 'en' ? t('english') : t('norwegian')}
    </button>
  );
}
