"use client";

import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type Props = {
  linkedinUrl?: string;
  githubUrl?: string;
  email?: string;
};

export default function Footer({
  linkedinUrl = "https://www.linkedin.com/in/finnrobert/",
  githubUrl = "https://github.com/finnrobertk",
  email = "hello@intello.no",
}: Props) {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  // SVGs inherit color from <a> (currentColor). Scale triggers on link hover via group.
  const iconBase = "h-5 w-5 transition-transform duration-200 ease-out group-hover:scale-110";

  return (
    <footer className="border-t mt-12 py-6">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-300">
        <div className="flex flex-col items-center sm:items-start">
          <p>© {year} Intello. {t("rights")}</p>
          <p className="text-xs text-muted-foreground mt-1">Building scalable systems with clarity.</p>
        </div>
        <div className="mt-2 flex items-center gap-2 sm:gap-3">
          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-[#0A66C2]"
          >
            <FaLinkedin className={iconBase} />
          </a>
          {/* GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-[#181717] dark:hover:text-gray-300"
          >
            <FaGithub className={iconBase} />
          </a>
          {/* Email */}
          <a
            href={`mailto:${email}`}
            aria-label="Send email"
            className="group inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-emerald-500"
          >
            <Mail className={iconBase} />
          </a>
        </div>
      </div>
    </footer>
  );
}
