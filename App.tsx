
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ThreeDBottleShowcase } from './components/ThreeDBottleShowcase';
import { ScrollingBanner } from './components/ScrollingBanner';
import { FlavorSection } from './components/FlavorSection';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';
import Marquee from './components/Marquee';

const App: React.FC = () => {
  const [, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen">
      <section id="header" className="container mx-auto px-6 md:px-12">
        <Navbar />
        <Hero />
      </section>
      <Marquee />
      <main>
        <section id="bottle-showcase">
          <ThreeDBottleShowcase />
        </section>
        <section id="scrolling-banner">
          <ScrollingBanner />
        </section>
        <section id="flavors">
          <FlavorSection onAddToCart={handleAddToCart} />
        </section>
        <section id="social-proof">
          <SocialProof />
        </section>
      </main>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
