import Image from 'next/image';

export default function Card({
  id,
  title,
  src,
}: {
  id: string;
  title: string;
  src: string;
}) {
  return (
    <div className='w-full flex flex-col items-center bg-gray-200 rounded-md shadow-md'>
      <div className='h-64 w-96 relative '>
        <Image
          src={src}
          alt='Picture of the author'
          layout='fill'
          objectFit='contain'
          sizes='(max-width: 768px) 100vw, 400px'
          className='rounded-lg'
        />
      </div>
      <p>{title}</p>
    </div>
  );
}
