import {getTranslations, setRequestLocale} from 'next-intl/server';
import ProjectCard from '@/components/ProjectCard';

export default async function ProjectsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Pages.projects');
  const p = await getTranslations('ProjectList');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title={p('spk.title')}
          description={p('spk.description')}
          tags={p.raw('spk.tags') as string[]}
        />
        <ProjectCard
          title={p('artemova.title')}
          description={p('artemova.description')}
          tags={p.raw('artemova.tags') as string[]}
        />
        <ProjectCard
          title={p('aimvp.title')}
          description={p('aimvp.description')}
          tags={p.raw('aimvp.tags') as string[]}
        />
      </div>
    </div>
  );
}

