import React from 'react';
import { Zap, Droplets, ShieldCheck, Sun, Coins, Building2, Trash2 } from 'lucide-react';

interface InfrastructureSectionProps {
  content: any;
}

export const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({ content }) => {
  return (
    <section id="infra" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-400 font-bold tracking-widest uppercase mb-2 text-sm">Infrastructure & Cost</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {content.overview.infraTitle}
          </h3>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{content.overview.infraDesc}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Land Price */}
          <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800 hover:border-brand-600/50 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-600/20 rounded-full blur-2xl group-hover:bg-brand-600/40 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-900/30 rounded-2xl flex items-center justify-center text-brand-500 mb-6">
                <Coins size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{content.pricing.title}</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm">Land Lease Price</p>
                  <p className="text-2xl font-bold text-brand-400">{content.pricing.landPrice.split(': ')[1]}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Annual Tax</p>
                  <p className="text-lg font-semibold text-white">{content.pricing.landTax.split(': ')[1]}</p>
                </div>
              </div>
            </div>
          </div>

           {/* Tax Incentive */}
           <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800 hover:border-blue-600/50 transition-colors relative overflow-hidden group md:col-span-2">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition-all"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                 <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                    <Building2 size={28} />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-white mb-2">CIT Incentives (Corporate Income Tax)</h4>
                    <div className="flex flex-col sm:flex-row gap-6 mt-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full border-4 border-green-500 flex items-center justify-center text-white font-bold bg-slate-900">0%</div>
                            <span className="text-slate-300">{content.pricing.taxIncentive1}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center text-white font-bold bg-slate-900">50%</div>
                            <span className="text-slate-300">{content.pricing.taxIncentive2}</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Utilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <UtilityCard 
              icon={<Zap />} 
              title={content.utilities.electricity} 
              desc={content.utilities.electricityDesc}
              color="yellow"
           />
           <UtilityCard 
              icon={<Droplets />} 
              title={content.utilities.water} 
              desc={content.utilities.waterPrice}
              color="cyan"
           />
           <UtilityCard 
              icon={<Trash2 />} 
              title={content.utilities.waste} 
              desc={content.utilities.wastePrice}
              color="rose"
           />
            <UtilityCard 
              icon={<ShieldCheck />} 
              title={content.utilities.security} 
              desc="Professional Service"
              color="emerald"
           />
        </div>
      </div>
    </section>
  );
};

const UtilityCard = ({ icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) => {
  const colors: any = {
    yellow: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    rose: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  };

  return (
    <div className={`p-6 rounded-2xl border bg-slate-950/50 backdrop-blur flex flex-col items-start hover:bg-slate-800 transition-all ${colors[color]}`}>
      <div className="mb-4">{icon}</div>
      <h4 className="text-lg font-bold text-slate-200 mb-1">{title}</h4>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  )
}
