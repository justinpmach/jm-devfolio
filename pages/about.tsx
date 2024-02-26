import SlideIn from '@/app/components/animations/SlideIn';
import Curve from '@/app/components/Curve';
import Layout from '@/app/components/Layout';

export default function About() {
  return (
    <Curve>
      {/* <SlideIn>
              </SlideIn> */}
      <section
        id='about'
        className='h-screen text-white py-28 lg:py-36 xl:py-40 w-full flex justify-center items-start bg-about'
      >
        <div className='grid gap-8 justify-center items-center w-full px-8 md:px-12 lg:px-20 xl:px-28'>
          <div className='flex flex-col text-center lg:text-left rounded-sm'>
            <h1 className='text-white uppercase text-right font-semibold text-[100px] leading-[90%]'>
              About
            </h1>
            {/* <span className='text-5xl lg:text-6xl font-bold tracking-tighter mb-8'>
                About.
              </span> */}
            <p className='text-sm lg:text-xl font-semibold text-white tracking-wide mt-8'>
              Dog dad | Developer | Artist
            </p>
            <p className='mt-3 text-xl lg:text-2xl'>
              Highly skilled frontend developer based in
              <br /> Orange County, California.
            </p>
            <div className=''>
              {/* <p className='mt-5 text-md'>
            Current Tool Belt: React, Next.js and Tailwind CSS.
          </p> */}
              <p className='mt-3 text-md lg:text-lg'>
                Contributed to the growth and success of a leading start-up
                during its evolution to an Inc. 500 company, and also got to
                wear a lot of hats.
              </p>
              <p className='text-md'>
                When I&apos;m not coding beautiful and intuitive designs for the
                web, I enjoy painting and creating digital art.
              </p>
              {/* <p className='text-md'>
                I enjoy painting and creating digital art.
              </p> */}
            </div>
          </div>
          {/* <div className='row-start-1 lg:row-start-1 relative flex items-center justify-center w-full'>
          <div className='w-full flex items-center justify-center'>
            <div className='absolute top-28 w-full h-1/4 skew-y-6 bg-gray-100 z-10'></div>
            <div className='absolute bg-slate-300 w-[300px] h-[400px] md:w-[380px] md:h-[400px] lg:w-[400px] lg:h-[450px]'></div>
            <Image
              className='rounded-md z-20'
              src='/jm-headshot-half.png'
              width={400}
              height={400}
              alt='Profile picture of Justin'
            />
          </div>
        </div> */}
        </div>
      </section>
    </Curve>
  );
}
