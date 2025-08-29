import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'nb'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({locale}: {locale: string}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
