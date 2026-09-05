import React from 'react';
import { 
  Award, 
  ShieldCheck 
} from 'lucide-react';
import { BOARD_MEMBERS, SOCIETY_INFO } from '../data';

interface BoardOfDirectorsProps {
  onNavigate?: (sectionId: string) => void;
}

export const BoardOfDirectors: React.FC<BoardOfDirectorsProps> = () => {
  return (
    <section id="bod" className="bg-white py-12 sm:py-16 border-t border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Board of Directors
          </h2>
          <p className="text-emerald-800 font-semibold text-sm sm:text-base mt-1">
            Managing Committee for the Term: {SOCIETY_INFO.termPeriod}
          </p>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Our esteemed leadership team brings decades of agricultural experience, commercial acumen, and community devotion to steer our cooperative society.
          </p>
        </div>

        {/* 1. Group Photo Showcase */}
        <div className="mb-12 bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-2xs">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-700" />
              Managing Committee ({SOCIETY_INFO.termPeriod})
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-21/9 sm:aspect-16/6 max-h-80 w-full bg-slate-200 shadow-inner">
            <img
              src={SOCIETY_INFO.boardCombinedImageUrl}
              alt="Combine Photo of Board of Directors"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = SOCIETY_INFO.boardCombinedImageExternalUrl;
              }}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent flex items-end p-4 sm:p-6">
              <div className="text-white flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-white p-1 shadow-md border border-white/80 flex items-center justify-center flex-shrink-0">
                  <img
                    src={SOCIETY_INFO.logoUrl}
                    alt="PVC Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = SOCIETY_INFO.logoExternalUrl;
                    }}
                  />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs uppercase font-bold text-amber-300 tracking-wider">Official Group Photograph</p>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold leading-snug">
                    Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Individual Directors Grid */}
        <div className="mb-20">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Individual Board Members</span>
              <span className="text-xs font-normal text-slate-500">(Chairman, Vice Chairman, Secretary & Directors)</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOARD_MEMBERS.map((director, index) => {
              const isChairman = director.designation === 'Chairman';
              const isVice = director.designation === 'Vice Chairman';
              const isSecretary = director.designation === 'Secretary';
              const isCoreOfficer = isChairman || isVice || isSecretary;

              return (
                <div 
                  key={director.id}
                  className={`relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-md p-5 flex flex-col justify-between ${
                    isCoreOfficer 
                      ? 'border-emerald-300 shadow-xs ring-1 ring-emerald-400/20' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                  id={`director-card-${index}`}
                >
                  <div>
                    {/* Header Designation Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        isChairman 
                          ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                          : isVice
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : isSecretary
                          ? 'bg-blue-100 text-blue-900 border border-blue-300'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {director.designation}
                      </span>
                    </div>

                    {/* Member Profile Avatar & Bio */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={director.image}
                          alt={director.name}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 shadow-xs"
                        />
                        {isCoreOfficer && (
                          <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-1 rounded-full shadow-2xs">
                            <ShieldCheck className="w-3 h-3" />
                          </div>
                        )}
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 text-base">
                          {director.name}
                        </h4>
                        <p className="text-xs text-emerald-700 font-medium">
                          {director.designation}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Tenure: {director.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {director.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Elected Representative</span>
                    <span className="font-semibold text-emerald-800">Parra, Goa</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
