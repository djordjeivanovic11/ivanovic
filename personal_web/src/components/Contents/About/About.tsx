"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';
import { motion } from 'framer-motion';
import Timeline from './Timeline';
import Skills from './Skills'; 
import TheFuture from './TheFuture'; 

const About: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const introText = "Hello! I'm Djordje Ivanovic, a developer passionate about innovation and entrepreneurship.";

  useEffect(() => {
    let i = 0;
    const typeNextCharacter = () => {
      setTypedText(introText.slice(0, i + 1));
      i++;
      if (i < introText.length) setTimeout(typeNextCharacter, 50);
    };
    typeNextCharacter();
  }, []);

  const skillCategories = {
    Technologies: ['Java', 'Python', 'OCaml', 'C', 'React', 'Next.js', 'Spring Boot', 'Angular', 'JavaScript', 'TypeScript', 'Neo4j', 'PostgreSQL', 'Docker', 'Kubernetes'],
    Languages: ['Montenegrin', 'English','Italian', 'German'],
    Business: ['Sales', 'Marketing', 'Customer Service', 'Entrepreneurship', 'Leadership'],
  };

  const classesTaken = [
    'Data Structures and Algorithms',
    'Applied Linear Algebra, Optimization and Big Data',
    'Introduction to Data Science',
    'Abstraction and Design in OCaml',
    'Introduction to Probability',
    'Discrete Mathematics',
    'Advanced Data Structures and Algorithms',
    'Machine Learning'
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#1c0101] py-8 overflow-hidden">
      {/* Main About Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto text-center mb-16 px-4"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`${blackOpsOne.className} text-6xl sm:text-8xl mb-8 text-[#f5f5dc]`}
        >
          About Me
        </motion.h1>

        <div className="mb-12">
          <p className={`${robotoMono.className} text-xl sm:text-3xl text-[#f5f5dc]`}>
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
            className={`${robotoMono.className} px-8 sm:px-12 py-3 sm:py-5 bg-[#f5f5dc] text-[#1c0101] text-xl sm:text-3xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300`}
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      <Timeline />
      <TheFuture />
      <Skills skillCategories={skillCategories} classesTaken={classesTaken} />
    </div>
  );
};

export default About;
