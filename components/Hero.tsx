
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { FiveElementsBackground } from './3d/FiveElementsBackground';
import { Icon3D } from './3d/Icon3D';

interface HeroProps {
  content: any;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-24 pb-12 lg:pt-0">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={`${import.meta.env.BASE_URL}panorama.jpg`}
              alt="Background"
              className="w-full h-full object-cover opacity-60"
            />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950" />
      </div>

      {/* 3D Five Elements Background Layer */}
      <FiveElementsBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
            
            {/* Badge */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs md:text-sm font-bold tracking-widest uppercase backdrop-blur-xl shadow-lg shadow-brand-900/20">
                  <CheckCircle2 size={14} className="text-brand-400" />
                  {content.hero.developer}
                </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight animate-slide-up drop-shadow-xl" style={{ animationDelay: '0.2s' }}>
              {content.hero.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
              {content.hero.subtitle}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
               <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-5 py-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center justify-center">
                      <Icon3D type="ruler" color="#4ade80" />
                  </div>
                  <div>
                     <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">{content.hero.totalAreaLabel}</p>
                     <p className="text-white font-bold text-lg">{content.hero.area.split(': ')[1]}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-5 py-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center justify-center">
                      <Icon3D type="calendar" color="#60a5fa" />
                  </div>
                  <div>
                     <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">{content.hero.leaseTermLabel}</p>
                     <p className="text-white font-bold text-lg">{content.hero.lease.split(': ')[1]}</p>
                  </div>
               </div>
            </div>

            {/* CTA */}
            <div className="animate-slide-up pt-2" style={{ animationDelay: '0.5s' }}>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 text-white text-base md:text-lg font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-1"
              >
                <span>{content.hero.cta}</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Image (5 cols) */}
          <div className="lg:col-span-5 relative animate-fade-in mt-8 lg:mt-0 perspective-1000" style={{ animationDelay: '0.6s' }}>
             {/* Decorative elements behind */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }}></div>

             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm group transition-transform duration-500 hover:scale-[1.01]">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-100 pointer-events-none z-20"></div>
                
                {/* Glow effect behind (enhanced) */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-500/30 to-blue-600/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-700"></div>
                
                <div className="relative bg-transparent rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] z-10">
                    {!imgError ? (
                      <>
                        <img
                          src={`${import.meta.env.BASE_URL}masterplan.jpg`}
                          alt="Thanh Tan Master Plan" 
                          className="w-full h-full object-contain p-1 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 opacity-85 hover:opacity-100 mix-blend-lighten"
                          onError={() => setImgError(true)}
                        />
                        
                        {/* Glossy reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      </>
                    ) : (
                       <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500">
                          <MapPin size={48} />
                       </div>
                    )}
                </div>
                
                {/* Overlay Badge on Image - Refined */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/60 backdrop-blur-md p-4 rounded-xl border border-white/10 z-20 transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
                        <p className="text-xs text-brand-300 uppercase font-bold tracking-wider">{content.hero.masterPlanLabel}</p>
                    </div>
                    <p className="text-white text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">{content.hero.masterPlanDesc}</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
