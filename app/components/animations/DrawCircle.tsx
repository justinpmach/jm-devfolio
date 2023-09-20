'use client';
import { Variants, motion } from 'framer-motion';

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.5, type: 'spring', duration: 0.7, bounce: 0 },
      opacity: { delay: 0.5, duration: 0.01 },
    },
  },
};

export default function DrawCircle({ title }: { title: string }) {
  return (
    <div className='relative flex justify-center items-center'>
      <motion.svg
        width='50px'
        height='50px'
        viewBox='0 0 100 100'
        initial='hidden'
        animate='visible'
      >
        <motion.circle
          style={{ strokeWidth: '4px' }}
          cx='50'
          cy='50'
          r='30'
          width='1px'
          stroke='#4b5563'
          variants={draw}
          custom={1}
        />
      </motion.svg>
      <div className='absolute flex justify-center items-center'>{title}</div>
    </div>
  );
}
