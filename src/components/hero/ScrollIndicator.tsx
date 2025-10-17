import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export const ScrollIndicator: React.FC = () => {
  const handleScrollDown = () => {
    const tutorialSection = document.getElementById('tutorial-section');
    if (tutorialSection) {
      tutorialSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-3 cursor-pointer"
      onClick={handleScrollDown}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <p
        className="text-cyan-300 text-sm font-semibold tracking-wide"
        style={{
          fontFamily: 'Orbitron, sans-serif',
          textShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
        }}
      >
        SCROLL TO BEGIN YOUR JOURNEY
      </p>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20
          border border-cyan-400/40 flex items-center justify-center"
        style={{
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
        }}
      >
        <FaChevronDown className="w-6 h-6 text-cyan-400" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
