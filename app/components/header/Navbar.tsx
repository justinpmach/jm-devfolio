import Link from 'next/link';

const navItems = [
  {
    title: 'Home',
    href: '#home',
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
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button */}
            <button
              type='button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              Menu
              {/* Icon when menu is open.

            Menu open: "block", Menu closed: "hidden" */}
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>JM</div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
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
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button
              type='button'
              className='relative rounded-full bg-gray-300 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
            >
              <span className='absolute -inset-1.5'></span>
              <span className='sr-only'>View notifications</span>
            </button>

            {/* Profile dropdown */}
            <div className='relative ml-3'>
              <div>
                <button
                  type='button'
                  className='relative flex rounded-md bg-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  id='user-menu-button'
                  aria-expanded='false'
                  aria-haspopup='true'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>Open user menu</span>
                  Menu
                </button>
              </div>
              {/* 
                Dropdown menu, show/hide based on menu state.
            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95" */}
              {/* <div
                className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='user-menu-button'
                tabIndex={-1}
              >
                Active: "bg-gray-100", Not Active: ""
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  tabIndex={-1}
                  id='user-menu-item-0'
                >
                  Your Profile
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  tabIndex={-1}
                  id='user-menu-item-1'
                >
                  Settings
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  tabIndex={-1}
                  id='user-menu-item-2'
                >
                  Sign out
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className='sm:hidden' id='mobile-menu'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          {navItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium'
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
