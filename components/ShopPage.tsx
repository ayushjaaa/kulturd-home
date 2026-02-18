
import React, { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';
import { ProductSection } from './ProductSection';
import ProductPage from './ProductPage';
import { Product, PackSize } from '../types';

const BESTSELLERS: Product[] = [
  { id: '1', name: 'Ginger Lemongrass',  price: 299,  image: 'https://kulturd.co/wp-content/uploads/2023/06/Ginger-Lemongrass-Kombucha-1.png',   bgColor: '#d4e9d7', tag: 'Best Seller',  description: 'Zesty ginger meets earthy lemongrass in this gut-loving classic.' },
  { id: '2', name: 'Coffee & Orange',    price: 329,  image: 'https://kulturd.co/wp-content/uploads/2022/03/Coffee-Orange-Kombucha-1.png',        bgColor: '#e8d4d4', tag: 'Fan Favourite', description: 'Your morning cold brew meets bright citrus — energising & bold.' },
  { id: '3', name: 'Mango Coconut',      price: 319,  image: 'https://kulturd.co/wp-content/uploads/2025/09/mango-coconut-lifestyle.png',         bgColor: '#fde9c4', tag: 'Popular',      description: 'Tropical mango with creamy coconut notes, brewed to perfection.' },
  { id: '4', name: 'Variety Pack',       price: 999,  image: 'https://kulturd.co/wp-content/uploads/2023/08/Variety-Pack.png',                    bgColor: '#fdf4c4', tag: 'Best Value',   description: "Can't choose? Try all our bestsellers in one curated pack." },
];

const ALL_FLAVORS: Product[] = [
  { id: '5', name: 'Apple Cinnamon',        price: 299,  image: 'https://kulturd.co/wp-content/uploads/2022/03/Apple-Cinnamon-Kombucha.png',   bgColor: '#ede8d4', tag: 'Classic',    description: 'Warm apple with a spicy cinnamon twist — comfort in every sip.' },
  { id: '6', name: 'Elderflower Muskmelon', price: 339,  image: 'https://kulturd.co/wp-content/uploads/2023/06/Elderflower-Muskmelon-1.png',   bgColor: '#f4d4e8', tag: 'New',        description: 'Delicate floral elderflower blended with summer muskmelon.' },
  { id: '7', name: 'Zero Added Sugar',      price: 329,  image: 'https://kulturd.co/wp-content/uploads/2023/06/Zero-Added-Sugar-Kombucha.png', bgColor: '#d4ede8', tag: 'Wellness',   description: 'All the probiotic goodness, none of the added sugar.' },
  { id: '8', name: 'Original Kombucha',     price: 319,  image: 'https://kulturd.co/wp-content/uploads/2022/03/4a.jpg',                        bgColor: '#fde0c4', tag: 'Classic',    description: 'Our first ever brew — pure, raw & unapologetically tangy.' },
  { id: '9', name: 'Variety Pack (12)',      price: 1299, image: 'https://kulturd.co/wp-content/uploads/2021/03/New-variety-pack_02.png',       bgColor: '#ddd4ed', tag: 'Best Value', description: 'The full Kulturd experience, delivered to your door.' },
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
      <div className="max-w-7xl mx-auto pr-6 md:pr-12 py-12">
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
