'use client';
import { motion, Variants } from 'framer-motion';

const sentenceVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, staggerChildren: 0.08, ease: 'easeIn' },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeIn' },
  },
};

export default function TextReveal({
  textFirst,
  textSecond,
}: {
  textFirst: string;
  textSecond?: string;
}) {
  return (
    <motion.span initial='hidden' animate='visible' variants={sentenceVariants}>
      {textFirst &&
        textFirst.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letterVariants}>
              {char}
            </motion.span>
          );
        })}
      <br />
      {textSecond &&
        textSecond.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letterVariants}>
              {char}
            </motion.span>
          );
        })}
    </motion.span>
  );
}
