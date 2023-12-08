'use client';
import { useState } from 'react';

import Raindrop from '../components/animations/Raindrop';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  src: string;
}

// Maintained and improved Angular application while simultaneously assisting in a large-scale transition to React and Tailwind
// Played a key role in implementing numerous successful A/B tests, leading to revenue increase and operational savings
// Led the successful redesign of the core product application, increasing user experience and delivering a fresh, well-received look

// Developed a bug tracker and reporter for company-wide use via Slack workflows, creating tickets in Jira via Zappier
// Started as a QA Engineer, quickly transitioning to a dual role that included Front End Developer responsibilities within three months
// Assisted the Member Services team in resolving bugs, providing large-scale and individual-level solutions for immediate clients
// Worked closely with the Advisors team to maintain and enhance the advisor dashboard, a critical revenue source for the company

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
    src: '/missing-piece.png',
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

interface RainProps {
  increment: number;
  duration: number;
  delay: number;
  bottom: number;
}

export default function Testing() {
  return (
    <div
      id='testing'
      className=' absolute left-0 w-full h-full m-0 overflow-hidden bg-white flex justify-center items-center'
    >
      <div className='absolute container w-full h-full flex gap-8 justify-center items-center border border-red-500'>
        <div className='absolute content w-full h-full '></div>
        {new Array(6).fill({}).map((_, i) => (
          <motion.div
            key={`${i}-box`}
            className='relative w-[60px] h-[30vh] border-2 border-black'
            initial={{ y: 0 }}
            animate={{ y: i % 2 === 0 ? 50 : -50 }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}
