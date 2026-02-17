
import React from 'react';

const DecorativeElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none">
      {/* Top Left Leaf */}
      <img 
        src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=200" 
        alt="Decorative Leaf"
        className="absolute -top-10 -left-10 w-48 h-48 opacity-20 blur-sm rotate-45 mix-blend-multiply"
      />
      
      {/* Middle Left Leaf */}
      <img 
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=200" 
        alt="Decorative Leaf"
        className="absolute top-[30%] -left-20 w-64 h-64 opacity-15 blur-[2px] -rotate-12 mix-blend-multiply"
      />

      {/* Bottom Right Leaf */}
      <img 
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=200" 
        alt="Decorative Leaf"
        className="absolute -bottom-20 -right-20 w-80 h-80 opacity-20 blur-sm rotate-[200deg] mix-blend-multiply"
      />

      {/* Bubbles */}
      <div className="absolute top-[10%] right-[15%] w-12 h-12 bg-white/40 backdrop-blur-sm rounded-full blur-[1px]"></div>
      <div className="absolute top-[15%] right-[10%] w-6 h-6 bg-white/30 backdrop-blur-sm rounded-full blur-[2px]"></div>
      <div className="absolute bottom-[20%] left-[5%] w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full blur-[3px]"></div>
      <div className="absolute top-[50%] right-[5%] w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full blur-[1px]"></div>
      <div className="absolute bottom-[40%] right-[25%] w-10 h-10 bg-white/40 backdrop-blur-sm rounded-full blur-[2px]"></div>
    </div>
  );
};

export default DecorativeElements;
