import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className='py-4 w-full text-center'>
      <span className='text-xs text-gray-400'>
        Developed in Visual Studio Code.
        <br />
        Built with Next.js, TypeScript, Tailwind CSS,
        <br />
        Framer Motion, and deployed with Vercel.
        <br />
        Text is set in the Maven Pro typeface.
      </span>

      {/* <FontAwesomeIcon icon={faGithub} className='w-6 h-6' /> */}
    </footer>
  );
}
