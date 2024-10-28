import React from 'react';
import { motion } from 'framer-motion';
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';

interface SkillsProps {
  skillCategories: {
    [category: string]: string[];
  };
  classesTaken: string[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories, classesTaken }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-10 px-4 sm:py-20"
    >
      {/* Skills Section */}
      <motion.div className="w-full max-w-6xl mx-auto mb-16 sm:mb-24 text-center" variants={itemVariants}>
        <motion.h2 
          className={`${blackOpsOne.className} text-4xl sm:text-6xl mb-8 sm:mb-12 text-[#f5f5dc] glow`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        >
          Skills
        </motion.h2>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div 
              key={category} 
              className="mb-6 sm:mb-8" 
              variants={itemVariants}
            >
              <motion.h3 
                className={`${robotoMono.className} text-2xl sm:text-3xl mb-4 sm:mb-6 text-[#f5f5dc] border-b-2 border-[#f5f5dc] pb-2 inline-block`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.08 }}
              >
                {category}
              </motion.h3>
              <motion.div 
                className="flex flex-wrap justify-center gap-2 sm:gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  }
                }}
              >
                {skills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 15px rgba(245, 245, 220, 0.7)',
                      transition: { duration: 0.2 }
                    }}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-[#f5f5dc] to-[#e6e6c9] text-[#1c0101] rounded-lg shadow-lg transition-all duration-300 font-bold text-sm sm:text-base"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Classes Section */}
      <motion.div className="w-full max-w-6xl mx-auto mb-12 sm:mb-16 text-center" variants={itemVariants}>
        <motion.h2 
          className={`${blackOpsOne.className} text-4xl sm:text-6xl mb-8 sm:mb-12 text-[#f5f5dc] glow`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        >
          Academic Achievements
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
        >
          {classesTaken.map((className, index) => (
            <motion.div 
              key={index}
              className={`${robotoMono.className} text-lg sm:text-xl text-[#f5f5dc] bg-gradient-to-r from-[#3a0d0d] to-[#1c0101] p-4 sm:p-6 rounded-lg shadow-xl`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(245, 245, 220, 0.3)' }}
            >
              {className}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
