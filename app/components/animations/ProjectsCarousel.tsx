import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  src: string;
  tools: string[];
}

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

export default function ProjectsCarousel({
  projects,
  setSelected,
}: {
  projects: Project[];
  setSelected: Dispatch<SetStateAction<Project | null>>;
}) {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, projects.length, imageCount);

  const swipeToImage = (swipeDirection: number) => {
    // TODO: FIX INDEX ISSUE
    setSelected(projects[imageCount + 1]);
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    console.log('dragInfo: ', dragInfo);
    console.log('type: ', typeof dragInfo);
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (index: number) => {
    let changeDirection = 0;
    if (index > activeImageIndex) {
      changeDirection = 1;
    } else if (index < activeImageIndex) {
      changeDirection = -1;
    }
    setSelected(projects[index]);
    setImageCount([index, changeDirection]);
  };

  return (
    <div className='relative w-full'>
      <div className='w-full gap-4 flex flex-col items-center'>
        <div className='relative h-[300px] w-[320px] md:h-[400px] md:w-[500px] xl:h-[450px] xl:w-[600px] overflow-hidden shadow-md rounded-sm'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${projects[activeImageIndex]?.src})`,
              }}
              custom={direction}
              variants={sliderVariants}
              initial='incoming'
              animate='active'
              exit='exit'
              transition={sliderTransition}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className='absolute w-full h-full bg-cover bg-no-repeat bg-center will-change-transform hover:cursor-grab active:cursor-grabbing rounded-sm'
            />
          </AnimatePresence>
          <div className='absolute bottom-5 w-full flex justify-between mt-3 px-8 text-black opacity-25'>
            <button onClick={() => swipeToImage(-1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={() => swipeToImage(1)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <div className='flex gap-3 w-full'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => skipToImage(index)}
              className='relative w-full h-16 hover:cursor-pointer shadow-md rounded-sm'
            >
              <Image
                className={`object-cover object-center rounded-md ${
                  index === activeImageIndex ? 'opacity-100' : 'opacity-50'
                }`}
                src={project.src}
                alt='Project Carousel Images'
                fill={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <div
                className={`absolute top-0 left-0 h-full w-full pointer-events-none scale-x-0 origin-left opacity-25 bg-gray-800 transition duration-[1000ms] ease-[cubic-bezier(0.56, 0.03, 0.12, 1.04)] transform rounded-sm ${
                  index === activeImageIndex ? 'scale-x-100' : null
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
