import SlideIn from '../animations/SlideIn';
import Timeline from '../Timeline';

export default function Work() {
  // hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
  return (
    <section id='work'>
      <div className='grid gap-8 grid-cols-1 w-full px-8 md:px-12 lg:px-20 xl:px-28'>
        <SlideIn>
          <div className='text-center'>
            <span className='text-5xl lg:text-6xl font-bold tracking-tighter mb-8'>
              Work
            </span>
            <p className='text-md font-semibold text-gray-500 tracking-wide'>
              Experience.
            </p>
          </div>
        </SlideIn>
        <Timeline />
      </div>
    </section>
  );
}
