import Link from 'next/link';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Work',
    href: '#work',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-30 bg-gray-50 text-dark-gray shadow-sm'>
      <div className='mx-auto max-w-7xl px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-start'>
            <div className='flex flex-shrink-0 items-center border rounded-full'>
              JM
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {navItems.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className=' text-gray-400 hover:bg-gray-200 hover:text-dark-gray rounded-md px-3 py-2 text-md font-medium'
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
