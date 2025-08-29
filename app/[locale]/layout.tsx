import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import {Locale} from '@/i18n';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

export const metadata: Metadata = {
  title: 'Intello',
  description: 'Intello consulting company website'
};

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'nb'}];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: Locale};
}) {
  unstable_setRequestLocale(params.locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={params.locale}>
      <header className="flex items-center justify-between py-6">
        <Navbar />
        <LanguageToggle />
      </header>
      <main className="antialiased max-w-5xl mx-auto px-6">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
