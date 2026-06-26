import { TechBadge } from '@/components/atoms/Badge/Badge';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  gradient: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={`project-card-${project.id}`}
      className={`project-card rounded-2xl bg-gradient-to-br ${project.gradient} p-7 shadow-sm cursor-default`}
    >
      <div className="mb-5 text-3xl">{project.icon}</div>
      <h3 className="text-lg font-bold text-white mb-3 leading-snug">{project.title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechBadge key={tag} text={tag} />
        ))}
      </div>
    </article>
  );
}
