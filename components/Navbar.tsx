
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference">
      <div className="text-2xl font-black tracking-tighter text-white">KULTURD.</div>
      
      <div className="hidden md:flex gap-12 font-semibold uppercase text-[10px] tracking-[0.25em] text-white">
        {NAV_LINKS.map((link) => (
          <a 
            key={link.label} 
            href={link.href} 
            className="hover:text-peach transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6 text-white">
        <button className="relative group">
          <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
          {cartCount >= 0 && (
            <span className="absolute -top-2 -right-2 bg-accentOrange text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};
