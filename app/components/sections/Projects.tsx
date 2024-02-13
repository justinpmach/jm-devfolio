'use client';
import { useState } from 'react';
import SlideIn from '../animations/SlideIn';
import ProjectsCarousel from '../animations/ProjectsCarousel';

interface Project {
  id: string;
  title: string;
  src: string;
  tools: string[];
  link: string;
  desc: string;
}

// Maintained and improved Angular application while simultaneously assisting in a large-scale transition to React and Tailwind
// Played a key role in implementing numerous successful A/B tests, leading to revenue increase and operational savings
// Led the successful redesign of the core product application, increasing user experience and delivering a fresh, well-received look

// Developed a bug tracker and reporter for company-wide use via Slack workflows, creating tickets in Jira via Zappier
// Started as a QA Engineer, quickly transitioning to a dual role that included Front End Developer responsibilities within three months
// Assisted the Member Services team in resolving bugs, providing large-scale and individual-level solutions for immediate clients
// Worked closely with the Advisors team to maintain and enhance the advisor dashboard, a critical revenue source for the company

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

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(projects[0]);

  // hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
  return (
    <section id='projects'>
      <div className='grid gap-8 grid-cols-1 w-full'>
        <SlideIn>
          <div className='text-center'>
            <span className='text-5xl lg:text-6xl font-bold tracking-tighter mb-8'>
              Projects.
            </span>
            {/* <p className='text-md font-semibold text-gray-500 tracking-wide'>
              Projects
            </p> */}
          </div>
        </SlideIn>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 px-8 md:px-12 lg:px-20 xl:px-28'>
          <ProjectsCarousel projects={projects} setSelected={setSelected} />
          <div className='flex flex-col items-center justify-center w-full p-7'>
            {selected && (
              <>
                <a
                  href={selected?.link}
                  className='uppercase text-dark-gray text-xl font-semibold tracking-widest'
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
      </div>
    </section>
  );
}
