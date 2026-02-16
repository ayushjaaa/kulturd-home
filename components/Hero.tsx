
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[110vh] md:min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden bg-cream">
      {/* Background Text */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-serif font-black text-outline select-none pointer-events-none z-0 opacity-40">
        KULTURD
      </h1>

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        {/* Animated Blob */}
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[280px] h-[280px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-peach/40 to-transparent fluid-shape blur-3xl -z-10"
        />

        {/* Hero Product */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative w-56 md:w-80 lg:w-[380px]"
        >
          <motion.img 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            alt="Kulturd Peach Kombucha" 
            className="w-full drop-shadow-[0_45px_45px_rgba(0,0,0,0.2)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAf5jdiMFReqQWs0-_I0NzGpjInncjjZevloWrXHgqlx7972vuHRWeK1q9PDl6qFV-futSeIUFjh6F_oDzQrkHsE52ulLyUmsi-GwLpiIXqXtzoR0xYHd2Xhy4hsadbj-xijvlKV6mys8FwkQUMk_LvEAY2wrHdkEcf6bG2Mmhm--XRK_H_YBXvie7t-nSdNwUKIPET8xja65zS0T9TDAJAT0BzcWfbRA1bV2O2Q6eXp-vXqR3FlRJSwMZJUNS-omoloACgJCBBBE" 
          />

          {/* Glassmorphic Cards */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -left-10 md:-left-20 top-1/4 p-3 md:p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 shadow-xl w-32 md:w-44 transform -rotate-6 z-20"
          >
            <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-accentOrange mb-1">Purity</p>
            <p className="font-serif text-xs md:text-lg leading-tight">100% Natural Ingredients</p>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute -right-10 md:-right-20 bottom-1/4 p-3 md:p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 shadow-xl w-32 md:w-44 transform rotate-6 z-20"
          >
            <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-accentOrange mb-1">Wellness</p>
            <p className="font-serif text-xs md:text-lg leading-tight">Zero Added Sugar</p>
          </motion.div>
        </motion.div>

        <div className="mt-12 md:mt-16 text-center max-w-2xl relative z-30">
          <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-black mb-6 opacity-80 text-forest">
            Gut Health, Redefined.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#1e332a' }}
            whileTap={{ scale: 0.95 }}
            className="bg-forest text-cream px-12 py-5 rounded-full font-black text-base md:text-lg tracking-widest shadow-2xl transition-all cursor-pointer"
          >
            BUY NOW
          </motion.button>
        </div>
      </div>
    </section>
  );
};
