import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ConnectingLine: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!pathRef.current || !svgRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set initial state - line is hidden
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animate the line drawing as user scrolls
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#flavors',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 2200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ zIndex: 0 }}
    >
      <path
        ref={pathRef}
        d="M 200 350 Q 280 420 350 380 Q 420 340 500 420 Q 580 500 720 580 Q 860 660 920 720 Q 980 780 1000 900 Q 1020 1020 900 1120 Q 780 1220 600 1280 Q 420 1340 320 1450 Q 220 1560 280 1680 Q 340 1800 500 1880 Q 660 1960 850 1920 Q 1040 1880 1150 1850 Q 1260 1820 1350 1900"
        stroke="#FF6B35"
        strokeWidth="4"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
