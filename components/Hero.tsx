
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import FloatingBadge from './FloatingBadge';
import BottleModel from './BottleModel';

const BLOB_D = "M542.941 42.7702C707.951 122.986 766.918 351.375 667.592 555.698C568.265 760.021 352.233 854.727 187.223 774.512C22.2122 694.296 -36.7556 465.905 62.5711 261.582C161.898 57.2593 377.93 -37.4456 542.941 42.7702Z";

const Hero: React.FC = () => {
  const blobRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = blobRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    // Set the dash so the whole stroke starts invisible
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);
    // Trigger the stroke-draw animation
    path.style.animation = `blob-stroke-draw 2.4s cubic-bezier(0.4,0,0.2,1) 0.2s forwards`;
  }, []);

  return (
    <section className="flex flex-col items-center mt-4 md:mt-6 lg:mt-8">

      <style>{`
        @keyframes blob-stroke-draw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes letter-drop {
          0%   { opacity: 0; transform: translateY(-80px) scaleY(1.3); }
          60%  { opacity: 1; transform: translateY(10px) scaleY(0.95); }
          80%  { transform: translateY(-4px) scaleY(1.02); }
          100% { opacity: 1; transform: translateY(0) scaleY(1); }
        }
        .kulturd-letter {
          display: inline-block;
          opacity: 0;
          will-change: transform, opacity;
          animation: letter-drop 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes badge-pop {
          0%   { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          70%  { transform: translate(-50%, -50%) scale(1.12); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        .badge-pop-1 {
          opacity: 0;
          animation: badge-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) 1.8s forwards;
        }
        .badge-pop-2 {
          opacity: 0;
          animation: badge-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) 2.1s forwards;
        }
        .badge-pop-3 {
          opacity: 0;
          animation: badge-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) 2.4s forwards;
        }
      `}</style>

      {/* Brand Title */}
      <h1
        className="font-serif-brand font-black leading-none tracking-tight mb-2 md:mb-4 select-none"
        style={{ fontSize: 'clamp(120px, 14vw, 210px)' }}
        aria-label="KULTURD"
      >
        {'KULTURD'.split('').map((letter, i) => (
          <span
            key={i}
            className="kulturd-letter"
            style={{
              animationDelay: `${i * 0.07}s`,
              background: 'linear-gradient(135deg, #1b3a2a 0%, #2d6a4f 50%, #1b3a2a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {letter}
          </span>
        ))}
      </h1>

      {/* Star Badge */}
      <div className="flex items-center gap-2 bg-black/5 px-4 py-1.5 rounded-full text-xs md:text-sm mb-8 md:mb-12 lg:mb-16">
        <Star size={14} fill="#1b3a2a" stroke="none" />
        <span className="font-medium">4.9/5 Star | 1,000+ Happy Customers</span>
      </div>

      {/* Product Showcase & Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full max-w-6xl">

        {/* Left: Product Bottle & Visuals */}
        <div className="relative flex justify-center items-center" style={{ height: 'clamp(420px, 55vw, 700px)' }}>

          {/* Blob Ring — stroke traces itself, fill appears after */}
          <svg
            className="absolute blob-ring"
            style={{
              width: 'clamp(360px, 52vw, 734px)',
              height: 'clamp(400px, 58vw, 813px)',
              transform: 'translateX(clamp(-40px, -4vw, -64px))',
            }}
            viewBox="-36.7556 -37.4456 803.67 892.17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={blobRef}
              d={BLOB_D}
              stroke="#1b3a2a"
              strokeWidth="18"
              strokeOpacity="0.4"
              fill="#1b3a2a"
              fillOpacity="0.04"
              style={{ strokeDasharray: 0, strokeDashoffset: 0 }}
            />
          </svg>

          {/* 3D Bottle */}
          <div className="absolute inset-0 z-20">
            <BottleModel />
          </div>

          {/* Floating Badges */}
          <div className="badge-pop-1 z-30" style={{ position: 'absolute', left: 'clamp(-60px, -6vw, -70px)', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <FloatingBadge icon="sugar" text="Zero Added" subtext="Sugar" />
          </div>
          <div className="badge-pop-2 z-30" style={{ position: 'absolute', left: 'clamp(-10px, -1vw, 0px)', top: 'clamp(50px, 9vw, 80px)', transform: 'translate(-50%, -50%)' }}>
            <FloatingBadge icon="leaf" text="100%" subtext="Natural" />
          </div>
          <div className="badge-pop-3 z-30" style={{ position: 'absolute', left: 'clamp(60px, 8vw, 100px)', top: 'clamp(-15px, -1.5vw, -20px)', transform: 'translate(-50%, -50%)' }}>
            <FloatingBadge icon="microscope" text="Live" subtext="Cultures" />
          </div>

          {/* Shadow beneath */}
          <div className="absolute bottom-[5%] w-48 h-6 bg-black/10 blur-xl rounded-[100%] z-10"></div>
        </div>

        {/* Right: Detailed Text + CTA */}
        <div className="flex flex-col text-center lg:text-left gap-4 lg:gap-6">
          <span className="inline-block self-center lg:self-start bg-[#1b3a2a]/10 text-[#1b3a2a] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            New Batch • Seasonal Brew
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-serif-brand font-black text-[#1b3a2a] leading-tight uppercase tracking-tight">
            Authentically Brewed<br />
            Probiotic Kombucha
          </h2>

          <p className="text-base md:text-lg lg:text-lg xl:text-xl text-[#1b3a2a]/80 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
            Our Kulturd Kombucha is traditionally brewed with premium ingredients,
            offering a refreshing and healthy boost for your gut health.
          </p>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {['🌿 Raw Ginger', '🍋 Lemon', '🦠 Probiotics', '🍵 Green Tea'].map((tag) => (
              <span key={tag} className="bg-[#1b3a2a]/8 border border-[#1b3a2a]/15 text-[#1b3a2a] text-xs md:text-sm font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 justify-center lg:justify-start mt-2">
            <div>
              <p className="text-xs text-[#1b3a2a]/50 uppercase tracking-widest font-medium">Starting from</p>
              <p className="text-2xl md:text-3xl font-black text-[#1b3a2a]">₹299</p>
            </div>
            <button className="bg-[#1b3a2a] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full text-base md:text-lg font-semibold hover:scale-105 hover:bg-[#2d6a4f] transition-all shadow-xl shadow-[#1b3a2a]/20">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
