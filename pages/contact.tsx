import ContactForm from '@/app/components/ContactForm';
import Page from '@/app/components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import Curve from '@/app/components/Curve';

export default function Contact() {
  return (
    <Curve>
      {/* <h1 className='absolute top-[50%] left-[50%] translate-x-1/2 translate-y-1/2 uppercase text-center font-semibold text-[100px] leading-[90%]'>
        Contact
      </h1> */}
      <section
        id='contact'
        className='h-screen text-white py-28 lg:py-36 xl:py-40 w-full flex justify-center items-start bg-contact'
      >
        <div className='grid gap-8 grid-cols-1 w-full'>
          <div className='w-full text-center flex flex-col'>
            {/* <span className='text-5xl lg:text-6xl font-bold tracking-tighter'>
              Contact.
            </span> */}
            <span className='text-md font-semibold text-white tracking-wide mt-4'>
              Send me a message!
            </span>
          </div>
          <div className='grid gap-8 grid-cols-1 lg:grid-cols-3 justify-center px-8 md:px-12 lg:px-20 xl:px-28'>
            <ContactForm />
            <div className='lg:col-span-1 flex lg:flex-col space-x-8 lg:space-x-0 py-4 lg:py-0 lg:space-y-9 justify-center items-center text-xs font-semibold uppercase tracking-wide text-gray-400 border border-slate-300 rounded-md shadow-sm'>
              <a
                href='https://github.com/justinpmach'
                className='flex flex-col items-center justify-center hover:text-white transition-all'
              >
                <FontAwesomeIcon icon={faGithub} className='w-8 h-8 lg:mb-2' />
                Github
              </a>
              <a
                href='https://www.linkedin.com/in/justinpmach/'
                className='flex flex-col items-center justify-center hover:text-white transition-all'
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className='w-8 h-8 lg:mb-2'
                />
                LinkedIn
              </a>
              <a
                href='mailto:justin.mach.dev@gmail.com'
                className='flex flex-col items-center justify-center hover:text-white transition-all'
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='w-8 h-8 lg:mb-2'
                />
                Email
              </a>
              <a
                href='2023_Resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center justify-center hover:text-white transition-all'
              >
                <FontAwesomeIcon
                  icon={faDownload}
                  className='w-8 h-8 lg:mb-2'
                />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </Curve>
  );
}
