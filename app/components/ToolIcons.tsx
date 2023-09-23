'use client';
import Image from 'next/image';
export default function ToolsIcons() {
  const loaderProp = ({ src }: { src: string }) => {
    return src;
  };
  return (
    <Image
      loader={loaderProp}
      src='https://skillicons.dev/icons?i=html,css,js,ts,react,next,tailwind,sass,mysql,prisma'
      alt='icon'
      width={500}
      height={50}
    />
  );
}
