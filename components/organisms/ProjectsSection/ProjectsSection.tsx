import { SectionTitle } from '@/components/atoms/SectionTitle/SectionTitle';
import { ProjectCard } from '@/components/molecules/ProjectCard/ProjectCard';
import { projects } from '@/data';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-16 bg-[#050505]" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="What I've Built" titlePart1="Featured" titlePart2="Projects" />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
