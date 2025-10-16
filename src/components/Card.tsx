import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="w-full max-w-2xl p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="text-gray-200">{children}</div>
    </div>
  );
};

export default Card;
