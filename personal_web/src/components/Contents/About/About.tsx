"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';
import { motion } from 'framer-motion';
import Timeline from './Timeline';
import Skills from './Skills'; 
import TheFuture from './TheFuture'; // Import the Future component

const About: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const introText = "Hello! I'm Djordje Ivanovic, a developer passionate about innovation.";

  useEffect(() => {
    let i = 0;
    const typeNextCharacter = () => {
      setTypedText(introText.slice(0, i + 1));
      i++;
      if (i < introText.length) setTimeout(typeNextCharacter, 50);
    };
    typeNextCharacter();
  }, []);

  // Define your skill categories and classes taken here
  const skillCategories = {
    Technologies: ['React', 'Next.js', 'Spring Boot', 'JavaScript', 'Python', 'LLM Apps'],
    Languages: ['German', 'Italian', 'English'],
    Business: ['Sales', 'Marketing', 'Customer Service', 'Entrepreneurship'],
  };

  const classesTaken = [
    'Advanced Data Structures and Algorithms',
    'Machine Learning Methods',
    'Deep Learning with Python',
    'Web Development with React and Next.js',
    'Blockchain Fundamentals',
    'Business Development Strategies',
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#1c0101] to-[#3a0d0d] py-8">
      {/* Main About Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto text-center mb-16"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`${blackOpsOne.className} text-8xl mb-8 text-[#f5f5dc]`}
        >
          About Me
        </motion.h1>

        {/* Typing Intro */}
        <div className="mb-12">
          <p className={`${robotoMono.className} text-3xl text-[#f5f5dc]`}>
            {typedText}
            <motion.span 
              className="animate-blink inline-block" 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              |
            </motion.span>
          </p>
        </div>

        {/* Contact Button */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-center mt-8"
        >
          <Link 
            href="/contact"
            className={`${robotoMono.className} px-12 py-5 bg-[#f5f5dc] text-[#1c0101] text-3xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300`}
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Timeline Section */}
      <Timeline />

      {/* Future Section */}
      <TheFuture />

      {/* Skills Section */}
      <Skills skillCategories={skillCategories} classesTaken={classesTaken} />
    </div>
  );
};

export default About;
