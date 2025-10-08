import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineFilePdf, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { inter } from '@/app/fonts/fonts';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { href: '/', text: 'Home' },
        { href: '/projects', text: 'Projects' },
        { href: '/contact', text: 'Contact' },
    ];

    if (!isMounted) {
        return null; 
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled || isOpen ? 'glass border-b border-[var(--border)]' : 'bg-transparent'
        }`}>
            <div className="flex items-center justify-between p-4">
                <Link href="/" className={`${inter.className} text-xl font-semibold text-[var(--foreground)]`}>
                    Djordje Ivanovic
                </Link>
                <button 
                    onClick={toggleMenu} 
                    className="text-[var(--foreground)] focus:outline-none p-2 hover:bg-[var(--card-bg)] rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="glass overflow-hidden border-t border-[var(--border)]"
                    >
                        <div className="px-4 py-2 space-y-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`${inter.className} block py-3 px-4 text-[17px] font-normal text-[var(--foreground)] hover:bg-[var(--card-bg)] rounded-lg transition-colors duration-200`}
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            ))}
                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${inter.className} flex items-center justify-center gap-2 py-3 px-4 mt-2 text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-full transition-all duration-200`}
                                onClick={toggleMenu}
                            >
                                <AiOutlineFilePdf size={20} />
                                <span className="font-medium">Resume</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default PhoneNavbar;
