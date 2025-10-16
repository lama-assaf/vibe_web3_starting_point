import React from 'react';

const NyanBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0a0a2e] via-[#1a0a3e] to-[#0a0a2e]">
      {/* Animated Grid Layer */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 animate-grid-pulse"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-scan-line"
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)'
          }}
        />
      </div>

      {/* Floating Pixels */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 animate-pixel-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              boxShadow: '0 0 4px rgba(0, 255, 255, 0.8)'
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={`purple-${i}`}
            className="absolute w-1 h-1 bg-purple-400 animate-pixel-float opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              boxShadow: '0 0 4px rgba(168, 85, 247, 0.8)'
            }}
          />
        ))}
      </div>

      {/* Glitch Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-cyan-500 animate-glitch-line" />
        <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-purple-500 animate-glitch-line" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-green-500 animate-glitch-line" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export default NyanBackground;
