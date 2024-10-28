import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';

const TheFuture: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const visionStatements = [
    "Pioneer innovative solutions that transforms whole industries and creates new ones",
    "Empower businesses through technology and strategic insight to create new opportunities",
    "Network with the best and brightest to create a global community of innovators and industry leaders",
    "Lead with integrity and a relentless drive for excellence",
    "Build ventures that leave a lasting impact",
    "Create something people love"
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:py-16">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2
          variants={itemVariants}
          className={`${blackOpsOne.className} text-4xl sm:text-6xl mb-6 sm:mb-10 text-[#f5f5dc]`}
        >
          My Vision for the Future
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
        >
          {visionStatements.map((statement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f5f5dc] p-4 sm:p-8 rounded-2xl shadow-xl transition-all duration-300 transform perspective-1000"
            >
              <motion.p 
                className={`${robotoMono.className} text-lg sm:text-2xl text-[#1c0101]`}
              >
                {statement}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-20 flex justify-center"
        >
          <motion.svg
            width="100%"
            height="auto"
            viewBox="0 0 100 100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="max-w-[300px] sm:max-w-[400px]"
          >
            {/* Rocket body */}
            <motion.path
              d="M50 5 L65 40 L65 75 L50 95 L35 75 L35 40 Z"
              fill="#f5f5dc"
              initial={{ scale: 0, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.5, type: "spring", stiffness: 100 }}
            />
            {/* Rocket fins */}
            <motion.path
              d="M35 75 L20 90 L35 82 M65 75 L80 90 L65 82"
              stroke="#f5f5dc"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />
            {/* Rocket window */}
            <motion.circle
              cx="50"
              cy="40"
              r="7"
              fill="#1c0101"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5, type: "spring", stiffness: 200 }}
            />
            {/* Rocket flame */}
            <motion.path
              d="M40 95 Q50 110 60 95"
              fill="#ff6347"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1.2, 0.8, 1] }}
              transition={{ duration: 0.5, delay: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            {/* Stars */}
            {[...Array(30)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 100}
                cy={Math.random() * 100}
                r={Math.random() * 2}
                fill="#f5f5dc"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{ 
                  duration: Math.random() * 3 + 1,
                  delay: Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            ))}
            {/* Orbiting planet */}
            <motion.circle
              cx="80"
              cy="20"
              r="8"
              fill="#4169e1"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                cx: [80, 20, 80],
                cy: [20, 80, 20]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            />
            {/* Shooting star */}
            <motion.line
              x1="0"
              y1="0"
              x2="20"
              y2="20"
              stroke="#f5f5dc"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1],
                opacity: [0, 1, 0],
                x1: [0, 80],
                y1: [0, 80],
                x2: [20, 100],
                y2: [20, 100]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5
              }}
            />
          </motion.svg>
        </motion.div>
        <motion.p
          variants={itemVariants}
          className={`${robotoMono.className} text-xl sm:text-3xl mt-8 sm:mt-12 text-[#f5f5dc] leading-relaxed`}
        >
          Committed to building real solutions that create real value for people through technology.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default TheFuture;
