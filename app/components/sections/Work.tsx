'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SlideIn from '../animations/SlideIn';
import Card from '../Card';

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

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id='work'>
      <AnimatePresence>
        {selected && (
          <div className='relative w-full '>
            <motion.div
              className='absolute top-0 w-full cursor-pointer'
              onClick={() => setSelected(null)}
              key={selected.id ?? 'empty'}
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 100,
                opacity: 1,
                zIndex: 3,
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
      </AnimatePresence>
      <div className='flex w-full justify-center px-40'>
        <div className='flex flex-col p-8 w-full'>
          <SlideIn>
            <span className='text-6xl font-bold tracking-tighter mb-8'>
              Work.
            </span>
          </SlideIn>
          <p className='text-md font-semibold text-gray-500 tracking-wide'>
            Projects
          </p>
          <div className='grid grid-cols-3 gap-4'>
            {projects.map(p => (
              <motion.div
                layout
                layoutId={p.id}
                key={p.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='w-full cursor-pointer flex justify-center items-center'
                onClick={() => setSelected(p)}
              >
                <Card id={p.id} title={p.title} src={p.src} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
