import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from '../ContactForm';
import SlideIn from '../animations/SlideIn';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFileLines } from '@fortawesome/free-solid-svg-icons/faFileLines';

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
          <div className='w-2/5 grid grid-cols-2 p-8 font-semibold uppercase tracking-wide text-gray-400'>
            <div className='w-full flex flex-col justify-start items-center'>
              <FontAwesomeIcon icon={faGithub} className='w-8 h-8' />
              Github
            </div>
            <div className='flex flex-col justify-start items-center'>
              <FontAwesomeIcon icon={faLinkedin} className='w-8 h-8' />
              LinkedIn
            </div>
            <div className='flex flex-col justify-start items-center'>
              <FontAwesomeIcon icon={faEnvelope} className='w-8 h-8' />
              Email
            </div>
            <div className='flex flex-col justify-start items-center'>
              <FontAwesomeIcon icon={faFileLines} className='w-8 h-8' />
              Resume
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
