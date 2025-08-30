import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/contact/ContactForm';
import { CONTACT } from '@/config/contact';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <main className="mx-auto max-w-3xl px-4 md:px-0 py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">{t('intro')}</p>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        <aside className="md:col-span-1 space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t('alt.title')}
          </h2>
          <div className="flex flex-col gap-2">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-accent transition"
            >
              <FaLinkedin className="h-4 w-4" />
              <span>{t('alt.linkedin')}</span>
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-accent transition"
            >
              <FaGithub className="h-4 w-4" />
              <span>{t('alt.github')}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-accent transition"
            >
              <Mail className="h-4 w-4" />
              <span>{t('alt.email')}</span>
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
