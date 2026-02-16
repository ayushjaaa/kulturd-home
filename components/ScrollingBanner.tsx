
import React from 'react';
import { motion } from 'framer-motion';

interface ScrollingBannerProps {
  textColor?: string;
  backgroundColor?: string;
  accentColor?: string;
  font?: string;
  image?: {
    src: string;
    alt: string;
    position?: string;
  };
  items?: string[];
  speed?: number;
}

export const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
  textColor = 'text-cream',
  backgroundColor = 'bg-forest',
  accentColor = 'text-peach',
  font = 'font-serif',
  image,
  items = ['Authentically Brewed', 'Live Cultures', 'Kulturd'],
  speed = 30,
}) => {
  return (
    <section className="relative h-24 sm:h-28 md:h-32 lg:h-36 overflow-visible z-20 flex items-center">
      {/* Decorative Skewed Background */}
      <div className={`absolute inset-0 ${backgroundColor} transform -skew-y-2 origin-left -mt-10`} />

      <div className="relative transform -skew-y-2 z-10 w-full h-full">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap h-full items-center"
        >
          <div className={`flex items-start ${textColor} text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${font} font-black uppercase tracking-tighter h-full`}>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="mx-8">{item}</span>
                {index < items.length - 1 && <span className={accentColor}>•</span>}
              </React.Fragment>
            ))}
            {/* Repeat items for seamless loop */}
            {items.map((item, index) => (
              <React.Fragment key={`repeat-${index}`}>
                <span className="mx-8">{item}</span>
                {index < items.length - 1 && <span className={accentColor}>•</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Optional Overlapping Product Image */}
      {image && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className={`absolute ${image.position || '-top-32 right-10 md:right-32'} w-48 md:w-64 rotate-12 drop-shadow-2xl z-30`}
        >
          <img
            alt={image.alt}
            className="w-full"
            src={image.src}
          />
        </motion.div>
      )}
    </section>
  );
};

// Default export with original configuration
export default function KulturdScrollingBanner() {
  return (
    <ScrollingBanner
      textColor="text-cream"
      backgroundColor="bg-forest"
      accentColor="text-peach"
      font="font-serif"
      items={['Authentically Brewed', 'Live Cultures', 'Kulturd']}
      image={{
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qn0kn0mAA3UbDlxc4c_FsbTUB4FxSCoVR480vN2JMdHVpVY5MlXD89vcCIkkmCLE502EEC_rLlLaJIzegXiT54ijBA2G3Ue48KYCeh_MSN6uVNo7UcIiXa7idG5c6gslv4s1EfaMgGIk4cgWwzErlB0qXnRn7zzMn_iXPsUBl9I8AiYMlyPhpVx7yN3x84TuMiBg128f6au3bweSosAMCSm7f8vT5VAMrvfcK58N1kCjbFwKywMAT4lxlUsX1UV6-UU4b8xZorU",
        alt: "Kulturd Bottles",
        position: "-top-32 right-10 md:right-32"
      }}
      speed={30}
    />
  );
}
