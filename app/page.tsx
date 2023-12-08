import type { Metadata } from 'next';

import Rain from './components/Rain';
import Tools from './components/sections/Tools';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';

export const metadata: Metadata = {
  title: 'Justin Mach Dev',
  description: 'Frontend Developer',
  icons: {
    icon: '/favicon.ico',
  },
  // icons: [],
};

export default function Index() {
  return (
    <>
      {/* <div
        id='frame'
        style={{
          top: 'max(20px, 4vmin)',
          left: 'max(20px, 4vmin)',
          right: 'max(20px, 4vmin)',
          bottom: 'max(20px, 4vmin)',
        }}
        className='fixed pointer-events-none'
      >
        <div
          id='frame-left'
          className='absolute top-0 left-0 w-[1px] h-full opacity-50 bg-white'
        ></div>
        <div
          id='frame-right'
          className='absolute top-0 right-0 w-[1px] h-full opacity-50 bg-white'
        ></div>
        <div
          id='frame-top'
          className='absolute top-0 left-0 w-full h-[1px] opacity-50 bg-white'
        ></div>
        <div
          id='frame-left'
          className='absolute top-0 bottom-0 w-full h-[1px] opacity-50 bg-white'
        ></div>
      </div> */}
      <Hero />
      <Tools />
      <About />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}
