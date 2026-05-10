import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, MessageCircle } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="relative pt-24 min-h-screen overflow-hidden">
      {/* Background Mesh Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-600/20 rounded-full blur-[120px] animate-mesh"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-mesh" style={{ animationDelay: '-5s' }}></div>
      </div>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="lg:w-1/2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-pink-500/30">
              Spring Drop 2024
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              CHAOS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">COUTURE</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Luxury streetwear engineered for the digital generation. High-fidelity fabrics, viral silhouettes, and AI-optimized fit tech.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-tighter rounded-full hover:bg-pink-400 hover:text-white transition-all transform hover:scale-105">
              Explore Collection
            </button>
            <button className="px-8 py-4 glass border border-white/20 font-bold uppercase tracking-tighter rounded-full flex items-center space-x-2 hover:bg-white/10 transition-colors">
              <span>AI Stylist</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold italic">14k+</div>
              <div className="text-[10px] uppercase text-gray-500 tracking-widest">Verified Drops</div>
            </div>
            <div>
              <div className="text-2xl font-bold italic">98%</div>
              <div className="text-[10px] uppercase text-gray-500 tracking-widest">Hype Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold italic">Global</div>
              <div className="text-[10px] uppercase text-gray-500 tracking-widest">Fast Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold italic">24/7</div>
              <div className="text-[10px] uppercase text-gray-500 tracking-widest">Live Support</div>
            </div>
          </div>
        </div>

        {/* Right Hero Image Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full aspect-[4/5] relative"
        >
          <div className="w-full h-full rounded-[40px] overflow-hidden glass-card p-6 flex flex-col justify-end">
            <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000')" }}></div>
            
            {/* Featured Product Overlay */}
            <div className="relative z-20 w-full glass-dark rounded-3xl p-6 flex justify-between items-center border border-white/20">
              <div>
                <div className="text-xs text-pink-400 font-bold uppercase mb-1">New Season Hot</div>
                <div className="text-xl md:text-2xl font-black">NEON PARADOX HOODIE</div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg font-bold">$189.00</span>
                  <span className="text-sm line-through text-gray-500">$245.00</span>
                </div>
              </div>
              <button className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/20 hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Influencer Badge */}
            <div className="absolute top-8 left-8 glass border border-white/20 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-[2px]">
                 <div className="w-full h-full rounded-full bg-black border border-black overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=StyleJunkie" alt="Influencer" className="w-full h-full object-cover" />
                 </div>
              </div>
              <div>
                <div className="text-xs font-bold">@style_junkie</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-tighter italic">Wearing Size L</div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Featured Marquee / Benefits */}
      <div className="relative z-20 mt-12 mb-24 overflow-hidden border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center space-x-12 py-4 animate-flex-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span className="flex items-center"><Globe className="w-4 h-4 mr-2 text-pink-500" /> FREE GLOBAL SHIPPING <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mx-4"></div></span>
              <span className="flex items-center"><Zap className="w-4 h-4 mr-2 text-blue-500" /> SECURE WEB3 PAYMENTS <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mx-4"></div></span>
              <span className="flex items-center"><Sparkles className="w-4 h-4 mr-2 text-purple-500" /> AI POWERED FIT-SIMULATION <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mx-4"></div></span>
              <span className="flex items-center"><MessageCircle className="w-4 h-4 mr-2 text-pink-500" /> 24/7 CONCIERGE CHAT <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mx-4"></div></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
