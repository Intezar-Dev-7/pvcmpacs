import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  ChevronRight,
  Clock,
  Heart
} from 'lucide-react';
import { SOCIETY_INFO } from '../data';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Required Box from Page 3 sketch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        
        {/* Society Registration & Estd. Header Strip */}
        <div className="mb-8 pb-4 border-b border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <span className="text-emerald-400 font-medium">
            Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd
          </span>
          <span>Reg. No: {SOCIETY_INFO.regNumber} • Estd. {SOCIETY_INFO.servingSince}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Logo & Society Name */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-slate-700 flex-shrink-0 shadow-sm p-1 overflow-hidden">
                <img
                  src={SOCIETY_INFO.logoUrl}
                  alt="PVCMPACS Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = SOCIETY_INFO.logoExternalUrl;
                  }}
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  PVCMPACS
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold tracking-wider uppercase">
                  Primary Agriculture Co-op
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd. Serving our farming and village community since 1997 with unwavering trust and transparency.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>{SOCIETY_INFO.workingHours.split('|')[0]}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', id: 'footer-home', target: 'home' },
                { label: 'BOD (Board of Directors)', id: 'footer-bod', target: 'bod' },
                { label: 'Branches', id: 'footer-branches', target: 'branches' },
                { label: 'Services', id: 'footer-services', target: 'services' },
                { label: 'Social Activities', id: 'footer-social', target: 'social-activities' },
                { label: 'Contact Us', id: 'footer-contact', target: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.target)}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group text-left"
                    id={`footer-btn-${link.id}`}
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us (Page 3 sketch: Address, Phone, Email) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">Address:</strong>
                  {SOCIETY_INFO.headOfficeAddress}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Phone:</strong>
                  <a href={`tel:${SOCIETY_INFO.phone}`} className="hover:text-emerald-400">
                    {SOCIETY_INFO.phone}
                  </a>
                  <span className="mx-1 text-slate-600">/</span>
                  <a href={`tel:${SOCIETY_INFO.altPhone}`} className="hover:text-emerald-400">
                    {SOCIETY_INFO.altPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Email:</strong>
                  <a href={`mailto:${SOCIETY_INFO.email}`} className="hover:text-emerald-400 break-all text-emerald-300">
                    {SOCIETY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright bar (as handwritten on Page 3) */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            Copyright © 2026 Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd | Developed by{' '}
            <span className="text-slate-300 font-medium">PVCMPACS Technical Cell</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 text-xs transition-colors"
            title="Scroll to Top"
            id="footer-back-to-top-btn"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
