'use client';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

export default function LinkHover({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative cursor-pointer overflow-hidden'
    >
      <WordAnimated
        href={href}
        title={title}
        variants={letterVariantsPrimary}
        isHovered={isHovered}
      />
      <div className='absolute top-0'>
        <WordAnimated
          href={href}
          title={title}
          variants={letterVariantsSecondary}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
}

const titleVariants: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.009,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.009,
    },
  },
};
const letterVariantsPrimary: Variants = {
  hidden: {
    y: 0,
  },
  visible: {
    y: -30,
    transition: { delay: 0.05, ease: [0.6, 0.01, 0.05, 0.95], type: 'tween' },
  },
};
const letterVariantsSecondary: Variants = {
  hidden: {
    y: 30,
  },
  visible: {
    y: 0,
    transition: { delay: 0.05, ease: [0.6, 0.01, 0.05, 0.95], type: 'tween' },
  },
};

const MotionLink = motion(Link);

const WordAnimated = ({
  title,
  variants,
  isHovered,
  href,
}: {
  title: string;
  variants: Variants;
  isHovered: boolean;
  href: string;
}) => {
  return (
    <MotionLink
      href={href}
      variants={titleVariants}
      initial='hidden'
      animate={isHovered ? 'visible' : 'hidden'}
      className='whitespace-nowrap relative p-4 md:py-[1em] md:px-[2em]'
    >
      {title.split('').map((char, i) =>
        char === ' ' ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            key={i}
            variants={variants}
            className='relative inline-block whitespace-nowrap'
          >
            {char}
          </motion.span>
        )
      )}
    </MotionLink>
  );
};
