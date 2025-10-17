import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface TutorialStepProps {
  stepNumber: number;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  interactiveElement?: React.ReactNode;
  onEnterView?: (stepNumber: number) => void;
}

export const TutorialStep: React.FC<TutorialStepProps> = ({
  stepNumber,
  icon,
  title,
  content,
  interactiveElement,
  onEnterView,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      if (onEnterView) {
        onEnterView(stepNumber);
      }
    }
  }, [isInView, controls, stepNumber, onEnterView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      id={`step-${stepNumber}`}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full max-w-4xl mx-auto px-4 md:px-6 mb-16 md:mb-24"
    >
      <div
        className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8
          hover:bg-white/[0.03] hover:border-cyan-400/40 hover:shadow-[inset_0_0_30px_rgba(6,182,212,0.15)]
          transition-all duration-300 group"
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Step Number & Icon */}
          <motion.div
            variants={childVariants}
            className="flex md:flex-col items-center md:items-start gap-4"
          >
            {/* Step Number Badge */}
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20
                flex items-center justify-center flex-shrink-0 border border-cyan-400/20"
              style={{
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              <span className="text-cyan-400 text-lg md:text-xl font-semibold">{stepNumber}</span>
            </div>

            {/* Icon */}
            <motion.div
              className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5
                flex items-center justify-center border border-white/10 flex-shrink-0
                group-hover:bg-white/10 group-hover:border-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-gray-300 text-2xl md:text-3xl">{icon}</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <motion.h2
              variants={childVariants}
              className="text-xl md:text-2xl font-semibold text-white"
              style={{
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {title}
            </motion.h2>

            <motion.div
              variants={childVariants}
              className="text-gray-200 text-sm md:text-base leading-relaxed space-y-3"
              
            >
              {content}
            </motion.div>

            {interactiveElement && (
              <motion.div variants={childVariants} className="mt-6">
                {interactiveElement}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TutorialStep;
