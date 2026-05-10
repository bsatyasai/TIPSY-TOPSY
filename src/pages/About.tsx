import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Globe, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Manifesto Hero */}
      <section className="container mx-auto px-6 lg:px-12 text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="space-y-4"
        >
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/30">The Collective DNA</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic uppercase leading-none">
            NOT JUST<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 decoration-pink-500">CLOTHING</span>
          </h1>
        </motion.div>
        <p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed font-medium">
          Tipsy-Topsy was founded in 2024 at the intersection of high-fidelity textile engineering and digital culture. We don't follow trends; we observe the chaos and code the couture.
        </p>
      </section>

      {/* Philosophy Grid */}
      <section className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Eye, title: "Vision", text: "To define the aesthetic of the digital nomad generation through architectural silhouettes." },
          { icon: Heart, title: "Emotion", text: "Engineering garments that provoke response, not just approval. We design for the dopamine." },
          { icon: Zap, title: "Velocity", text: "Real-time production cycles. 21-day timeline from viral sketch to global delivery." }
        ].map((item, i) => (
          <div key={i} className="glass p-10 rounded-[40px] space-y-6 hover:border-pink-500/30 transition-all border border-white/5">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-pink-400">
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black uppercase italic">{item.title}</h3>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-loose">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Image / Stats Section */}
      <section className="relative overflow-hidden">
         <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 rounded-[40px] overflow-hidden glass-card aspect-square relative group">
               <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=1000" alt="Design Lab" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
               <div className="absolute bottom-10 left-10 space-y-2">
                  <div className="text-3xl font-black uppercase italic">THE LAB</div>
                  <div className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">Tokyo / New York / London</div>
               </div>
            </div>
            <div className="md:w-1/2 space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter">SUSTAINABLE<br />CHAOS</h2>
                  <p className="text-gray-400 leading-relaxed font-medium text-lg">
                    Every Tipsy-Topsy piece is backed by a digital twin NFT. We use recycled ocean plastics fused with biological polymers to create fabrics that last for decades, not seasons.
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-black italic">100%</div>
                    <div className="text-[10px] font-bold uppercase text-gray-500 mt-2">Recyclable DNA</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black italic">NFT</div>
                    <div className="text-[10px] font-bold uppercase text-gray-500 mt-2">Collection IDs</div>
                  </div>
               </div>
            </div>
         </div>
         {/* Background Glow */}
         <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Partners / Trust */}
      <section className="container mx-auto px-6 lg:px-12 py-12 border-t border-white/10 text-center space-y-12">
         <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Collaborating with the future</div>
         <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <Globe className="w-12 h-12" />
            <Target className="w-12 h-12" />
            <Zap className="w-12 h-12" />
            <Sparkles className="w-12 h-12" />
         </div>
      </section>
    </div>
  );
};
