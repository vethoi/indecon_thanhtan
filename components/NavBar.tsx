
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface NavBarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: any;
}

export const NavBar: React.FC<NavBarProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ];

  const navLinks = [
    { key: 'home', href: '#hero' },
    { key: 'fdi', href: '#stats' },
    { key: 'infrastructure', href: '#infra' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Thanh Tan Logo"
              className="h-10 w-auto object-contain opacity-90"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Text Logo (hidden by default if image loads) */}
            <div className="hidden h-10 w-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-brand-500/50 shadow-lg">
              T
            </div>
            
            <div className="flex flex-col items-start justify-center">
              <span className="text-white font-bold text-lg tracking-tight leading-none">THANH TAN</span>
              <span className="text-brand-400 text-xs font-medium tracking-wider leading-none">{content.nav.industrialCluster}</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.key}
                href={link.href}
                className="text-slate-300 hover:text-brand-400 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {content.nav[link.key]}
              </a>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 text-slate-300 hover:text-white bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700 transition-all"
              >
                <Globe size={16} />
                <span className="uppercase text-xs font-bold">{lang}</span>
                <ChevronDown size={14} />
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden animate-fade-in">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors ${lang === l.code ? 'text-brand-400 font-bold' : 'text-slate-400'}`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 animate-fade-in absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {content.nav[link.key]}
              </a>
            ))}
            <div className="flex gap-2 mt-4 border-t border-slate-800 pt-4">
               {languages.map((l) => (
                 <button
                   key={l.code}
                   onClick={() => { setLang(l.code); setIsOpen(false); }}
                   className={`flex-1 py-2 rounded text-center text-sm border ${lang === l.code ? 'bg-brand-900/30 border-brand-500 text-brand-400' : 'border-slate-700 text-slate-400'}`}
                 >
                   {l.flag} {l.code.toUpperCase()}
                 </button>
               ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
