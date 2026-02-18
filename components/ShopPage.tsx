
import React, { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';
import { ProductSection } from './ProductSection';
import ProductPage from './ProductPage';
import { Product, CartItem, PackSize } from '../types';

const BESTSELLERS: Product[] = [
  { id: '1', name: 'Original Ginger Lemon', price: 299, image: '/bottle.png', bgColor: '#d4e9d7', tag: 'Best Seller' },
  { id: '2', name: 'Wild Berry Burst',       price: 329, image: '/bottle.png', bgColor: '#e8d4d4', tag: 'New' },
  { id: '3', name: 'Tropical Mango',         price: 319, image: '/bottle.png', bgColor: '#fde9c4', tag: 'Popular' },
  { id: '4', name: 'Citrus Sunrise',         price: 309, image: '/bottle.png', bgColor: '#fdf4c4', tag: 'Limited' },
];

const ALL_FLAVORS: Product[] = [
  { id: '5', name: 'Green Tea Mint',         price: 299, image: '/bottle.png', bgColor: '#d4ede8', tag: 'Classic' },
  { id: '6', name: 'Hibiscus Rose',          price: 339, image: '/bottle.png', bgColor: '#f4d4e8', tag: 'New' },
  { id: '7', name: 'Passion Fruit',          price: 329, image: '/bottle.png', bgColor: '#fde0c4', tag: 'Seasonal' },
  { id: '8', name: 'Apple Cinnamon',         price: 319, image: '/bottle.png', bgColor: '#ede8d4', tag: 'Popular' },
  { id: '9', name: 'Blueberry Lavender',     price: 349, image: '/bottle.png', bgColor: '#ddd4ed', tag: 'Limited' },
  { id: '10', name: 'Turmeric Ginger',       price: 309, image: '/bottle.png', bgColor: '#f5edc4', tag: 'Wellness' },
  { id: '11', name: 'Peach Oolong',          price: 329, image: '/bottle.png', bgColor: '#f5ddd4', tag: 'New' },
  { id: '12', name: 'Pomegranate Acai',      price: 339, image: '/bottle.png', bgColor: '#ead4e9', tag: 'Antioxidant' },
];

interface ShopPageProps {
  onClose: () => void;
  onAddToCart: (product: Product, size: PackSize) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onClose, onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (selectedProduct) {
    return (
      <ProductPage
        product={selectedProduct}
        onAddToCart={(product, size) => {
          onAddToCart(product, size);
          setSelectedProduct(null);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="border-b border-forest/10 bg-cream/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-forest/40 uppercase font-semibold mb-0.5">
              Kulturd Kombucha
            </p>
            <h1 className="text-xl font-serif font-bold text-forest">
              Shop All
            </h1>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-forest/60 hover:text-forest transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex gap-12">
          <FilterSidebar />

          <main className="flex-1 min-w-0">
            <ProductSection
              subtitle="Fan Favourites"
              title="Best Sellers"
              products={BESTSELLERS}
              onSelectProduct={setSelectedProduct}
            />
            <ProductSection
              subtitle="Full Range"
              title="All Flavours"
              products={ALL_FLAVORS}
              onSelectProduct={setSelectedProduct}
            />
          </main>
        </div>
      </div>
    </div>
  );
};
