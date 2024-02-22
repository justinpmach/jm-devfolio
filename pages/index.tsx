import DrawSquareHero from '@/app/components/animations/DrawSquareHero';
import SlideIn from '@/app/components/animations/SlideIn';
import TextReveal from '@/app/components/animations/TextReveal';
import Page from '@/app/components/page';

import { Metadata } from 'next';
import { useRouter } from 'next/router';

export const metadata: Metadata = {
  title: 'Justin Mach Dev',
  description: 'Frontend Developer',
  icons: {
    icon: '/favicon.ico',
  },
  // icons: [],
};

export default function Home() {
  return (
    <Page>
      {/* <h1 className='absolute top-[50%] left-[50%] translate-x-1/2 translate-y-1/2 uppercase text-center font-semibold text-[100px] leading-[90%]'>
        Home
      </h1> */}
      <section
        id='home'
        className='h-screen py-28 lg:py-36 xl:py-40 w-full flex justify-center items-center bg-home text-white'
      >
        <div className='grid gap-8 lg:grid-cols-2 w-full lg:px-20 xl:px-28'>
          {/* Hero Title */}
          <div className='flex flex-col space-y-6 text-center lg:text-right lg:justify-center lg:items-end rounded-sm'>
            {/* <span className='text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tighter'>
            <TextReveal textFirst='Hi,' />
          </span> */}
            <span className='text-6xl md:text-8xl xl:text-9xl font-bold tracking-tighter'>
              <TextReveal textFirst='Justin Mach' />
            </span>
            <SlideIn>
              <span className='text-2xl md:text-4xl font-semibold tracking-tighter'>
                Experienced Frontend Engineer
              </span>
            </SlideIn>
            <p className='text-center lg:text-right text-sm md:text-lg lg:text-xl text-gray-200 tracking-tighter font-semibold my-5 lg:my-0'>
              Building a better experience together.
            </p>
          </div>
          {/* Hero Image */}
          <DrawSquareHero />
        </div>
      </section>
    </Page>
  );
}
