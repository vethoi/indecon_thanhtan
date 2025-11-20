
import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, MapPin, Users, Globe2, Building, ArrowUpRight } from 'lucide-react';

interface StatsSectionProps {
  content: any;
}

// Custom Hook for counting up numbers
const useCountUp = (end: number, duration: number = 2000, trigger: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return count;
};

export const StatsSection: React.FC<StatsSectionProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple timeout to trigger animation after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  // Extract numeric values roughly for animation
  const fdiValue = 4; // 4 Billion
  const targetValue = 1.2; // 1.2 Billion

  // Counters
  const fdiCount = useCountUp(40, 2000, isVisible); // 4.0 * 10 for smooth decimal
  const targetCount = useCountUp(12, 2000, isVisible); // 1.2 * 10

  return (
    <section id="stats" ref={sectionRef} className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Text & Numbers */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-brand-500"></span>
              <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm">{content.stats.growthEngine}</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {content.stats.fdiTitle}
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed border-l-2 border-slate-800 pl-6">
              {content.stats.fdiDesc}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="group p-6 bg-slate-900/80 backdrop-blur rounded-2xl border border-slate-800 hover:border-brand-500/50 transition-all duration-500 shadow-lg hover:shadow-brand-900/20">
                <div className="flex justify-between items-start mb-2">
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{content.stats.fdiLabel}</p>
                   <ArrowUpRight size={16} className="text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white flex items-baseline gap-1">
                  <span className="text-brand-500">&gt;</span>
                  {(fdiCount / 10).toFixed(1)}
                  <span className="text-lg text-slate-500 font-medium">B USD</span>
                </p>
              </div>
              <div className="group p-6 bg-slate-900/80 backdrop-blur rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:shadow-blue-900/20">
                 <div className="flex justify-between items-start mb-2">
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{content.stats.targetLabel}</p>
                   <ArrowUpRight size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white flex items-baseline gap-1">
                  {(targetCount / 10).toFixed(1)}
                  <span className="text-lg text-slate-500 font-medium">B USD</span>
                </p>
              </div>
            </div>
            
            {/* Strategic Investors */}
            <div>
               <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
                 <div className="w-1 h-4 bg-brand-500 rounded-full"></div>
                 {content.stats.companiesTitle}
               </h4>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                 {[
                   { name: 'Thaco Auto', logo: `${import.meta.env.BASE_URL}logos/logo-thaco-auto-2.webp` },
                   { name: 'Mercedes-Benz', logo: `${import.meta.env.BASE_URL}logos/logo-mb.png` },
                   { name: 'Tokyo Gas', logo: `${import.meta.env.BASE_URL}logos/logo_tokyogas.svg`, needsGlow: true },
                   { name: 'Pegavision', logo: `${import.meta.env.BASE_URL}logos/download.webp` },
                   { name: 'Compal', logo: `${import.meta.env.BASE_URL}logos/compal-logo_green.svg` },
                   { name: 'Geely', logo: `${import.meta.env.BASE_URL}logos/geely-logo_1.png` }
                 ].map((company, idx) => (
                   <div 
                    key={idx} 
                    className="group relative border border-slate-700/30 rounded-2xl p-6 hover:border-brand-400/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/20 aspect-[3/2]"
                    style={{ animationDelay: `${idx * 50}ms` }}
                   >
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center h-full">
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className={`max-w-[140px] max-h-full object-contain transition-all duration-300 group-hover:scale-105 ${
                            company.needsGlow ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : ''
                          }`}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-300 font-bold text-base">${company.name}</span>`;
                          }}
                        />
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Right: Visual Chart & Cards */}
          <div className="relative">
             {/* Chart Container */}
             <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-6 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl group-hover:bg-brand-500/10 transition-all duration-700"></div>
                 
                 <div className="flex justify-between items-end mb-8 relative z-10">
                    <div>
                        <p className="text-slate-400 font-medium">{content.stats.annualGrowth}</p>
                        <h3 className="text-2xl font-bold text-white">{content.stats.fdiCapital}</h3>
                    </div>
                    <div className="text-right">
                        <p className="text-brand-500 font-bold text-xl flex items-center justify-end gap-1">
                            {content.stats.growthRate} <TrendingUp size={20}/>
                        </p>
                        <p className="text-slate-500 text-sm">{content.stats.vsPrevious}</p>
                    </div>
                 </div>

                 {/* FDI Chart - Bar Chart */}
                 <div className="h-80 flex items-end justify-between gap-4 relative z-10 pl-4 pb-4 border-l-2 border-b-2 border-slate-700/50">
                    {[
                      { year: '2020', value: 0.3, height: '27%', color: 'bg-slate-600', delay: '0ms' },
                      { year: '2021', value: 0.68, height: '60%', color: 'bg-slate-500', delay: '100ms' },
                      { year: '2022', value: 0.68, height: '60%', color: 'bg-slate-400', delay: '200ms' },
                      { year: '2023', value: 2.79, height: '100%', color: 'bg-brand-500', isPeak: true, delay: '300ms' },
                      { year: '2024', value: 1.16, height: '85%', color: 'bg-brand-600/80', delay: '400ms' },
                      { year: '2025', value: 1.2, height: '87%', color: 'bg-slate-700/40', isTarget: true, delay: '500ms' }
                    ].map((bar) => (
                      <div key={bar.year} className="relative flex-1 max-w-[80px] h-full flex items-end group/bar">
                        {/* Actual Bar */}
                        <div 
                          className={`w-full ${bar.color} rounded-t-sm transition-all duration-1000 ease-out ${
                            bar.isTarget ? 'border-2 border-dashed border-slate-600' : ''
                          } ${bar.isPeak ? 'shadow-[0_0_20px_rgba(34,197,94,0.5)]' : ''}`}
                          style={{ 
                            height: isVisible ? bar.height : '0%',
                            transitionDelay: bar.delay
                          }}
                        >
                          {bar.isPeak && <div className="absolute inset-0 bg-white/10 animate-pulse rounded-t-sm"></div>}
                        </div>
                        
                        {/* Year label */}
                        <div className={`absolute -top-7 left-1/2 -translate-x-1/2 text-[11px] font-bold whitespace-nowrap ${
                          bar.isPeak ? 'text-brand-500' : 'text-slate-400'
                        }`}>
                          {bar.year}
                        </div>
                        
                        {/* Value label with currency unit */}
                        <div className={`absolute ${bar.isPeak ? 'bottom-3' : 'bottom-1'} left-1/2 -translate-x-1/2 text-xs font-bold text-white whitespace-nowrap ${
                          !bar.isPeak ? 'opacity-0 group-hover/bar:opacity-100' : ''
                        } transition-opacity drop-shadow-lg`}>
                          {bar.value} {content.stats.currencyUnit}
                        </div>
                      </div>
                    ))}
                 </div>
             </div>

             {/* Feature Badges */}
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/80 backdrop-blur p-5 rounded-2xl border border-slate-800 hover:border-brand-500/30 hover:bg-slate-800/80 transition-all flex items-center gap-4 shadow-lg">
                    <div className="w-10 h-10 rounded-full bg-brand-900/30 flex items-center justify-center text-brand-500">
                        <MapPin size={20} />
                    </div>
                    <span className="text-sm font-bold text-white">{content.stats.badges.location}</span>
                </div>
                <div className="bg-slate-900/80 backdrop-blur p-5 rounded-2xl border border-slate-800 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all flex items-center gap-4 shadow-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500">
                        <Users size={20} />
                    </div>
                    <span className="text-sm font-bold text-white">{content.stats.badges.labor}</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
