import { useRouter } from 'next/router';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const routes = {
  '/': 'Home',
  '/about': 'About',
  '/skills': 'Skills',
  '/artwork': 'Artwork',
  '/contact': 'Contact',
};

const text = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: '47.5%' },
  },
  exit: {
    opacity: 1,
    top: '40%',
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};
const translate = {
  initial: {
    top: '-300px',
  },
  enter: {
    top: '-100vh',
    transition: { duration: 0.75, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: '100vh',
    },
  },
  exit: {
    top: '-300px',
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

// const perspective = {
//   initial: { scale: 1, y: 0 },
//   enter: { scale: 1, y: 0 },
//   exit: {
//     scale: 0.9,
//     y: -150,
//     opacity: 0.5,
//     transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
//   },
// };

// const slide = {
//   initial: { y: '100vh' },
//   enter: { y: '100vh' },
//   exit: { y: '0', transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
// };

// const opacity = {
//   initial: { opacity: 0 },
//   enter: { opacity: 1, transition: { duration: 0.5 } },
//   exit: { opacity: 1 },
// };

const anim = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 0.7 },
  },
};

export default function Curve({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // const router = useRouter();

  // const handleNavigation = (path: string) => {
  //   console.log('path', router.pathname);
  //   console.log('item path', path);
  //   router.push(path);
  // };
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className='z-30'>
      <div
        style={{ opacity: dimensions.width > 0 ? 0 : 1 }}
        className='w-screen h-[calc(100vh + 600px)] -top-[300px] left-0 fixed pointer-events-none z-30'
      />
      <motion.p
        {...anim(text)}
        className='absolute top-[40%] left-1/2 text-white text-3xl z-30 -translate-x-1/2 text-center uppercase'
      >
        {routes[router.route]}
      </motion.p>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      <motion.div
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={containerVariants}
      >
        {children}
      </motion.div>
    </div>
  );
}

const SVG = ({ width, height }: { width: number; height: number }) => {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;
  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;
  const curve = (initialPath, targetPath) => {
    return {
      initial: { d: initialPath },
      enter: {
        d: targetPath,
        transition: { duration: 0.75, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: initialPath,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      },
    };
    // const slide = {
    //   initial: { top: '-300px' },
    //   enter: {
    //     top: '-100vh',
    //     transition: { duration: 0.75, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
    //   },
    //   exit: {
    //     top: '-300px',
    //     transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    //   },
    // };
  };

  return (
    <motion.svg
      {...anim(translate)}
      className='w-screen h-[calc(100vh+600px)] top-[-300px] left-0 fixed pointer-events-none'
    >
      <motion.path {...anim(curve(initialPath, targetPath))}></motion.path>
    </motion.svg>
  );
};
