import React, { useEffect, useRef, useState } from 'react';

export const AnimatedPathLines: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const start = rect.top + windowHeight * 0.5;
      const end = rect.bottom - windowHeight * 0.5;
      const total = rect.height;

      const progress = Math.max(0, Math.min(1, 1 - (start / total)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dash offset based on scroll progress
  const getPathStyle = (totalLength: number, delay: number = 0) => {
    const adjustedProgress = Math.max(0, scrollProgress - delay);
    const dashOffset = totalLength - (totalLength * adjustedProgress);

    return {
      strokeDasharray: `${totalLength}px, 91.7725px`,
      strokeDashoffset: `${dashOffset}px`,
      transition: 'stroke-dashoffset 0.1s linear',
    };
  };

  return (
    <div
      ref={containerRef}
      className="sequence-lines absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* First flowing line */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1440 691"
        fill="none"
        className="sequence-line-svg is-first absolute inset-0"
        style={{ overflow: 'visible' }}
      >
        <path
          d="M-11 627.781C31.2318 652.606 151.814 698.642 199.05 645.884C264.5 572.781 199.05 472.107 47.547 363.054C-103.956 254 -52.529 150.083 24.5115 108.595C210.583 8.39218 434.763 502.251 720.049 329.362C981.436 170.957 1134 -69.7188 1490 2.78121"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-accentOrange opacity-30"
          style={getPathStyle(2464.54, 0)}
        />
      </svg>

      {/* Second flowing line */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1440 682"
        fill="none"
        className="sequence-line-svg is-second absolute inset-0"
        style={{ overflow: 'visible' }}
      >
        <path
          d="M1442.05 19.9995C1346.05 34.4995 1170.99 110.452 1098.05 191.999C975.047 329.499 1257.15 515.709 1159 626.498C1027 775.498 571.87 408.445 484.498 347.293C244.047 178.999 15 -12.5016 -102 87.9984"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-forest opacity-30"
          style={getPathStyle(2308.85, 0.15)}
        />
      </svg>

      {/* Third flowing line */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1440 750"
        fill="none"
        className="sequence-line-svg is-third absolute inset-0"
        style={{ overflow: 'visible' }}
      >
        <path
          d="M-918.224 5.00043C-948.225 142 -730.728 264 -473.726 252.501C-271.374 243.446 29.7721 170.716 170.275 135.501C1143.77 -108.499 460.741 462.659 570.773 634.5C651.773 761 1056.77 396 1392.27 396C1513.27 396 1835.87 454.857 2022.77 607.501C2178.27 734.5 2312.44 743.001 2363.77 718.001"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-[#FFB800] opacity-20"
          style={getPathStyle(4233.65, 0.25)}
        />
      </svg>

      {/* Signature/watermark that fades in */}
      <div
        className="sequence-inner-signature absolute bottom-20 right-20 transition-opacity duration-700"
        style={{ opacity: scrollProgress * 0.6 }}
      >
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b9fcc383366c0bb0fe9ca6_sequence-more-for-coffee-lovers.svg"
            loading="lazy"
            width="200"
            height="88"
            alt="Kulturd Kombucha"
            className="sequence-inner-signature-img opacity-50"
          />
        </div>
      </div>
    </div>
  );
};
