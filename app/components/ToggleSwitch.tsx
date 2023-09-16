'use client';
import { motion } from 'framer-motion';

export default function ToggleSwitch({
  isOn,
  handleClick,
}: {
  isOn: boolean;
  handleClick: Function;
}) {
  return (
    <div className='relative flex justify-center'>
      {/* Switch */}
      <div
        className={`w-8 h-4 flex items-center rounded-full p-1 cursor-pointer bg-gray-300 ${
          isOn ? 'justify-end' : 'justify-start'
        }`}
        onClick={() => handleClick()}
      >
        {/* Handle */}
        <motion.div
          className={`w-3 h-3 z-40 rounded-[40px] ${
            isOn ? 'bg-dark-gray' : 'bg-white '
          }`}
          layout
          transition={spring}
        />
      </div>
    </div>
  );
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
