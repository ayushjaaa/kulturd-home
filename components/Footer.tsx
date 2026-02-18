
import React from 'react';
import { Instagram, Twitter, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-root bg-forest text-cream pt-14 md:pt-18 lg:pt-24 pb-10 md:pb-12 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="footer-top-row flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="md:w-1/3">
            <div className="text-4xl font-black tracking-tighter mb-8">KULTURD.</div>
            <p className="text-cream/50 leading-relaxed mb-10 max-w-sm text-sm lg:text-base">
              Living, breathing, and brewing from the heart. We believe in nutrition that's as vibrant as the people who drink it.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} label="Twitter" />
            </div>
          </div>

          <div className="footer-links-grid md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-12">
            <FooterLinkGroup 
              title="Shop" 
              links={['Variety Packs', 'Sub & Save', 'Wholesale']} 
            />
            <FooterLinkGroup 
              title="About" 
              links={['Our Story', 'Ingredients', 'Sustainability']} 
            />
            
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-8 text-peach">Newsletter</h4>
              <p className="text-xs text-cream/50 mb-6">Join our inner circle for exclusive drops.</p>
              <form className="flex group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="bg-transparent border-cream/20 border-r-0 rounded-l-lg focus:ring-0 focus:border-peach w-full text-sm placeholder:text-cream/20"
                />
                <button className="bg-peach text-forest font-bold px-6 py-3 rounded-r-lg hover:bg-white transition-colors group-hover:scale-105 transform origin-left">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-cream/10 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.25em] font-bold text-cream/30">
          <p>© 2024 Kulturd Brewing Co. All Rights Reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms</a>
            <a href="#" className="hover:text-cream transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <a 
    href="#" 
    aria-label={label}
    className="w-12 h-12 border border-cream/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-forest transition-all duration-300"
  >
    {icon}
  </a>
);

const FooterLinkGroup: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div>
    <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-8 text-peach">{title}</h4>
    <ul className="space-y-4">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="text-cream/50 hover:text-white transition-colors text-sm lg:text-base">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);
