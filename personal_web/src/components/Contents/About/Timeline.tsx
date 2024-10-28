import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TimeBox from './TimeBox';
import { blackOpsOne } from '@/app/fonts/fonts';

const Timeline: React.FC = () => {
  const timelineData = [
    { year: '2024 December', achievements: ['Started working on a new project in the legal tech space creating a personalized AI assistant for lawyers that helps them draft contracts faster based on newest updated legislation of the country they work in'] },
    { year: '2024 September', achievements: ['Co-founded the Rover Team at Harvard with the mission to compete in the University Rover Challenge as the Software Lead', 'Used Computer Vision, OpenCV, Yolo, ROS2, Gazebo, and TensorFlow to build an autonomous rover', 'Worked on the Bussines Team to raise 10k in funding for the team'] },
    { year: '2024 Fall', achievements: ['Started Sorriso Care, a dental tourism platform that helps Westerners get highest quality dental care at 70% percent the cost', 'Raised 15k in seed funding from local investors'] },
    { year: '2024 Summer', achievements: ['Interned at Coinis, a leading ad-tech company in Montenegro', 'Developed viral browser extensions','Worked on creating custom tools for advertisers', 'Developed a mechanisms to track flagged domains and replace them to maximize revenue and minimize loss'] },
    { year: '2024 Spring', achievements: ['Focused on learning about machine learning, big data, and AI', 'Researched under Hanspeter Pfister at the Harvard Visual Computing Group building a graph database that models hundreds of GB of synapse data'] },
    { year: '2023 Fall', achievements: ['Started a Computer Science BA at Harvard College', 'Focused on building foundations in CS, Math, and Economics'] },
    { year: '2023 Spring', achievements: ['Only student from Montenegro at Harvard College in more than 10 years', 'Learned how to code in Python and Java'] },
    { year: '2022 December', achievements: ['Collaborated with Ombudsperson of Montenegro on education policy', 'Developed recommendations for education reform'] },
    { year: '2022 May', achievements: ['Trained in luxury retail at Dior', 'Developed high-end sales expertise', 'Created marketing strategies for the store'] }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <h2 className={`${blackOpsOne.className} text-5xl text-center text-[#f5f5dc] mb-12`}>My Journey</h2>
      <div className="max-w-6xl mx-auto relative">
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
    <div ref={ref} className="w-full flex justify-center relative mb-8">
      <motion.div
        animate={controls}
        initial="hidden"
        variants={variants}
        className="flex flex-col md:flex-row items-center w-full max-w-6xl"
      >
        {isLeft ? (
          <>
            <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <TimeBox year={data.year} achievements={data.achievements} />
              </motion.div>
            </div>
            <div className="relative mb-8 md:mb-0">
              <div className="w-6 h-6 bg-[#f5f5dc] rounded-full border-4 border-[#1c0101]"></div>
            </div>
            <div className="w-full md:w-1/2"></div>
          </>
        ) : (
          <>
            <div className="w-full md:w-1/2"></div>
            <div className="relative mb-8 md:mb-0">
              <div className="w-6 h-6 bg-[#f5f5dc] rounded-full border-4 border-[#1c0101]"></div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
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
