import React, { useState, useEffect } from "react";
import { inter } from "@/app/fonts/fonts";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullName = "Djordje Ivanovic";
  const [mounted, setMounted] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setMounted(true);
    let i = 0;

    const typeNextCharacter = () => {
      setTypedText(fullName.slice(0, i + 1));
      i++;

      if (i < fullName.length) {
        setTimeout(typeNextCharacter, 100);
      } else {
        setIsTyping(false);
      }
    };

    setTimeout(typeNextCharacter, 500);

    return () => {
      i = fullName.length;
    };
  }, [fullName]);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[var(--background)] overflow-hidden">
      {/* Subtle gradient background - Apple style */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--card-bg)] opacity-50"></div>

      {/* Animated gradient orbs - Vibrant & Colorful with Floating Motion */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-blue-500/35 to-purple-500/35 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-orange-400/25 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[var(--accent)]/20">
              <Image
                src="/me.JPG"
                alt="Djordje Ivanovic"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center lg:text-left max-w-2xl"
          >
            {/* Main heading with typing effect */}
            <h1
              className={`${inter.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-[var(--foreground)] tracking-tight leading-tight`}
            >
              {typedText}
              {isTyping && (
                <span className="animate-blink text-[var(--accent)]">|</span>
              )}
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`${inter.className} text-lg sm:text-xl md:text-2xl mb-10 text-[var(--foreground)] leading-relaxed font-light`}
            >
              I love solving hard problems and writing code that keeps me up
              till sunrise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Link href="/projects">
                <button
                  className={`${inter.className} px-8 py-4 text-[17px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl`}
                >
                  Explore My Work
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className={`${inter.className} px-8 py-4 text-[17px] font-medium text-[var(--foreground)] bg-transparent border-2 border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] rounded-full transition-all duration-200 transform hover:scale-[1.02]`}
                >
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
