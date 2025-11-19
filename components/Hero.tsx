
import React, { useState } from 'react';
import { ArrowRight, Calendar, Ruler, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  content: any;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <img
            src={`${import.meta.env.BASE_URL}hero.jpg`}
            alt="Thanh Tan Industrial Cluster Master Plan" 
            className="w-full h-full object-cover opacity-100 transform scale-105 animate-pulse-slow" 
            style={{ animationDuration: '60s' }}
            onError={(e) => {
              console.warn("hero.jpg not found, trying fallback");
              setImgError(true);
            }}
          />
        ) : (
          // Fallback to map image if hero.jpg is missing, or a nice gradient
          <div className="w-full h-full bg-slate-900 relative">
             <img
                src={`${import.meta.env.BASE_URL}map_vn.png`}
                alt="Fallback Background"
                className="w-full h-full object-cover opacity-30 blur-sm"
             />
             <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 to-slate-900/90"></div>
          </div>
        )}
        
        {/* Vertical Gradient: Lighter top, Dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
        
        {/* Horizontal Vignette: Focus on center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.7)_100%)]" />
        
        {/* Color Tint: Slight navy/green tint for premium feel */}
        <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-xl hover:bg-white/20 transition-colors cursor-default shadow-lg">
              <CheckCircle2 size={14} className="text-brand-400" />
              {content.hero.developer}
            </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-none animate-slide-up drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
          <span className="block text-shadow-lg">
            {content.hero.title}
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-100 max-w-3xl mx-auto mb-10 font-light animate-slide-up leading-relaxed drop-shadow-md text-shadow" style={{ animationDelay: '0.3s' }}>
          {content.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
           <div className="group flex items-center gap-4 bg-slate-950/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-2xl hover:bg-slate-900/60 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-brand-500/20 rounded-xl text-brand-300 group-hover:bg-brand-600 group-hover:text-white transition-colors"><Ruler size={24}/></div>
              <div className="text-left">
                 <p className="text-xs text-slate-300 uppercase font-bold tracking-wider">Total Area</p>
                 <p className="text-white font-bold text-lg">{content.hero.area.split(': ')[1]}</p>
              </div>
           </div>
           <div className="group flex items-center gap-4 bg-slate-950/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-2xl hover:bg-slate-900/60 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Calendar size={24}/></div>
              <div className="text-left">
                 <p className="text-xs text-slate-300 uppercase font-bold tracking-wider">Lease Term</p>
                 <p className="text-white font-bold text-lg">{content.hero.lease.split(': ')[1]}</p>
              </div>
           </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a 
            href="#contact"
            className="relative inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 text-white text-lg font-bold px-10 py-5 rounded-full transition-all shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)] hover:shadow-[0_0_60px_-10px_rgba(34,197,94,0.8)] transform hover:-translate-y-1 overflow-hidden group ring-4 ring-brand-500/20"
          >
             {/* Shimmer Effect */}
             <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />
             
            <span className="relative z-10">{content.hero.cta}</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
