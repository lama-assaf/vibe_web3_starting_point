import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface QuickStartCardProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  delay?: number;
}

export const QuickStartCard: React.FC<QuickStartCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
  delay = 0,
}) => {
  const isImageIcon = typeof icon === 'string';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6
        shadow-lg hover:shadow-2xl transition-all duration-300 group
        hover:border-cyan-400/50 hover:-translate-y-2"
      style={{
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)',
      }}
      whileHover={{
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(255, 0, 255, 0.2)',
      }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <motion.div
          className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20
            flex items-center justify-center border border-cyan-400/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
          }}
        >
          {isImageIcon ? (
            <Image
              src={icon}
              alt={title}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          ) : (
            <div className="text-cyan-400 text-3xl">{icon}</div>
          )}
        </motion.div>

        {/* Title */}
        <h3
          className="text-lg md:text-xl font-bold text-white"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-gray-300 text-sm leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {description}
        </p>

        {/* Action Button */}
        <motion.a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600
            text-white font-semibold hover:from-cyan-400 hover:to-blue-500
            transition-all duration-300 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontFamily: 'Orbitron, sans-serif',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
          }}
        >
          {buttonText}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default QuickStartCard;
