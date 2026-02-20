
import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ScrollingBanner } from './components/ScrollingBanner';
import Marquee from './components/Marquee';
import { ShopPage } from './components/ShopPage';
import CartDrawer from './components/CartDrawer';
import CheckoutPage from './components/CheckoutPage';
import { CartItem, Product, PackSize } from './types';

const ThreeDBottleShowcase = React.lazy(() =>
  import('./components/ThreeDBottleShowcase').then(m => ({ default: m.ThreeDBottleShowcase }))
);
const FlavorSection = React.lazy(() =>
  import('./components/FlavorSection').then(m => ({ default: m.FlavorSection }))
);
const SocialProof = React.lazy(() =>
  import('./components/SocialProof').then(m => ({ default: m.SocialProof }))
);
const Footer = React.lazy(() =>
  import('./components/Footer').then(m => ({ default: m.Footer }))
);

const ShimmerLoader: React.FC<{ visible: boolean }> = ({ visible }) => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: '#f5f0e8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 'clamp(24px, 4vw, 56px) clamp(16px, 6vw, 80px)',
      pointerEvents: visible ? 'all' : 'none',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.3s ease',
      overflow: 'hidden',
    }}
  >
    <style>{`
      @keyframes shimmer {
        0%   { background-position: -800px 0; }
        100% { background-position: 800px 0; }
      }
      .sh {
        background: linear-gradient(90deg, #e2ddd3 25%, #ece7de 50%, #e2ddd3 75%);
        background-size: 800px 100%;
        animation: shimmer 1.5s ease-in-out infinite;
      }
    `}</style>

    {/* ── KULTURD text shimmer — matches the actual h1 shape ── */}
    <div className="sh" style={{
      width: 'clamp(220px, 38vw, 560px)',
      height: 'clamp(60px, 10vw, 140px)',
      borderRadius: '16px',
      marginBottom: 'clamp(12px, 2vw, 24px)',
      alignSelf: 'center',
    }} />

    {/* ── Star badge pill ── */}
    <div className="sh" style={{
      width: 'clamp(160px, 18vw, 260px)',
      height: '32px',
      borderRadius: '999px',
      marginBottom: 'clamp(20px, 3vw, 48px)',
      alignSelf: 'center',
    }} />

    {/* ── Two-column hero layout ── */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(16px, 3vw, 48px)',
      width: '100%',
      maxWidth: '1152px',
      alignItems: 'center',
      flex: 1,
    }}>

      {/* Left: blob shape + bottle + badges */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'clamp(320px, 45vw, 580px)' }}>
        {/* Blob SVG shimmer — matches the actual BLOB_D organic shape */}
        <svg
          style={{ position: 'absolute', width: 'clamp(280px, 42vw, 560px)', height: 'clamp(310px, 46vw, 620px)' }}
          viewBox="-36.7556 -37.4456 803.67 892.17"
          fill="none"
        >
          <defs>
            <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#e2ddd3" />
              <stop offset="50%"  stopColor="#ece7de" />
              <stop offset="100%" stopColor="#e2ddd3" />
              <animateTransform attributeName="gradientTransform" type="translate" from="-800 0" to="800 0" dur="1.5s" repeatCount="indefinite" />
            </linearGradient>
          </defs>
          <path
            d="M542.941 42.7702C707.951 122.986 766.918 351.375 667.592 555.698C568.265 760.021 352.233 854.727 187.223 774.512C22.2122 694.296 -36.7556 465.905 62.5711 261.582C161.898 57.2593 377.93 -37.4456 542.941 42.7702Z"
            fill="url(#sg)"
          />
        </svg>

        {/* Bottle shimmer — tall narrow rounded rect */}
        <div className="sh" style={{
          position: 'absolute',
          width: 'clamp(60px, 7vw, 110px)',
          height: 'clamp(200px, 28vw, 400px)',
          borderRadius: '999px',
          zIndex: 2,
        }} />

        {/* Badge 1 — left middle */}
        <div className="sh" style={{
          position: 'absolute',
          width: 'clamp(62px, 7vw, 96px)',
          height: 'clamp(62px, 7vw, 96px)',
          borderRadius: '50%',
          left: 'clamp(0px, 2vw, 20px)',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
        }} />
        {/* Badge 2 — left upper */}
        <div className="sh" style={{
          position: 'absolute',
          width: 'clamp(62px, 7vw, 96px)',
          height: 'clamp(62px, 7vw, 96px)',
          borderRadius: '50%',
          left: 'clamp(30px, 5vw, 60px)',
          top: 'clamp(40px, 7vw, 80px)',
          zIndex: 3,
        }} />
        {/* Badge 3 — top center */}
        <div className="sh" style={{
          position: 'absolute',
          width: 'clamp(62px, 7vw, 96px)',
          height: 'clamp(62px, 7vw, 96px)',
          borderRadius: '50%',
          left: '50%',
          top: 'clamp(-10px, -1vw, 0px)',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }} />
      </div>

      {/* Right: text lines + CTA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.5vw, 20px)' }}>
        {/* Pill tag */}
        <div className="sh" style={{ width: 'clamp(100px, 12vw, 180px)', height: '26px', borderRadius: '999px' }} />
        {/* H2 line 1 */}
        <div className="sh" style={{ width: '90%', height: 'clamp(28px, 4vw, 56px)', borderRadius: '10px' }} />
        {/* H2 line 2 */}
        <div className="sh" style={{ width: '70%', height: 'clamp(28px, 4vw, 56px)', borderRadius: '10px' }} />
        {/* Body text lines */}
        <div className="sh" style={{ width: '100%', height: '16px', borderRadius: '6px', marginTop: '4px' }} />
        <div className="sh" style={{ width: '85%', height: '16px', borderRadius: '6px' }} />
        <div className="sh" style={{ width: '75%', height: '16px', borderRadius: '6px' }} />
        {/* Tag pills row */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
          {[80, 70, 90, 76].map((w, i) => (
            <div key={i} className="sh" style={{ width: w, height: '28px', borderRadius: '999px' }} />
          ))}
        </div>
        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
          <div className="sh" style={{ width: '60px', height: '38px', borderRadius: '8px' }} />
          <div className="sh" style={{ width: 'clamp(100px, 12vw, 160px)', height: '48px', borderRadius: '999px' }} />
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showShop, setShowShop] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Hide shimmer once fonts + critical above-fold assets are ready,
    // not waiting for lazy sections (3D showcase, flavors, footer, etc.)
    const done = () => setLoading(false);
    if (document.readyState !== 'loading') {
      // DOM already parsed — just wait for fonts
      document.fonts.ready.then(done);
      return;
    }
    const onDomReady = () => document.fonts.ready.then(done);
    document.addEventListener('DOMContentLoaded', onDomReady, { once: true });
    return () => document.removeEventListener('DOMContentLoaded', onDomReady);
  }, []);

  const handleAddToCart = (product: Product, size: PackSize) => {
    setCart(prev => {
      const key = `${product.id}-${size}`;
      const existing = prev.find(i => i.id === key);
      if (existing) {
        return prev.map(i => i.id === key ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: key, product, size, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev =>
      prev
        .map(i => i.id === id ? { ...i, quantity: i.quantity + delta } : i)
        .filter(i => i.quantity > 0)
    );
  };

  const subtotal = cart.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  if (showCheckout) {
    return (
      <CheckoutPage
        cart={cart}
        subtotal={subtotal}
        onBack={() => setShowCheckout(false)}
      />
    );
  }

  if (showShop) {
    return (
      <>
        <ShopPage
          onClose={() => setShowShop(false)}
          onAddToCart={handleAddToCart}
        />
        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          cart={cart}
          subtotal={subtotal}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={() => { setCartOpen(false); setShowCheckout(true); }}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <ShimmerLoader visible={loading} />
      <section id="header" className="container mx-auto px-6 md:px-12">
        <Navbar onShopAll={() => setShowShop(true)} />
        <Hero />
      </section>
      <Marquee />
      <main>
        <section id="bottle-showcase">
          <Suspense fallback={null}>
            <ThreeDBottleShowcase />
          </Suspense>
        </section>
        <section id="scrolling-banner">
          <ScrollingBanner />
        </section>
        <section id="flavors">
          <Suspense fallback={null}>
            <FlavorSection onAddToCart={() => setShowShop(true)} />
          </Suspense>
        </section>
        <section id="social-proof">
          <Suspense fallback={null}>
            <SocialProof />
          </Suspense>
        </section>
      </main>
      <section id="footer">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </section>
    </div>
  );
};

export default App;
