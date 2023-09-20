'use client';
import { useState } from 'react';
import SlideIn from '../animations/SlideIn';
import ProjectsCarousel from '../animations/ProjectsCarousel';

interface Project {
  id: string;
  title: string;
  src: string;
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
    id: 'trust_and_will',
    title: 'Trust & Will',
    src: '/tw-web.png',
  },
  {
    id: 'alphadao',
    title: 'AlphaDao',
    src: '/alphadao-web.png',
  },
  {
    id: 'dekage',
    title: 'Dekage',
    src: '/dekage-web.png',
  },
  {
    id: 'the_missing_piece',
    title: 'The Missing Piece',
    src: '/tmp-web.png',
  },
  {
    id: 'rocketship',
    title: 'RocketShip',
    src: '/RocketShip-web.png',
  },
  {
    id: 'iron_grind',
    title: 'IronGrind',
    src: '/Iron-Grind-web.png',
  },
];

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(projects[0]);

  return (
    <section id='work'>
      <div className='relative flex flex-col w-full justify-center px-40 z-0'>
        <SlideIn>
          <span className='text-6xl font-bold tracking-tighter mb-8'>
            Work.
          </span>
        </SlideIn>
        <p className='text-md font-semibold text-gray-500 tracking-wide'>
          Projects
        </p>
        <div className='flex w-full gap-5 mt-5'>
          <ProjectsCarousel projects={projects} setSelected={setSelected} />
          <div className='flex flex-col items-end justify-center w-full p-7'>
            {selected && (
              <span className='uppercase font-md tracking-widest'>
                {selected?.title}
              </span>
            )}
            <div className='mt-8 border border-green-600 w-full'>Text</div>
          </div>
        </div>
      </div>
    </section>
  );
}
