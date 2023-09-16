import DrawSquareHero from '../animations/DrawSquareHero';
import SlideIn from '../animations/SlideIn';
import TextReveal from '../animations/TextReveal';

export default function Hero() {
  return (
    <section id='home'>
      <div className='flex w-full justify-evenly py-20'>
        <div className='flex flex-col justify-between rounded-sm'>
          <span className='text-9xl font-bold tracking-tighter'>
            <TextReveal textFirst='Frontend' textSecond='Developer.' />
            <br />
          </span>
          <SlideIn>
            <span className='text-5xl font-bold tracking-tighter'>
              Justin Mach
            </span>
          </SlideIn>
          <p className='text-right text-xl text-gray-500 tracking-tighter font-semibold'>
            aesthetic designs, intuitive apps, & clean code.
          </p>
        </div>

        <DrawSquareHero />
      </div>
    </section>
  );
}
