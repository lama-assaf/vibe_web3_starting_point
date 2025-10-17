import React, { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text, label = 'Copy', className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
        bg-white/5 backdrop-blur-sm border border-white/10
        hover:bg-white/[0.03] hover:border-cyan-400/50 hover:shadow-[inset_0_0_20px_rgba(6,182,212,0.15)]
        transition-all duration-300 text-gray-300 hover:text-white group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {copied ? (
        <>
          <FaCheck className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-medium">Copied!</span>
        </>
      ) : (
        <>
          <FaCopy className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span className="font-medium">{label}</span>
        </>
      )}
    </motion.button>
  );
};

export default CopyButton;
