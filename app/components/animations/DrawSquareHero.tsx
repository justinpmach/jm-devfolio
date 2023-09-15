'use client';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0, fillOpacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    fillOpacity: 1,
    transition: {
      pathLength: { delay: 0.7, type: 'spring', duration: 0.7, bounce: 0 },
      opacity: { delay: 0.7, duration: 0.01 },

      fillOpacity: { delay: 1, duration: 0.5 },
    },
  },
};

export default function DrawSquareHero() {
  return (
    //     <div className='relative flex items-center bg-slate-300 rounded-md z-50'>
    //   {/* <DrawSquare src='test' /> */}
    //   <div className='absolute top-28 w-full h-1/4 skew-y-12 bg-gray-100'></div>
    //   <div className='h-full w-full flex'>
    //     <Image
    //       className='rounded-md z-20'
    //       src='/jm-hero-transparent.png'
    //       width={400}
    //       height={400}
    //       alt='Banner picture of Justin'
    //     />
    //   </div>
    // </div>
    <div className='relative flex justify-center items-center z-50'>
      <div className='absolute top-28 w-full h-1/4 skew-y-12 bg-gray-100'></div>
      <motion.svg width='400' height='400' initial='hidden' animate='visible'>
        <motion.rect
          width='400'
          height='400'
          x='0'
          y='0'
          rx='25'
          ry='25'
          stroke='#cbd5e1'
          variants={draw}
          style={{ fill: '#cbd5e1' }}
        />
      </motion.svg>
      <div className='absolute flex justify-center items-center z-60'>
        <Image
          className='rounded-md z-20'
          src='/jm-hero-transparent.png'
          width={400}
          height={400}
          alt='Banner picture of Justin'
        />
      </div>
    </div>
  );
}
