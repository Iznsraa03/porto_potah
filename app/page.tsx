import { BubbleMenuClient as BubbleMenu } from '@/components/ClientComponents';
import { HomeTemplate } from '@/components/templates/HomeTemplate/HomeTemplate';
import { Footer } from '@/components/organisms/Footer/Footer';
import { navItems } from '@/data';

export default function Home() {
  return (
    <>
      <BubbleMenu 
        logo={<span className="text-lg font-bold tracking-tight text-blue-400">potah<span className="text-white">.</span>dev</span>}
        items={navItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#09090b"
        menuContentColor="#ffffff"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
      <HomeTemplate />
      <Footer />
    </>
  );
}
