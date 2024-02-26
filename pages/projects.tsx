// import { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
import Curve from '@/app/components/Curve';
import Page from '@/app/components/Layout';
import ProjectsCarousel from '@/app/components/animations/ProjectsCarousel';
import SlideIn from '@/app/components/animations/SlideIn';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  src: string;
  tools: string[];
  link: string;
  desc: string;
}

const projects: Project[] = [
  {
    id: 'the_missing_piece',
    title: 'The Missing Piece',
    src: '/missing-piece.png',
    tools: ['Python', 'Django', 'Bootstrap'],
    link: 'https://justinmachdev.pythonanywhere.com/',
    desc: 'Social media app catered to the Autism community, allowing users affected by this disorder to connect.',
  },
  {
    id: 'iron_grind',
    title: 'IronGrind',
    src: '/Iron-Grind-web.png',
    tools: ['HTML', 'CSS', 'Javascript'],
    link: 'https://vincenttpham.github.io/iron_grind/',
    desc: 'Fitness club landing page promoting health and wellness through hardwork and discipline.',
  },
  {
    id: 'alphadao',
    title: 'AlphaDao',
    src: '/alphadao-web.png',
    tools: ['Next.js', 'Web3.js', 'Tailwind'],
    link: '',
    desc: 'Where crypto traders can track the hottest and latest crypto twitter accounts.',
  },
  {
    id: 'dekage',
    title: 'Dekage',
    src: '/dekage-web.png',
    tools: ['Python', 'Django', 'Bootstrap'],
    link: 'https://www.dekageshop.com/',
    desc: 'Sticker shop that caters to KPOP and KDrama fans.',
  },
  {
    id: 'rocketship',
    title: 'RocketShip',
    src: '/RocketShip-web.png',
    tools: ['C#', 'ASP.NET Core', 'Bootstrap'],
    link: 'http://18.188.37.161/HowToPlay',
    desc: 'Rocket Ship is a randomly generated social card game, up to 10 players allowed through different IP addresses. Utilizing the functionality of object oriented programming and version control.',
  },
];
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

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(projects[0]);
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
        id='projects'
        className='w-full h-full min-h-screen max-w-full grid gap-8 grid-cols-1 justify-center items-center bg-skills'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 px-8 md:px-12 lg:px-20 xl:px-28'>
          <ProjectsCarousel projects={projects} setSelected={setSelected} />
          <div className='flex flex-col items-center justify-center w-full p-7 text-white'>
            {selected && (
              <>
                <a
                  href={selected?.link}
                  className='uppercase text-xl font-semibold tracking-widest'
                >
                  {selected?.title}
                </a>
                <div className='flex w-full justify-center items-center'>
                  <span className='text-xs mr-2 ml-2 first-of-type:ml-0 last-of-type:mr-0 border-r border-black pr-2 last-of-type:pr-0 last-of-type:border-0'>
                    {selected?.tools?.[0]}
                  </span>
                  <span className='text-xs mr-2 ml-2 first-of-type:ml-0 last-of-type:mr-0 border-r border-black pr-2 last-of-type:pr-0 last-of-type:border-0'>
                    {selected?.tools?.[1]}
                  </span>
                  <span className='text-xs mr-2 ml-2 first-of-type:ml-0 last-of-type:mr-0 border-r border-black pr-2 last-of-type:pr-0 last-of-type:border-0'>
                    {selected?.tools?.[2]}
                  </span>
                </div>
                <div className='flex w-full text-center'></div>
              </>
            )}
            <div className='mt-8 flex w-full justify-center items-center'>
              <p className='text-center text-sm'>{selected?.desc}</p>
            </div>
          </div>
        </div>
        {/* <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 p-8'>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
          <div className='bg-white border rounded-lg flex justify-center items-center h-[320px]'></div>
        </ul> */}
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
