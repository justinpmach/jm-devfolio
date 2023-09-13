'use client';
import { useEffect } from 'react';

import FadeInView from './components/animations/FadeInView';
import About from './components/sections/About';
import Hero from './components/sections/Hero';
import Work from './components/sections/Work';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeInView>
        <Hero />
      </FadeInView>
      <About />
      <Work />
    </>
  );
}
