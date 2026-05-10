import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, ShieldCheck, CheckCircle2, ChevronRight, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const { total, items, clearCart } = useCart();
  const navigate = useNavigate();
  const [step] = useState('shipping');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOrder = () => {
    setIsSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-[40px] p-12 max-w-2xl mx-auto space-y-6"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-black uppercase italic">Order Confirmed</h2>
          <p className="text-gray-400">Your fashion DNA has been securely logged. Welcome to the Chaos Couture collective.</p>
          <div className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">Redirecting to Home...</div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Checkout Form */}
        <div className="lg:w-2/3 space-y-12">
          {/* Progress Bar */}
          <div className="flex items-center space-x-4 mb-8">
            <span className={`text-[10px] font-bold uppercase transition-colors ${step === 'shipping' ? 'text-pink-400' : 'text-gray-500'}`}>01 Shipping</span>
            <ChevronRight className="w-3 h-3 text-gray-700" />
            <span className={`text-[10px] font-bold uppercase transition-colors ${step === 'payment' ? 'text-pink-400' : 'text-gray-500'}`}>02 Payment</span>
          </div>

          <div className="space-y-8">
            <section className="space-y-6">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-gray-500" />
                <h3 className="text-xl font-black uppercase tracking-tight">Shipping Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="glass bg-white/5 border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-pink-500 transition-colors" />
                <input type="text" placeholder="Last Name" className="glass bg-white/5 border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-pink-500 transition-colors" />
                <input type="email" placeholder="Email Address" className="glass bg-white/5 border-white/10 rounded-2xl p-4 text-sm md:col-span-2 focus:outline-none focus:border-pink-500 transition-colors" />
                <input type="text" placeholder="Street Address" className="glass bg-white/5 border-white/10 rounded-2xl p-4 text-sm md:col-span-2 focus:outline-none focus:border-pink-500 transition-colors" />
                <input type="text" placeholder="City" className="glass bg-white/5 border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-pink-500 transition-colors" />
                <input type="text" placeholder="Postal Code" className="glass bg-white/5 border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-pink-500 transition-colors" />
              </div>
            </section>

            <section className="space-y-6 pt-8 border-t border-white/5">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-gray-500" />
                <h3 className="text-xl font-black uppercase tracking-tight">Payment Logic</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                 <div className="glass p-6 rounded-3xl border border-pink-500/30 flex justify-between items-center cursor-pointer">
                    <div className="flex items-center space-x-4">
                       <div className="w-4 h-4 rounded-full border-2 border-pink-500 flex items-center justify-center">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                       </div>
                       <span className="text-sm font-bold uppercase tracking-widest">Card / Web3 Wallet</span>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-8 h-5 bg-white/20 rounded"></div>
                       <div className="w-8 h-5 bg-white/20 rounded"></div>
                    </div>
                 </div>
                 <div className="glass-card p-4 rounded-2xl space-y-4">
                    <input type="text" placeholder="Card Number" className="w-full bg-transparent border-none p-0 text-sm focus:outline-none" />
                    <div className="grid grid-cols-2 gap-4">
                       <input type="text" placeholder="MM/YY" className="bg-transparent border-none p-0 text-sm focus:outline-none" />
                       <input type="text" placeholder="CVC" className="bg-transparent border-none p-0 text-sm focus:outline-none" />
                    </div>
                 </div>
              </div>
            </section>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:w-1/3">
          <div className="glass-dark rounded-[40px] p-8 space-y-6 border border-white/20 sticky top-32">
            <h2 className="text-xl font-black uppercase italic">Order Summary</h2>
            <div className="max-h-60 overflow-y-auto space-y-4 pr-2 scrollbar-none">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-16 rounded-xl overflow-hidden bg-white/10 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase truncate max-w-[120px]">{item.name}</div>
                      <div className="text-[8px] font-bold text-gray-500">QTY: {item.quantity} | SIZE: {item.size}</div>
                    </div>
                  </div>
                  <span className="text-sm font-black">${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
               <div className="flex justify-between text-[10px] font-bold uppercase text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-400">FREE</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-[12px] font-black uppercase italic">Total</span>
                  <span className="text-2xl font-black italic tracking-tighter">${total}</span>
               </div>
            </div>

            <button 
              onClick={handleOrder}
              className="w-full py-5 bg-pink-500 text-white font-black uppercase tracking-tighter rounded-full flex items-center justify-center space-x-2 hover:bg-white hover:text-black transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            >
              <Lock className="w-4 h-4" />
              <span>Complete Order</span>
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest pt-4">
               <ShieldCheck className="w-4 h-4" />
               <span>Instant Encrypted Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
