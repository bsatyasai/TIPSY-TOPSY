import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card rounded-3xl overflow-hidden group border border-white/5 hover:border-pink-500/30 transition-all duration-300"
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-all">
            <Heart className="w-4 h-4" />
          </button>
          <button 
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 glass px-2 py-1 rounded-full text-[10px] font-bold">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span>{product.rating}</span>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="text-[10px] uppercase tracking-widest text-pink-400 font-bold">{product.category}</div>
        <h3 className="font-bold text-sm line-clamp-1">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="font-black text-lg">${product.price}</span>
          <button className="text-[10px] items-center space-x-1 font-bold uppercase tracking-tighter opacity-60 hover:opacity-100 transition-opacity hidden md:flex">
            <span>Quick View</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
