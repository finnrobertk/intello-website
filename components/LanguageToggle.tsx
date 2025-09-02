"use client";
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const search = useSearchParams();
  const router = useRouter();
  const t = useTranslations('Language');

  const options: Array<{value: 'en' | 'nb'; label: string}> = [
    { value: 'en', label: `🇬🇧 ${t('english')}` },
    { value: 'nb', label: `🇳🇴 ${t('norwegian')}` }
  ];

  return (
    <select
      className="rounded border px-2 py-1 text-sm bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
      value={locale as 'en' | 'nb'}
      aria-label="Language selector"
      onChange={(e) => {
        const target = (e.target.value || 'en') as 'en' | 'nb';
        // Persist preference for next-intl middleware (used for "/")
        try {
          document.cookie = `NEXT_LOCALE=${target}; Path=/; Max-Age=31536000; SameSite=Lax`;
        } catch {}
        // Replace the first path segment with the selected locale
        const segments = pathname.split('/');
        if (segments.length > 1) {
          segments[1] = target;
        } else {
          segments.push(target);
        }
        const newPath = segments.join('/') || `/${target}`;
        const qs = search.toString();
        router.replace(qs ? `${newPath}?${qs}` : newPath);
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
