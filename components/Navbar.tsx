"use client";
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {useState, Suspense} from 'react';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations('Nav');
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/projects`, label: t('projects') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/70 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-8">
          <Link
            href={`/${locale}`}
            className="font-semibold text-neutral-900 transition-colors hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300"
            aria-label="Intello Home"
          >
            Intello
          </Link>
          <div className="hidden md:flex md:items-center md:gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-neutral-900 dark:hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Suspense fallback={null}>
            <LanguageToggle />
          </Suspense>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md border px-2.5 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 active:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white dark:bg-neutral-950 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <div className="flex flex-col gap-3 text-sm">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-2 py-2 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-900 dark:hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2">
                <Suspense fallback={null}>
                  <LanguageToggle />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
