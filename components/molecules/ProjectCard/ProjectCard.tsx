import Image from 'next/image';
import { TechBadge } from '@/components/atoms/Badge/Badge';

type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  status?: 'Done' | 'On Progress';
  gradient?: string;
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const isDone = project.status === 'Done';

  return (
    <article
      id={`project-card-${project.id}`}
      onClick={onClick}
      className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 cursor-pointer transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl text-zinc-700">
            📁
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Status badge */}
        {project.status && (
          <div
            className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium"
            style={{
              borderColor: isDone ? 'rgba(34,197,94,0.3)' : 'rgba(245,158,11,0.3)',
              background: isDone ? 'rgba(34,197,94,0.07)' : 'rgba(245,158,11,0.07)',
              color: isDone ? '#22c55e' : '#f59e0b',
            }}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${isDone ? 'bg-green-500' : 'bg-amber-400'}`} />
            {project.status}
          </div>
        )}

        <h3 className="mb-2 text-base font-bold text-white leading-snug transition-colors duration-200 group-hover:text-blue-300">
          {project.title}
        </h3>

        <p className="mb-4 text-xs text-zinc-500 leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechBadge key={tag} text={tag} />
          ))}
        </div>

        {/* Click hint */}
        <div className="mt-4 flex items-center gap-1 text-xs text-zinc-600 transition-colors duration-200 group-hover:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span>Lihat detail</span>
        </div>
      </div>
    </article>
  );
}
