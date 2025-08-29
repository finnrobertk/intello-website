import {getRequestConfig} from 'next-intl/server';
import en from './messages/en';
import nb from './messages/nb';

export const locales = ['en', 'nb'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries: Record<Locale, any> = {
  en,
  nb
};

export default getRequestConfig(({locale}: {locale: string}) => ({
  messages: dictionaries[(locale as Locale) ?? defaultLocale]
}));
