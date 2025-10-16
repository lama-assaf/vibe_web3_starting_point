import React from 'react';

const AnimatedBackground: React.FC = () => {
  // Generate 15 floating particles with random delays and durations
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 20}s`,
    duration: `${15 + Math.random() * 10}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-purple-400/40 animate-particle-float"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            boxShadow: '0 0 4px rgba(126, 87, 194, 0.6)',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
