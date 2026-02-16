import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ConnectingLine: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: 0.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 1200 1600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 150 200 C 200 250, 250 280, 280 250 C 310 220, 350 230, 380 270 C 410 310, 480 380, 550 420 C 620 460, 680 490, 720 540 C 760 590, 780 650, 770 720 C 760 790, 720 850, 650 900 C 580 950, 480 980, 400 1020 C 320 1060, 260 1120, 240 1200 C 220 1280, 240 1350, 300 1400 C 360 1450, 450 1480, 560 1470 C 670 1460, 780 1440, 880 1450 C 980 1460, 1050 1480, 1100 1500"
          stroke="#FF6B35"
          strokeWidth="5"
          fill="none"
          opacity="0.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
