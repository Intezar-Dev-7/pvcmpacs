import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { AboutSection } from './components/AboutSection';
import { SocialActivitiesPreview } from './components/SocialActivitiesPreview';
import { BoardOfDirectors } from './components/BoardOfDirectors';
import { ServicesDetail } from './components/ServicesDetail';
import { SocialAndContact } from './components/SocialAndContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  // Smooth navigation handler supporting all section aliases
  const handleNavigate = (sectionId: string) => {
    // Normalization for backward compatibility with page numbers
    const targetMap: Record<string, string> = {
      'page-1': 'home',
      'page-2': 'about',
      'page-3': 'social-preview',
      'page-4': 'bod',
      'page-5': 'services',
      'page-6': 'social-and-contact',
    };

    const resolvedId = targetMap[sectionId] || sectionId;
    setActiveSection(resolvedId);

    const element = document.getElementById(resolvedId) || document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Route to Request for a Service form and prefill the selected scheme
  const handleRequestService = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    handleNavigate('request-service');
  };

  // Scroll spy to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const navSections = [
        { id: 'home', nav: 'home' },
        { id: 'bod', nav: 'bod' },
        { id: 'services', nav: 'services' },
        { id: 'social-activities', nav: 'social-activities' },
        { id: 'contact', nav: 'contact' },
        { id: 'branches', nav: 'branches' },
      ];
      
      const scrollPosition = window.scrollY + 220;

      for (let i = navSections.length - 1; i >= 0; i--) {
        const item = navSections[i];
        const el = document.getElementById(item.id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(item.nav);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf8] text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Standard Website Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onRequestService={handleRequestService}
      />

      {/* Main Single Page Content Flow */}
      <main className="flex-1 w-full pt-20 sm:pt-24">
        {/* Option 1 to 6 Hero Carousel */}
        <HeroSlider
          onNavigate={handleNavigate}
          onRequestService={handleRequestService}
        />

        {/* About Society & Overview of All Services */}
        <AboutSection
          onNavigate={handleNavigate}
          onRequestService={handleRequestService}
        />

        {/* Social Activities Preview & Leadership Highlight */}
        <SocialActivitiesPreview
          onNavigate={handleNavigate}
        />

        {/* Board of Directors */}
        <BoardOfDirectors
          onNavigate={handleNavigate}
        />

        {/* Detailed Services Catalog */}
        <ServicesDetail
          onRequestService={handleRequestService}
        />

        {/* Social Activities Gallery, Contact Us & Request for a Service Form */}
        <SocialAndContact
          prefilledService={prefilledService}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Glowing WhatsApp Helpdesk Button */}
      <FloatingWhatsApp />
    </div>
  );
}
