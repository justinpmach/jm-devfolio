'use client';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const navVariants: Variants = {
  hidden: {
    width: '50%',
  },
  visible: {
    width: '100%',
    transition: {
      duration: 0.5,
    },
  },
};

const navItems = [
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Work',
    href: '#work',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export default function TestNav() {
  return (
    <motion.nav
      className='z-30 border border-neutral-900 rounded-full text-dark-gray shadow-sm'
      initial='hidden'
      whileHover='visible'
      variants={navVariants}
    >
      <div className='mx-auto px-8'>
        <div className='relative flex h-16 items-center justify-center'>
          <div className='flex space-x-4'>
            {navItems.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className=' text-gray-400 hover:bg-gray-200 hover:text-dark-gray rounded-md px-3 py-2 text-md font-medium'
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
