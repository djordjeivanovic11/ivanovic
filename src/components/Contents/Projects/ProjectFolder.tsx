"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaFolderOpen, FaGithub } from 'react-icons/fa';
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';
import { motion } from 'framer-motion';

interface ProjectFolderProps {
  name: string;
  description: string;
  tags: string[];
  frontendLink?: string; 
  backendLink?: string; 
  detailedDescription: string;
}

const ProjectFolder: React.FC<ProjectFolderProps> = ({ 
  name, 
  description, 
  tags, 
  frontendLink, 
  backendLink, 
  detailedDescription 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Project Card */}
      <motion.div
        onClick={toggleModal}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-start p-6 bg-gradient-to-r from-[#f5f5dc] to-[#e0e0d1] text-[#1c0101] rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor-pointer transform hover:-translate-y-1"
      >
        {/* Icon and Project Name */}
        <div className="flex items-center mb-4">
          <FaFolderOpen className="text-3xl mr-2" />
          <h3 className={`${blackOpsOne.className} text-2xl font-bold`}>
            {name}
          </h3>
        </div>

        {/* Short Description */}
        <p className={`${robotoMono.className} text-sm mb-4`}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-[#1c0101] text-[#F5F5DC] rounded-md text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub Links */}
        <div className="flex flex-col gap-2 mt-2">
          {frontendLink && (
            <Link href={frontendLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#1c0101] hover:underline">
              <FaGithub />
              Frontend Repository
            </Link>
          )}
          {backendLink && (
            <Link href={backendLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#1c0101] hover:underline">
              <FaGithub />
              Backend Repository
            </Link>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <p className={`${robotoMono.className} text-sm font-medium underline`}>
            Click to view details
          </p>
        </div>
      </motion.div>

      {/* Modal for Detailed Description */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F5F5DC] text-[#1c0101] p-6 rounded-lg max-w-lg w-full mx-4 shadow-xl"
          >
            <h3 className={`${blackOpsOne.className} text-3xl mb-4`}>
              {name}
            </h3>
            <p className={`${robotoMono.className} text-sm mb-6`}>
              {detailedDescription}
            </p>

            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="w-full py-2 px-4 rounded-lg bg-[#1c0101] text-[#F5F5DC] font-bold shadow-md hover:bg-opacity-90 transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectFolder;
