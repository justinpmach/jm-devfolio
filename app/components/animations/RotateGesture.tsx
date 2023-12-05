'use client';
import { motion } from 'framer-motion';

export default function RotateGesture({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className='z-50'
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: '100%',
      }}
    >
      {children}
    </motion.div>
  );
}
