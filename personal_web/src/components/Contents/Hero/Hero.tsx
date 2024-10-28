import React, { useState, useEffect } from 'react';
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullName = 'Djordje Ivanovic';

  useEffect(() => {
    let i = 0;

    const typeNextCharacter = () => {
      setTypedText(fullName.slice(0, i + 1));
      i++;

      if (i < fullName.length) {
        setTimeout(typeNextCharacter, 150);
      }
    };

    typeNextCharacter();

    return () => {
      i = fullName.length;
    };
  }, [fullName]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-0">
        <div className="text-center z-10">
          <h1
            className={`${blackOpsOne.className} text-6xl md:text-8xl mb-6 text-[#F5F5DC] tracking-wide`}
          >
            {typedText}
            <span className="animate-blink">|</span>
            
          </h1>
          <p
            className={`${robotoMono.className} max-w-[900px] mx-auto text-xl md:text-2xl mb-10 text-gray-200`}
          >
            I am a driven by curiosity, love for technology and always looking for new challenges to tackle that can make a difference. Explore my projects and let us
            create something amazing together!
          </p>
          <button 
            className={`${robotoMono.className} px-8 py-4 bg-[#F5F5DC] text-gray-800 rounded-full shadow-lg hover:shadow-2xl hover:bg-opacity-90 transition-all duration-300`}
            type="submit"
          >
            <Link href="/projects">Explore My Work</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
