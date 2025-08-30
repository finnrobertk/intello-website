import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type Props = {
  linkedinUrl?: string;
  githubUrl?: string;
  email?: string;
};

export default function Footer({
  linkedinUrl = "https://www.linkedin.com/in/finnrobert",
  githubUrl = "https://github.com/finnrobertk",
  email = "hello@intello.no",
}: Props) {
  const t = useTranslations("footer");

  const iconBase =
    "h-5 w-5 transition-colors transition-transform duration-200 ease-out hover:scale-110";

  return (
    <footer className="border-t mt-12 py-6">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Intello. {t("rights")}
        </p>
        <div className="flex items-center gap-4">
          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2]"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={iconBase} />
          </a>

          {/* GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#181717] dark:hover:text-gray-300"
            aria-label="GitHub"
          >
            <FaGithub className={iconBase} />
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="hover:text-emerald-500"
            aria-label="Send email"
          >
            <Mail className={iconBase} />
          </a>
        </div>
      </div>
    </footer>
  );
}
