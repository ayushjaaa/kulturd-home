
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  '/images/mango-coconut-lifestyle.png',
  '/images/New-variety-pack_02.png',
  '/images/4a.jpg',
  '/images/Apple-Cinnamon-Kombucha.png',
];

// Color stops for each image (liquid fill color)
const FILL_COLORS = ['#FFAB91', '#F4A261', '#E76F51', '#A8C686'];

// Per-flavor badge content
const FLAVOR_BADGES = [
  { left: { label: 'Origin', text: 'Mango & Coconut' },    right: { label: 'Taste', text: 'Tropical Bliss' } },
  { left: { label: 'Variety', text: 'Mixed Pack' },         right: { label: 'Benefit', text: 'Gut Friendly' } },
  { left: { label: 'Purity', text: '100% Natural' },        right: { label: 'Brewing', text: 'Small Batch' } },
  { left: { label: 'Spice', text: 'Apple Cinnamon' },       right: { label: 'Season', text: 'Autumn Warmth' } },
];

export const ThreeDBottleShowcase: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const kulturdOutlineRef = useRef<HTMLHeadingElement>(null);
  const kulturdFilledRef = useRef<HTMLHeadingElement>(null);
  const badgeLeftLabelRef = useRef<HTMLParagraphElement>(null);
  const badgeLeftTextRef = useRef<HTMLParagraphElement>(null);
  const badgeRightLabelRef = useRef<HTMLParagraphElement>(null);
  const badgeRightTextRef = useRef<HTMLParagraphElement>(null);
  const [wrapperHeight, setWrapperHeight] = React.useState(() => window.innerHeight * 5);

  useEffect(() => {
    const updateHeight = () => setWrapperHeight(window.innerHeight * 5);
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    const fill = fillRef.current;
    if (!wrapper || !section || !fill) return;

    // Total scroll distance = 4 images worth of scroll
    const scrollLength = window.innerHeight * 4;

    // Pin the sticky section inside wrapper
    const ctx = gsap.context(() => {
      // Master timeline driven by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: `+=${scrollLength}`,
          scrub: 0.4,
          pin: section,
          anticipatePin: 1,
        },
      });

      // Animate fill height from 0% -> 100%
      tl.fromTo(
        fill,
        { height: '0%' },
        { height: '100%', ease: 'none', duration: 4 }
      );

      // Cycle through images + update badges at 0%, 25%, 50%, 75% progress
      IMAGES.forEach((_, i) => {
        const startProgress = i / IMAGES.length;
        tl.call(
          () => {
            imgRefs.current.forEach((img, j) => {
              if (!img) return;
              img.style.opacity = j === i ? '1' : '0';
            });
            const badge = FLAVOR_BADGES[i];
            if (badgeLeftLabelRef.current) badgeLeftLabelRef.current.textContent = badge.left.label;
            if (badgeLeftTextRef.current) badgeLeftTextRef.current.textContent = badge.left.text;
            if (badgeRightLabelRef.current) badgeRightLabelRef.current.textContent = badge.right.label;
            if (badgeRightTextRef.current) badgeRightTextRef.current.textContent = badge.right.text;
          },
          [],
          startProgress * 4
        );
      });

      // Animate fill color through stages
      FILL_COLORS.forEach((color, i) => {
        tl.to(fill, { backgroundColor: color, duration: 0, ease: 'none' }, (i / IMAGES.length) * 4);
      });

      // Sync the filled text reveal to the fill div height via CSS var — zero per-frame JS on the text
      if (kulturdFilledRef.current && section) {
        tl.fromTo(
          section,
          { '--fill-pct': '100%' },
          { '--fill-pct': '0%', ease: 'none', duration: 4 },
          0
        );
      }
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: `${wrapperHeight}px` }}>
      <section
        ref={sectionRef}
        className="relative min-h-[110vh] md:min-h-screen flex items-center justify-center pt-16 pb-4 overflow-hidden bg-cream"
        style={{ '--fill-pct': '100%' } as React.CSSProperties}
      >
        {/* Liquid fill layer rising from bottom */}
        <div
          ref={fillRef}
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: '0%',
            backgroundColor: '#FFAB91',
            zIndex: 0,
            willChange: 'height, background-color',
          }}
        />

        {/* Background KULTURD text — outline version (always visible) */}
        <h1
          ref={kulturdOutlineRef}
          className="showcase-kulturd-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-serif font-black select-none pointer-events-none"
          style={{
            WebkitTextStroke: '1px rgba(45, 74, 62, 0.25)',
            color: 'transparent',
            zIndex: 1,
            whiteSpace: 'nowrap',
          }}
        >
          KULTURD
        </h1>

        {/* Background KULTURD text — filled version revealed by clip-path from bottom */}
        <h1
          ref={kulturdFilledRef}
          className="showcase-kulturd-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-serif font-black select-none pointer-events-none"
          style={{
            color: '#2D4A3E',
            zIndex: 2,
            clipPath: 'inset(var(--fill-pct) 0% 0% 0%)',
            whiteSpace: 'nowrap',
            willChange: 'clip-path',
          }}
        >
          KULTURD
        </h1>

        {/* Product images — stacked, crossfade */}
        <div className="relative flex flex-col items-center" style={{ zIndex: 20 }}>
          <div className="showcase-bottle-img relative w-48 md:w-64 lg:w-72 xl:w-80" style={{ aspectRatio: '1/1.6' }}>
            {IMAGES.map((src, i) => (
              <img
                key={src}
                ref={(el) => { imgRefs.current[i] = el; }}
                src={src}
                alt={`Kulturd Kombucha flavor ${i + 1}`}
                className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.2)]"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}
              />
            ))}
          </div>

          {/* Glassmorphic badges */}
          <div className="showcase-badges-wrapper relative w-full mt-10">
            <div className="showcase-badge-left absolute -left-20 md:-left-28 lg:-left-36 -top-28 md:-top-32 p-3 md:p-4 rounded-2xl bg-white/40 border border-white/20 shadow-xl w-28 md:w-36 lg:w-44 transform -rotate-6">
              <p ref={badgeLeftLabelRef} className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-accentOrange mb-1">{FLAVOR_BADGES[0].left.label}</p>
              <p ref={badgeLeftTextRef} className="font-serif text-xs md:text-base lg:text-lg leading-tight">{FLAVOR_BADGES[0].left.text}</p>
            </div>
            <div className="showcase-badge-right absolute -right-20 md:-right-28 lg:-right-36 -top-28 md:-top-32 p-3 md:p-4 rounded-2xl bg-white/40 border border-white/20 shadow-xl w-28 md:w-36 lg:w-44 transform rotate-6">
              <p ref={badgeRightLabelRef} className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-accentOrange mb-1">{FLAVOR_BADGES[0].right.label}</p>
              <p ref={badgeRightTextRef} className="font-serif text-xs md:text-base lg:text-lg leading-tight">{FLAVOR_BADGES[0].right.text}</p>
            </div>
          </div>

          <div className="showcase-buynow -mt-8 text-center" style={{ position: 'relative', zIndex: 30 }}>
            <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-black mb-6 opacity-80 text-forest">
              Gut Health, Redefined.
            </p>
            <button
              className="bg-forest text-cream px-12 py-5 rounded-full font-black text-base md:text-lg tracking-widest shadow-2xl transition-all cursor-pointer hover:bg-opacity-90"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
