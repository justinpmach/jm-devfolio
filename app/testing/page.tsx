'use client';
import { Variants, motion } from 'framer-motion';
import TestNav from './TestNav';
import DrawCircle from '../components/animations/DrawCircle';
import DrawSquare from '../components/animations/DrawSquareHero';
import TestHero from './TestHero';

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
    <>
      {/* <TestNav /> */}
      {/* <div className='w-full flex justify-center mb-8'>
        <DrawCircle title='JM' />
      </div>
      <div className='w-full flex justify-center'>
        <DrawSquare src='test' />
      </div> */}
      <TestHero />
    </>
  );
}
