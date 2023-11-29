import TestNav from '@/app/testing/TestNav';
import Navbar from './Navbar';
import DrawCircle from '../animations/DrawCircle';

export default function Header() {
  return (
    // <div className='sticky top-0 z-30 w-full text-dark-gray'>
    <div className=''>
      <div className='lg:fixed lg:top-5 lg:left-4'>
        <DrawCircle title='JM' />
      </div>
      <Navbar />
      {/* <TestNav /> */}
    </div>
  );
}
