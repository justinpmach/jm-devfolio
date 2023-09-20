'use client';
import { useState } from 'react';
import SlideIn from '../components/animations/SlideIn';
import ProjectsCarousel from '../components/animations/ProjectsCarousel';

interface Project {
  id: string;
  title: string;
  src: string;
}

const projects: Project[] = [
  {
    id: 'trust_and_will',
    title: 'Trust & Will',
    src: '/tw-web.png',
  },
  {
    id: 'alphadao',
    title: 'AlphaDao',
    src: '/alphadao-web.png',
  },
  {
    id: 'dekage',
    title: 'Dekage',
    src: '/dekage-web.png',
  },
  {
    id: 'the_missing_piece',
    title: 'The Missing Piece',
    src: '/tmp-web.png',
  },
  {
    id: 'rocketship',
    title: 'RocketShip',
    src: '/RocketShip-web.png',
  },
  {
    id: 'iron_grind',
    title: 'IronGrind',
    src: '/Iron-Grind-web.png',
  },
];

export default function TestPage() {
  const [selected, setSelected] = useState<Project | null>(projects[0]);

  return (
    <section id='work'>
      {/* <AnimatePresence>
        {selected && (
          <div className='relative w-full'>
            <motion.div
              className='absolute top-0 w-full cursor-pointer z-40'
              onClick={() => setSelected(null)}
              key={selected.id ?? 'empty'}
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{ y: -100, opacity: 0 }}
            >
              <Card
                id={selected.id}
                title={selected.title}
                src={selected.src}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence> */}

      <div className='relative flex flex-col w-full justify-center px-20 z-0'>
        <SlideIn>
          <span className='text-6xl font-bold tracking-tighter mb-8'>
            Work.
          </span>
        </SlideIn>
        <p className='text-md font-semibold text-gray-500 tracking-wide'>
          Projects
        </p>
        <div className='flex w-full gap-5'>
          <ProjectsCarousel projects={projects} setSelected={setSelected} />
          <div className='flex flex-col items-end justify-center w-full p-7'>
            {selected && (
              <span className='uppercase font-md tracking-widest'>
                {selected?.title}
              </span>
            )}
            <div className='mt-8 border border-green-600 w-full'>Text</div>
          </div>
        </div>
      </div>
    </section>
  );
}
