"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";

// Replace with your Formspree form ID:
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbaqeqe";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if ((data.get("company") as string)?.length) {
      setStatus("success"); // silently succeed to drop bots
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        // focus message for screen readers
        (document.getElementById("contact-success") as HTMLElement)?.focus?.();
      } else {
        setStatus("error");
        (document.getElementById("contact-error") as HTMLElement)?.focus?.();
      }
    } catch {
      setStatus("error");
      (document.getElementById("contact-error") as HTMLElement)?.focus?.();
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="space-y-4"
      aria-describedby="contact-status"
      suppressHydrationWarning
    >
      {/* Honeypot (hidden from users) */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium">{t("name")}</label>
          <input
            id="name"
            name="name"
            required
            placeholder={t("placeholder.name")}
            autoComplete="name"
            className="h-10 rounded-md border bg-background px-3"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">{t("email")}</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t("placeholder.email")}
            autoComplete="email"
            className="h-10 rounded-md border bg-background px-3"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium">{t("message")}</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={t("placeholder.message")}
          autoComplete="off"
          className="rounded-md border bg-background px-3 py-2"
        />
      </div>

      <div className="pt-2">
        <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 disabled:opacity-60">
          {status === "sending" ? t("sending") : t("submit")}
        </button>
      </div>

      {/* Status messages */}
      {status === "success" && (
        <div
          id="contact-success"
          tabIndex={-1}
          className="rounded-md border border-emerald-600/30 bg-emerald-500/10 px-3 py-2 text-emerald-300"
          role="status"
          aria-live="polite"
        >
          <strong className="block">{t("successTitle")}</strong>
          <span>{t("successBody")}</span>
        </div>
      )}
      {status === "error" && (
        <div
          id="contact-error"
          tabIndex={-1}
          className="rounded-md border border-rose-600/30 bg-rose-500/10 px-3 py-2 text-rose-300"
          role="alert"
          aria-live="assertive"
        >
          <strong className="block">{t("errorTitle")}</strong>
          <span>{t("errorBody")}</span>
        </div>
      )}
    </form>
  );
}
