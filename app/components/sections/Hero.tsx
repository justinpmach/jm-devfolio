import DrawSquareHero from '../animations/DrawSquareHero';
import SlideIn from '../animations/SlideIn';

export default function TestHero() {
  return (
    <section id='home'>
      <div className='flex w-full justify-evenly pb-20'>
        <div className='flex flex-col justify-between rounded-sm'>
          <SlideIn>
            <span className='text-9xl font-bold tracking-tighter'>
              Frontend
              <br />
              Developer.
            </span>
          </SlideIn>
          <span className='text-5xl font-bold tracking-tighter'>
            Justin Mach
          </span>
          <p className='text-right text-xl text-gray-500 tracking-tighter font-semibold'>
            aesthetic designs, intuitive apps, & clean code.
          </p>
        </div>

        <DrawSquareHero />
      </div>
    </section>
  );
}
