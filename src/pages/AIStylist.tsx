import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap, Camera, RefreshCw } from 'lucide-react';

export const AIStylist: React.FC = () => {
  return (
    <div className="pt-28 pb-20 container mx-auto px-6 lg:px-12 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12 h-full">
        {/* Left: Interactive Advisor */}
        <div className="lg:w-1/2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                <Brain className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-black uppercase tracking-tighter italic">AI Fashion Oracle</h1>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Our neural network analyzes 4M+ viral silhouettes, real-time trend velocity, and your unique bio-profile to engineer the perfect drop for you.
            </p>
          </motion.div>

          <div className="glass rounded-[40px] p-8 space-y-6 border border-blue-500/20">
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Current Vibe</label>
              <div className="grid grid-cols-3 gap-3">
                {['Cyberpunk', 'Minimalist', 'Brutalist', 'Ethereal', 'Hypebeast', 'Vintage AI'].map((vibe) => (
                  <button key={vibe} className="glass py-3 px-2 rounded-2xl text-[10px] font-bold uppercase tracking-tighter hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-white/5 hover:border-blue-500/30">
                    {vibe}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Occasion Logic</label>
              <div className="flex flex-wrap gap-3">
                {['Metaverse Event', 'Urban Exploration', 'Digital Rave', 'High-Stakes Meeting'].map((occ) => (
                  <button key={occ} className="glass py-2 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-blue-500/30 transition-all">
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black uppercase tracking-tighter rounded-full flex items-center justify-center space-x-3 hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <Sparkles className="w-5 h-5" />
              <span>Generate Outfit DNA</span>
            </button>
          </div>
        </div>

        {/* Right: AI Visualization */}
        <div className="lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-[600px] rounded-[40px] glass-card overflow-hidden relative flex items-center justify-center border-blue-500/10"
          >
            {/* Simulation UI elements */}
            <div className="absolute top-8 left-8 space-y-2">
              <div className="text-[10px] font-black uppercase text-blue-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Live Neural Sync
              </div>
              <div className="text-2xl font-bold italic font-mono text-white/40">CALCULATING_HYPE...</div>
            </div>

            <div className="absolute bottom-8 right-8 glass rounded-2xl p-4 flex items-center space-x-4 border-white/20">
               <div className="text-right">
                  <div className="text-[10px] font-bold text-gray-500 uppercase">Fit Accuracy</div>
                  <div className="text-xl font-black text-blue-400">99.87%</div>
               </div>
               <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 leading-none">
                  <Zap className="w-6 h-6" />
               </div>
            </div>

            {/* Scan Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-blue-500/50 blur-sm z-10"
            ></motion.div>

            <div className="space-y-8 text-center px-12 relative z-20">
              <div className="w-32 h-32 glass rounded-full mx-auto flex items-center justify-center border-dashed border-blue-500/50 group cursor-pointer hover:border-solid transition-all">
                <Camera className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic mb-2">Upload Your Avatar</h3>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">or Take a 3D Scan for Instant Fit-Mapping</p>
              </div>
              <div className="flex justify-center space-x-4">
                <button className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
                  <RefreshCw className="w-4 h-4" />
                  <span>Randomize Seed</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Floating Interaction Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass-dark p-6 rounded-3xl border border-white/20 space-y-3 max-w-[200px]"
          >
             <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
             </div>
             <p className="text-[10px] italic font-medium leading-relaxed">"The AI predicted my style better than my best friend. Viral fit guaranteed."</p>
             <div className="text-[10px] font-black uppercase tracking-tighter mt-2">— Alex P. (Digital Collector)</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
);
