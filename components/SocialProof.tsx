
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 xl:py-32 bg-[#E9E4D6] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="socialproof-row flex flex-col lg:flex-row items-center gap-20">
          {/* Polaroid Collage */}
          <div className="socialproof-collage lg:w-1/2 relative h-[380px] md:h-[480px] lg:h-[560px] xl:h-[650px] w-full max-w-lg">
            <motion.div 
              initial={{ rotate: -10, opacity: 0, x: -50 }}
              whileInView={{ rotate: -3, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-3/4 bg-white p-4 pb-12 shadow-2xl z-20"
            >
              <img
                alt="Lifestyle"
                className="w-full aspect-square object-cover grayscale-[20%]"
                loading="lazy"
                decoding="async"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfEp1G714z0xp81LUZq881ktp-2uxIKcOghbvS6SWy9Ncbi7cipdpu5qE5azl4hWwK5ZZhHII48VjlPUlIZpwpZk3b4ZE_z91rabXy4TYZi60hVleok_S9o-DdU7d4k4kK0ft116P_sNEFAX6JDr0EfbRSEIzF0NDjME7fuCrPmutJmpESUZiAJl2ffHMFcpvMac3IvozTEjktoalKCSyLxrB8FHrp6LKZRTPIkFYAD-6r8GjKKauwC5BC1qm2tVJ4h_cW5zuNzf8"
              />
              <div className="mt-4 font-serif text-sm opacity-20">EST. 2024</div>
            </motion.div>

            <motion.div 
              initial={{ rotate: 10, opacity: 0, x: 50 }}
              whileInView={{ rotate: 2, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 w-2/3 bg-white p-4 pb-12 shadow-2xl z-10"
            >
              <img
                alt="Lifestyle"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                decoding="async"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFiYthrgaUATL69IH1WqvQw3Xi6zLJ6TjOKNKdxoU3-nlIlhfJ1M_4MKsrfMn65WGEI_ctilnsvq07bK5Vs1wBtnWVi3ZGk3w7JRv00JjnxCydsDM5e6Ae8dQ70fF-lVHuGBS6rRf5xSTq8J3i2lcJ1hKN4NqAlrx8ZAkP0UNm-lXHsi1fL7p9p8APTiz9PnCSi-2nHRwWVWvDXIQf-jNRXxGSiIkEcci2SCM0SgUZ9yAQM6A8TqG81rP-hh5Ds9oZ9K3b4zpGvCc"
              />
              <div className="mt-4 font-serif text-sm opacity-20">PURE BREWED</div>
            </motion.div>
          </div>

          {/* Testimonial */}
          <div className="lg:w-1/2">
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accentOrange text-accentOrange" />
              ))}
            </div>
            
            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="socialproof-quote font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 md:mb-10"
            >
              "The most refreshing, complex kombucha I've ever tasted. It's not just a drink, it's a daily ritual for my gut and my sanity."
            </motion.blockquote>

            <div className="flex flex-col gap-6">
              <p className="font-bold text-xl">— Sarah J., Wellness Coach</p>
              
              <div className="socialproof-badge inline-flex items-center self-start gap-4 bg-forest text-cream px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                <span>4.9/5 Rating</span>
                <span className="w-1.5 h-1.5 bg-peach rounded-full"></span>
                <span>3,000+ Happy Humans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
