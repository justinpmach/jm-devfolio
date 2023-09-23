import SlideIn from '../animations/SlideIn';
import Timeline from '../Timeline';

export default function Work() {
  // hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
  return (
    <section id='work'>
      <div className='relative flex flex-col w-full justify-center px-40 z-0 h-full'>
        <SlideIn>
          <div className='text-center'>
            <span className='text-6xl font-bold tracking-tighter mb-8'>
              Work
            </span>
            <p className='text-md font-semibold text-gray-500 tracking-wide'>
              Experience.
            </p>
          </div>
        </SlideIn>
        <div className='w-full mt-5 h-full'>
          <Timeline />
        </div>
      </div>
    </section>
  );
}
