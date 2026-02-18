
import React from 'react';
import { View } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (view: View) => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigate, currentView }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-6 sticky top-0 z-40 bg-[#DCC7A1]">
      <div className="flex gap-8 items-center text-sm font-medium tracking-widest">
        <button 
          onClick={() => onNavigate('SHOP')}
          className={`hover:opacity-60 transition-opacity ${currentView === 'SHOP' ? 'underline decoration-1 underline-offset-4' : ''}`}
        >
          SHOP
        </button>
        <button 
          onClick={() => onNavigate('OUR_STORY')}
          className={`hover:opacity-60 transition-opacity ${currentView === 'OUR_STORY' ? 'underline decoration-1 underline-offset-4' : ''}`}
        >
          OUR STORY
        </button>
      </div>
      
      <button 
        onClick={onOpenCart}
        className="flex items-center gap-2 hover:opacity-60 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <span className="text-sm font-medium">{cartCount}</span>
      </button>
    </nav>
  );
};

export default Navbar;
