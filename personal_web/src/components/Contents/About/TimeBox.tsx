import React from 'react';
import { motion } from 'framer-motion';
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';

interface TimeBoxProps {
  year: string;
  achievements: string[];
}

const TimeBox: React.FC<TimeBoxProps> = ({ year, achievements }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a simple loading state
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-gradient-to-br from-[#f7f1e3] to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mb-8 border-2 border-[#1c0101]"
    >
      {/* Year Section */}
      <motion.h3 
        className={`${blackOpsOne.className} text-5xl mb-6 text-[#1c0101] inline-block`}
        whileHover={{ scale: 1.1, color: '#3a0d0d' }}
      >
        {year}
      </motion.h3>

      {/* Achievements List */}
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ x: 10 }}
              className={`${robotoMono.className} text-xl text-[#3a0d0d] flex items-start`}
            >
              <motion.span 
                className="w-4 h-4 bg-[#1c0101] rounded-full mt-1.5 mr-4 flex-shrink-0"
                whileHover={{ scale: 1.2, backgroundColor: '#3a0d0d' }}
              />
              <span className="leading-relaxed">{achievement}</span>
            </motion.div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TimeBox;
