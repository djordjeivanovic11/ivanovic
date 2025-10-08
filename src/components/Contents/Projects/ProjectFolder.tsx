"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFolderOpen, FaGithub } from "react-icons/fa";
import { inter } from "@/app/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";

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
  detailedDescription,
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
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="flex flex-col items-start p-6 glass border border-[var(--border)] hover:border-[var(--accent)]/50 text-[var(--foreground)] rounded-2xl transition-all duration-300 cursor-pointer elevated-hover group"
      >
        {/* Icon and Project Name */}
        <div className="flex items-center mb-4">
          <FaFolderOpen className="text-3xl mr-3 text-[var(--accent)] group-hover:scale-110 transition-transform duration-300" />
          <h3
            className={`${inter.className} text-xl sm:text-2xl font-semibold group-hover:text-[var(--accent)] transition-colors duration-300`}
          >
            {name}
          </h3>
        </div>

        {/* Short Description */}
        <p
          className={`${inter.className} text-sm sm:text-base text-[var(--secondary)] mb-4 leading-relaxed`}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => {
            // Assign colors based on tag type
            const getTagColor = (tagName: string) => {
              const tagLower = tagName.toLowerCase();
              if (tagLower.includes("react") || tagLower.includes("next"))
                return "bg-blue-500/10 text-blue-600 border-blue-500/20";
              if (tagLower.includes("python") || tagLower.includes("django"))
                return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
              if (tagLower.includes("node") || tagLower.includes("javascript"))
                return "bg-green-500/10 text-green-600 border-green-500/20";
              if (tagLower.includes("typescript"))
                return "bg-blue-600/10 text-blue-700 border-blue-600/20";
              if (tagLower.includes("css") || tagLower.includes("tailwind"))
                return "bg-cyan-500/10 text-cyan-600 border-cyan-500/20";
              if (tagLower.includes("data") || tagLower.includes("pandas"))
                return "bg-purple-500/10 text-purple-600 border-purple-500/20";
              if (tagLower.includes("ml") || tagLower.includes("ai"))
                return "bg-pink-500/10 text-pink-600 border-pink-500/20";
              if (tagLower.includes("ocaml") || tagLower.includes("functional"))
                return "bg-orange-500/10 text-orange-600 border-orange-500/20";
              if (tagLower.includes("database") || tagLower.includes("sql"))
                return "bg-indigo-500/10 text-indigo-600 border-indigo-500/20";
              return "bg-[var(--card-bg)] text-[var(--foreground)] border-[var(--border)]";
            };

            return (
              <span
                key={index}
                className={`${inter.className} px-3 py-1 ${getTagColor(
                  tag
                )} border rounded-full text-xs font-medium transition-all duration-200 hover:scale-105`}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* GitHub Links */}
        {(frontendLink || backendLink) && (
          <div className="flex flex-col gap-2 mt-2 mb-4">
            {frontendLink && (
              <Link
                href={frontendLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${inter.className} flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
                Frontend Repository
              </Link>
            )}
            {backendLink && (
              <Link
                href={backendLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${inter.className} flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
                Backend Repository
              </Link>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto">
          <p
            className={`${inter.className} text-sm font-medium text-[var(--accent)] group-hover:translate-x-1 transition-transform duration-300`}
          >
            View details →
          </p>
        </div>
      </motion.div>

      {/* Modal for Detailed Description */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass border border-[var(--border)] text-[var(--foreground)] p-8 rounded-2xl max-w-2xl w-full shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative gradient blob in modal */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[var(--accent)]/20 to-purple-500/20 rounded-full blur-3xl"></div>

              <h3
                className={`${inter.className} text-3xl sm:text-4xl font-semibold mb-6 text-[var(--foreground)] relative`}
              >
                {name}
              </h3>
              <p
                className={`${inter.className} text-base sm:text-lg text-[var(--foreground)] mb-8 leading-relaxed`}
              >
                {detailedDescription}
              </p>

              {/* Close Button */}
              <button
                onClick={toggleModal}
                className={`${inter.className} w-full py-3 px-4 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium shadow-lg transition-all duration-200`}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectFolder;
