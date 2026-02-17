
import React from 'react';

interface FloatingBadgeProps {
  icon: 'leaf' | 'sugar' | 'microscope';
  text: string;
  subtext: string;
  className?: string;
}

const FloatingBadge: React.FC<FloatingBadgeProps> = ({ icon, text, subtext, className }) => {
  const getIcon = () => {
    switch(icon) {
      case 'leaf': return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 21 2c-2.5 4-3 5.5-4.1 11.2A7 7 0 0 1 11 20z" />
          <path d="M11 20l-5-5" />
        </svg>
      );
      case 'sugar': return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M14.8 9.2a3.5 3.5 0 0 0-5.6 5.6" />
          <path d="M12 12l.01.01" />
        </svg>
      );
      case 'microscope': return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <circle cx="7" cy="7" r="2" />
          <circle cx="17" cy="17" r="4" />
        </svg>
      );
    }
  };

  return (
    <div className={`glass w-28 h-28 rounded-full flex flex-col items-center justify-center p-2 text-center shadow-lg transform transition-transform hover:scale-110 cursor-default ${className}`}>
      <div className="mb-1 opacity-70">{getIcon()}</div>
      <span className="text-xs font-bold leading-tight uppercase tracking-wide">{text}</span>
      <span className="text-xs font-medium leading-tight opacity-70">{subtext}</span>
    </div>
  );
};

export default FloatingBadge;
