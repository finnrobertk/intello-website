import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

type Props = {
  title: string;
  description: string;
  tags?: string[];
};

export default function ProjectCard({ title, description, tags = [] }: Props) {
  return (
    <Card className="hover:shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {tags.length > 0 && (
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
