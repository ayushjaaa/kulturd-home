import React, { useEffect, useRef, useState } from 'react';

export const ConnectingLines: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section
      // More sensitive to make the line grow as cards appear
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Start drawing when section enters viewport
      const scrolled = windowHeight - sectionTop;
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight + windowHeight * 0.5)));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Path that flows through the grid connecting all 4 cards
  // Based on your grid: Card 1 (col-span-4) -> Card 2 (col-span-5) -> Card 3 (col-span-3) -> Card 4 (col-span-4)
  // Starting from top-left, flowing through each card position
  const unifiedPath = "M 150 50 Q 200 150, 250 250 T 500 400 Q 600 480, 450 600 T 200 750 Q 350 850, 550 900 T 900 950";
  const pathLength = 1800;

  // Growing effect: start with line invisible (offset = pathLength),
  // gradually reveal it as we scroll (offset -> 0)
  const dashOffset = pathLength - (pathLength * scrollProgress);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0, overflow: 'visible' }}
    >
      {/* Single flowing SVG line that connects all cards */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1200 1000"
        fill="none"
        preserveAspectRatio="none"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d={unifiedPath}
          stroke="#FF6B35"
          strokeWidth="20"
          fill="none"
          opacity="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          style={{
            strokeDasharray: `${pathLength}px`,
            strokeDashoffset: `${dashOffset}px`,
          }}
        />
      </svg>
    </div>
  );
};
