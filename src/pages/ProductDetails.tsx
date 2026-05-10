import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Star, Shield, Truck, RefreshCw, ChevronRight, Share2, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const DUMMY_PRODUCTS = [
  { id: '1', name: 'NEON PARADOX HOODIE', price: 189, category: 'Outerwear', rating: 4.9, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000', description: 'Engineered with high-density kinetic fabric, this hoodie features reflective thermal lining and structured architectural shoulders. Limited edition Chaos drop.' },
  { id: '2', name: 'CYBERPUNK CARGO PANTS', price: 145, category: 'Bottoms', rating: 4.8, image: 'https://images.unsplash.com/photo-1620794202278-493cfad8b024?auto=format&fit=crop&q=80&w=1000', description: '12-pocket tactical articulation with waterproof tech-membrane. Optimized for urban exploration and digital nomads.' },
];

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('L');
  const [activeTab, setActiveTab] = useState('details');

  const product = DUMMY_PRODUCTS.find(p => p.id === id) || DUMMY_PRODUCTS[0];

  return (
    <div className="pt-28 pb-20 container mx-auto px-6 lg:px-12">
      <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8 cursor-pointer" onClick={() => navigate(-1)}>
        <span>Collection</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-white">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Gallery */}
        <div className="lg:w-1/2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] rounded-[40px] overflow-hidden glass-card relative"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-6 right-6 space-y-3">
              <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden glass cursor-pointer hover:border-pink-500 transition-all opacity-60 hover:opacity-100">
                <img src={product.image} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:w-1/2 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-pink-500/30">Limited Edition</span>
              <div className="flex items-center space-x-1 glass px-2 py-1 rounded-full text-[10px] font-bold">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span>{product.rating} (128 Reviews)</span>
              </div>
            </div>
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none italic">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-black">${product.price}</span>
              <span className="text-sm line-through text-gray-500 font-bold">$245.00</span>
              <span className="text-green-400 text-xs font-bold uppercase tracking-widest">30% OFF</span>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed text-lg max-w-lg">
            {product.description}
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center max-w-sm">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Select Size</label>
                <button className="text-[10px] font-black uppercase text-pink-400 underline italic">Size Guide</button>
              </div>
              <div className="flex space-x-3">
                {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-2xl text-xs font-bold transition-all border ${
                      selectedSize === size ? 'bg-white text-black border-white' : 'glass border-white/10 hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-sm lg:max-w-none">
              <button 
                onClick={() => addToCart({ ...product, size: selectedSize, quantity: 1 })}
                className="flex-1 py-5 bg-white text-black font-black uppercase tracking-tighter rounded-full flex items-center justify-center space-x-3 hover:bg-pink-500 hover:text-white transition-all transform hover:scale-[1.02] shadow-xl"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Bag</span>
              </button>
              <button className="flex-1 py-5 glass border-blue-500/30 text-blue-400 font-black uppercase tracking-tighter rounded-full flex items-center justify-center space-x-3 hover:bg-blue-500/10 transition-all">
                <Sparkles className="w-5 h-5" />
                <span>AI Styling</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="pt-10 border-t border-white/10 space-y-6">
            <div className="flex space-x-8 border-b border-white/5">
              {['details', 'shipping', 'returns'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-[10px] font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {tab}
                  {activeTab === tab && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500" />}
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-gray-400 leading-relaxed max-w-lg"
              >
                {activeTab === 'details' && "Molecularly engineered polyester blend. Structured boxy fit. Drop shoulder silhouette. High-fidelity direct-to-garment print. Machine wash cold, digital dry recommended."}
                {activeTab === 'shipping' && "Free express global shipping for all collectors. Dispatched within 24 neural hours. Tracked via real-time satellite imaging."}
                {activeTab === 'returns' && "No-questions-asked digital return policy. 14-day window for exchange or credit node. Sustainability-first recyclability program."}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
            <div className="flex flex-col items-center text-center space-y-2">
              <Shield className="w-6 h-6 text-pink-400" />
              <div className="text-[10px] font-bold uppercase tracking-tighter">Authentic NFT</div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Truck className="w-6 h-6 text-blue-400" />
              <div className="text-[10px] font-bold uppercase tracking-tighter">Expedited Air</div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <RefreshCw className="w-6 h-6 text-purple-400" />
              <div className="text-[10px] font-bold uppercase tracking-tighter">Hype Protection</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
