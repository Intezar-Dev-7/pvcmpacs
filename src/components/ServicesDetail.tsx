import React, { useState } from 'react';
import { 
  PiggyBank, 
  BadgePercent, 
  Landmark, 
  ArrowRight, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { DEPOSIT_SCHEMES, LOAN_SCHEMES, UTILITY_SERVICES } from '../data';

interface ServicesDetailProps {
  onRequestService: (serviceName: string) => void;
}

export const ServicesDetail: React.FC<ServicesDetailProps> = ({ onRequestService }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'deposit' | 'loan' | 'service'>('all');

  const handleApply = (title: string) => {
    onRequestService(title);
  };

  return (
    <section id="services" className="bg-slate-50/60 py-12 sm:py-16 border-t border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Services & Financial Schemes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Explore our comprehensive Deposit Schemes, Loan Schemes, and Member Utility Services. Select any scheme to submit a direct inquiry or service request.
          </p>

          {/* Category Filter Tabs */}
          <div className="inline-flex items-center p-1.5 bg-white border border-slate-200 rounded-xl shadow-2xs mt-6 gap-1 flex-wrap justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
              }`}
              id="filter-all-services"
            >
              All Services (15)
            </button>
            <button
              onClick={() => setSelectedCategory('deposit')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'deposit'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
              }`}
              id="filter-deposit-schemes"
            >
              <PiggyBank className="w-3.5 h-3.5" />
              <span>Deposit Schemes (6)</span>
            </button>
            <button
              onClick={() => setSelectedCategory('loan')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'loan'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
              }`}
              id="filter-loan-schemes"
            >
              <BadgePercent className="w-3.5 h-3.5" />
              <span>Loan Schemes (6)</span>
            </button>
            <button
              onClick={() => setSelectedCategory('service')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'service'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
              }`}
              id="filter-utility-services"
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>Utility Services (3)</span>
            </button>
          </div>
        </div>

        {/* Notice Banner */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3.5 mb-10 flex items-center justify-between gap-3 text-xs text-emerald-900">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span>
              <strong>Member Note:</strong> Clicking <em>"Request this Service"</em> on any scheme below pre-fills your selection in the service request form.
            </span>
          </div>
          <button 
            onClick={() => handleApply('General Member Service')}
            className="text-emerald-800 font-bold underline hover:text-emerald-950 flex-shrink-0 hidden sm:inline"
          >
            Go to Request Form ↓
          </button>
        </div>

        {/* 1. DEPOSIT SCHEMES */}
        {(selectedCategory === 'all' || selectedCategory === 'deposit') && (
          <div id="deposit-schemes" className="mb-14 scroll-mt-24">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <PiggyBank className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Deposit Schemes</h3>
                  <p className="text-xs text-slate-500">6 Secure savings & term deposit plans</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Safe & Guaranteed Savings
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEPOSIT_SCHEMES.map((scheme, idx) => (
                <div
                  key={scheme.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 hover:shadow-md transition-all flex flex-col justify-between group"
                  id={`deposit-box-${idx + 1}`}
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Scheme {idx + 1}
                      </span>
                      {scheme.badge && (
                        <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {scheme.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-1">
                      {scheme.title}
                    </h4>
                    {scheme.subtitle && (
                      <p className="text-xs font-medium text-emerald-700 mb-2">
                        {scheme.subtitle}
                      </p>
                    )}

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {scheme.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 text-[11px] text-slate-600 border-t border-slate-100 pt-3">
                      {scheme.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Available at all branches</span>
                    <button
                      onClick={() => handleApply(scheme.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded-lg transition-colors shadow-2xs hover:shadow"
                      id={`apply-deposit-${scheme.id}`}
                    >
                      <span>Request this Service</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. LOAN SCHEMES */}
        {(selectedCategory === 'all' || selectedCategory === 'loan') && (
          <div id="loan-schemes" className="mb-14 scroll-mt-24">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <BadgePercent className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Loan Schemes</h3>
                  <p className="text-xs text-slate-500">6 Transparent financing facilities with easy EMIs</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Easy Documentation & Approvals
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOAN_SCHEMES.map((scheme, idx) => (
                <div
                  key={scheme.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 hover:shadow-md transition-all flex flex-col justify-between group"
                  id={`loan-box-${idx + 1}`}
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                        Loan {idx + 1}
                      </span>
                      {scheme.badge && (
                        <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {scheme.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors mb-1">
                      {scheme.title}
                    </h4>
                    {scheme.subtitle && (
                      <p className="text-xs font-medium text-amber-800 mb-2">
                        {scheme.subtitle}
                      </p>
                    )}

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {scheme.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 text-[11px] text-slate-600 border-t border-slate-100 pt-3">
                      {scheme.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end">
                    <button
                      onClick={() => handleApply(scheme.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-700 hover:bg-amber-800 text-white px-3 py-1.5 rounded-lg transition-colors shadow-2xs hover:shadow"
                      id={`apply-loan-${scheme.id}`}
                    >
                      <span>Apply for Loan</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. UTILITY SERVICES */}
        {(selectedCategory === 'all' || selectedCategory === 'service') && (
          <div id="utility-services" className="scroll-mt-24">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Member Utility Services</h3>
                  <p className="text-xs text-slate-500">3 Essential modern banking & utility facilities</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                All Counter Facilities
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {UTILITY_SERVICES.map((serv, idx) => (
                <div
                  key={serv.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 hover:shadow-md transition-all flex flex-col justify-between group"
                  id={`service-box-${idx + 1}`}
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                        Service {idx + 1}
                      </span>
                      {serv.badge && (
                        <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {serv.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors mb-1">
                      {serv.title}
                    </h4>
                    {serv.subtitle && (
                      <p className="text-xs font-medium text-blue-700 mb-2">
                        {serv.subtitle}
                      </p>
                    )}

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {serv.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 text-[11px] text-slate-600 border-t border-slate-100 pt-3">
                      {serv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">All branch counters</span>
                    <button
                      onClick={() => handleApply(serv.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white px-3 py-1.5 rounded-lg transition-colors shadow-2xs hover:shadow"
                      id={`apply-service-${serv.id}`}
                    >
                      <span>Inquire / Avail</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
