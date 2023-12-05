'use client';
import { useState } from 'react';

import Raindrop from '../components/animations/Raindrop';

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
    src: '/missing-piece.png',
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

interface RainProps {
  increment: number;
  duration: number;
  delay: number;
  bottom: number;
}

export default function Testing() {
  const streamCount = 99;
  const [toggleRain, setToggleRain] = useState(false);

  // hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
  let randomFive = Math.floor(Math.random() * (5 - 2 + 1) + 2);
  let randomHunnid = Math.floor(Math.random() * (98 - 1 + 1) + 1);
  return (
    <div
      id='testing'
      className='absolute left-0 w-full h-full m-0 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 flex justify-center'
    >
      <button
        onClick={() => setToggleRain(!toggleRain)}
        className='absolute bottom-40 left-0 w-8 h-8 rounded-full border border-white text-white'
      >
        Rain
      </button>
      {toggleRain &&
        new Array(streamCount).fill({}).map((_, i) => (
          <div key={`${i}-rain-drop`} className='w-full h-full'>
            <Raindrop
              key={`${i}-rain-drop`}
              rainProps={{
                increment: i + Math.floor(Math.random() * (5 - 2 + 1) + 2),
                delay: Number(
                  '0.' + Math.floor(Math.random() * (98 - 1 + 1) + 1).toString()
                ),
                duration: Number(
                  '1.' + Math.floor(Math.random() * (98 - 1 + 1) + 1).toString()
                ),
                bottom:
                  Math.floor(Math.random() * (5 - 2 + 1) + 2) +
                  Math.floor(Math.random() * (5 - 2 + 1) + 2) -
                  1 +
                  90,
              }}
            />
          </div>
        ))}
    </div>
  );
}
