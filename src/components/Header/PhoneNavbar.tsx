import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineFilePdf, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About' },
        { href: '/projects', text: 'Projects' },
        { href: '/contact', text: 'Contact' },
    ];

    if (!isMounted) {
        return null; 
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1c0101] shadow-md">
            <div className="flex items-center justify-between p-4">
                <Link href="/" className={`${blackOpsOne.className} text-2xl text-[#F5F5DC]`}>
                    DJORDJE
                </Link>
                <button onClick={toggleMenu} className="text-[#F5F5DC] focus:outline-none">
                    {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#1c0101] overflow-hidden"
                    >
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${blackOpsOne.className} block py-3 px-4 text-xl text-[#F5F5DC] hover:bg-[#3a0d0d] transition-colors duration-300`}
                                onClick={toggleMenu}
                            >
                                {item.text}
                            </Link>
                        ))}
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${robotoMono.className} flex items-center justify-center py-3 px-4 text-[#F5F5DC] hover:bg-[#3a0d0d] transition-colors duration-300`}
                            onClick={toggleMenu}
                        >
                            <AiOutlineFilePdf size={24} className="mr-2" />
                            Resume
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default PhoneNavbar;
