import DrawSquareHero from '@/app/components/animations/DrawSquareHero';
import SlideIn from '@/app/components/animations/SlideIn';
import TextReveal from '@/app/components/animations/TextReveal';
import Curve from '@/app/components/Curve';
import Layout from '@/app/components/Layout';
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
    <Curve>
      <section
        id='home'
        className='h-screen py-28 lg:py-36 xl:py-40 w-full flex justify-center items-center bg-home text-white z-20'
      >
        <div className='grid gap-8 lg:grid-cols-2 w-full lg:px-20 xl:px-28'>
          {/* Hero Title */}
          <div className='flex flex-col space-y-6 text-center lg:text-right lg:justify-center lg:items-end rounded-sm'>
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
    </Curve>
  );
}
