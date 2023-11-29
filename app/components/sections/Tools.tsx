import Image from 'next/image';
import ToolsIcons from '../ToolIcons';

export default function Tools() {
  return (
    <section id='tools' className=''>
      <div className='flex flex-col w-full justify-center px-40'>
        <span className='text-center text-5xl lg:text-6xl font-bold tracking-tighter'>
          Tools.
        </span>
        <div className='w-full flex justify-center mt-5'>
          <ToolsIcons />
        </div>
      </div>
    </section>
  );
}
