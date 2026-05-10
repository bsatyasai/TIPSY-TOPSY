import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10 px-6 md:px-10 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-12">
        <Link to="/" className="text-2xl font-black tracking-tighter italic hover:opacity-80 transition-opacity">
          TIPSY-TOPSY
        </Link>
        <div className="hidden lg:flex space-x-8 text-[10px] font-semibold uppercase tracking-widest">
          <Link to="/new" className="text-pink-400 hover:text-white transition-colors">New Arrivals</Link>
          <Link to="/collections" className="hover:text-pink-400 transition-colors">Collections</Link>
          <Link to="/trending" className="hover:text-pink-400 transition-colors">Trending</Link>
          <Link to="/ai-stylist" className="flex items-center space-x-2 text-blue-400 hover:text-white transition-colors group">
            <span>AI Stylist</span>
            <Sparkles className="w-3 h-3 group-hover:animate-pulse" />
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
          <Search className="w-4 h-4" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
          <User className="w-4 h-4" />
        </button>
        <Link to="/cart" className="relative group">
          <ShoppingBag className="w-6 h-6 group-hover:text-pink-400 transition-colors" strokeWidth={1.5} />
          {itemCount > 0 && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full text-[10px] flex items-center justify-center font-bold"
            >
              {itemCount}
            </motion.div>
          )}
        </Link>
      </div>
    </nav>
  );
};
