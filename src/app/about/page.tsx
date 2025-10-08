import React from 'react';
import About from '@/components/Contents/About/About';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen mt-[80px] flex flex-col items-center bg-[#1c0101] text-[#F5F5DC] overflow-y-auto">
        <About />
    </div>
  );
};

export default AboutPage;
