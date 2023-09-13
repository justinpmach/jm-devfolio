import Image from 'next/image';
import SlideIn from '../animations/SlideIn';

export default function About() {
  return (
    <section id='about'>
      <div className='content justify-center'>
        <div className='flex flex-col rounded-sm p-8'>
          <SlideIn>
            <span className='section-title'>About.</span>
          </SlideIn>
          <p className='text-md font-semibold text-gray-500 tracking-wide'>
            Dog dad. Gamer. Tech Fiend.
          </p>

          <p className='mt-3 text-xl'>
            Highly skilled frontend developer based in
            <br /> Orange County, California.
          </p>
          {/* <p className='mt-5 text-md'>
            Current Tool Belt: React, Next.js and Tailwind CSS.
          </p> */}
          <p className='mt-3 text-md'>
            Contributed to the growth and success of a leading start-up during
            their evolution to a Inc. 500 company, also got to wear a lot of
            hats.
          </p>
          <p className='text-md'>
            When I&apos;m not coding beautiful and intuitive designs for the
            web,
          </p>
          <p className='text-md'>I enjoy painting and creating digital art.</p>
        </div>

        <div className='relative flex items-center bg-slate-300 rounded-md'>
          <div className='absolute top-28 w-full h-1/4 skew-y-6 bg-gray-100'></div>
          <div className='h-full w-full flex'>
            <Image
              className='rounded-md z-20'
              src='/jm-headshot-half.png'
              width={400}
              height={400}
              alt='Profile picture of Justin'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
