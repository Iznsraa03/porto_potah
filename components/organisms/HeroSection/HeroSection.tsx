import { LanyardClient as Lanyard, ShapeGridClient as ShapeGrid } from '@/components/ClientComponents';
import { StatusBadge } from '@/components/atoms/Badge/Badge';
import { Button } from '@/components/atoms/Button/Button';
import { Spotify } from '@/components/Spotify';
import TextType from '@/components/atoms/TextType/TextType';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden pt-16" aria-label="Hero section">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <ShapeGrid
          direction="diagonal"
          speed={0.4}
          squareSize={44}
          borderColor="rgba(59, 130, 246, 0.15)"
          hoverFillColor="rgba(59, 130, 246, 0.25)"
          shape="square"
          hoverTrailAmount={6}
        />
      </div>

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      <div className="relative z-20 flex flex-1 flex-col justify-center px-8 sm:px-16 lg:px-20 py-24 lg:py-0 lg:max-w-[50%]">
        <StatusBadge />

        <TextType
          as="h1"
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          text={[
            "Hi, I'm Potah",
            'Halo Nama Saya Muh Wais Al Qarni',
            'Mobile developer',
            'Fullstack Web Dev',
          ]}
          textClasses={[
            'section-title-gradient',
            'section-title-gradient',
            'text-blue-400',
            'text-blue-400',
          ]}
          typingSpeed={75}
          deletingSpeed={40}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter="|"
          cursorClassName="text-blue-500"
        />

        <p className="mt-4 text-xl sm:text-2xl font-semibold text-blue-400">
          Software Engineer
        </p>

        <div className="mt-6 mb-8 w-full max-w-lg">
          <Spotify />
        </div>

        <div className="flex flex-wrap gap-4">
          <Button href="#projects" id="hero-cta-projects" variant="primary">
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Button>
          <Button href="#skills" id="hero-cta-skills" variant="secondary">
            My Skills
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap gap-8">
          {[
            { label: 'Projects', value: '10+' },
            { label: 'Tech Stack', value: '3+' },
            { label: 'Focus', value: 'Mobile Development' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-xs text-zinc-500 font-medium mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="hero-lanyard" className="relative z-20 flex items-center justify-center lg:flex-1 lg:max-w-[50%] h-[450px] lg:min-h-screen" aria-label="Interactive 3D Lanyard Card">
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          fov={20}
          frontImage="/foto/foto.webp"
          backImage="/lanyard-back.svg"
          lanyardImage="/flutter-logo.svg"
          imageFit="cover"
        />
      </div>
    </section>
  );
}
