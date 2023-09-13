import Image from 'next/image';

export default function Hero() {
  return (
    <section id='home'>
      <div className='content justify-evenly'>
        <div className='flex flex-col justify-between rounded-sm'>
          <span className='text-9xl font-bold tracking-tighter'>
            Frontend
            <br />
            Developer.
          </span>
          <span className='text-5xl font-bold tracking-tighter'>
            Justin Mach
          </span>
          <p className='text-right text-xl text-gray-500 tracking-tighter font-semibold'>
            aesthetic designs, intuitive apps, & clean code.
          </p>
        </div>

        <div className='relative flex items-center bg-slate-300 rounded-md'>
          <div className='absolute top-28 w-full h-1/4 skew-y-12 bg-gray-100'></div>
          <div className='h-full w-full flex'>
            <Image
              className='rounded-md z-20'
              src='/jm-hero-transparent.png'
              width={400}
              height={400}
              alt='Banner picture of Justin'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
