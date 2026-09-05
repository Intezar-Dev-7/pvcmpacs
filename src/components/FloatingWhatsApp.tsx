import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Phone, Building2 } from 'lucide-react';
import { SOCIETY_INFO, BRANCHES } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Default Head Office WhatsApp number
  const defaultNumber = SOCIETY_INFO.whatsappNumber || '919822145678';
  const defaultGreeting = encodeURIComponent(
    `Hello ${SOCIETY_INFO.shortName}, I am visiting your official website and would like to inquire about your services.`
  );

  const openWhatsApp = (phone: string = defaultNumber, customText?: string) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const text = customText ? encodeURIComponent(customText) : defaultGreeting;
    const url = `https://wa.me/${cleanPhone}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end print:hidden">
      {/* Expanded Quick-Chat Card */}
      {isOpen && (
        <div 
          className="mb-3 w-80 sm:w-92 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
          id="whatsapp-chat-card"
        >
          {/* Header */}
          <div className="bg-[#128C7E] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={SOCIETY_INFO.logoUrl}
                    alt="PVC Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = SOCIETY_INFO.logoExternalUrl;
                    }}
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#128C7E] rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">
                  {SOCIETY_INFO.shortName} Helpdesk
                </h4>
                <p className="text-[11px] text-emerald-100 font-medium">
                  Official WhatsApp Support • Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body with Society Greeting */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200/80 shadow-2xs text-xs text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900 mb-1">
                Namaste & Welcome to {SOCIETY_INFO.shortName}! 🙏
              </p>
              <p>
                How can we assist you today? Choose an option below or tap the direct button to chat with our Head Office or nearest branch.
              </p>
              <span className="text-[10px] text-slate-400 block text-right mt-1.5 font-mono">
                Typically replies within 15 mins
              </span>
            </div>

            {/* Quick Topic Chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                Quick Inquiries:
              </p>
              {[
                { label: 'Deposit Schemes & Rates', query: 'Hello, I want to know details and interest rates for Deposit Schemes.' },
                { label: 'Gold & Agricultural Loans', query: 'Hello, I want to inquire about Gold Loan and agricultural loan facilities.' },
                { label: 'Pigmy Daily Collection', query: 'Hello, I would like to request doorstep Pigmy daily collection service.' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => openWhatsApp(defaultNumber, item.query)}
                  className="w-full text-left bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 px-3 py-2 rounded-lg text-xs font-medium text-slate-800 flex items-center justify-between transition-all group"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 transition-transform group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>

            {/* Direct Branch Selectors */}
            <div className="pt-2 border-t border-slate-200">
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Chat with Branch Directly:</span>
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {BRANCHES.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() =>
                      openWhatsApp(
                        branch.mobile,
                        `Hello ${branch.name}, I am contacting you through the official website.`
                      )
                    }
                    className="bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 p-2 rounded-lg text-left transition-colors"
                  >
                    <div className="text-[11px] font-bold text-slate-800 truncate">
                      {branch.name.replace(' Branch', '')}
                    </div>
                    <div className="text-[10px] text-emerald-700 font-medium">
                      {branch.mobile}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => openWhatsApp(defaultNumber)}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.761.88 2.796.88 3.18 0 5.767-2.587 5.767-5.766.001-3.181-2.585-5.767-5.767-5.767zm7.568 5.767c0 4.17-3.399 7.567-7.568 7.567-1.328 0-2.593-.35-3.699-.982l-5.332 1.398 1.424-5.203c-.705-1.163-1.077-2.497-1.077-3.867 0-4.17 3.399-7.567 7.568-7.567 4.168 0 7.567 3.398 7.567 7.568z"/>
              </svg>
              <span>Start Direct WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button with Tight Perimeter Glow */}
      <div className="relative flex items-center">
        {/* Main Floating WhatsApp Button */}
        <button
          onClick={() => {
            // If on mobile or small device, direct toggle card or direct chat
            if (isOpen) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
          aria-label="Contact PVCMPACS on WhatsApp"
          id="floating-whatsapp-btn"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl animate-whatsapp-glow transition-transform duration-200 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        >
          {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-200 rotate-0" />
          ) : (
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-xs" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          )}

          {/* Active green status indicator */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-200 border-2 border-[#25D366]"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
