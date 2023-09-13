'use client';
import { Variants, motion } from 'framer-motion';
import TestNav from './TestNav';

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: i => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Testing() {
  return (
    <div className='w-full flex justify-center'>
      <TestNav />
    </div>
    // <motion.svg
    //   width='600'
    //   height='600'
    //   viewBox='0 0 600 600'
    //   initial='hidden'
    //   animate='visible'
    // >
    //   <motion.circle
    //     cx='100'
    //     cy='100'
    //     r='80'
    //     stroke='#cbd5e1'
    //     variants={draw}
    //     custom={1}
    //   />
    //   <motion.line
    //     x1='220'
    //     y1='30'
    //     x2='360'
    //     y2='170'
    //     stroke='#00cc88'
    //     variants={draw}
    //     custom={2}
    //   />
    // </motion.svg>
  );
}
