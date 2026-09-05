import React from 'react';
import { 
  Calendar, 
  ChevronRight
} from 'lucide-react';
import { SOCIAL_ACTIVITIES } from '../data';

interface SocialActivitiesPreviewProps {
  onNavigate: (sectionId: string) => void;
  onOpenActivityModal?: (activityId: string) => void;
}

export const SocialActivitiesPreview: React.FC<SocialActivitiesPreviewProps> = ({ 
  onNavigate 
}) => {
  return (
    <section id="social-preview" className="bg-slate-50/70 py-12 sm:py-16 border-t border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Our Social Activities */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our Social Activities
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                School kit distributions, student felicitations, and farmer welfare programs empowering communities across Goa.
              </p>
            </div>

            <button
              onClick={() => onNavigate('social-activities')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-900 bg-white hover:bg-emerald-50 px-4 py-2 rounded-lg border border-slate-200 shadow-2xs transition-colors w-fit"
            >
              <span>View Full Photo Gallery</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Preview Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {SOCIAL_ACTIVITIES.map((item) => (
              <div 
                key={item.id}
                onClick={() => onNavigate('social-activities')}
                className="group bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur-2xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    {item.category}
                  </div>
                </div>

                <div className="p-2.5 flex-1 flex flex-col justify-between">
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-emerald-800 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2 pt-1.5 border-t border-slate-100">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                      {item.date}
                    </span>
                    <span className="text-emerald-700 font-semibold group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
