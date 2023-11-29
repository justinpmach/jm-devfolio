'use client';
import { useState } from 'react';
import SlideIn from '../animations/SlideIn';
import ProjectsCarousel from '../animations/ProjectsCarousel';

interface Project {
  id: string;
  title: string;
  src: string;
  tools: string[];
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
    id: 'alphadao',
    title: 'AlphaDao',
    src: '/alphadao-web.png',
    tools: ['Next.js', 'Web3.js', 'Tailwind'],
  },
  {
    id: 'dekage',
    title: 'Dekage',
    src: '/dekage-web.png',
    tools: ['Python', 'Django', 'Bootstrap'],
  },
  {
    id: 'the_missing_piece',
    title: 'The Missing Piece',
    src: '/tmp-web.png',
    tools: ['Python', 'Django', 'Bootstrap'],
  },
  {
    id: 'iron_grind',
    title: 'IronGrind',
    src: '/Iron-Grind-web.png',
    tools: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'rocketship',
    title: 'RocketShip',
    src: '/RocketShip-web.png',
    tools: ['C#', 'ASP.NET Core', 'Bootstrap'],
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
                <span className='uppercase text-dark-gray text-xl font-semibold tracking-widest'>
                  {selected?.title}
                </span>
                <div className='flex w-full justify-center items-center'>
                  {selected.tools?.map(t => (
                    <span
                      key={`${selected.id}-tools`}
                      className='text-xs mr-2 ml-2 first-of-type:ml-0 last-of-type:mr-0 border-r border-black pr-2 last-of-type:pr-0 last-of-type:border-0'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}
            {/* <div className='mt-8 border border-green-600 w-full'>Text</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
