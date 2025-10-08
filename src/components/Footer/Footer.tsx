import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { inter } from "@/app/fonts/fonts";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 sm:py-12 bg-[var(--card-bg)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-6">
          {/* Copyright */}
          <div
            className={`${inter.className} text-sm text-[var(--secondary)] text-center sm:text-left`}
          >
            © {new Date().getFullYear()} Djordje Ivanovic. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/djordjeivanovic11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--accent)] transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/djordje-ivanovic11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[#0077b5] transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </Link>
            <Link
              href="mailto:dorde_ivanovic@college.harvard.edu"
              className="text-[var(--foreground)] hover:text-[var(--accent-tertiary)] transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </Link>
          </div>
        </div>

        {/* Additional links (Apple style) */}
        <div className="mt-8 pt-6 border-t border-[var(--border)]">
          <div
            className={`${inter.className} flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-[var(--secondary)]`}
          >
            <Link
              href="/projects"
              className="hover:text-[var(--foreground)] transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-[var(--foreground)] transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors duration-200"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
