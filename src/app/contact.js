import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="flex flex-row justify-center">
      <a href="https://github.com/AnibeA" target="_blank" rel="noopener noreferrer">
        <FaGithub size={32} className="mx-2" />
      </a>
      <a href="https://www.linkedin.com/in/anibe-alhassan-400845235/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} className="mx-2" />
      </a>
      <a href="mailto:anibealhassan@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope size={32} className="mx-2" />
      </a>
    </div>
  );
}
