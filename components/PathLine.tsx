import React, { useEffect, useRef, useState } from 'react';

interface PathLineProps {
  pathData: string;
  pathLength: number;
  className?: string;
  strokeWidth?: number;
}

export const PathLine: React.FC<PathLineProps> = ({
  pathData,
  pathLength,
  className = "text-accentOrange",
  strokeWidth = 3
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress
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

  const dashOffset = pathLength - (pathLength * scrollProgress);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ overflow: 'visible' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1440 691"
        fill="none"
        style={{ overflow: 'visible' }}
      >
        <path
          d={pathData}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className={className}
          style={{
            strokeDasharray: `${pathLength}px`,
            strokeDashoffset: `${dashOffset}px`,
            transition: 'stroke-dashoffset 0.1s linear',
          }}
        />
      </svg>
    </div>
  );
};
