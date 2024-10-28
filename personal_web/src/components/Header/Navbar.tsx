import React, { useEffect, useState } from 'react';
import NavbarItem from './NavbarItem';
import Link from 'next/link';
import PhoneNavbar from './PhoneNavbar';
import { AiOutlineFilePdf } from 'react-icons/ai'; 
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';

const Navbar: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    if (!isClient) {
        return null; 
    }

    if (isMobile) {
        return <PhoneNavbar />;
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-[#1c0101]">
            <div className="flex items-center space-x-6">
                <NavbarItem href="/" text="Home" className={`${blackOpsOne.className} text-2xl text-[#F5F5DC] hover:text-[#e0e0d1] transition-colors duration-300`} />
                <NavbarItem href="/about" text="About" className={`${blackOpsOne.className} text-2xl text-[#F5F5DC] hover:text-[#e0e0d1] transition-colors duration-300`} />
                <NavbarItem href="/projects" text="Projects" className={`${blackOpsOne.className} text-2xl text-[#F5F5DC] hover:text-[#e0e0d1] transition-colors duration-300`} />
            </div>
            <div className="flex items-center space-x-6">
                <NavbarItem href="/contact" text="Contact" className={`${blackOpsOne.className} text-2xl text-[#F5F5DC] hover:text-[#e0e0d1] transition-colors duration-300`} />
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button
                        title="Resume"
                        className={`${robotoMono.className} flex items-center p-2 text-[#F5F5DC] hover:bg-[#3a0d0d] rounded-full transition-all duration-300 transform hover:scale-105`}
                    >
                        <AiOutlineFilePdf size={24} className="mr-2" />
                        <span>Resume</span>
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
