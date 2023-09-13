import Image from 'next/image';

export default function About() {
  return (
    <section id='about'>
      <div className='content justify-cente'>
        <div className='flex flex-col rounded-sm p-8'>
          <span className='section-title'>About.</span>
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
            Previously spent 2 years contributing to the success of a leading
            tech start up.
          </p>
          <p className='text-md'>
            When I&apos;m not coding beautiful and intuitive designs for the
            web, I enjoy painting and creating digital art.
          </p>
          {/* Hi, I'm [Your Name]. 
          I'm a Frontend Developer with 3 years of experience, skilled in React, Next.js, and Tailwind CSS. 
          Spent 2 years at a leading startup. Also an artist, specializing in spray paint portraits. */}
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
