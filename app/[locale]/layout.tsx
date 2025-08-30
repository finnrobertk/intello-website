import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'Intello',
  description: 'Intello consulting company website',
  icons: {
    icon: [
      { url: '/Favicon Transparent.ico', type: 'image/x-icon' },
      { url: '/Favicon Original.ico', type: 'image/x-icon' }
    ],
    shortcut: '/Favicon Transparent.ico',
    apple: '/Favicon Original.ico'
  }
};

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'nb'}];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 antialiased">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
