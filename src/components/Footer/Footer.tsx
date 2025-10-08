import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { robotoMono } from '@/app/fonts/fonts';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 sm:py-6 bg-[#1c0101] overflow-hidden text-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className={`text-xs sm:text-sm ${robotoMono.className} mb-4 sm:mb-0 text-center sm:text-left`}>
            © {new Date().getFullYear()} Djordje Ivanovic. All rights reserved.
          </div>
          <div className="flex space-x-6 sm:space-x-4">
            <Link href="https://github.com/djordjeivanovic11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
              <FaGithub size={20} className="sm:w-6 sm:h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/djordje-ivanovic11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
              <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
            </Link>
            <Link href="mailto:dorde_ivanovic@college.harvard.edu" className="hover:text-gray-400 transition-colors duration-300">
              <FaEnvelope size={20} className="sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
