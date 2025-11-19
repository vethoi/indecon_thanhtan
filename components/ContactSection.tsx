import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

interface ContactSectionProps {
  content: any;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  return (
    <section id="contact" className="bg-slate-900 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Info */}
          <div>
            <h2 className="text-brand-400 font-bold tracking-widest uppercase mb-2 text-sm">Get in Touch</h2>
            <h3 className="text-4xl font-bold text-white mb-6">{content.contact.title}</h3>
            <p className="text-slate-400 mb-8 italic text-lg">"{content.contact.footerQuote}"</p>

            <div className="space-y-6">
              <ContactItem icon={<Phone />} text={content.contact.phone} href={`tel:${content.contact.phone}`} />
              <ContactItem icon={<Mail />} text={content.contact.email} href={`mailto:${content.contact.email}`} />
              <ContactItem icon={<MapPin />} text={content.contact.address} />
            </div>

            <div className="mt-12">
               <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest">Socials</p>
               <div className="flex gap-4">
                  <SocialIcon icon={<Facebook size={20} />} />
                  <SocialIcon icon={<Linkedin size={20} />} />
                  <SocialIcon icon={<Twitter size={20} />} />
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{content.contact.formName}</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{content.contact.formEmail}</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="name@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{content.contact.formMessage}</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="..."></textarea>
              </div>
              <button type="button" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-brand-600/20">
                {content.contact.formSubmit}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Indecon Group - Thanh Tan Industrial Cluster. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, text, href }: { icon: any, text: string, href?: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-400">
      {icon}
    </div>
    {href ? (
      <a href={href} className="text-white hover:text-brand-400 transition-colors text-lg font-medium">{text}</a>
    ) : (
      <span className="text-white text-lg font-medium">{text}</span>
    )}
  </div>
);

const SocialIcon = ({ icon }: { icon: any }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all">
    {icon}
  </a>
)
