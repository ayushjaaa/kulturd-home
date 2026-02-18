import React from 'react';

const ITEMS = [
  'Authentically Brewed',
  'Live Cultures',
  'Zero Added Sugar',
  'Raw Ginger',
  'Gut Health',
  'Kulturd',
];

const MarqueeTrack: React.FC<{ reverse?: boolean }> = ({ reverse }) => (
  <div
    className="flex whitespace-nowrap"
    style={{
      animation: `marquee-scroll${reverse ? '-reverse' : ''} 30s linear infinite`,
      willChange: 'transform',
    }}
  >
    {/* Render 4 copies so there's always content filling the viewport */}
    {[...Array(4)].map((_, copyIdx) =>
      ITEMS.map((item, i) => (
        <span key={`${copyIdx}-${i}`} className="flex items-center">
          <span className="marquee-text px-6 md:px-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter font-serif-brand text-[#f5f0e8]">
            {item}
          </span>
          <svg
            className="mx-3 md:mx-4 shrink-0 w-5 h-6 md:w-6 md:h-7 lg:w-7 lg:h-8"
            viewBox="0 0 28 32" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Same organic blob used in Hero, scaled down */}
            <path
              d="M20.1 1.6C26.3 4.6 28.5 13 24.8 20.6C21.1 28.2 13 31.8 6.8 28.8C0.6 25.8 -1.6 17.4 2.1 9.8C5.8 2.2 13.9 -1.4 20.1 1.6Z"
              fill="#e8a87c"
              opacity="0.85"
            />
          </svg>
        </span>
      ))
    )}
  </div>
);

const Marquee: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <section
        id="marquee"
        className="relative z-10 overflow-hidden py-3 md:py-4 lg:py-5"
        style={{ background: '#1b3a2a', transform: 'skewY(-1.5deg)', marginTop: '-0.4rem', marginBottom: '2rem' }}
      >
        <div style={{ transform: 'skewY(1.5deg)' }}>
          {/* Row 1 — left to right */}
          <div className="overflow-hidden">
            <MarqueeTrack />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-3" />

          {/* Row 2 — right to left */}
          <div className="overflow-hidden">
            <MarqueeTrack reverse />
          </div>
        </div>
      </section>
    </>
  );
};

export default Marquee;
