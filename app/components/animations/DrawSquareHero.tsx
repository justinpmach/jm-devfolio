'use client';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

const draw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fillOpacity: 1,
    transition: {
      pathLength: { delay: 0.7, type: 'spring', duration: 0.6, bounce: 0 },
      opacity: { delay: 0.7, duration: 1 },

      fillOpacity: { delay: 1, duration: 2 },
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.7,
      bounce: 0,
    },
  },
};

const skewVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1, duration: 0.7 },
    skewY: 12,
  },
  // transform: skewY(12deg);
};

export default function DrawSquareHero() {
  return (
    <div className='relative flex justify-center items-center'>
      <motion.div
        className='absolute top-28 w-[400px] h-1/4 skew-y-12 bg-gray-100'
        variants={skewVariants}
      ></motion.div>
      <motion.svg
        viewBox='0 0 450 450'
        width='400'
        height='400'
        initial='hidden'
        animate='visible'
      >
        <motion.rect
          width='400'
          height='400'
          x='25'
          y='25'
          rx='10'
          ry='10'
          stroke='#e2e8f0'
          variants={draw}
          style={{ fill: '#cbd5e1' }}
        />
      </motion.svg>
      <div className='absolute flex justify-center items-center '>
        <motion.div variants={imageVariants}>
          <Image
            className='rounded-md'
            src='/jm-hero-transparent.png'
            width={400}
            height={400}
            alt='Banner picture of Justin'
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
