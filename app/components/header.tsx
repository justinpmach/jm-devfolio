import LinkHover from './animations/LinkHover';

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Skills', href: '/skills' },
  { title: 'Artwork', href: '/artwork' },
  { title: 'Contact', href: '/contact' },
];

const Header = () => {
  return (
    <header className='fixed top-0 h-20 w-full grid place-items-center  '>
      <div className='flex text-xl uppercase text-white'>
        {menuItems.map((item, i) => {
          return (
            <div key={i} className='relative'>
              <LinkHover title={item.title} href={item.href} />
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
