"use client";

import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";
import PhoneNavbar from "./PhoneNavbar";
import { AiOutlineFilePdf } from "react-icons/ai";
import { inter } from "@/app/fonts/fonts";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    checkIsMobile();
    handleScroll();

    window.addEventListener("resize", checkIsMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  if (isMobile) {
    return <PhoneNavbar />;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-[var(--border)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side navigation */}
          <div className="flex items-center space-x-8">
            <NavbarItem
              href="/"
              text="Home"
              className={`${inter.className} text-[17px] font-normal text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors duration-200`}
            />
            <NavbarItem
              href="/projects"
              text="Projects"
              className={`${inter.className} text-[17px] font-normal text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors duration-200`}
            />
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-6">
            <NavbarItem
              href="/contact"
              text="Contact"
              className={`${inter.className} text-[17px] font-normal text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors duration-200`}
            />
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button
                title="Resume"
                className={`${inter.className} flex items-center gap-2 px-4 py-2 text-[15px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-full transition-all duration-200 transform hover:scale-[1.02]`}
              >
                <AiOutlineFilePdf size={18} />
                <span>Resume</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
