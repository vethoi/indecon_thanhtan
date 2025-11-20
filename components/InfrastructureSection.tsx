
import React from 'react';
import { Coins, Building2, PieChart } from 'lucide-react';
import { Icon3D } from './3d/Icon3D';

interface InfrastructureSectionProps {
  content: any;
}

export const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({ content }) => {
  return (
    <section id="infra" className="py-24 bg-slate-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-brand-500 font-bold tracking-widest uppercase text-xs bg-brand-900/20 px-3 py-1 rounded-full border border-brand-900/50">{content.infra.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            {content.overview.infraTitle}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{content.overview.infraDesc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Pricing Cards (Bento Grid Style) - Left Side */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Land Price - Featured */}
                <div className="group relative md:col-span-1 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-[2rem] p-1 border border-slate-700 hover:border-brand-500/50 transition-colors duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-brand-500/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-[2rem]"></div>
                    <div className="relative h-full bg-slate-950/60 rounded-[1.8rem] p-8 flex flex-col justify-between overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-900/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-6 border border-brand-500/20 group-hover:scale-110 transition-transform">
                                <Coins size={28} />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">{content.pricing.title}</h4>
                            <div className="w-12 h-1 bg-brand-500 rounded-full mb-6"></div>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                                <p className="text-slate-400 text-xs font-bold uppercase mb-1">{content.infra.landLeasePriceLabel}</p>
                                <p className="text-3xl font-bold text-white">{content.pricing.landPrice.split(': ')[1]}</p>
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm mb-1">{content.infra.annualTaxLabel}</p>
                                <p className="text-lg font-semibold text-brand-400">{content.pricing.landTax.split(': ')[1]}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tax Incentive - Vertical on Mobile, stacked */}
                <div className="group relative md:col-span-1 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-[2rem] p-1 border border-slate-700 hover:border-blue-500/50 transition-colors duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-[2rem]"></div>
                    <div className="relative h-full bg-slate-950/60 rounded-[1.8rem] p-8 flex flex-col overflow-hidden">
                        
                        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                        
                        <div className="relative z-10 mb-auto">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
                                <Building2 size={28} />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">{content.infra.citIncentivesLabel}</h4>
                            <p className="text-slate-400 text-sm mb-6">{content.infra.citIncentivesDesc}</p>
                        </div>

                        <div className="space-y-3 w-full relative z-10">
                            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 p-4 rounded-xl border border-slate-700">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-white font-bold text-xl">0%</span>
                                    <span className="text-xs text-green-400 bg-green-900/30 px-2 py-0.5 rounded">{content.infra.years2}</span>
                                </div>
                                <p className="text-xs text-slate-400">{content.pricing.taxIncentive1.split(' (')[0]}</p>
                            </div>
                            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 p-4 rounded-xl border border-slate-700">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-white font-bold text-xl">50%</span>
                                    <span className="text-xs text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded">{content.infra.years4}</span>
                                </div>
                                <p className="text-xs text-slate-400">{content.pricing.taxIncentive2.split(' (')[0]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Land Use Structure Chart (New Feature) - Right Side */}
            <div className="lg:col-span-4">
                <div className="h-full bg-slate-950/60 backdrop-blur-md border border-slate-800 rounded-[2rem] p-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors shadow-xl">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-900/20 rounded-lg text-purple-400">
                            <PieChart size={20} />
                        </div>
                        <h4 className="text-xl font-bold text-white">{content.infra.landUsageLabel}</h4>
                     </div>

                     {/* CSS Donut Chart */}
                     <div className="relative w-48 h-48 mx-auto mb-8">
                         {/* Conic Gradient for Chart Segments */}
                         <div className="w-full h-full rounded-full" style={{
                             background: `conic-gradient(
                                #9333ea 0% 75%, 
                                #22c55e 75% 87.5%, 
                                #3b82f6 87.5% 100%
                             )`
                         }}></div>
                         {/* Inner Circle for Donut Effect */}
                         <div className="absolute inset-4 bg-slate-950 rounded-full flex items-center justify-center flex-col">
                             <span className="text-slate-400 text-xs uppercase font-bold">{content.infra.totalLabel}</span>
                             <span className="text-white text-xl font-bold">65.47 ha</span>
                         </div>
                         {/* Hover glow effect */}
                         <div className="absolute inset-0 rounded-full bg-purple-500 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                     </div>

                     {/* Legend */}
                     <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-purple-600"></span>
                                <span className="text-slate-300">{content.infra.industrialLandLabel}</span>
                            </div>
                            <span className="text-white font-bold">75%</span>
                        </div>
                         <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                <span className="text-slate-300">{content.infra.greenWaterLabel}</span>
                            </div>
                            <span className="text-white font-bold">12.5%</span>
                        </div>
                         <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                                <span className="text-slate-300">{content.infra.trafficTechLabel}</span>
                            </div>
                            <span className="text-white font-bold">12.5%</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        {/* Utilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           <UtilityCard 
              icon={<Icon3D type="electricity" color="#facc15" />} 
              title={content.utilities.electricity} 
              desc={content.utilities.electricityDesc}
              color="yellow"
           />
           <UtilityCard 
              icon={<Icon3D type="water" color="#22d3ee" />} 
              title={content.utilities.water} 
              desc={content.utilities.waterPrice}
              color="cyan"
           />
           <UtilityCard 
              icon={<Icon3D type="waste" color="#fb7185" />} 
              title={content.utilities.waste} 
              desc={content.utilities.wastePrice}
              color="rose"
           />
            <UtilityCard 
              icon={<Icon3D type="security" color="#34d399" />} 
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
    yellow: 'text-yellow-400 group-hover:border-yellow-400/40 group-hover:shadow-yellow-900/20',
    cyan: 'text-cyan-400 group-hover:border-cyan-400/40 group-hover:shadow-cyan-900/20',
    rose: 'text-rose-400 group-hover:border-rose-400/40 group-hover:shadow-rose-900/20',
    emerald: 'text-emerald-400 group-hover:border-emerald-400/40 group-hover:shadow-emerald-900/20',
  };

  return (
    <div className={`group p-6 rounded-2xl border border-slate-800 bg-slate-950/50 backdrop-blur flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:shadow-xl ${colors[color]}`}>
      <div className="mb-4 p-0 rounded-xl bg-transparent border-none group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">{title}</h4>
      <p className="text-sm text-slate-400 leading-snug">{desc}</p>
    </div>
  )
}
