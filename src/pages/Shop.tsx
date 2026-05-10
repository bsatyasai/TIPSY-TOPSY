import React, { useState } from 'react';
import { ProductCard } from '../components/ui/ProductCard';
import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';

const DUMMY_PRODUCTS = [
  { id: '1', name: 'NEON PARADOX HOODIE', price: 189, category: 'Outerwear', rating: 4.9, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600' },
  { id: '2', name: 'CYBERPUNK CARGO PANTS', price: 145, category: 'Bottoms', rating: 4.8, image: 'https://images.unsplash.com/photo-1620794202278-493cfad8b024?auto=format&fit=crop&q=80&w=600' },
  { id: '3', name: 'VIRTUAL REALITY TEE', price: 65, category: 'T-Shirts', rating: 4.7, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600' },
  { id: '4', name: 'LIQUID METAL BOMBER', price: 295, category: 'Outerwear', rating: 5.0, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600' },
  { id: '5', name: 'GRAVITY DEFying sneakers', price: 210, category: 'Footwear', rating: 4.9, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=600' },
  { id: '6', name: 'SOLAR FLARE CAP', price: 45, category: 'Accessories', rating: 4.6, image: 'https://images.unsplash.com/photo-1588850567047-dc9638708c90?auto=format&fit=crop&q=80&w=600' },
  { id: '7', name: 'DATA STREAM SWEATSHIRT', price: 120, category: 'Outerwear', rating: 4.8, image: 'https://images.unsplash.com/photo-1556821810-72946c641477?auto=format&fit=crop&q=80&w=600' },
  { id: '8', name: 'OBLIVION OVERSIZED COAT', price: 340, category: 'Outerwear', rating: 4.9, image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600' },
];

export const Shop: React.FC = () => {
  const [category, setCategory] = useState('All');

  const filtered = category === 'All' ? DUMMY_PRODUCTS : DUMMY_PRODUCTS.filter(p => p.category === category);

  return (
    <div className="pt-28 pb-20 container mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">The Collection</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-none">
            {['All', 'Outerwear', 'Bottoms', 'T-Shirts', 'Footwear', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  category === cat ? 'bg-pink-500 text-white' : 'glass hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button className="glass px-6 py-3 rounded-full flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10">
            <Filter className="w-4 h-4" />
            <span>Sort By</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-20 text-center glass rounded-[40px] border-dashed">
          <div className="text-gray-500 text-sm uppercase font-bold tracking-widest">No Drops Found in this Category</div>
        </div>
      )}
    </div>
  );
};
