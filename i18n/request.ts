import {getRequestConfig} from 'next-intl/server';
import * as nextIntlServer from 'next-intl/server';
import type {AbstractIntlMessages} from 'next-intl';
import en from '@/messages/en';
import nb from '@/messages/nb';

const dictionaries = {en, nb} as const;

export default getRequestConfig(async () => {
  let locKey: keyof typeof dictionaries = 'en';
  try {
    const reqLoc = (nextIntlServer as any).requestLocale as
      | (() => Promise<string>)
      | undefined;
    if (typeof reqLoc === 'function') {
      const resolved = await reqLoc();
      if (resolved && resolved in dictionaries) {
        locKey = resolved as keyof typeof dictionaries;
      }
    }
  } catch (e) {
    // Silent fallback to default 'en'
  }
  return {
    locale: locKey,
    // We use arrays in our messages (for paragraphs/highlights). Cast to satisfy
    // next-intl typing which expects AbstractIntlMessages.
    messages: dictionaries[locKey] as unknown as AbstractIntlMessages
  };
});
