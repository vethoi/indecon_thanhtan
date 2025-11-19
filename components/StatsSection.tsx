
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
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
              <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm">Growth Engine</h2>
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
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">FDI 2023-2024</p>
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
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Target 2025</p>
                   <ArrowUpRight size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white flex items-baseline gap-1">
                  {(targetCount / 10).toFixed(1)}
                  <span className="text-lg text-slate-500 font-medium">B USD</span>
                </p>
              </div>
            </div>
            
            {/* Client List Grid */}
            <div>
               <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Strategic Investors</h4>
               <div className="flex flex-wrap gap-3">
                 {content.stats.companies.map((company: string, idx: number) => (
                   <div 
                    key={idx} 
                    className="group flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-full text-slate-300 font-medium text-sm hover:bg-slate-800 hover:border-brand-500 hover:text-white transition-all cursor-default hover:-translate-y-0.5"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                   >
                      <Building size={14} className="text-slate-500 group-hover:text-brand-500 transition-colors" />
                      {company}
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
                        <p className="text-slate-400 font-medium">Annual Growth</p>
                        <h3 className="text-2xl font-bold text-white">FDI Capital</h3>
                    </div>
                    <div className="text-right">
                        <p className="text-brand-500 font-bold text-xl flex items-center justify-end gap-1">
                            +25.4% <TrendingUp size={20}/>
                        </p>
                        <p className="text-slate-500 text-sm">vs previous period</p>
                    </div>
                 </div>

                 {/* Custom CSS/SVG Chart */}
                 <div className="h-64 flex items-end justify-between gap-4 relative z-10 pl-2 pb-2 border-l border-b border-slate-700/50">
                    {/* Bar 1 */}
                    <div className="w-full bg-slate-800/50 rounded-t-lg relative group/bar overflow-hidden">
                        <div 
                            className={`absolute bottom-0 w-full bg-gradient-to-t from-slate-600 to-slate-500 transition-all duration-1000 ease-out ${isVisible ? 'h-[40%]' : 'h-0'}`}
                        ></div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 opacity-0 group-hover/bar:opacity-100 transition-opacity">2022</div>
                    </div>
                    {/* Bar 2 */}
                    <div className="w-full bg-slate-800/50 rounded-t-lg relative group/bar overflow-hidden">
                        <div 
                             className={`absolute bottom-0 w-full bg-gradient-to-t from-brand-700 to-brand-600 transition-all duration-1000 ease-out delay-100 ${isVisible ? 'h-[85%]' : 'h-0'}`}
                        ></div>
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-brand-500 opacity-0 group-hover/bar:opacity-100 transition-opacity">2023</div>
                    </div>
                    {/* Bar 3 */}
                    <div className="w-full bg-slate-800/50 rounded-t-lg relative group/bar overflow-hidden">
                         {/* Pulse Effect on top bar */}
                        <div className="absolute top-0 left-0 w-full h-full bg-white/10 animate-pulse z-20"></div>
                        <div 
                             className={`absolute bottom-0 w-full bg-gradient-to-t from-brand-600 to-brand-400 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'h-[100%]' : 'h-0'}`}
                        ></div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-100">2024</div>
                    </div>
                     {/* Bar 4 (Target) */}
                     <div className="w-full bg-slate-800/30 rounded-t-lg relative group/bar border border-dashed border-slate-600">
                        <div 
                             className={`absolute bottom-0 w-full bg-gradient-to-t from-slate-700 to-slate-600 opacity-50 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'h-[60%]' : 'h-0'}`}
                        ></div>
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400">2025</div>
                    </div>
                 </div>
             </div>

             {/* Feature Badges */}
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:bg-slate-800 transition-colors flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-900/30 flex items-center justify-center text-brand-500">
                        <MapPin size={20} />
                    </div>
                    <span className="text-sm font-bold text-white">{content.stats.badges.location}</span>
                </div>
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:bg-slate-800 transition-colors flex items-center gap-4">
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
