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
        width='100px'
        height='100px'
        viewBox='0 0 200 200'
        initial='hidden'
        animate='visible'
      >
        <motion.circle
          style={{ strokeWidth: '5px' }}
          cx='100px'
          cy='100px'
          r='50px'
          width='1px'
          stroke='#cbd5e1'
          variants={draw}
          custom={1}
        />
      </motion.svg>
      <div className='absolute flex justify-center items-center'>{title}</div>
    </div>
  );
}
