
import React from 'react';
import { Star } from 'lucide-react';
import FloatingBadge from './FloatingBadge';
import BottleModel from './BottleModel';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-8">
      {/* Brand Title with gradient */}
      <h1
        className="text-[20vw] md:text-[220px] font-serif-brand font-black leading-none tracking-tight mb-4 select-none"
        style={{ background: 'linear-gradient(135deg, #1b3a2a 0%, #2d6a4f 50%, #1b3a2a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
      >
        KULTURD
      </h1>

      {/* Star Badge */}
      <div className="flex items-center gap-2 bg-black/5 px-4 py-1.5 rounded-full text-sm mb-16">
        <Star size={14} fill="#1b3a2a" stroke="none" />
        <span className="font-medium">4.9/5 Star | 1,000+ Happy Customers</span>
      </div>

      {/* Product Showcase & Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">

        {/* Left: Product Bottle & Visuals */}
        <div className="relative flex justify-center items-center h-[700px]">
          {/* Organic Blob Ring with subtle fill */}
          <svg className="absolute w-[734px] h-[813px] blob-ring -translate-x-16" viewBox="-36.7556 -37.4456 803.67 892.17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M542.941 42.7702C707.951 122.986 766.918 351.375 667.592 555.698C568.265 760.021 352.233 854.727 187.223 774.512C22.2122 694.296 -36.7556 465.905 62.5711 261.582C161.898 57.2593 377.93 -37.4456 542.941 42.7702Z"
              stroke="#1b3a2a"
              strokeWidth="18"
              strokeOpacity="0.4"
              fill="#1b3a2a"
              fillOpacity="0.04"
            />
          </svg>

          {/* 3D Bottle */}
          <div className="absolute inset-0 z-20">
            <BottleModel />
          </div>

          {/* Floating Badges — pixel-perfect on blob SVG edges */}
          <div className="z-30" style={{ position: 'absolute', left: '-70px', top: '200px', transform: 'translate(-50%, -50%)' }}>
            <FloatingBadge icon="sugar" text="Zero Added" subtext="Sugar" />
          </div>
          <div className="z-30" style={{ position: 'absolute', left: '0px', top: '80px', transform: 'translate(-50%, -50%)' }}>
            <FloatingBadge icon="leaf" text="100%" subtext="Natural" />
          </div>
          <div className="z-30" style={{ position: 'absolute', left: '100px', top: '-20px', transform: 'translate(-50%, -50%)' }}>
            <FloatingBadge icon="microscope" text="Live" subtext="Cultures" />
          </div>

          {/* Shadow beneath */}
          <div className="absolute bottom-[5%] w-48 h-6 bg-black/10 blur-xl rounded-[100%] z-10"></div>
        </div>

        {/* Right: Detailed Text + CTA */}
        <div className="flex flex-col text-center lg:text-left gap-6">
          {/* Tag */}
          <span className="inline-block self-center lg:self-start bg-[#1b3a2a]/10 text-[#1b3a2a] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            New Batch • Seasonal Brew
          </span>

          <h2 className="text-4xl md:text-5xl font-serif-brand font-black text-[#1b3a2a] leading-tight uppercase tracking-tight">
            Authentically Brewed<br />
            Probiotic Kombucha
          </h2>

          <p className="text-lg md:text-xl text-[#1b3a2a]/80 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
            Our Kulturd Kombucha is traditionally brewed with premium ingredients,
            offering a refreshing and healthy boost for your gut health.
          </p>

          {/* Ingredient Pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {['🌿 Raw Ginger', '🍋 Lemon', '🦠 Probiotics', '🍵 Green Tea'].map((tag) => (
              <span key={tag} className="bg-[#1b3a2a]/8 border border-[#1b3a2a]/15 text-[#1b3a2a] text-sm font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center gap-4 justify-center lg:justify-start mt-2">
            <div>
              <p className="text-xs text-[#1b3a2a]/50 uppercase tracking-widest font-medium">Starting from</p>
              <p className="text-3xl font-black text-[#1b3a2a]">₹299</p>
            </div>
            <button className="bg-[#1b3a2a] text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:scale-105 hover:bg-[#2d6a4f] transition-all shadow-xl shadow-[#1b3a2a]/20">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
