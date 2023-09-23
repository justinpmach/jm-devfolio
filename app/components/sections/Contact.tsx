import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from '../ContactForm';
import SlideIn from '../animations/SlideIn';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
// import { faFileLines } from '@fortawesome/free-solid-svg-icons/faFileLines';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';

export default function Contact() {
  return (
    <section id='contact'>
      <div className='flex flex-col w-full justify-center py-10 px-40'>
        <div className='w-full flex flex-col'>
          <SlideIn>
            <span className='text-6xl font-bold tracking-tighter'>
              Contact.
            </span>
          </SlideIn>
          <span className='text-md font-semibold text-gray-500 tracking-wide mt-4'>
            Send me a message!
          </span>
        </div>
        <div className='flex w-full mt-8 justify-between gap-10'>
          <ContactForm />
          <div className='w-2/5 flex flex-col space-y-9 justify-center items-center text-xs font-semibold uppercase tracking-wide text-gray-400 border border-slate-300 rounded-md shadow-sm'>
            <a
              href='https://github.com/justinpmach'
              className='flex flex-col items-center justify-center hover:text-dark-gray transition-all'
            >
              <FontAwesomeIcon icon={faGithub} className='w-8 h-8 mb-2' />
              Github
            </a>
            <a
              href='https://www.linkedin.com/in/justinpmach/'
              className='flex flex-col items-center justify-center hover:text-dark-gray transition-all'
            >
              <FontAwesomeIcon icon={faLinkedin} className='w-8 h-8 mb-2' />
              LinkedIn
            </a>
            <a
              href='mailto:justin.mach.dev@gmail.com'
              className='flex flex-col items-center justify-center hover:text-dark-gray transition-all'
            >
              <FontAwesomeIcon icon={faEnvelope} className='w-8 h-8 mb-2' />
              Email
            </a>
            <a
              href='/public/Resume_Finished.pdf'
              target='_blank'
              className='flex flex-col items-center justify-center hover:text-dark-gray transition-all'
            >
              <FontAwesomeIcon icon={faDownload} className='w-8 h-8 mb-2' />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
