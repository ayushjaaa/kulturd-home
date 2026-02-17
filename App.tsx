
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ThreeDBottleShowcase } from './components/ThreeDBottleShowcase';
import { ScrollingBanner } from './components/ScrollingBanner';
import { FlavorSection } from './components/FlavorSection';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Navbar />
        <Hero />
      </div>
      <main>
        <ThreeDBottleShowcase />
        <ScrollingBanner />
        <FlavorSection onAddToCart={handleAddToCart} />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default App;
