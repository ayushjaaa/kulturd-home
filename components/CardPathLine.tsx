import React, { useEffect, useRef, useState } from 'react';

interface CardPathLineProps {
  pathIndex: number;
}

export const CardPathLine: React.FC<CardPathLineProps> = ({ pathIndex }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate when card is in viewport
      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = windowHeight + rect.height;

      const progress = Math.max(0, Math.min(1, 1 - (start / total)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Different paths for each card position
  const paths = [
    {
      d: "M-50 300C100 280 200 250 300 200C400 150 500 280 600 250C700 220 800 180 900 200",
      length: 1200,
      color: "text-accentOrange",
    },
    {
      d: "M900 100C800 120 700 80 600 150C500 220 400 140 300 180C200 220 100 200 0 250",
      length: 1150,
      color: "text-forest",
    },
    {
      d: "M-100 200C50 150 150 280 300 250C450 220 550 300 700 280C850 260 950 200 1100 180",
      length: 1300,
      color: "text-[#FFB800]",
    },
  ];

  const currentPath = paths[pathIndex % paths.length];
  const dashOffset = currentPath.length - (currentPath.length * scrollProgress);

  return (
    <div
      ref={cardRef}
      className="absolute inset-0 pointer-events-none overflow-visible"
      style={{ zIndex: 0 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        fill="none"
        className="absolute inset-0"
        style={{ overflow: 'visible' }}
      >
        <path
          d={currentPath.d}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className={`${currentPath.color} opacity-40`}
          style={{
            strokeDasharray: `${currentPath.length}px`,
            strokeDashoffset: `${dashOffset}px`,
            transition: 'stroke-dashoffset 0.1s linear',
          }}
        />
      </svg>
    </div>
  );
};
