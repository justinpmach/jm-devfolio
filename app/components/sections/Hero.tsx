import DrawSquareHero from '../animations/DrawSquareHero';
import SlideIn from '../animations/SlideIn';
import TextReveal from '../animations/TextReveal';

export default function Hero() {
  return (
    <section id='home'>
      <div className='grid gap-8 lg:grid-cols-2 w-full lg:px-20 xl:px-28'>
        {/* Hero Title */}
        <div className='flex flex-col text-center lg:text-left lg:justify-between lg:items-center rounded-sm'>
          <span className='text-5xl md:text-8xl xl:text-9xl font-bold tracking-tighter mb-5 lg:mb-0'>
            <TextReveal textFirst='Frontend' textSecond='Engineer.' />
            <br />
          </span>
          <SlideIn>
            <span className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter'>
              Justin Mach
            </span>
          </SlideIn>
          <p className='text-center lg:text-right text-sm md:text-lg lg:text-xl text-gray-550 tracking-tighter font-semibold my-5 lg:my-0'>
            aesthetic designs, intuitive apps, & clean code.
          </p>
        </div>
        {/* Hero Image */}
        <DrawSquareHero />
      </div>
    </section>
  );
}
