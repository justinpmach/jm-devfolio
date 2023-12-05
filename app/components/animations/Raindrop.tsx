'use client';
import { motion } from 'framer-motion';

interface RainProps {
  increment: number;
  duration: number;
  delay: number;
  bottom: number;
}

export default function Raindrop({ rainProps }: { rainProps: RainProps }) {
  console.log('RainProps:', rainProps.increment);
  return (
    <motion.div
      initial={{ x: rainProps.increment }}
      className={`absolute w-[15px] h-[120px] pointer-events-none z-40`}
      animate={{
        y: ['0vh', '0vh', '90vh', '90vh'],
        opacity: 1,
      }}
      transition={{
        repeat: Infinity,
        delay: rainProps.delay,
        duration: rainProps.duration,
      }}
    >
      <motion.div
        className='w-[1px] h-[60%] ml-[7px] bg-gradient-to-b from-white bg-opacity-25'
        animate={{
          opacity: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          delay: rainProps.delay,
          duration: rainProps.duration,
        }}
      />
      <motion.div
        className='w-[15px] h-[10px] border-t-dotted border-t-2 border-white rounded-full z-30 border-opacity-50'
        animate={{
          opacity: [null, 0, 0, 0, 0, 0, 1, 0.5, 0],
          scale: [0, 0, 0, 1, 1.5],
        }}
        transition={{
          repeat: Infinity,
          delay: rainProps.delay,
          duration: rainProps.duration,
        }}
      />
    </motion.div>
  );
}
// <motion.div
//   id='drop'
//   className='absolute bottom-[100%] w-[15px] h-[120px] pointer-events-none'
//   animate={{
//     y: ['0vh', '0vh', '50vh', '50vh'],
//     opacity: 1,
//   }}
//   transition={{ repeat: Infinity }}
// >
//   <motion.div
//     id='stem'
//     className='w-[1px] h-[60%] ml-[7px] bg-gradient-to-b from-white bg-opacity-25'
//     animate={{
//       opacity: [null, 1, 1, 0, 0, 0],
//     }}
//     transition={{ repeat: Infinity }}
//   />
//   <motion.div
//     id='splat'
//     className='w-[15px] h-[10px] border-t-dotted border-t-2 border-white rounded-full z-30 border-opacity-50'
//     animate={{
//       opacity: [null, 1, 1, 0.5, 0],
//       scale: [0, 0, 0, 1, 1.5],
//     }}
//     transition={{ repeat: Infinity }}
//   />
// </motion.div>
