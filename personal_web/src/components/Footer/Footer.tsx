import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { robotoMono } from '@/app/fonts/fonts';


const Footer: React.FC = () => {

  return (
    <footer className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={`text-sm ${robotoMono.className} mb-4 md:mb-0`}>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/djordjeivanovic11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com/in/djordjeivanovic11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
              <FaLinkedin size={24} />
            </Link>
            <Link href="mailto:dorde_ivanovic@college.harvard.edu" className="hover:text-gray-400 transition-colors duration-300">
              <FaEnvelope size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
