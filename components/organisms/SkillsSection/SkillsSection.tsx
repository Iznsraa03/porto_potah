import { SectionTitle } from '@/components/atoms/SectionTitle/SectionTitle';
import { SkillCard } from '@/components/molecules/SkillCard/SkillCard';
import { ScrollStackClient, ScrollStackItem } from '@/components/ClientComponents';
import { skills } from '@/data';

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-black" aria-labelledby="skills-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />

      <div className="mx-auto max-w-6xl pt-24 px-6 sm:px-16">
        <SectionTitle subtitle="What I Work With" titlePart1="Technical" titlePart2="Skills" />
      </div>

      <ScrollStackClient
        itemDistance={80}
        itemStackDistance={35}
        baseScale={0.8}
        className="w-full mx-auto max-w-6xl"
        useWindowScroll={true}
      >
        {skills.map((skill) => (
          <ScrollStackItem key={skill.category}>
            <SkillCard skill={skill} />
          </ScrollStackItem>
        ))}
      </ScrollStackClient>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />
    </section>
  );
}
