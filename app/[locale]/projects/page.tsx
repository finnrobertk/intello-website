import {useTranslations} from 'next-intl';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const t = useTranslations('Pages.projects');
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard title="Case A" description={t('empty')} />
        <ProjectCard title="Case B" description={t('empty')} />
      </div>
    </div>
  );
}
