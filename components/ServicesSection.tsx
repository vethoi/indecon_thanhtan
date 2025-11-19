import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

interface ServicesSectionProps {
  content: any;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ content }) => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-900 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Services List */}
          <div className="lg:w-1/3">
            <h2 className="text-brand-400 font-bold tracking-widest uppercase mb-2 text-sm">{content.services.supportLabel}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{content.services.title}</h3>
            <p className="text-xl text-slate-400 mb-8">{content.services.subtitle}</p>
            
            <ul className="space-y-4">
              {content.services.list.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-500 mt-1 shrink-0" size={20} />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div className="lg:w-2/3">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TimelineCard 
                   days="30" 
                   title={content.services.steps.investCert} 
                   variant="brand"
                   fastTrackLabel={content.services.fastTrack}
                   daysLabel={content.services.days}
                />
                <TimelineCard 
                   days="60" 
                   title={content.services.steps.constructPermit} 
                   variant="blue"
                   fastTrackLabel={content.services.fastTrack}
                   daysLabel={content.services.days}
                />
                <SimpleCard title={content.services.steps.envPermit} />
                <SimpleCard title={content.services.steps.firePermit} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ days, title, variant, fastTrackLabel, daysLabel }: { days: string, title: string, variant: 'brand' | 'blue', fastTrackLabel: string, daysLabel: string }) => {
    const isBrand = variant === 'brand';
    return (
        <div className={`p-6 rounded-2xl border ${isBrand ? 'bg-brand-900/10 border-brand-500/30' : 'bg-blue-900/10 border-blue-500/30'} relative overflow-hidden`}>
            <div className="absolute top-0 right-0 p-4 opacity-20">
                <Clock size={64} className={isBrand ? 'text-brand-500' : 'text-blue-500'} />
            </div>
            <div className="relative z-10">
                <span className={`text-xs font-bold uppercase tracking-wider ${isBrand ? 'text-brand-400' : 'text-blue-400'}`}>
                    {fastTrackLabel}
                </span>
                <div className="flex items-baseline gap-1 my-2">
                    <span className="text-4xl font-bold text-white">{days}</span>
                    <span className="text-slate-400">{daysLabel}</span>
                </div>
                <p className="text-slate-200 font-medium border-t border-slate-700/50 pt-3 mt-2">
                    {title}
                </p>
            </div>
        </div>
    )
}

const SimpleCard = ({ title }: { title: string }) => (
    <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900 flex items-center justify-center text-center hover:border-slate-600 transition-colors">
        <p className="text-slate-300 font-medium">{title}</p>
    </div>
)
