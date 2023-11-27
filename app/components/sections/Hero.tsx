import DrawSquareHero from '../animations/DrawSquareHero';
import SlideIn from '../animations/SlideIn';
import TextReveal from '../animations/TextReveal';

export default function Hero() {
  return (
    <section id='home'>
      <div className='flex flex-col lg:flex-row w-full justify-center lg:justify-evenly py-20'>
        <div className='flex flex-col text-center lg:text-left lg:justify-between rounded-sm'>
          <span className='text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-5 lg:mb-0'>
            <TextReveal textFirst='Frontend' textSecond='Developer.' />
            <br />
          </span>
          <SlideIn>
            <span className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter'>
              Justin Mach
            </span>
          </SlideIn>
          <p className='text-center lg:text-right text-sm md:text-lg lg:text-xl text-gray-500 tracking-tighter font-semibold my-5 lg:my-0'>
            aesthetic designs, intuitive apps, & clean code.
          </p>
        </div>

        <DrawSquareHero />
      </div>
    </section>
  );
}
