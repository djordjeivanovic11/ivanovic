import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TimeBox from './TimeBox';
import { blackOpsOne } from '@/app/fonts/fonts';

const Timeline: React.FC = () => {
  const timelineData = [
    { year: '2024', achievements: ['Launched Sorriso, an AI-powered dental tourism platform'] },
    { year: '2023', achievements: ['Developed LLM application for legal tech', 'Expanded skills in AI and machine learning'] },
    { year: '2022', achievements: ['Contributed to open-source projects', 'Mastered Next.js and React'] },
    { year: '2021', achievements: ['Started learning about blockchain technology', 'Completed advanced Python courses'] },
    { year: '2020', achievements: ['Began freelancing as a web developer', 'Learned Spring Boot framework'] },
    { year: '2019', achievements: ['Graduated with a degree in Computer Science', 'Internship at a local tech startup'] },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <h2 className={`${blackOpsOne.className} text-5xl text-center text-[#f5f5dc] mb-12`}>My Journey</h2>
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical Line in the Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f5f5dc]"></div>
        
        {timelineData.map((item, index) => (
          <TimelineItem key={item.year} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

interface TimelineItemProps {
  data: { year: string; achievements: string[] };
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isLeft = index % 2 === 0;

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: isLeft ? '-100vw' : '100vw' },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        type: 'spring',
        damping: 20,
        stiffness: 100,
        duration: 0.8 
      } 
    },
  };

  return (
    <div ref={ref} className="w-full flex justify-center relative">
      <motion.div
        animate={controls}
        initial="hidden"
        variants={variants}
        className="flex items-center w-full max-w-6xl"
      >
        {isLeft && (
          <>
            {/* Content on the Left */}
            <div className="w-1/2 pr-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <TimeBox year={data.year} achievements={data.achievements} />
              </motion.div>
            </div>
            {/* Connector */}
            <div className="relative">
              <div className="w-6 h-6 bg-[#f5f5dc] rounded-full border-4 border-[#1c0101]"></div>
            </div>
            {/* Empty Space */}
            <div className="w-1/2"></div>
          </>
        )}
        {!isLeft && (
          <>
            {/* Empty Space */}
            <div className="w-1/2"></div>
            {/* Connector */}
            <div className="relative">
              <div className="w-6 h-6 bg-[#f5f5dc] rounded-full border-4 border-[#1c0101]"></div>
            </div>
            {/* Content on the Right */}
            <div className="w-1/2 pl-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <TimeBox year={data.year} achievements={data.achievements} />
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Timeline;
