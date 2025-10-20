import React from 'react';

const NyanBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Starfield Layer */}
      <div
        className="absolute inset-0 w-[200%] h-full bg-repeat animate-scroll-bg"
        style={{
          backgroundImage: `url('/stars.png')`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
};

export default NyanBackground;
