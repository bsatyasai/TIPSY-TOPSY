import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { items, removeFromCart, addToCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-[40px] p-12 max-w-2xl mx-auto"
        >
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-gray-500" />
          <h2 className="text-3xl font-black uppercase mb-4 italic">Your bag is empty</h2>
          <p className="text-gray-400 mb-8">Looks like you haven't added any Chaos Couture to your collection yet.</p>
          <Link to="/new" className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-tighter rounded-full hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105">
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12">
      <h1 className="text-5xl font-black uppercase tracking-tighter italic mb-12">Your Selection</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="lg:w-2/3 space-y-6">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div 
                key={`${item.id}-${item.size}`}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass-card rounded-3xl p-4 md:p-6 flex items-center gap-6"
              >
                <div className="w-24 h-32 md:w-32 md:h-40 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-black text-lg md:text-xl uppercase tracking-tight">{item.name}</h3>
                      {item.size && <p className="text-[10px] font-bold text-pink-400 uppercase tracking-widest mt-1">Size: {item.size}</p>}
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center space-x-4 glass rounded-full px-3 py-1">
                      <button 
                        onClick={() => addToCart({ ...item, quantity: -1 })}
                        disabled={item.quantity <= 1}
                        className="p-1 hover:text-pink-400 disabled:opacity-30"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => addToCart({ ...item, quantity: 1 })}
                        className="p-1 hover:text-pink-400"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-black text-xl">${item.price * item.quantity}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <div className="lg:w-1/3">
          <div className="glass-dark rounded-[40px] p-8 space-y-8 sticky top-32 border border-white/20">
            <h2 className="text-2xl font-black uppercase tracking-tight italic">Order Summary</h2>
            
            <div className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">${total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-400">Calculated at checkout</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-white/10">
                <span className="text-white">Estimated Total</span>
                <span className="text-white text-2xl font-black italic tracking-tighter">${total}</span>
              </div>
            </div>

            <button className="w-full py-5 bg-white text-black font-black uppercase tracking-tighter rounded-full flex items-center justify-center space-x-2 hover:bg-pink-500 hover:text-white transition-all transform hover:scale-[1.02]">
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Secured with Web3 Encryption</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Hype Protection Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
