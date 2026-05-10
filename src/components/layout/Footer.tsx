import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Globe, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 pt-24 pb-12 border-t border-white/10 bg-white/2 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-black tracking-tighter italic">TIPSY-TOPSY</Link>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-loose">
            Engineering premium streetwear for the digital generation. Viral silhouettes, AI-optimized fit tech, and collective DNA.
          </p>
          <div className="flex space-x-4">
             <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
             </a>
             <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
             </a>
             <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
             </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-6">
          <h4 className="text-[12px] font-black uppercase tracking-[0.2em] italic">The Ecosystem</h4>
          <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <li><Link to="/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
            <li><Link to="/collections" className="hover:text-white transition-colors">Collections</Link></li>
            <li><Link to="/trending" className="hover:text-white transition-colors">Trending Now</Link></li>
            <li><Link to="/ai-stylist" className="hover:text-white transition-colors">AI Stylist DNA</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Our Manifesto</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-6">
          <h4 className="text-[12px] font-black uppercase tracking-[0.2em] italic">Service Logic</h4>
          <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Search Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Protocol</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Return Program</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Affiliate Node</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-6">
          <h4 className="text-[12px] font-black uppercase tracking-[0.2em] italic">Join the Collective</h4>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Get early access to drops and exclusive AI styling sessions.</p>
          <div className="relative">
             <input 
                type="email" 
                placeholder="EMAIL@FUTURE.COM" 
                className="w-full glass bg-white/5 rounded-full px-6 py-4 text-[10px] uppercase font-bold tracking-widest focus:outline-none focus:border-pink-500 transition-colors"
             />
             <button className="absolute right-2 top-2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
            © 2024 TIPSY-TOPSY. ALL RIGHTS RESERVED. CODE: {new Date().getFullYear()}
         </div>
         <div className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <div className="flex items-center space-x-2">
               <Globe className="w-3 h-3" />
               <span>EN / USD</span>
            </div>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
         </div>
      </div>
    </footer>
  );
};
