'use client';
import { motion, Variants, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const slideInVariants: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
      delay: 1,
    },
  },
};

export default function SlideIn({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);
  return (
    <div ref={ref} className='relative'>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={slideInVariants}
      >
        {children}
      </motion.div>
    </div>
  );
}
