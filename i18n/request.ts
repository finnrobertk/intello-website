import {getRequestConfig} from 'next-intl/server';
import type {AbstractIntlMessages} from 'next-intl';
import en from '@/messages/en';
import nb from '@/messages/nb';

const dictionaries = {en, nb} as const;

export default getRequestConfig(async (ctx: {locale?: string}) => {
  // 1) Prefer explicit route param
  let locKey: keyof typeof dictionaries = (ctx?.locale && ctx.locale in dictionaries
    ? (ctx.locale as keyof typeof dictionaries)
    : 'en');

  // 2) Try requestLocale() to respect cookies/headers if no valid ctx.locale
  if (locKey === 'en') {
    try {
      const {requestLocale} = (await import('next-intl/server')) as unknown as {
        requestLocale?: () => Promise<string>;
      };
      if (typeof requestLocale === 'function') {
        const resolved = await requestLocale();
        if (resolved && resolved in dictionaries) {
          locKey = resolved as keyof typeof dictionaries;
        }
      }
    } catch {}
  }

  return {
    locale: locKey,
    messages: dictionaries[locKey] as unknown as AbstractIntlMessages
  };
});
