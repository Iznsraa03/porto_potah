'use client';
import { useState } from 'react';
import { SectionTitle } from '@/components/atoms/SectionTitle/SectionTitle';
import { ProjectCard } from '@/components/molecules/ProjectCard/ProjectCard';
import { ProjectModal } from '@/components/molecules/ProjectModal/ProjectModal';
import { Button } from '@/components/atoms/Button/Button';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data';

type Project = typeof projects[number];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 px-6 sm:px-16 bg-[#050505]" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-6xl">
          <SectionTitle subtitle="What I've Built" titlePart1="Featured" titlePart2="Projects" />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button
              href="https://github.com/Iznsraa03"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="group"
            >
              <FaGithub className="text-lg transition-transform duration-300 group-hover:scale-110" />
              <span>Lihat Repositori GitHub</span>
            </Button>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
