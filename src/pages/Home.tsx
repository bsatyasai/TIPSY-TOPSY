import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, MessageCircle, Brain, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getStylingAdvice } from '../services/geminiService';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const fetchAiAdvice = async () => {
    setIsAiLoading(true);
    const advice = await getStylingAdvice("Suggest a trending cyberpunk streetwear look for today.");
    setAiAdvice(advice);
    setIsAiLoading(false);
  };

  useEffect(() => {
    fetchAiAdvice();
  }, []);

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
            <button 
              onClick={() => navigate('/new')}
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-tighter rounded-full hover:bg-pink-400 hover:text-white transition-all transform hover:scale-105"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => navigate('/ai-stylist')}
              className="px-8 py-4 glass border border-white/20 font-bold uppercase tracking-tighter rounded-full flex items-center space-x-2 hover:bg-white/10 transition-colors"
            >
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

        {/* Right Hero Image Card / AI Suggestion Overlay */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full aspect-[4/5] relative"
        >
          <div className="w-full h-full rounded-[40px] overflow-hidden glass-card p-6 flex flex-col justify-end group">
            <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000')" }}></div>
            
            {/* AI Advice Overlay */}
            <div className="absolute top-8 right-8 left-8 transition-all duration-500">
              <AnimatePresence mode="wait">
                {aiAdvice && !isAiLoading ? (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="glass p-6 rounded-3xl border border-blue-500/30 bg-blue-500/10 backdrop-blur-xl space-y-3"
                  >
                     <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                           <Brain className="w-4 h-4 text-blue-400" />
                           <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest">Neural Suggestion</span>
                        </div>
                        <button onClick={fetchAiAdvice} className="hover:rotate-180 transition-transform duration-500">
                           <RefreshCw className="w-3 h-3 text-gray-500" />
                        </button>
                     </div>
                     <p className="text-xs italic font-medium leading-relaxed line-clamp-3">"{aiAdvice}"</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass p-6 rounded-3xl border border-white/10 flex items-center justify-center space-x-3"
                  >
                     <RefreshCw className="w-4 h-4 animate-spin text-blue-400" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Syncing Stylist DNA...</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
              <button 
                onClick={() => navigate('/product/1')}
                className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/20 hover:scale-110 transition-transform"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Influencer Badge */}
            <div className="absolute bottom-[100px] left-8 glass border border-white/20 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-[2px]">
                 <div className="w-full h-full rounded-full bg-black border border-black overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=StyleJunkie" alt="Influencer" className="w-full h-full object-cover" />
                 </div>
              </div>
              <div>
                <div className="text-xs font-bold">@style_junkie</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-tighter italic">Verified Collector</div>
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

      {/* Influencer Gallery Section */}
      <section className="relative z-10 container mx-auto px-6 lg:px-12 py-24 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500">Live from the Grid</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">COLLECTOR MOMENTS</h2>
          </div>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest max-w-xs">
            Join 45k+ collectors showcasing the evolution of streetwear.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { img: 'https://images.unsplash.com/photo-1529139513477-3235a8f4df5a?auto=format&fit=crop&q=80&w=600', user: '@vogue_glitch' },
            { img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600', user: '@style_junkie' },
            { img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=600', user: '@cyber_nomad' },
            { img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=600', user: '@digital_aura' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-[30px] overflow-hidden relative group cursor-pointer"
            >
              <img src={item.img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                 <div className="text-[10px] font-black uppercase text-white tracking-widest">{item.user}</div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <Instagram className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-10 py-4 glass border border-white/20 font-black uppercase tracking-tighter rounded-full hover:bg-white hover:text-black transition-all">
            Join the Gallery
          </button>
        </div>
      </section>
    </div>
  );
};

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z"/></svg>
);
