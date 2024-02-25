'use client';
import { useCallback, useState } from 'react';

import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const artwork = [
  {
    path: '/artwork/art-0.jpg',
  },
  {
    path: '/artwork/art-01.jpg',
  },
  {
    path: '/artwork/art-2.jpg',
  },
  {
    path: '/artwork/art-3.jpg',
  },
  {
    path: '/artwork/art-4.jpg',
  },
  {
    path: '/artwork/art-5.jpg',
  },
  {
    path: '/artwork/art-6.jpg',
  },
  {
    path: '/artwork/art-7.jpg',
  },
  {
    path: '/artwork/art-8.jpg',
  },
  {
    path: '/artwork/art-9.jpg',
  },
  {
    path: '/artwork/art-10.jpg',
  },
  {
    path: '/artwork/art-11.jpg',
  },
];
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 0.7 },
  },
};

export default function ArtworkGrid() {
  const [index, setIndex] = useState<Number | boolean>(false);
  const [itemPath, setItemPath] = useState('');

  const handleClose = useCallback(() => {
    setIndex(false);
  }, []);

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={containerVariants}
      className=''
    >
      <LayoutGroup>
        <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 p-8 my-28 lg:my-36 xl:my-40'>
          {artwork.map((item, idx) => (
            <motion.li
              className='relative bg-white p-[3rem] cursor-pointer h-[200px] w-[350px] rounded-md mx-auto'
              key={idx}
              layoutId={`${idx}`}
              onClick={() => {
                if (index === false) {
                  setIndex(idx);
                  setItemPath(item.path);
                }
              }}
            >
              <Image
                alt=''
                className='bg-white rounded-md p-0.5'
                src={item.path}
                fill
                sizes='(min-width: 768px) 50vw, 30vw'
                style={{
                  objectFit: 'cover', // cover, contain, none
                }}
              />
              {/* <motion.div className='' layoutId={`placeholder-${item}`}>
              <div />
              <div />
              <div />
            </motion.div>
            <motion.div className='' layoutId={`additional-${item}`}>
              <div />
              <div />
              <div />
            </motion.div> */}
              <motion.div className='' layoutId={`close-${item}`}></motion.div>
            </motion.li>
          ))}
        </ul>
        <AnimatePresence>
          {index !== false && (
            <>
              <motion.div
                className='w-full h-full min-h-screen absolute top-0 left-0 flex justify-center items-center'
                key='modal'
              >
                <motion.div
                  className='relative bg-white z-30 h-[600px] w-[550px] rounded-md'
                  layoutId={`${index}`}
                >
                  <Image
                    alt=''
                    className='bg-white rounded-md p-1'
                    src={itemPath}
                    fill
                    sizes='(min-width: 768px) 50vw, 30vw'
                    style={{
                      objectFit: 'cover', // cover, contain, none
                    }}
                  />
                  {/* <motion.div className='' layoutId={`placeholder-${index}`}>
                  <div />
                  <div />
                  <div />
                </motion.div>
                <motion.div className='' layoutId={`additional-${index}`}>
                  <div />
                  <div />
                  <div />
                </motion.div> */}
                  {/* layoutId={`close-${index}`} */}
                  <motion.div
                    className='absolute top-5 right-5 w-5 h-5'
                    onClick={handleClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                      <path
                        d='M15 5L5 15M5 5l5.03 5.03L15 15'
                        fill='transparent'
                        strokeWidth='2'
                        stroke='#fff'
                        strokeLinecap='round'
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className='absolute top-0 left-0 w-full h-screen bg-black z-20'
                key='backdrop'
                onClick={handleClose}
                variants={{
                  hidden: {
                    opacity: 0,
                    transition: {
                      duration: 0.16,
                    },
                  },
                  visible: {
                    opacity: 0.8,
                    transition: {
                      delay: 0.04,
                      duration: 0.2,
                    },
                  },
                }}
                initial='hidden'
                exit='hidden'
                animate='visible'
              />
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}
