'use client';
import { useEffect, useRef } from 'react';
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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [project, onClose]);

  if (!project) return null;

  const isDone = project.status === 'Done';

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="project-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Detail proyek ${project.title}`}
    >
      {/* Modal card */}
      <div className="project-modal-card relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950/95 shadow-2xl backdrop-blur-xl">

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image preview */}
        {project.image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl">
            <Image
              src={project.image}
              alt={`Preview ${project.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Status badge */}
          {project.status && (
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                borderColor: isDone ? 'rgba(34,197,94,0.35)' : 'rgba(245,158,11,0.35)',
                background: isDone ? 'rgba(34,197,94,0.08)' : 'rgba(245,158,11,0.08)',
                color: isDone ? '#22c55e' : '#f59e0b',
              }}
            >
              <span className={`h-2 w-2 rounded-full animate-pulse ${isDone ? 'bg-green-500' : 'bg-amber-400'}`} />
              {project.status}
            </div>
          )}

          {/* Title */}
          <h2 className="mb-3 text-2xl font-bold leading-tight text-white">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-zinc-400">
            {project.longDescription || project.description}
          </p>

          {/* Tech Stack */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechBadge key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
