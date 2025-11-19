
import React from 'react';
import { ArrowRight, Calendar, Ruler } from 'lucide-react';

interface HeroProps {
  content: any;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          // Using a high-quality industrial park image from Unsplash as a reliable fallback
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Thanh Tan Industrial Cluster Perspective" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-semibold tracking-wider uppercase mb-6 animate-fade-in backdrop-blur-md">
          {content.hero.developer}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight animate-slide-up drop-shadow-2xl">
          {content.hero.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 font-light animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
          {content.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
           <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-600/50 shadow-xl">
              <div className="p-2 bg-brand-600 rounded-lg text-white"><Ruler size={20}/></div>
              <div className="text-left">
                 <p className="text-xs text-slate-300 uppercase font-bold">Total Area</p>
                 <p className="text-white font-semibold">{content.hero.area.split(': ')[1]}</p>
              </div>
           </div>
           <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-600/50 shadow-xl">
              <div className="p-2 bg-brand-600 rounded-lg text-white"><Calendar size={20}/></div>
              <div className="text-left">
                 <p className="text-xs text-slate-300 uppercase font-bold">Lease Term</p>
                 <p className="text-white font-semibold">{content.hero.lease.split(': ')[1]}</p>
              </div>
           </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#contact"
            className="group inline-flex items-center gap-3 bg-brand-600 hover:bg-brand-500 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 transform hover:-translate-y-1"
          >
            {content.hero.cta}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
