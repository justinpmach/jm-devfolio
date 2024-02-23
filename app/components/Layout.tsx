import { useRouter } from 'next/router';
import Header from './header';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
];

const perspective = {
  initial: { scale: 1, y: 0 },
  enter: { scale: 1, y: 0 },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
};

const slide = {
  initial: { y: '100vh' },
  enter: { y: '100vh' },
  exit: { y: '0', transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
};

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 1 },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // const router = useRouter();

  // const handleNavigation = (path: string) => {
  //   console.log('path', router.pathname);
  //   console.log('item path', path);
  //   router.push(path);
  // };

  const anim = variants => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants,
    };
  };

  return (
    <div className='bg-black'>
      <motion.div
        className='h-screen w-full fixed top-0 left-0 bg-white z-[1]'
        {...anim(slide)}
      />
      <motion.div className='' {...anim(perspective)}>
        <motion.div className='' {...anim(opacity)}>
          <div className='flex'>
            <div className='py-[1em] px-[2em]'>
              <Link
                href='/'
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                Home
              </Link>
            </div>
            <div className='py-[1em] px-[2em]'>
              <Link
                href='/about'
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                About
              </Link>
            </div>
            <div className='py-[1em] px-[2em]'>
              <Link
                href='/skills'
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                Skills
              </Link>
            </div>
            <div className='py-[1em] px-[2em]'>
              <Link
                href='/artwork'
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                Artwork
              </Link>
            </div>
            <div className='py-[1em] px-[2em]'>
              <Link
                href='/contact'
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                Contact
              </Link>
            </div>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </div>
    // <>
    //   <Header />
    //   <main> {children}</main>
    //   <div className='absolute bottom-8 right-8 text-white'>
    //     <button
    //       id='project-img-back-btn'
    //       aria-label='Back button for project images'
    //       className='h-8 w-8'
    //     >
    //       <FontAwesomeIcon icon={faAngleDown} />
    //     </button>
    //   </div>
    // </>
  );
}
