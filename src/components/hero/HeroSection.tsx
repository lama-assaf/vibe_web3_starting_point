import React from 'react';
import { motion } from 'framer-motion';
import { Snippet } from '@/components/ui/Snippet';
import { heroContent } from '@/data/tutorialContent';

export const HeroSection: React.FC = () => {
  const scrollToTutorial = () => {
    const tutorialSection = document.getElementById('tutorial-section');
    if (tutorialSection) {
      tutorialSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Minimal Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6"
            style={{
              fontWeight: 300,
            }}
          >
            {heroContent.title.line1}
            <br />
            <span className="font-semibold bg-gradient-to-r from-blue-500 to-[#00d0c6] bg-clip-text text-transparent">
              {heroContent.title.line2}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            {heroContent.description}
          </motion.p>

          {/* Clone Command Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 max-w-2xl mx-auto"
          >
            <Snippet
              text={heroContent.cloneCommand}
              type="default"
              prompt={false}
            />
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToTutorial}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5
              backdrop-blur-sm border border-white/10 rounded-full
              hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-medium">
              {heroContent.ctaText}
            </span>
            <svg
              className="w-5 h-5 text-cyan-400 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
