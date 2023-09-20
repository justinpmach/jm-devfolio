import TestNav from '@/app/testing/TestNav';
import Navbar from './Navbar';

export default function Header() {
  return (
    // <div className='sticky top-0 z-30 w-full text-dark-gray'>
    <div className='fixed h-full top-10 right-12 text-dark-gray z-30'>
      <Navbar />
      {/* <TestNav /> */}
    </div>
  );
}
