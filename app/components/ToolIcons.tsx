'use client';
import Image from 'next/image';
export default function ToolsIcons() {
  const loaderProp = ({ src }: { src: string }) => {
    return src;
  };
  return (
    <div className='grid md:grid-cols-3 gap-8'>
      <Image
        loader={loaderProp}
        src='https://skillicons.dev/icons?i=html,css,js'
        alt='icon'
        width={150}
        height={50}
      />
      <Image
        loader={loaderProp}
        src='https://skillicons.dev/icons?i=ts,react,angular'
        alt='icon'
        width={150}
        height={50}
      />
      <Image
        loader={loaderProp}
        src='https://skillicons.dev/icons?i=next,tailwind,mysql'
        alt='icon'
        width={150}
        height={50}
      />
    </div>
  );
}
