'use client';
import { Variants, motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const fadeInVariants: Variants = {
  hidden: {
    clipPath: 'inset(50% 50% 90% 50% round 200px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0% round 200px)',
    transition: {
      type: 'spring',
      damping: 35,
      bounce: 0,
      duration: 0.3,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

export default function FadeInView({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        className='transition-all duration-[900ms] ease-[cubic-bezier(0.17, 0.55, 0.55, 1)] delay-[5000ms]'
        initial='hidden'
        animate={controls}
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        {children}
      </motion.div>
    </div>
  );
}
