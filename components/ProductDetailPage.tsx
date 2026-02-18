
import React, { useState } from 'react';
import { Star, ArrowLeft, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Product } from '../types';

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah J.',
    role: 'Wellness Coach',
    rating: 5,
    text: "The most refreshing, complex kombucha I've ever tasted. It's not just a drink, it's a daily ritual for my gut and my sanity.",
    date: 'Jan 2025',
  },
  {
    id: 2,
    name: 'Rahul M.',
    role: 'Fitness Enthusiast',
    rating: 5,
    text: "I've tried many kombuchas but Kulturd is on another level. The probiotics really make a difference — I feel lighter and more energetic.",
    date: 'Dec 2024',
  },
  {
    id: 3,
    name: 'Priya K.',
    role: 'Nutritionist',
    rating: 5,
    text: "I recommend Kulturd to all my clients. The ingredients are clean, the brewing process is authentic, and the taste is just incredible.",
    date: 'Nov 2024',
  },
  {
    id: 4,
    name: 'Aryan S.',
    role: 'Yoga Instructor',
    rating: 4,
    text: "Beautiful balance of sweet and tangy. My morning routine is incomplete without it. Love the live cultures — you can actually feel them working!",
    date: 'Oct 2024',
  },
];

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBack }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="min-h-screen bg-cream text-forest">
      {/* Sticky breadcrumb header */}
      <div className="border-b border-forest/10 bg-cream/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-forest/60 hover:text-forest transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Shop
          </button>
          <span className="text-forest/20">/</span>
          <span className="text-sm text-forest/40">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">

        {/* Product hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">

          {/* Left: Image */}
          <div
            className="rounded-3xl flex items-center justify-center p-12"
            style={{ backgroundColor: product.bgColor, minHeight: '420px' }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[380px] w-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <span className="inline-block bg-forest/10 text-forest text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {product.tag}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest leading-tight mb-3">
                {product.name}
              </h1>

              {/* Stars */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accentOrange text-accentOrange" />
                  ))}
                </div>
                <span className="text-sm text-forest/50 font-medium">4.9 · {REVIEWS.length} reviews</span>
              </div>
            </div>

            <p className="text-forest/70 text-base leading-relaxed">
              Traditionally brewed with premium organic ingredients. Each bottle is packed with live cultures,
              natural probiotics, and zero added sugar — crafted to support your gut health and energise your day.
            </p>

            <div className="flex flex-wrap gap-2">
              {['🌿 Raw Ginger', '🍋 Lemon', '🦠 Probiotics', '🍵 Green Tea'].map(tag => (
                <span key={tag} className="bg-forest/8 border border-forest/15 text-forest text-xs font-medium px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Price + Qty + CTA */}
            <div className="border-t border-forest/10 pt-6 flex flex-col gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-forest">₹{product.price}</span>
                <span className="text-sm text-forest/40 font-medium">/ bottle</span>
              </div>

              <div className="flex items-center gap-4">
                {/* Qty stepper */}
                <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-forest/10">
                  <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    className="w-6 h-6 flex items-center justify-center text-forest hover:text-forest/60 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center font-bold text-sm">{qty}</span>
                  <button
                    onClick={() => setQty(q => q + 1)}
                    className="w-6 h-6 flex items-center justify-center text-forest hover:text-forest/60 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button className="flex-1 flex items-center justify-center gap-2 bg-forest text-cream py-3.5 rounded-full font-semibold text-base hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg">
                  <ShoppingCart size={18} />
                  Add to Cart · ₹{product.price * qty}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <div>
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.25em] text-forest/40 uppercase font-semibold mb-2">
              What our customers say
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest">
              Customer Reviews
            </h2>
          </div>

          {/* Overall rating summary */}
          <div className="bg-white rounded-2xl p-6 mb-8 flex items-center gap-8 shadow-sm border border-forest/5">
            <div className="text-center shrink-0">
              <p className="text-6xl font-black text-forest">4.9</p>
              <div className="flex gap-0.5 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accentOrange text-accentOrange" />
                ))}
              </div>
              <p className="text-xs text-forest/40 mt-1">{REVIEWS.length} reviews</p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              {[5, 4, 3, 2, 1].map(star => (
                <div key={star} className="flex items-center gap-3">
                  <span className="text-xs text-forest/40 w-4">{star}</span>
                  <div className="flex-1 bg-forest/8 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-accentOrange rounded-full"
                      style={{ width: star === 5 ? '85%' : star === 4 ? '12%' : '3%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map(review => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-forest/5 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-forest">{review.name}</p>
                    <p className="text-xs text-forest/40">{review.role}</p>
                  </div>
                  <span className="text-xs text-forest/30">{review.date}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-accentOrange text-accentOrange" />
                  ))}
                </div>
                <p className="text-sm text-forest/70 leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
