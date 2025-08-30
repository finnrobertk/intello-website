import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/site/Footer';
import StructuredData from '@/components/seo/StructuredData';
import { Geist, Geist_Mono } from 'next/font/google';

const SITE = 'https://intello.no';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

type LocaleParams = { locale: string };

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nb' }];
}

// Dynamic metadata per locale + alternates.languages
export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleParams>; // 👈 match Next 15 LayoutProps
}): Promise<Metadata> {
  const { locale } = await params; // works even if a plain object is passed at runtime

  const isNorwegian = locale === 'nb';
  const descriptionNb =
    'Intello bygger moderne løsninger: mikrotjenester, Kotlin/Spring Boot, sky og raske frontend-opplevelser.';
  const descriptionEn =
    'Intello builds modern solutions: microservices, Kotlin/Spring Boot, cloud and fast frontend experiences.';

  return {
    title: { default: 'Intello', template: '%s — Intello' },
    description: isNorwegian ? descriptionNb : descriptionEn,
    alternates: {
      canonical: `${SITE}/${locale}`,
      languages: {
        nb: `${SITE}/nb`,
        en: `${SITE}/en`,
      },
    },
    openGraph: {
      title: 'Intello',
      description: isNorwegian ? descriptionNb : descriptionEn,
      url: `${SITE}/${locale}`,
      siteName: 'Intello',
      locale: isNorwegian ? 'nb_NO' : 'en_US',
      alternateLocale: [isNorwegian ? 'en_US' : 'nb_NO'],
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Intello' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Intello',
      description: isNorwegian ? descriptionNb : descriptionEn,
      images: ['/og.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LocaleParams>; // 👈 match Next 15 LayoutProps
}) {
  const { locale } = await params; // safe to await either a Promise or a plain object
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <StructuredData />
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 antialiased">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
