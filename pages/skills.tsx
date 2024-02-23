// import { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
import Curve from '@/app/components/Curve';
import Page from '@/app/components/Layout';

// export const metadata: Metadata = {
//   title: 'Justin Mach Dev',
//   description: 'Frontend Developer',
//   icons: {
//     icon: '/favicon.ico',
//   },
// };

const skillItems = [
  {
    name: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'C#', 'HTML', 'SQL'],
  },
  {
    name: 'Libraries & Frameworks',
    items: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Django',
      'Styled Components',
      'Framer Motion',
      'Express.js',
      'Node.js',
      'jQuery',
    ],
  },
  {
    name: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Postman', 'Figma', 'Docker'],
  },
  {
    name: 'Graphic Design',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Silhouette Studio'],
  },
];

export default function Skills() {
  // const [selectedId, setSelectedId] = useState(null);
  // const [canDrag, setCanDrag] = useState(false);
  // const containerRefs = useRef(new Array());

  // const handlePanEnd = (e, info, card) => {
  //   console.log('info:', info);
  //   console.log('card:', card);
  //   console.log('selectedId:', selectedId);
  //   console.log('Math.abs(info.offset.x):', Math.abs(info.offset.x));
  //   if (selectedId) {
  //     if (Math.abs(info.offset.x) === 5) {
  //       const styles = getComputedStyle(containerRefs.current[card]);
  //       const timeout = styles.transform.split(',')[4] * -0.6;
  //       console.log('timeout:', timeout, typeof timeout);
  //       setCanDrag(false);
  //       setTimeout(() => {
  //         setSelectedId(null);
  //       }, timeout);
  //     }
  //   } else {
  //     setCanDrag(true);
  //     setSelectedId(card);
  //   }
  // };

  // const handleClick = card => {
  //   setSelectedId(null);
  // };

  return (
    <Curve>
      <section
        id='skills'
        className='w-full h-full min-h-screen max-w-full flex justify-center items-center bg-skills'
      >
        <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 p-8'>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
        </ul>
        {/* className='w-full h-full absolute top-0 left-0 leading-[33rem] max-w-full whitespace-nowrap overflow-x-scroll' */}
        {/* className='h-screen text-white py-28 lg:py-36 xl:py-40 w-full flex flex-col justify-center items-start bg-skills' */}
        {/* <h1 className='text-white uppercase text-right font-semibold text-[100px] leading-[90%]'>
          Skills
        </h1> */}
        {/* <div className='w-full h-full grid gap-6 justify-center items-center grid-cols-3 grid-rows-2 p-12 bg-red-500'>
          {cards.map((card, i) => (
            <motion.div
              className={
                selectedId === card
                  ? 'rounded-2xl cursor-pointer h-[40rem] w-[40rem] absolute top-0 right-0 bottom-0 left-0 m-auto z-10 flex justify-center flex-wrap flex-col'
                  : 'bg-white rounded-2xl w-full h-full cursor-pointer '
              }
              key={i}
              layout
              drag={selectedId === card ? 'x' : false}
              dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
              dragElastic={0.2}
              onPanEnd={(e, info) => handlePanEnd(e, info, card)}
              ref={el => (containerRefs.current[card] = el)}
            >
              {selectedId === card && (
                <>
                  <div
                    className='bg-white h-full w-full my-0 mx-4 rounded-2xl ml-0'
                    onClick={handleClick(card)}
                  />
                  <div className='bg-white h-full w-full my-0 mx-4 rounded-2xl' />
                  <div className='bg-white h-full w-full my-0 mx-4 rounded-2xl' />
                </>
              )}
            </motion.div>
          ))}
          <motion.div
            className='absolute h-full w-full top-0 left-0 bg-black opacity-0 pointer-events-none'
            animate={{ opacity: selectedId ? 0.3 : 0 }}
          />
        </div> */}
      </section>
    </Curve>
  );
}
