import FadeInView from './components/animations/FadeInView';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Work from './components/sections/Work';
import type { Metadata } from 'next';

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
      <About />
      <Work />
      <Contact />
    </>
  );
}
