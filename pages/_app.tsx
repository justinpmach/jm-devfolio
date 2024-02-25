import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import './globals.css';
import Link from 'next/link';
import Header from '@/app/components/header';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  );
};

export default App;
