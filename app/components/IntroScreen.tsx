'use client';

import { useRouter } from 'next/navigation';
import Rain from './Rain';
import { useState } from 'react';

export default function IntroScreen() {
  const router = useRouter();
  const [allowEnter, setAllowEnter] = useState(false);

  return (
    <>
      <Rain setAllowEnter={setAllowEnter} />
      <div className='bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 w-full min-h-screen flex items-center justify-center'>
        <div className='z-40'>
          <button
            className='shogun text-white text-6xl border rounded-md px-8 py-4 z-50'
            onClick={() => {
              setAllowEnter(true);
              router.push('/home');
            }}
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
}
