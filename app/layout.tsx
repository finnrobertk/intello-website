import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const SITE = "https://intello.no";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Intello",
    template: "%s — Intello",
  },
  description:
    "Intello bygger moderne løsninger: mikrotjenester, Kotlin/Spring Boot, sky og raske frontend-opplevelser.",
  applicationName: "Intello",
  alternates: {
    canonical: "/",
    languages: {
      "nb-NO": "/nb",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Intello",
    title: "Intello",
    description:
      "Moderne løsninger: mikrotjenester, Kotlin/Spring Boot, sky og raske frontend-opplevelser.",
    locale: "nb_NO",
    alternateLocale: ["en_US"],
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Intello" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intello",
    description:
      "Moderne løsninger: mikrotjenester, Kotlin/Spring Boot, sky og raske frontend-opplevelser.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/Favicon Transparent.ico", type: "image/x-icon" },
      { url: "/Favicon Original.ico", type: "image/x-icon" },
    ],
    shortcut: "/Favicon Transparent.ico",
    apple: "/Favicon Original.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
