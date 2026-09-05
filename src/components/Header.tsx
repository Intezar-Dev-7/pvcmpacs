import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';
import { SOCIETY_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestService?: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeSection, 
  onNavigate 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header at the top of the page
      if (currentScrollY <= 30) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scroll Down -> Hide header and close mobile menu
      if (currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      } 
      // Scroll Up -> Show header
      else if (currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation options: Home, BOD, Branches, Services, Social Activities, Contact
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'BOD', id: 'bod' },
    { label: 'Branches', id: 'branches' },
    { label: 'Services', id: 'services' },
    { label: 'Social Activities', id: 'social-activities' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setIsVisible(true);
  };

  return (
    <header 
      className={`fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className={`bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_8px_32px_0_rgba(15,23,42,0.09),0_1px_2px_0_rgba(15,23,42,0.04)] ring-1 ring-slate-900/5 transition-all duration-200 ${
          mobileMenuOpen ? 'rounded-2xl' : 'rounded-2xl sm:rounded-full'
        } px-3.5 sm:px-6`}
      >
        <div className="py-2 px-0.5 sm:py-2.5 lg:py-0 lg:h-18 flex flex-col justify-center">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo & Society Name */}
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none min-w-0"
              id="header-logo-btn"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 rounded-lg sm:rounded-xl bg-white/95 flex items-center justify-center shadow-2xs border border-slate-200/80 overflow-hidden flex-shrink-0 group-hover:border-emerald-600 transition-all p-0.5 sm:p-1">
                <img
                  src={SOCIETY_INFO.logoUrl}
                  alt="PVC Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = SOCIETY_INFO.logoExternalUrl;
                  }}
                />
              </div>

              <div className="min-w-0">
                <span className="font-extrabold text-sm sm:text-base lg:text-lg text-slate-900 tracking-tight block leading-tight group-hover:text-emerald-800 transition-colors">
                  PVCMPACS
                </span>
                {/* Desktop subtext shown inline with title */}
                <p className="hidden lg:block text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">
                  {SOCIETY_INFO.fullName}
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                      isActive 
                        ? 'bg-emerald-100/90 text-emerald-800 font-bold border border-emerald-200 shadow-2xs' 
                        : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100/70'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button Toggle */}
            <div className="flex items-center lg:hidden flex-shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>

          {/* Subtext brought down for mobile view */}
          <div className="lg:hidden pt-1.5 pb-0.5 mt-1 border-t border-slate-100/90 text-slate-500">
            <p className="text-[10px] sm:text-[11px] font-medium truncate leading-tight">
              {SOCIETY_INFO.fullName}
            </p>
          </div>
        </div>

        {/* Mobile Drawer Navigation (Encapsulated in Glass Card) */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/70 pt-2.5 pb-2.5 space-y-1">
            <div className="flex items-center gap-2.5 p-2 mb-2 bg-slate-50/80 rounded-xl border border-slate-200/70">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 overflow-hidden flex items-center justify-center p-0.5 flex-shrink-0 shadow-2xs">
                <img
                  src={SOCIETY_INFO.logoUrl}
                  alt="PVC Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = SOCIETY_INFO.logoExternalUrl;
                  }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-slate-900 leading-tight truncate">PVCMPACS</div>
                <div className="text-[10px] text-emerald-700 font-medium truncate">Serving Since 1997</div>
              </div>
            </div>

            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-emerald-100/80 text-emerald-800 font-bold' 
                      : 'text-slate-700 hover:bg-slate-100/70'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
