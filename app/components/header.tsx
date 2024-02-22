import { useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const menuItems = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Skills', path: '/skills' },
  { text: 'Artwork', path: '/artwork' },
  { text: 'Contact', path: '/contact' },
];

const MenuItem = ({ item, selected, onClick }) => (
  <motion.div
    className='relative my-0 mx-[1.5rem] text-[3rem] cursor-pointer'
    animate={{ opacity: selected ? 1 : 0.5 }}
  >
    <Link
      href={item.path}
      style={{
        textDecoration: 'none',
        color: '#000',
        textTransform: 'uppercase',
      }}
      onClick={onClick}
    >
      {item.text}
    </Link>
    {selected && (
      <motion.div
        className='absolute top-100 left-0 w-full h-[4px] rounded-lg bg-black opacity-50'
        layoutId='underline'
      />
    )}
  </motion.div>
);

const Header = () => {
  const router = useRouter();
  const [selected, setSelected] = useState('/');
  return (
    <header className='fixed top-0 h-20 w-full grid place-items-center z-40'>
      {/* <div className='flex justify-evenly'>
        <LayoutGroup>
          {menuItems.map((item, i) => (
            <MenuItem
              item={item}
              key={i}
              selected={selected === router.pathname}
              onClick={e => {
                e.preventDefault();
                console.log(router.pathname);
                router.push(item.path);
                setSelected(item.path);
              }}
            />
          ))}
        </LayoutGroup>
      </div> */}
      <div className='flex'>
        <div className='py-[1em] px-[2em]'>
          <Link
            href='/'
            style={{
              textDecoration: 'none',
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            Home
          </Link>
        </div>
        <div className='py-[1em] px-[2em]'>
          <Link
            href='/about'
            style={{
              textDecoration: 'none',
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            About
          </Link>
        </div>
        <div className='py-[1em] px-[2em]'>
          <Link
            href='/skills'
            style={{
              textDecoration: 'none',
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            Skills
          </Link>
        </div>
        <div className='py-[1em] px-[2em]'>
          <Link
            href='/artwork'
            style={{
              textDecoration: 'none',
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            Artwork
          </Link>
        </div>
        <div className='py-[1em] px-[2em]'>
          <Link
            href='/contact'
            style={{
              textDecoration: 'none',
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
    // <header className='fixed w-full flex justify-between p-[1em]'>
    //   <div className='py-[1em] px-[2em]'>
    //     <Link
    //       href='/'
    //       className='text-black uppercase no-underline'
    //       style={{
    //         textDecoration: 'none',
    //         color: '#000',
    //         textTransform: 'uppercase',
    //       }}
    //     >
    //       Logo
    //     </Link>
    //   </div>
    //   <div className='flex'>
    //     <div className='py-[1em] px-[2em]'>
    //       <Link
    //         href='/'
    //         style={{
    //           textDecoration: 'none',
    //           color: '#000',
    //           textTransform: 'uppercase',
    //         }}
    //       >
    //         Home
    //       </Link>
    //     </div>
    //     <div className='py-[1em] px-[2em]'>
    //       <Link
    //         href='/about'
    //         style={{
    //           textDecoration: 'none',
    //           color: '#000',
    //           textTransform: 'uppercase',
    //         }}
    //       >
    //         About
    //       </Link>
    //     </div>
    //     <div className='py-[1em] px-[2em]'>
    //       <Link
    //         href='/contact'
    //         style={{
    //           textDecoration: 'none',
    //           color: '#000',
    //           textTransform: 'uppercase',
    //         }}
    //       >
    //         Contact
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
