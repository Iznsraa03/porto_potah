import { HeroSection } from '@/components/organisms/HeroSection/HeroSection';
import { SkillsSection } from '@/components/organisms/SkillsSection/SkillsSection';
import { ProjectsSection } from '@/components/organisms/ProjectsSection/ProjectsSection';

export function HomeTemplate() {
  return (
    <main id="main-content" className="flex flex-col flex-1">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
