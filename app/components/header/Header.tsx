import TestNav from '@/app/testing/TestNav';
import Navbar from './Navbar';
import DrawCircle from '../animations/DrawCircle';
import RotateGesture from '../animations/RotateGesture';

export default function Header() {
  return (
    // <div className='sticky top-0 z-30 w-full text-dark-gray'>
    <div className='absolute top-0 left-0 z-50'>
      <div className='lg:fixed lg:top-5 lg:left-4'>
        <RotateGesture>
          <DrawCircle title='JM' />
        </RotateGesture>
      </div>
      <Navbar />
      {/* <TestNav /> */}
    </div>
  );
}
