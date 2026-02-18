
import React from 'react';
import { motion } from 'framer-motion';
import { FLAVORS } from '../constants';
import { Flavor } from '../types';
import { ConnectingLine } from './ConnectingLine';

interface FlavorSectionProps {
  onAddToCart: () => void;
}

export const FlavorSection: React.FC<FlavorSectionProps> = ({ onAddToCart }) => {
  return (
    <section id="flavors" className="py-16 md:py-24 lg:py-32 xl:py-40 px-6 md:px-12 relative overflow-hidden bg-cream">
      <ConnectingLine />
      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="flavor-heading font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-6 md:mb-8">
            Explore <br/>
            <span className="text-accentOrange italic">the Soul.</span>
          </h2>
          <p className="max-w-md text-base md:text-lg lg:text-xl leading-relaxed opacity-60">
            Discover our meticulously crafted botanical blends, each designed to energize your body and soul.
          </p>
        </motion.div>

        <div className="flavor-grid grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-end">
          {FLAVORS.map((flavor, index) => (
            <FlavorCard 
              key={flavor.id} 
              flavor={flavor} 
              index={index} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FlavorCard: React.FC<{ flavor: Flavor; index: number; onAddToCart: () => void }> = ({ flavor, index, onAddToCart }) => {
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`${flavor.span} group relative flex flex-col ${flavor.align === 'center' ? 'items-center' : flavor.align === 'right' ? 'items-end text-right' : 'items-start'}`}
    >
      <div className={`absolute inset-0 ${flavor.bgColor} fluid-shape -z-10 transform transition-transform duration-700 group-hover:scale-110 ${flavor.rotate || ''}`} />

      <div className="flavor-card-inner w-full relative px-10 md:px-12 mb-8">
        {/* Polaroid-style frame */}
        <div className="bg-white border-8 border-white p-3 pb-16 shadow-2xl transform group-hover:-translate-y-4 transition-transform duration-500 rotate-2 group-hover:rotate-0 relative">
          <video
            ref={videoRef}
            className="w-full h-auto border-2 border-gray-100"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          >
            <source src={flavor.image} type="video/mp4" />
          </video>

          {/* Sound icon at bottom right */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={onAddToCart}
            className="bg-forest text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="px-4">
        <h3 className={`font-serif ${flavor.id === 'golden-mango' ? 'text-4xl md:text-5xl' : 'text-3xl'} font-bold mb-2`}>
          {flavor.name}
        </h3>
        <p className="text-sm opacity-50 uppercase tracking-widest font-bold">
          {flavor.description}
        </p>
      </div>
    </motion.div>
  );
};
