import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  HeartHandshake, 
  ArrowRight, 
  PiggyBank, 
  BadgePercent, 
  Landmark, 
  CheckCircle,
  ScrollText
} from 'lucide-react';
import { SOCIETY_INFO, DEPOSIT_SCHEMES, LOAN_SCHEMES, UTILITY_SERVICES } from '../data';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
  onRequestService: (serviceName?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onNavigate, 
  onRequestService 
}) => {
  return (
    <section id="about" className="bg-white py-12 sm:py-16 border-t border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Society Logo & Full Title Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white p-1.5 shadow-md border-2 border-emerald-600/30 flex items-center justify-center">
            <img
              src={SOCIETY_INFO.logoUrl}
              alt="PVCMPACS Official Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = SOCIETY_INFO.logoExternalUrl;
              }}
            />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase leading-snug">
            {SOCIETY_INFO.fullName}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm font-semibold text-emerald-700">
            <span>Primary Agriculture Co-operative Society</span>
            <span>•</span>
            <span>Serving Goa Since 1997</span>
          </div>
        </div>

        {/* Verbatim About Text Card */}
        <div className="bg-gradient-to-b from-emerald-50/40 to-slate-50/70 border border-emerald-200/70 rounded-2xl p-6 sm:p-10 mb-14 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-emerald-600/10 pointer-events-none">
            <ScrollText className="w-48 h-48" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-slate-800 text-base sm:text-lg md:text-xl font-serif italic leading-relaxed sm:leading-loose">
              "{SOCIETY_INFO.aboutText}"
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-emerald-200/60">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-white border border-emerald-200 text-emerald-700 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Trust & Transparency</h4>
                  <p className="text-[11px] text-slate-500">Member-audited governance</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-white border border-emerald-200 text-emerald-700 shadow-2xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Sustainable Growth</h4>
                  <p className="text-[11px] text-slate-500">Steady community returns</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-white border border-emerald-200 text-emerald-700 shadow-2xs">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Member Empowerment</h4>
                  <p className="text-[11px] text-slate-500">Farmers, vendors & families</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-white border border-emerald-200 text-emerald-700 shadow-2xs">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Mutual Co-operation</h4>
                  <p className="text-[11px] text-slate-500">Shared community progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview Section */}
        <div id="services-overview" className="pt-2">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our Services
              </h3>
              <p className="text-slate-600 text-sm mt-1 max-w-2xl">
                Our services are categorized into Deposit Schemes, Loan Facilities, and Allied Member Services.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 px-4 py-2 rounded-lg transition-colors border border-emerald-200/80 w-fit"
            >
              <span>Explore Detailed Schemes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Category 1: Deposit scheme */}
            <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                  <PiggyBank className="w-6 h-6" />
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Deposit Schemes</h4>
                <p className="text-xs text-slate-500 mb-4">
                  Secure your future with deposit schemes tailored for everyday savings and long-term security.
                </p>

                {/* List of services */}
                <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                  {DEPOSIT_SCHEMES.map((item) => (
                    <li key={item.id} className="flex items-start gap-2 group">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="text-slate-800 group-hover:text-emerald-800 font-semibold transition-colors">
                          {item.title}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
                >
                  View full details →
                </button>
                <button
                  onClick={() => onRequestService('Saving Deposit')}
                  className="text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded-lg transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Category 2: Loan scheme */}
            <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold mb-4">
                  <BadgePercent className="w-6 h-6" />
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Loan Schemes</h4>
                <p className="text-xs text-slate-500 mb-4">
                  Affordable credit solutions for personal, agricultural, vehicle, housing, and commercial needs.
                </p>

                {/* List of loans */}
                <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                  {LOAN_SCHEMES.map((item) => (
                    <li key={item.id} className="flex items-start gap-2 group">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="text-slate-800 group-hover:text-amber-800 font-semibold transition-colors">
                          {item.title}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors"
                >
                  View full details →
                </button>
                <button
                  onClick={() => onRequestService('Gold Loan')}
                  className="text-xs font-semibold bg-amber-700 hover:bg-amber-800 text-white px-3 py-1.5 rounded-lg transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Category 3: Services */}
            <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-4">
                  <Landmark className="w-6 h-6" />
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Member Services</h4>
                <p className="text-xs text-slate-500 mb-4">
                  Essential modern utility billing counters and electronic clearing facilities provided at our branches.
                </p>

                {/* List of services */}
                <ul className="space-y-3 text-xs text-slate-700 font-medium">
                  {UTILITY_SERVICES.map((item) => (
                    <li key={item.id} className="flex items-start gap-2 group">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="text-slate-800 group-hover:text-blue-800 font-semibold block transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {item.subtitle}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold text-blue-800 hover:text-blue-950 transition-colors"
                >
                  View full details →
                </button>
                <button
                  onClick={() => onRequestService('Payment of Electricity and Water Bills')}
                  className="text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white px-3 py-1.5 rounded-lg transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
