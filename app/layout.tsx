'use client';
import { useEffect, useState } from 'react';
import { Variants, motion } from 'framer-motion';

import './globals.css';
import { Maven_Pro } from 'next/font/google';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ToggleSwitch from './components/ToggleSwitch';

const mavenPro = Maven_Pro({ subsets: ['latin'] });

const darkModeVariants: Variants = {
  hidden: custom => ({
    // clipPath: 'polygon(0 0, 100% 0, 0 0, 0 0)',
    // clipPath: 'inset(5% 95% 95% 5% rounded 200px)',
    // color: custom === 'dark' ? '#ffffff' : '#333333',
    // backgroundColor: custom === 'dark' ? '#171717' : '#f1f5f9',
    opacity: 0,
  }),

  visible: custom => ({
    // clipPath: 'inset(0% 0% 0% 0% rounded 200px )',
    color: custom === 'dark' ? '#fff' : '#333333',
    backgroundColor: custom === 'dark' ? '#171717' : '#f1f5f9',
    opacity: 1,
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <html lang='en'>
      <body className={mavenPro.className}>
        <motion.div
          className='relative'
          initial='hidden'
          animate='visible'
          variants={darkModeVariants}
          custom={darkMode ? 'dark' : 'light'}
        >
          {/* <ToggleSwitch isOn={darkMode} handleClick={handleDarkMode} /> */}

          <Header />
          <main>{children}</main>
          <Footer />
        </motion.div>
      </body>
    </html>
  );
}
