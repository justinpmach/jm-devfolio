// import { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
import Curve from '@/app/components/Curve';
import ArtworkGrid from '@/app/components/animations/ArtworkGrid';

export default function Artwork() {
  return (
    <Curve>
      <section
        id='artwork'
        className='h-screen w-full min-h-screen max-w-full text-white flex justify-center items-center bg-artwork overflow-y-scroll'
      >
        {/* <h1 className='text-white uppercase text-center font-semibold text-[50px] lg:text-[70px] leading-[90%] mt-16 mb-4 py-8 lg:py-0 lg:my-4'>
          Artwork
        </h1> */}
        <ArtworkGrid />
      </section>
    </Curve>
  );
}
