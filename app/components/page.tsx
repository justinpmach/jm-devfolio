import { useRouter } from 'next/router';
import Header from './header';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const menuItems = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
];

export default function Page({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    console.log('path', router.pathname);
    console.log('item path', path);
    router.push(path);
  };

  return (
    <>
      <Header />
      <main> {children}</main>
      <div className='absolute bottom-8 right-8 text-white'>
        <button
          id='project-img-back-btn'
          aria-label='Back button for project images'
          className='h-8 w-8'
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
    </>
  );
}
