'use client';
import { Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons/faHouseChimney';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faAt } from '@fortawesome/free-solid-svg-icons/faAt';
import DrawCircle from '../animations/DrawCircle';
import ToggleSwitch from '../ToggleSwitch';

const navItems = [
  {
    id: 'home',
    title: 'Home',
    href: '/',
    icon: <FontAwesomeIcon icon={faHouseChimney} />,
  },
  {
    id: 'about',
    title: 'About',
    href: '#about',
    icon: <FontAwesomeIcon icon={faAddressCard} />,
  },
  {
    id: 'work',
    title: 'Work',
    href: '#work',
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '#contact',
    icon: <FontAwesomeIcon icon={faAt} />,
  },
];

const navVariants: Variants = {
  initial: {
    opacity: 0,
    height: '100%',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.5,
      ease: 'easeIn',
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  hidden: {
    opacity: 0,
    height: '0%',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    height: '100%',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.5,
      ease: 'easeIn',
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const hoverVariants = {
  rest: {
    x: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeIn',
      delay: 0,
    },
  },
  hover: {
    x: -60,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
      delay: 0,
    },
  },
};

export default function NavBar() {
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
      <motion.nav
        className='border-2 border-slate-500 flex items-center rounded-full shadow-sm'
        initial='initial'
        animate={hidden ? 'hidden' : 'visible'}
        variants={navVariants}
      >
        <div className='flex flex-col items-center justify-center'>
          <div className='space-y-5'>
            <DrawCircle title='JM' />
            {navItems.map((item, index) => {
              return (
                <motion.div
                  key={`${item.id}-${index}`}
                  className='relative flex justify-center items-center'
                  initial='rest'
                  whileHover='hover'
                >
                  <motion.span
                    className='absolute flex justify-center items-center h-full w-full text-gray-400 font-semibold tracking-tight'
                    variants={hoverVariants}
                  >
                    {item.title}
                  </motion.span>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className='text-gray-400 hover:text-dark-gray rounded-md px-3 py-2 text-md font-medium'
                  >
                    {item.icon}
                  </button>
                </motion.div>
              );
            })}
            <ToggleSwitch isOn={darkMode} handleClick={handleDarkMode} />
          </div>
        </div>
      </motion.nav>

      <button
        className='w-6 h-6 absolute top-5 right-4 z-30'
        onClick={() => setHidden(!hidden)}
      >
        <div
          className={`w-6 after:content-[''] after:block after:w-full after:h-[2px] after:relative after:rounded-md before:content-[''] before:block before:w-full before:h-[2px] before:relative before:rounded-md
          after:transition-all after:duration-[500ms] before:transition-all before:duration-[500ms]
          after:ease-[cubic-bezier(0.76,0,0.24,1)] before:ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            hidden
              ? 'after:-top-[4px] before:top-[4px] after:bg-gray-400 before:bg-gray-400'
              : 'after:-top-[1px] after:rotate-45 before:top-[1px] before:-rotate-45 after:bg-gray-400 before:bg-gray-400'
          }`}
        ></div>
      </button>
    </>
  );
}
