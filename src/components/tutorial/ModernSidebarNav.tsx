import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface ModernSidebarNavProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
  onStepClick: (stepNumber: number) => void;
}

export const ModernSidebarNav: React.FC<ModernSidebarNavProps> = ({
  currentStep,
  totalSteps,
  stepTitles,
  onStepClick,
}) => {
  return (
    <>
      {/* Desktop: Modern Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen z-50 pt-32 pb-20">
        <div className="h-full flex flex-col justify-center px-8">
          <nav className="space-y-2">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;

              return (
                <motion.button
                  key={stepNumber}
                  onClick={() => onStepClick(stepNumber)}
                  className={`group relative w-full flex items-center gap-4 px-4 py-3 rounded-xl
                    transition-all duration-300 text-left
                    ${isActive
                      ? 'bg-white/10 backdrop-blur-sm border border-cyan-400/30 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]'
                      : 'hover:bg-white/[0.03] border border-transparent hover:border-cyan-400/40 hover:shadow-[inset_0_0_20px_rgba(6,182,212,0.12)]'
                    }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Step Number/Icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                      transition-all duration-300 text-sm font-semibold
                      ${isCompleted
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                        : isActive
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                        : 'bg-white/5 text-gray-400 border border-white/10 group-hover:border-white/20'
                      }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {isCompleted ? (
                      <FaCheck className="w-4 h-4" />
                    ) : (
                      <span>{stepNumber}</span>
                    )}
                  </div>

                  {/* Step Title */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium truncate transition-colors
                        ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {stepTitles[index]}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile/Tablet: Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="px-4 py-4">
          {/* Current Step Display */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-gray-400 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {currentStep === 0 ? 'Getting Started' : `Step ${currentStep} of ${totalSteps}`}
              </p>
              <p className="text-sm text-white font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {currentStep === 0 ? 'Scroll to begin tutorial' : stepTitles[currentStep - 1]}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: currentStep === 0 ? '0%' : `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>

          {/* Step Dots */}
          <div className="flex items-center justify-center gap-2 mt-3">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;

              return (
                <button
                  key={stepNumber}
                  onClick={() => onStepClick(stepNumber)}
                  className={`w-2 h-2 rounded-full transition-all duration-300
                    ${isCompleted
                      ? 'bg-green-400 w-2.5 h-2.5'
                      : isActive
                      ? 'bg-cyan-400 w-3 h-3'
                      : 'bg-white/20 hover:bg-white/30'
                    }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernSidebarNav;
