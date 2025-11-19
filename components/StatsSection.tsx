
import React from 'react';
import { TrendingUp, MapPin, Users, Globe2, Building } from 'lucide-react';

interface StatsSectionProps {
  content: any;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ content }) => {
  return (
    <section id="stats" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Text Content */}
          <div>
            <h2 className="text-brand-400 font-bold tracking-widest uppercase mb-2 text-sm">Growth Engine</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {content.stats.fdiTitle}
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {content.stats.fdiDesc}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
                <p className="text-slate-500 text-sm font-bold uppercase mb-2">FDI 2023-2024</p>
                <p className="text-4xl font-bold text-brand-500">{content.stats.fdiValue}</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
                <p className="text-slate-500 text-sm font-bold uppercase mb-2">Target 2025</p>
                <p className="text-4xl font-bold text-white">{content.stats.targetValue}</p>
              </div>
            </div>
            
            {/* Client List Grid */}
            <div className="mt-10">
               <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">{content.stats.companiesTitle}</h4>
               <div className="flex flex-wrap gap-3">
                 {content.stats.companies.map((company: string, idx: number) => (
                   <div key={idx} className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-slate-300 font-medium text-sm hover:border-brand-500 hover:text-brand-400 transition-colors cursor-default">
                      <Building size={14} />
                      {company}
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Right: Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
               <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 transform hover:-translate-y-2 transition duration-300">
                  <div className="w-12 h-12 bg-brand-900/50 rounded-full flex items-center justify-center text-brand-400 mb-4">
                    <MapPin size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{content.stats.badges.location}</h4>
               </div>
               <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 transform hover:-translate-y-2 transition duration-300">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center text-blue-400 mb-4">
                    <TrendingUp size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{content.stats.badges.incentives}</h4>
               </div>
            </div>
            <div className="space-y-4">
               <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 transform hover:-translate-y-2 transition duration-300">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center text-purple-400 mb-4">
                    <Users size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{content.stats.badges.labor}</h4>
               </div>
               <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 transform hover:-translate-y-2 transition duration-300">
                  <div className="w-12 h-12 bg-amber-900/50 rounded-full flex items-center justify-center text-amber-400 mb-4">
                    <Globe2 size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{content.stats.badges.global}</h4>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
