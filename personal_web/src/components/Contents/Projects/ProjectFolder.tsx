"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaFolderOpen, FaGithub } from 'react-icons/fa';
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';

interface ProjectFolderProps {
  name: string;
  description?: string;
  tags?: string[];
  githubLink?: string;
  detailedDescription?: string;
}

const ProjectFolder: React.FC<ProjectFolderProps> = ({ 
  name, 
  description, 
  tags, 
  githubLink, 
  detailedDescription 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Project Card */}
      <div
        onClick={toggleModal}
        className="flex flex-col items-start p-6 bg-[#F5F5DC] text-[#1c0101] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer transform hover:-translate-y-1"
      >
        {/* Icon and Project Name */}
        <div className="flex items-center mb-4">
          <FaFolderOpen />
          <h3 className={`${blackOpsOne.className} text-2xl font-bold`}>
            {name}
          </h3>
        </div>

        {/* Short Description */}
        {description && (
          <p className={`${robotoMono.className} text-sm mb-4`}>
            {description}
          </p>
        )}

        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-[#1c0101] text-[#F5F5DC] rounded-md text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* GitHub Link */}
        {githubLink && (
          <Link href={githubLink} target="_blank" rel="noopener noreferrer"  className="flex items-center text-sm text-[#1c0101] underline mt-2">
              <FaGithub />
              View on GitHub
          </Link>
        )}

        {/* CTA */}
        <div className="mt-auto">
          <p className={`${robotoMono.className} text-sm font-medium underline`}>
            Click to view details
          </p>
        </div>
      </div>

      {/* Modal for Detailed Description */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#F5F5DC] text-[#1c0101] p-6 rounded-lg max-w-lg w-full mx-4 shadow-xl">
            <h3 className={`${blackOpsOne.className} text-3xl mb-4`}>
              {name}
            </h3>
            {detailedDescription ? (
              <p className={`${robotoMono.className} text-sm mb-6`}>
                {detailedDescription}
              </p>
            ) : (
              <p className={`${robotoMono.className} text-sm mb-6`}>
                No additional details available for this project.
              </p>
            )}

            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="w-full py-2 px-4 rounded-lg bg-[#1c0101] text-[#F5F5DC] font-bold shadow-md hover:bg-opacity-90 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectFolder;
