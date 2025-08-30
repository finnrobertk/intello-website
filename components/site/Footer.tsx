"use client";

import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

type Props = {
  linkedinUrl?: string;
  email?: string;
};

export default function Footer({
  linkedinUrl = "https://www.linkedin.com/in/your-handle",
  email = "hello@intello.no",
}: Props) {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t mt-12 py-6">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-300">
        <p>
          © {year} Intello. {t("rights")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${email}`}
            className="transition-colors hover:text-primary"
            aria-label="Send email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
