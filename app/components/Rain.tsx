'use client';
import { useState } from 'react';
import Raindrop from '../components/animations/Raindrop';

export default function Rain() {
  const streamCount = 99;
  const [toggleRain, setToggleRain] = useState(false);

  return (
    <div
      id='rain'
      className='absolute left-0 w-full h-full m-0 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 bg-opacity-10 flex justify-center'
    >
      <button
        onClick={() => setToggleRain(!toggleRain)}
        className='absolute top-40 left-0 w-8 h-8 rounded-full border border-white text-white'
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
