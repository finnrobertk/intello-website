"use client";

import { useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function ContactSentPage() {
  const t = useTranslations("contact.sent");
  const locale = useLocale();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1
        ref={headingRef}
        className="text-3xl font-bold tracking-tight mb-4"
        tabIndex={-1}
        id="thankyou-title"
      >
        {t("title")}
      </h1>
      <p className="text-muted-foreground mb-8">{t("body")}</p>
      <Link
        href={`/${locale}`}
        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
      >
        ← Back to home
      </Link>
    </main>
  );
}
