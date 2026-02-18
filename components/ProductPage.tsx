
import React, { useState } from 'react';
import { Product, PackSize } from '../types';
import { Leaf, Droplets, Recycle } from 'lucide-react';

interface ProductPageProps {
  product: Product;
  onAddToCart: (product: Product, size: PackSize) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<PackSize>('12-PACK');

  const sizes: PackSize[] = ['6-PACK', '12-PACK', '24-PACK'];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side: Product Image */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 lg:min-h-screen"
        style={{ backgroundColor: product.bgColor }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[560px] w-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Right Side: Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-24 bg-[#DCC7A1]/30 lg:min-h-screen">
        <h1 className="text-6xl font-bold tracking-tight mb-6">{product.name}</h1>
        
        <p className="text-lg leading-relaxed max-w-md opacity-80 mb-8">
          {product.description}
        </p>

        <div className="text-3xl font-bold mb-10">
          ${product.price.toFixed(2)}
        </div>

        <div className="mb-8">
          <p className="text-xs font-bold tracking-widest mb-4">PACK SIZE</p>
          <div className="flex gap-4">
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 py-3 px-6 border-2 border-black text-sm font-medium transition-all ${
                  selectedSize === size ? 'bg-black text-white' : 'hover:bg-black/5'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => onAddToCart(product, selectedSize)}
          className="w-full py-5 bg-black text-white font-bold tracking-widest uppercase hover:opacity-90 transition-opacity mb-12"
        >
          ADD TO CART
        </button>

        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col items-center text-center max-w-[100px]">
            <Leaf size={24} className="mb-2 stroke-[1.5]" />
            <span className="text-[10px] font-bold uppercase tracking-tighter leading-tight">Natural Ingredients</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-[100px]">
            <div className="relative mb-2">
                <Droplets size={24} className="stroke-[1.5]" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6px] font-bold">LOW</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tighter leading-tight">Low Calorie</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-[100px]">
            <Recycle size={24} className="mb-2 stroke-[1.5]" />
            <span className="text-[10px] font-bold uppercase tracking-tighter leading-tight">Recyclable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
