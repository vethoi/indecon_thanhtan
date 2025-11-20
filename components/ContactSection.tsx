import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

interface ContactSectionProps {
  content: any;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  return (
    <section id="contact" className="bg-slate-900 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto text-center mb-24">
          <h2 className="text-brand-400 font-bold tracking-widest uppercase mb-2 text-sm">Get in Touch</h2>
          <h3 className="text-4xl font-bold text-white mb-6">{content.contact.title}</h3>
          <p className="text-slate-400 mb-12 italic text-lg">"{content.contact.footerQuote}"</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ContactItem icon={<Phone />} text={content.contact.phone} href={`tel:${content.contact.phone}`} />
            <ContactItem icon={<Mail />} text={content.contact.email} href={`mailto:${content.contact.email}`} />
            <ContactItem icon={<MapPin />} text={content.contact.address} />
          </div>

          <div className="mt-12">
            <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest">Socials</p>
            <div className="flex gap-4 justify-center">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
            </div>
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
