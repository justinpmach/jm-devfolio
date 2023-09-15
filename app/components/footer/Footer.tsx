import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className='mt-8 h-20 w-full border border-red-500'>
      <FontAwesomeIcon icon={faGithub} className='w-6 h-6' />
    </footer>
  );
}
