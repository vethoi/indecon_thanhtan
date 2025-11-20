
import React, { useState } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { MapSection } from './components/MapSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';

const App: React.FC = () => {
  // Default language is Vietnamese as it's a Vietnam based project, but code supports all 3.
  // Using 'en' as default.
  const [lang, setLang] = useState<Language>('en');
  
  const content = CONTENT[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
      <NavBar lang={lang} setLang={setLang} content={content} />
      
      <main>
        <Hero content={content} />
        <StatsSection content={content} />
        
        {/* Map Section with Strategic Location Data */}
        <MapSection content={content} />

        <div className="relative">
            {/* Visual Separator */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 pointer-events-none h-24 z-10" />
            <InfrastructureSection content={content} />
        </div>
        <ServicesSection content={content} />
        <ContactSection content={content} />
      </main>
      
      {/* Floating Action Button for Mobile (Call) */}
      <a 
        href={`tel:${content.contact.phone}`}
        className="md:hidden fixed bottom-6 right-6 bg-brand-600 text-white p-4 rounded-full shadow-2xl shadow-brand-600/40 z-50 animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
    </div>
  );
};

export default App;
