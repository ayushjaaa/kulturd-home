
import React from 'react';
import { Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6">
      {/* Left: Social Icons */}
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 cursor-pointer transition-colors">
          <Instagram size={16} />
        </div>
        <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 cursor-pointer transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
          </svg>
        </div>
        <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 cursor-pointer transition-colors">
          <Youtube size={16} />
        </div>
      </div>

      {/* Center: Nav Pills */}
      <div className="hidden md:flex items-center gap-2 bg-[#1b3a2a]/5 p-1 rounded-full">
        <a href="#" className="px-5 py-2 text-sm font-medium hover:text-[#1b3a2a]/70 transition-colors">About</a>
        <a href="#" className="px-5 py-2 text-sm font-medium bg-[#1b3a2a] text-white rounded-full">Benefits</a>
        <a href="#" className="px-5 py-2 text-sm font-medium hover:text-[#1b3a2a]/70 transition-colors">Reviews</a>
      </div>

      {/* Right: Shop Button */}
      <button className="flex items-center gap-2 bg-[#1b3a2a] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#1b3a2a]/90 transition-all group">
        <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <ArrowUpRight size={14} />
        </div>
        Shop all
      </button>
    </nav>
  );
};

export default Navbar;
