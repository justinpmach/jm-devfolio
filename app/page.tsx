import FadeInView from './components/animations/FadeInView';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Tools from './components/sections/Tools';
import Projects from './components/sections/Projects';
import type { Metadata } from 'next';
import Work from './components/sections/Work';

export const metadata: Metadata = {
  title: 'Justin Mach Dev',
  description: 'Frontend Developer',
};

export default function Home() {
  return (
    <>
      <FadeInView>
        <Hero />
      </FadeInView>
      <Tools />
      <About />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}
