import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import './globals.css';
import Link from 'next/link';

const routes = {
  '/': 'Home',
  '/about': 'About',
  '/artwork': 'Artwork',
  '/contact': 'Contact',
};

const App = ({ Component, pageProps, router }: AppProps) => {
  // const router = useRouter();

  return (
    <>
      <div className='flex fixed top-0'>
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
      <AnimatePresence mode='wait'>
        <Component key={router.route} {...pageProps} />
        {/* <motion.div key={router.pathname}>
        <Component {...pageProps} />
        <motion.div
          className='absolute top-0 left-0 w-full h-screen bg-[#0F0F0F] origin-bottom'
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className='absolute top-0 left-0 w-full h-screen bg-[#0F0F0F] origin-top'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className='text-center text-white text-[100px]'>
            {routes[router.route]}
          </h1>
        </motion.div>
      </motion.div> */}
      </AnimatePresence>
    </>
  );
};

export default App;
