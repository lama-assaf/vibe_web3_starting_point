import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export const StepProgress: React.FC<StepProgressProps> = ({
  currentStep,
  totalSteps,
  stepTitles,
}) => {
  return (
    <>
      {/* Desktop: Vertical Stepper */}
      <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-6">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === currentStep;
            const isCompleted = stepNumber < currentStep;

            return (
              <div key={stepNumber} className="flex items-center gap-4">
                {/* Step Circle */}
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center
                    border-2 transition-all duration-300 ${
                      isCompleted
                        ? 'bg-green-500 border-green-400'
                        : isActive
                        ? 'bg-cyan-500 border-cyan-400'
                        : 'bg-gray-700 border-gray-600'
                    }`}
                  animate={{
                    scale: isActive ? [1, 1.1, 1] : 1,
                    boxShadow: isActive
                      ? [
                          '0 0 20px rgba(0, 255, 255, 0.4)',
                          '0 0 30px rgba(0, 255, 255, 0.8)',
                          '0 0 20px rgba(0, 255, 255, 0.4)',
                        ]
                      : isCompleted
                      ? '0 0 15px rgba(0, 255, 0, 0.5)'
                      : 'none',
                  }}
                  transition={{
                    duration: 2,
                    repeat: isActive ? Infinity : 0,
                  }}
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                  }}
                >
                  {isCompleted ? (
                    <FaCheck className="text-white text-lg" />
                  ) : (
                    <span className="text-white font-bold">{stepNumber}</span>
                  )}
                </motion.div>

                {/* Step Label */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isActive ? 1 : 0.6, x: 0 }}
                  className={`hidden xl:block transition-all duration-300 ${
                    isActive ? 'text-cyan-300' : 'text-gray-400'
                  }`}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    textShadow: isActive ? '0 0 10px rgba(0, 255, 255, 0.6)' : 'none',
                  }}
                >
                  <p className="text-sm font-semibold whitespace-nowrap">
                    {stepTitles[index] || `Step ${stepNumber}`}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet: Horizontal Progress Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-400/30">
        <div className="px-4 py-3">
          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-3 mb-2">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;

              return (
                <motion.div
                  key={stepNumber}
                  className={`w-8 h-8 rounded-full flex items-center justify-center
                    border-2 transition-all duration-300 text-xs font-bold ${
                      isCompleted
                        ? 'bg-green-500 border-green-400 text-white'
                        : isActive
                        ? 'bg-cyan-500 border-cyan-400 text-white'
                        : 'bg-gray-700 border-gray-600 text-gray-400'
                    }`}
                  animate={{
                    scale: isActive ? [1, 1.15, 1] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isActive ? Infinity : 0,
                  }}
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    boxShadow: isActive ? '0 0 15px rgba(0, 255, 255, 0.6)' : 'none',
                  }}
                >
                  {isCompleted ? <FaCheck className="text-xs" /> : stepNumber}
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
              }}
            />
          </div>

          {/* Current Step Text */}
          <p
            className="text-center text-cyan-300 text-xs mt-2 font-semibold"
            style={{
              fontFamily: 'Poppins, sans-serif',
              textShadow: '0 0 5px rgba(0, 255, 255, 0.6)',
            }}
          >
            {stepTitles[currentStep - 1] || `Step ${currentStep} of ${totalSteps}`}
          </p>
        </div>
      </div>
    </>
  );
};

export default StepProgress;
