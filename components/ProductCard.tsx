
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={() => onSelect?.(product)}
    >
      <div
        className="relative aspect-[3/4] flex items-center justify-center p-8 overflow-hidden"
        style={{ backgroundColor: product.bgColor || '#E8E8E8' }}
      >
        <span className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full z-10 shadow-sm text-forest">
          {product.tag}
        </span>

        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="px-4 py-3 flex justify-between items-center bg-white">
        <h3 className="text-[11px] font-bold uppercase leading-tight tracking-wider text-forest">
          {product.name}
        </h3>
        <span className="text-[11px] font-bold text-forest">₹{product.price}</span>
      </div>
    </div>
  );
};
