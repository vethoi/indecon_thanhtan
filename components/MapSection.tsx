
import React, { useState } from 'react';
import { Plane, Anchor, Building2, Map as MapIcon, Navigation, CircleDot, ExternalLink, Maximize2, Layers, Globe } from 'lucide-react';

interface MapSectionProps {
  content: any;
}

export const MapSection: React.FC<MapSectionProps> = ({ content }) => {
  const [viewMode, setViewMode] = useState<'master' | 'google'>('master');

  // Simulated data for distances relative to Thanh Tan / Thai Binh
  const connections = [
    {
      label: content.map.distAirport,
      value1: "~45 km",
      value2: "~110 km",
      icon: <Plane className="w-6 h-6" />,
      color: "text-sky-400"
    },
    {
      label: content.map.distSeaport,
      value1: "~60 km",
      value2: "~50 km",
      icon: <Anchor className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      label: content.map.distCity,
      value1: "~15 km",
      value2: "~100 km",
      icon: <Building2 className="w-6 h-6" />,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="location" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background tech grid */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-brand-900/20 border border-brand-500/30 px-4 py-1.5 rounded-full mb-6">
                        <Navigation size={16} className="text-brand-500" />
                        <span className="text-brand-400 text-sm font-bold uppercase tracking-wider">Location Strategy</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {content.map.title}
                    </h2>
                    <p className="text-xl text-slate-400">
                        {content.map.subtitle}
                    </p>
                </div>
                
                <a 
                    href={content.map.googleMapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full transition-all font-medium whitespace-nowrap"
                >
                    <ExternalLink size={18} />
                    {content.map.btnLabel}
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Map Container - Taking up 8 columns */}
                <div className="lg:col-span-8 relative group h-[600px]">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative w-full h-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                        
                        {/* View Switcher Controls */}
                        <div className="absolute top-4 left-4 z-30 flex gap-1 bg-slate-950/90 backdrop-blur p-1 rounded-xl border border-slate-700 shadow-xl">
                            <button 
                                onClick={() => setViewMode('master')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'master' ? 'bg-brand-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                            >
                                <Layers size={16} />
                                Master Plan
                            </button>
                            <button 
                                onClick={() => setViewMode('google')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'google' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                            >
                                <Globe size={16} />
                                Google Maps
                            </button>
                        </div>

                        {/* Note Badges (Only show on Master Plan) */}
                        {viewMode === 'master' && (
                            <div className="absolute top-4 right-4 z-20 flex gap-2 animate-fade-in">
                                <span className="bg-slate-950/80 backdrop-blur text-xs text-slate-300 px-3 py-1 rounded border border-slate-800 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div> CT.08
                                </span>
                                <span className="bg-slate-950/80 backdrop-blur text-xs text-slate-300 px-3 py-1 rounded border border-slate-800 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div> CT.39
                                </span>
                            </div>
                        )}

                        {/* Content Area */}
                        <div className="w-full h-full bg-slate-800 relative">
                             {viewMode === 'master' ? (
                                 <>
                                    <img 
                                        key={content.map.mapImage} 
                                        src={content.map.mapImage} 
                                        alt="Thanh Tan Master Plan Map" 
                                        className="w-full h-full object-cover transition-transform duration-700 animate-fade-in"
                                        onError={(e) => {
                                          // Fallback if even the placeholder fails
                                          e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
                                        <div className="bg-slate-950/80 p-2 rounded text-white/50 border border-slate-700">
                                            <Maximize2 size={20} />
                                        </div>
                                    </div>
                                    {/* Texture Overlay */}
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                                    
                                    {/* Fallback Text if image fails hidden */}
                                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                                        <span className="text-slate-600">Master Plan Loading...</span>
                                    </div>
                                 </>
                             ) : (
                                <iframe 
                                    // Changed t=h (Hybrid) to t=k (Satellite) for a more premium industrial look
                                    // Added language param &hl=en/vi depending on context if needed, but standard is fine
                                    src="https://maps.google.com/maps?q=C%E1%BB%A5m%20c%C3%B4ng%20nghi%E1%BB%87p%20Thanh%20T%C3%A2n,%20Th%C3%A1i%20B%C3%ACnh&t=k&z=14&ie=UTF8&iwloc=&output=embed"
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0, filter: 'contrast(1.1) saturate(0.8) brightness(0.9)' }}
                                    className="w-full h-full animate-fade-in"
                                    allowFullScreen 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                             )}
                        </div>
                    </div>
                </div>

                {/* Connectivity Panel - Taking up 4 columns */}
                <div className="lg:col-span-4 space-y-4 h-full flex flex-col justify-center">
                    {connections.map((item, idx) => (
                        <div key={idx} className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all hover:bg-slate-800 hover:translate-x-2 duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 ${item.color}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wide">
                                    {item.label}
                                </h3>
                            </div>
                            <div className="flex justify-between items-end border-t border-slate-800 pt-4">
                                <div className="text-right w-full flex justify-between">
                                    <span className="text-2xl font-bold text-white">{item.value1}</span>
                                    <span className="text-slate-500 text-sm self-center">/ {item.value2}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="bg-gradient-to-br from-brand-900/50 to-slate-900 p-6 rounded-2xl border border-brand-500/20 mt-4">
                        <h4 className="text-brand-400 font-bold flex items-center gap-2 mb-3">
                            <MapIcon size={18} />
                            Key Access Routes
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-center gap-2">
                                <CircleDot size={12} className="text-brand-500" />
                                Connects to CT.08 (Thai Binh - Hai Phong)
                            </li>
                             <li className="flex items-center gap-2">
                                <CircleDot size={12} className="text-brand-500" />
                                National Highway 39A upgraded
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
