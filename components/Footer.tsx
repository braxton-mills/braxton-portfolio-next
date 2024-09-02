import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center space-x-6 mb-4'>
          <a
            href='https://github.com/braxton-mills'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-400 transition-colors'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://linkedin.com/in/braxton-mills'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-400 transition-colors'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='mailto:me@braxtonmills.com'
            className='hover:text-blue-400 transition-colors'
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className='text-center'>
          &copy; {new Date().getFullYear()} Braxton Mills. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
