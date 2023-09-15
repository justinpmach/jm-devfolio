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
    <div className='relative'>
      {/* Switch */}
      <div
        className={`absolute top-5 left-4 z-50 w-10 h-6 flex rounded-full p-1 cursor-pointer bg-gray-300 ${
          isOn ? 'justify-end' : 'justify-start'
        }`}
        onClick={() => handleClick()}
      >
        {/* Handle */}
        <motion.div
          className={`w-4 h-4 z-50 rounded-[40px] ${
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
