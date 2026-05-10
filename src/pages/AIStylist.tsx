import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, Zap, Camera, RefreshCw, Loader2, ListChecks } from 'lucide-react';
import { getStylingAdvice } from '../services/geminiService';

export const AIStylist: React.FC = () => {
  const [selectedVibe, setSelectedVibe] = useState('Cyberpunk');
  const [selectedOccasion, setSelectedOccasion] = useState('Digital Rave');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setRecommendation(null);
    
    const prompt = `I'm looking for a ${selectedVibe} outfit for a ${selectedOccasion}. What's your elite styling advice?`;
    const result = await getStylingAdvice(prompt);
    
    setRecommendation(result);
    setIsLoading(false);
  };

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
                  <button 
                    key={vibe} 
                    onClick={() => setSelectedVibe(vibe)}
                    className={`glass py-3 px-2 rounded-2xl text-[10px] font-bold uppercase tracking-tighter transition-all border ${selectedVibe === vibe ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'border-white/5 hover:border-blue-500/30 hover:text-blue-400'}`}
                  >
                    {vibe}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Occasion Logic</label>
              <div className="flex flex-wrap gap-3">
                {['Metaverse Event', 'Urban Exploration', 'Digital Rave', 'High-Stakes Meeting'].map((occ) => (
                  <button 
                    key={occ} 
                    onClick={() => setSelectedOccasion(occ)}
                    className={`glass py-2 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${selectedOccasion === occ ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'hover:border-blue-500/30'}`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black uppercase tracking-tighter rounded-full flex items-center justify-center space-x-3 hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
              <span>{isLoading ? 'Syncing DNA...' : 'Generate Outfit DNA'}</span>
            </button>
          </div>
        </div>

        {/* Right: AI Visualization / Results */}
        <div className="lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-full min-h-[600px] rounded-[40px] glass-card overflow-hidden relative flex flex-col items-center justify-center border-blue-500/10 p-12"
          >
            {/* Simulation UI elements */}
            <div className="absolute top-8 left-8 space-y-2">
              <div className="text-[10px] font-black uppercase text-blue-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                {isLoading ? 'Processing Neural Streams' : 'Live Neural Sync'}
              </div>
              <div className="text-2xl font-bold italic font-mono text-white/40">
                {isLoading ? 'ENGAGING_LOGIC...' : recommendation ? 'DNA_DECODED' : 'AWAITING_INPUT...'}
              </div>
            </div>

            {isLoading ? (
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="w-24 h-24 relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  />
                  <Brain className="w-10 h-10 text-blue-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-black uppercase italic tracking-tighter">Analyzing 4TB of Style History</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex justify-center items-center gap-2">
                     <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></span>
                     <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                     <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            ) : recommendation ? (
              <AnimatePresence>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8 w-full"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <ListChecks className="w-8 h-8 text-blue-400" />
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter">Your Aesthetic DNA</h3>
                  </div>
                  
                  <div className="glass p-8 rounded-[30px] border border-blue-500/20 bg-blue-500/5 backdrop-blur-xl">
                    <p className="text-lg text-white font-medium leading-relaxed italic">
                      "{recommendation}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-4 rounded-2xl flex items-center space-x-3">
                       <Zap className="w-5 h-5 text-blue-400" />
                       <div>
                          <div className="text-[8px] font-bold text-gray-500 uppercase">Trend Score</div>
                          <div className="text-sm font-black italic">TOP 0.1%</div>
                       </div>
                    </div>
                    <button 
                      onClick={() => setRecommendation(null)}
                      className="glass p-4 rounded-2xl flex items-center justify-center space-x-3 hover:bg-white/10 transition-colors"
                    >
                       <RefreshCw className="w-5 h-5 text-gray-400" />
                       <span className="text-[10px] font-black uppercase">Re-Roll DNA</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="space-y-8 text-center px-12 relative z-20">
                <div className="w-32 h-32 glass rounded-full mx-auto flex items-center justify-center border-dashed border-blue-500/50 group cursor-pointer hover:border-solid transition-all">
                  <Camera className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase italic mb-2">Upload Your Avatar</h3>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">or Select Your Vibe to Begin Scanning</p>
                </div>
              </div>
            )}

            {/* Scan Overlay (only when not showing results) */}
            {!recommendation && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-blue-500/50 blur-sm z-10"
                ></motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
