
import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ProductSectionProps {
  subtitle: string;
  title: string;
  products: Product[];
  gridCols?: string;
  onSelectProduct?: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  subtitle,
  title,
  products,
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  onSelectProduct,
}) => {
  return (
    <section className="mb-24 last:mb-12">
      <header className="flex justify-between items-end mb-10">
        <div className="max-w-[80%]">
          <p className="text-[10px] tracking-[0.25em] text-forest/50 mb-3 uppercase font-semibold">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-[40px] font-serif font-bold text-forest leading-tight">
            {title}
          </h2>
        </div>

        <div className="flex gap-3 pb-1">
          <button className="p-3 border border-forest/10 bg-black/5 rounded-full hover:bg-black/10 transition-all hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-3 border border-forest/10 bg-white rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`grid ${gridCols} gap-6 md:gap-8`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
        ))}
      </div>
    </section>
  );
};
