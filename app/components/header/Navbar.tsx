'use client';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  {
    id: 'home',
    title: 'Home',
    href: '/',
  },
  {
    id: 'about',
    title: 'About',
    href: '#about',
  },
  {
    id: 'work',
    title: 'Work',
    href: '#work',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '#contact',
  },
];

const navVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
};

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      document.documentElement.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('bg-gray-100');
      document.body.classList.add('bg-neutral-900');
    } else {
      document.body.classList.add('bg-gray-100');
      document.body.classList.remove('bg-neutral-900');
    }
  };
  return (
    <>
      <button
        className='absolute top-0 right-16 z-40'
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        X
      </button>
      <button
        className='absolute top-0 right-24 z-40'
        onClick={() => {
          handleDarkMode();
        }}
      >
        Dark Mode
      </button>
      <motion.nav
        className='sticky top-0 z-30 bg-gray-50 text-dark-gray shadow-sm'
        animate={hidden ? 'hidden' : 'visible'}
        variants={navVariants}
      >
        <div className='mx-auto max-w-7xl px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='flex flex-shrink-0 items-center border rounded-full'>
              JM
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {navItems.map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => scrollToSection(item.id)}
                      className=' text-gray-400 hover:bg-gray-200 hover:text-dark-gray rounded-md px-3 py-2 text-md font-medium'
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
