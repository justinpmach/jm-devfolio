'use client';
import { Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ToggleSwitch from '../ToggleSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DrawCircle from '../animations/DrawCircle';

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

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-neutral-900');
      document.body.classList.remove('bg-gray-100');
    } else {
      document.body.classList.add('bg-gray-100');
      document.body.classList.remove('bg-neutral-900');
    }
  }, [darkMode]);

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
  };
  return (
    <>
      <ToggleSwitch isOn={darkMode} handleClick={handleDarkMode} />
      <motion.nav
        className='bg-gray-50'
        animate={hidden ? 'hidden' : 'visible'}
        variants={navVariants}
      >
        <div className='relative mx-auto max-w-7xl w-full'>
          <div className='flex h-16 items-center justify-between px-16'>
            {/* <div className='flex justify-center items-center border w-8 h-8 rounded-full'>
              <span className=''>JM</span>
            </div> */}
            <DrawCircle title='JM' />
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
      <button
        className='w-6 h-6 absolute top-5 right-16'
        onClick={() => setHidden(!hidden)}
      >
        <div
          className={`w-6 after:content-[''] after:block after:w-full after:h-[2px] after:relative after:rounded-md before:content-[''] before:block before:w-full before:h-[2px] before:relative before:rounded-md
          after:transition-all after:duration-[500ms] before:transition-all before:duration-[500ms]
          after:ease-[cubic-bezier(0.76,0,0.24,1)] before:ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            hidden
              ? 'after:-top-[1px] after:rotate-45 before:top-[1px] before:-rotate-45 after:bg-dark-gray before:bg-dark-gray'
              : 'after:-top-[4px] before:top-[4px] after:bg-gray-400 before:bg-gray-400'
          }`}
        ></div>
        {/* <FontAwesomeIcon icon={faBars} className='w-6 h-6' /> */}
      </button>
    </>
  );
}
