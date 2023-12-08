'use client';

// import { useRouter } from 'next/navigation';
import Rain from './Rain';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function IntroScreen() {
  // const router = useRouter();
  const [allowEnter, setAllowEnter] = useState(false);

  const welcome = 'welcome';
  const firstName = 'Justin';
  const lastName = 'Mach';

  const glowVariants = {
    initial: {
      opacity: 0.5,
    },
    hover: {
      opacity: 1,
    },
  };

  return (
    <>
      <Rain setAllowEnter={setAllowEnter} />
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-[80%] z-30 blur-sm'></div>
      <div className='z-40 w-full min-h-screen grid grid-cols-3 items-center'>
        <div className='col-span-2 z-40 mx-auto grid border gap-8'>
          <motion.div
            initial='initial'
            whileHover='hover'
            animate={{
              opacity: [null, 0.9, 0.8, 0.95, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className='p-8 rounded-md glowing-vert-title'
          >
            {/* {welcome.split('').map((letter: string, index) => (
              <h3
                key={`${index}-welcome`}
                className='japan text-6xl drop-shadow-glow text-center'
              >
                {letter}
              </h3>
            ))} */}
            <h3 className='japan text-5xl drop-shadow-glow text-center'>
              Welcome
            </h3>
          </motion.div>
          <motion.button
            id='glowing-btn'
            initial='initial'
            whileHover='hover'
            animate={{
              opacity: [null, 0.5, 0.6, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className='japan text-white text-6xl px-8 py-4 drop-shadow-glow rounded-md'
            onClick={() => {
              setAllowEnter(true);
            }}
          >
            E
            <motion.span
              variants={glowVariants}
              animate={{
                opacity: [null, 0.5, 0.6, 1],
              }}
              whileHover={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >
              N
            </motion.span>
            TER
          </motion.button>
        </div>
        <div className='z-40 mx-auto'>
          <motion.div
            initial='initial'
            whileHover='hover'
            animate={{
              opacity: [1, 0.9, 0.8, 0.95, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className='px-8 py-4 rounded-md'
          >
            {firstName.split('').map((fnLetter: string, index) => (
              <h3
                key={`first-${index}-name`}
                className='japan text-6xl drop-shadow-glow text-center text-white'
              >
                {fnLetter}
              </h3>
            ))}
          </motion.div>
          <motion.div
            initial='initial'
            whileHover='hover'
            animate={{
              opacity: [1, 0.9, 0.8, 0.95, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className='px-8 py-4 rounded-md'
          >
            {lastName.split('').map((lnLetter: string, index) => (
              <h3
                key={`last-${index}-name`}
                className='japan text-6xl drop-shadow-glow text-center text-white'
              >
                {lnLetter}
              </h3>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
// [writing-mode:vertical-lr]
