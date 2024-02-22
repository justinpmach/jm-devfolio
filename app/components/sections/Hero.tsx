import DrawSquareHero from '../animations/DrawSquareHero';
import SlideIn from '../animations/SlideIn';
import TextReveal from '../animations/TextReveal';

export default function Hero() {
  return (
    <section id='home'>
      <div className='grid gap-8 lg:grid-cols-2 w-full lg:px-20 xl:px-28 '>
        {/* Hero Title */}
        <div className='flex flex-col space-y-6 text-center lg:text-right lg:justify-center lg:items-end rounded-sm'>
          {/* <span className='text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tighter'>
            <TextReveal textFirst='Hi,' />
          </span> */}
          <span className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter'>
            <TextReveal textFirst='Justin Mach' />
          </span>
          <SlideIn>
            <span className='text-xl md:text-2xl font-semibold tracking-tighter'>
              Experienced Frontend Engineer
            </span>
          </SlideIn>
          <p className='text-center lg:text-right text-sm md:text-lg lg:text-xl text-gray-550 tracking-tighter font-semibold my-5 lg:my-0'>
            I focus on building beautiful and intuitive user interfaces.
          </p>
        </div>
        {/* Hero Image */}
        <DrawSquareHero />
      </div>
    </section>
  );
}
