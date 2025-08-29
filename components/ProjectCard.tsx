type Props = {
  title: string;
  description: string;
};

export default function ProjectCard({title, description}: Props) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
