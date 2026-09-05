import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  PiggyBank, 
  Home, 
  Car, 
  Coins, 
  Zap, 
  Calendar, 
  Building, 
  CheckCircle2 
} from 'lucide-react';
import { HERO_SLIDES, SOCIETY_INFO } from '../data';

interface HeroSliderProps {
  onNavigate: (sectionId: string) => void;
  onRequestService: (serviceName?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ 
  onNavigate, 
  onRequestService 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Automatic scrolling every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const getSlideIcon = (index: number) => {
    switch (index) {
      case 0: return <ShieldCheck className="w-5 h-5" />;
      case 1: return <PiggyBank className="w-5 h-5" />;
      case 2: return <Home className="w-5 h-5" />;
      case 3: return <Car className="w-5 h-5" />;
      case 4: return <Coins className="w-5 h-5" />;
      case 5: return <Zap className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      id="home" 
      className="relative bg-slate-50 pt-4 pb-8 sm:pb-12 overflow-hidden scroll-mt-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div 
          className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-white"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] sm:min-h-[460px]">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 flex flex-col justify-between z-10 bg-gradient-to-r from-white via-white/95 to-white/90">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100/90 text-emerald-800 mb-3 sm:mb-4 border border-emerald-200">
                  {getSlideIcon(currentSlide)}
                  <span>{slide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2 sm:mb-3">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-emerald-800 font-semibold text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                  {slide.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mb-4 sm:mb-6">
                  {slide.description}
                </p>

                {/* Highlight Chip */}
                <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/90 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 mb-4 sm:mb-6">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">{slide.highlight}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                <button
                  onClick={() => {
                    if (slide.ctaLink === '#request-service') {
                      onRequestService(slide.title);
                    } else {
                      onNavigate(slide.ctaLink.replace('#', ''));
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all min-h-[42px]"
                  id={`hero-slide-cta-${currentSlide}`}
                >
                  <span>{slide.ctaText}</span>
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-slate-600 hover:text-emerald-800 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-slate-100 transition-colors min-h-[42px]"
                >
                  <span>View All Services</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Image with subtle gradient mask */}
            <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-full bg-slate-100">
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/40 lg:to-transparent"></div>
              
              {/* Floating Official Society Emblem Badge */}
              <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-xs p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-md border border-slate-200/80 flex items-center gap-2">
                <img
                  src={SOCIETY_INFO.logoUrl}
                  alt="PVC Logo"
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = SOCIETY_INFO.logoExternalUrl;
                  }}
                />
                <div className="pr-1 text-left hidden sm:block">
                  <span className="text-[11px] font-extrabold text-slate-900 leading-none block">PVCMPACS</span>
                  <span className="text-[9px] text-emerald-700 font-semibold leading-none">Estd. 1997</span>
                </div>
              </div>

              {/* Overlay Tag on Image for mobile/tablet */}
              <div className="absolute bottom-4 left-4 right-4 lg:hidden bg-white/90 backdrop-blur-xs p-3 rounded-lg border border-white/50 text-xs text-slate-800 font-medium shadow-xs">
                <span className="font-bold text-emerald-800 block">{slide.subtitle}</span>
                <span className="text-slate-600 line-clamp-1">{slide.highlight}</span>
              </div>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/35 backdrop-blur-xs px-2.5 py-1 rounded-full">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all rounded-full ${
                  currentSlide === idx ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Linear Progress Bar for current slide timer */}
          <div className="w-full bg-slate-100 h-1 relative overflow-hidden">
            <div 
              key={currentSlide}
              className={`h-full bg-emerald-600 transition-all ${isPaused ? '' : 'animate-[progress_3.5s_linear]'}`}
              style={{ width: isPaused ? '100%' : undefined }}
            />
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] text-slate-500 font-medium">Serving Since</div>
              <div className="text-sm font-bold text-slate-900 truncate">1997 (29+ Years)</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] text-slate-500 font-medium">Branch Network</div>
              <div className="text-sm font-bold text-slate-900 truncate">4 Branches in Goa</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center flex-shrink-0">
              <PiggyBank className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] text-slate-500 font-medium">Deposit Schemes</div>
              <div className="text-sm font-bold text-slate-900 truncate">Flexible Savings</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] text-slate-500 font-medium">Gold Loan Disbursal</div>
              <div className="text-sm font-bold text-slate-900 truncate">Instant in 15 Mins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
