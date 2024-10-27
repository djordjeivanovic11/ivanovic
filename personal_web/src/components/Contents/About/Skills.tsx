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
        staggerChildren: 0.2,
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-20 "
    >
      {/* Skills Section */}
      <motion.div className="w-full max-w-6xl mx-auto mb-24 text-center" variants={itemVariants}>
        <motion.h2 
          className={`${blackOpsOne.className} text-6xl mb-12 text-[#f5f5dc] glow`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Skills
        </motion.h2>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div 
              key={category} 
              className="mb-8" 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
            >
              <motion.h3 
                className={`${robotoMono.className} text-3xl mb-6 text-[#f5f5dc] border-b-2 border-[#f5f5dc] pb-2 inline-block`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: categoryIndex * 0.2 + 0.1 }}
              >
                {category}
              </motion.h3>
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: categoryIndex * 0.2 + 0.3 }
                  }
                }}
              >
                {skills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 15px rgba(245, 245, 220, 0.7)',
                      transition: { duration: 0.2 }
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#f5f5dc] to-[#e6e6c9] text-[#1c0101] rounded-lg shadow-lg transition-all duration-300 font-bold"
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
      <motion.div className="w-full max-w-6xl mx-auto mb-16 text-center" variants={itemVariants}>
        <motion.h2 
          className={`${blackOpsOne.className} text-6xl mb-12 text-[#f5f5dc] glow`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Academic Achievements
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classesTaken.map((className, index) => (
            <motion.div 
              key={index}
              className={`${robotoMono.className} text-xl text-[#f5f5dc] bg-gradient-to-r from-[#3a0d0d] to-[#1c0101] p-6 rounded-lg shadow-xl`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(245, 245, 220, 0.3)' }}
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
