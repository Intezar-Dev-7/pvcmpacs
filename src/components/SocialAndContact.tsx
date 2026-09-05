import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  ExternalLink, 
  Award, 
  Layers, 
  X,
  Navigation,
  Clock,
  Check,
  AlertCircle,
  Building2,
  ChevronRight
} from 'lucide-react';
import { SOCIAL_ACTIVITIES, SOCIETY_INFO, BRANCHES, DEPOSIT_SCHEMES, LOAN_SCHEMES, UTILITY_SERVICES } from '../data';
import { ServiceRequestForm, SocialActivity } from '../types';

interface SocialAndContactProps {
  prefilledService?: string;
}

export const SocialAndContact: React.FC<SocialAndContactProps> = ({ prefilledService }) => {
  // Request Form State
  const [formData, setFormData] = useState<ServiceRequestForm>({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'deposit',
    serviceName: 'Saving Deposit',
    branch: 'Head Office (Parra)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activePhotoModal, setActivePhotoModal] = useState<SocialActivity | null>(null);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string>('');

  // Handle prefilled service passed from Page 5 or Page 2
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        serviceName: prefilledService,
      }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number to submit your service request.');
      return;
    }

    // Determine destination branch WhatsApp number or society default
    const selectedBranchObj = BRANCHES.find((b) => b.name === formData.branch);
    const targetPhone = selectedBranchObj?.mobile 
      ? selectedBranchObj.mobile.replace(/[^0-9]/g, '') 
      : (SOCIETY_INFO.whatsappNumber || '919822145678');

    // Build structured WhatsApp message
    const lines = [
      `*NEW SERVICE REQUEST - ${SOCIETY_INFO.shortName}*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Full Name:* ${formData.name.trim()}`,
      `📱 *Mobile No:* ${formData.phone.trim()}`,
      formData.email?.trim() ? `📧 *Email:* ${formData.email.trim()}` : null,
      `🏛️ *Requested Service:* ${formData.serviceName}`,
      `🏢 *Preferred Branch:* ${formData.branch}`,
      formData.message?.trim() ? `📝 *Message / Query:* ${formData.message.trim()}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📍 _Submitted via ${SOCIETY_INFO.shortName} Official Portal on ${new Date().toLocaleDateString('en-IN')}_`,
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(fullMessage)}`;
    setSubmittedWhatsAppUrl(waUrl);

    // Open WhatsApp in a new tab/app
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Browser popup blocker fallback handled gracefully in UI
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedWhatsAppUrl('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceCategory: 'deposit',
      serviceName: 'Saving Deposit',
      branch: 'Head Office (Parra)',
      message: '',
    });
  };

  return (
    <section id="social-and-contact" className="bg-white py-12 sm:py-16 border-t border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SOCIAL ACTIVITIES */}
        <div id="social-activities" className="mb-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Social Activities
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Annual school kit distributions, student felicitations, and farmer welfare programs supporting village families across Goa.
            </p>
          </div>

          {/* 6+ Photos Grid with modal zoom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOCIAL_ACTIVITIES.map((activity, index) => (
              <div
                key={activity.id}
                onClick={() => setActivePhotoModal(activity)}
                className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                id={`social-activity-card-${index}`}
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                    <img
                      src={activity.imageUrl}
                      alt={activity.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-white text-xs font-medium flex items-center gap-1">
                        Click to enlarge photo
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-2xs">
                      Photo {index + 1}
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-800 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-2xs">
                      {activity.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="text-[11px] text-emerald-700 font-semibold mb-1 flex items-center gap-1">
                      <span>Organized: {activity.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                      {activity.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 flex items-center justify-between text-xs text-emerald-700 font-semibold border-t border-slate-200/60">
                  <span>View Details & Photo</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CONTACT US (Middle of Page 6 sketch) */}
        <div id="contact" className="mb-16 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Reach out to our cooperative society leadership or visit our nearest branch office.
            </p>
          </div>

          {/* Photo of Google Map Location (as sketched on Page 6) */}
          <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-50">
            <div className="p-3 bg-slate-100/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Photo of Google Map Location: Parra, Bardez, Goa (PIN 403510)</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-slate-500 hidden sm:inline">Coordinates: 15.5684° N, 73.7825° E</span>
                <a
                  href="https://maps.google.com/?q=Parra,+Goa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white hover:bg-slate-50 text-emerald-800 font-semibold px-2.5 py-1 rounded border border-slate-200 shadow-2xs transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded interactive Google Map location */}
            <div className="relative h-64 sm:h-80 w-full bg-slate-200">
              <iframe
                title="Parra Verla Canca Society Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15371.39294578119!2d73.77443194999999!3d15.5684784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1cb01e4a369%3A0xe5ec7d206f5b9d3b!2sParra%2C%20Goa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating address card on map */}
              <div className="absolute top-4 left-4 max-w-xs bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-slate-200 shadow-md text-xs pointer-events-auto">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Parra Verla Canca Co-op Society Ltd
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  H.No. 128/A, Central Market Road, Near St. Anne’s Church, Parra, Bardez, Goa - 403510
                </p>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Mon - Sat: 9am - 5pm</span>
                  <a href={`tel:${SOCIETY_INFO.phone}`} className="text-emerald-700 font-bold hover:underline">
                    Call: {SOCIETY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Contact Boxes (Call Us, Write Us, Head office Address as drawn on Page 6) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1: Call Us */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                <p className="text-xs text-slate-500 mb-4">
                  Speak directly to our branch operations and customer support team.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 font-medium bg-white p-3.5 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 text-[11px] block">Telephone:</span>
                    <a href={`tel:${SOCIETY_INFO.phone}`} className="text-sm font-bold text-emerald-800 hover:underline">
                      {SOCIETY_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Mobile / WhatsApp:</span>
                    <a href={`tel:${SOCIETY_INFO.altPhone}`} className="text-sm font-bold text-emerald-800 hover:underline">
                      {SOCIETY_INFO.altPhone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-center">
                <a
                  href={`tel:${SOCIETY_INFO.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Click to Call</span>
                </a>
              </div>
            </div>

            {/* Box 2: Write Us */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Write Us</h4>
                <p className="text-xs text-slate-500 mb-4">
                  Send your official queries, membership applications, or feedback.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 font-medium bg-white p-3.5 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 text-[11px] block">Official Email:</span>
                    <a href={`mailto:${SOCIETY_INFO.email}`} className="text-sm font-bold text-blue-800 hover:underline break-all">
                      {SOCIETY_INFO.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Branch Secretariat:</span>
                    <span className="text-xs font-medium text-slate-700">
                      headoffice@pvcmpacs.coop
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-center">
                <a
                  href={`mailto:${SOCIETY_INFO.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Box 3: Head Office Address */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Head Office Address</h4>
                <p className="text-xs text-slate-500 mb-4">
                  Central registered office & principal banking premises.
                </p>
                <div className="space-y-1 text-xs text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900">
                    Parra Verla Canca Multipurpose Primary Agriculture Co-op. Society Ltd
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {SOCIETY_INFO.headOfficeAddress}
                  </p>
                  <p className="text-[11px] text-emerald-800 font-semibold pt-1">
                    Landmark: Near Village Panchayat Office
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-center">
                <a
                  href="https://maps.google.com/?q=Parra,+Goa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* OUR BRANCH NETWORK (All Four Branches Before the Contact Form) */}
        <div id="branches" className="mb-16 pt-8 border-t border-slate-200 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>4 Convenient Branch Locations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Branch Network
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Serving you through our Head Office and full-service community branches across North Goa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className={`bg-slate-50/60 rounded-2xl border p-4 sm:p-5 lg:p-6 flex flex-col justify-between hover:shadow-md transition-all ${
                  branch.isHeadOffice
                    ? 'border-emerald-400/90 shadow-xs ring-1 ring-emerald-500/20 bg-emerald-50/20'
                    : 'border-slate-200'
                }`}
                id={`branch-card-${branch.id}`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      branch.isHeadOffice 
                        ? 'bg-emerald-700 text-white' 
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}>
                      {branch.isHeadOffice ? 'Head Office & Central Branch' : 'Sub-Branch'}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      9 AM - 5 PM
                    </span>
                  </div>

                  {/* Branch Title & Location */}
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    {branch.name}
                  </h4>
                  {branch.landmark && (
                    <p className="text-xs font-medium text-emerald-800 mb-4 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                      <span>{branch.landmark}</span>
                    </p>
                  )}

                  {/* Details List */}
                  <div className="space-y-2.5 text-xs text-slate-600 mb-6 bg-white p-4 rounded-xl border border-slate-200/80">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        <strong className="text-slate-800">Address: </strong>
                        {branch.address}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800">Phone: </strong>
                        <a href={`tel:${branch.phone}`} className="hover:text-emerald-700 font-medium">
                          {branch.phone}
                        </a>
                        <span className="mx-1 text-slate-300">|</span>
                        <a href={`tel:${branch.mobile}`} className="hover:text-emerald-700 font-medium">
                          {branch.mobile}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800">Mail: </strong>
                        <a href={`mailto:${branch.email}`} className="hover:text-emerald-700 font-medium text-emerald-800">
                          {branch.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-200/80">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <a
                      href={`tel:${branch.phone}`}
                      className="inline-flex items-center justify-center gap-1 sm:gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-2.5 sm:px-3 py-2 rounded-lg border border-emerald-200/60 transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </a>

                    <a
                      href={`https://wa.me/${branch.mobile.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${branch.name}, I am contacting you through the official website.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 sm:gap-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] px-2.5 sm:px-3 py-2 rounded-lg shadow-2xs transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setFormData(prev => ({ ...prev, branch: branch.name }));
                        const formEl = document.getElementById('request-service');
                        if (formEl) {
                          formEl.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center justify-center gap-1 text-xs font-semibold bg-slate-800 hover:bg-slate-900 text-white px-2.5 sm:px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex-1 min-w-0"
                    >
                      <span className="truncate">Request at Branch</span>
                      <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. REQUEST FOR A SERVICE FORM (Bottom of Page 6 sketch) */}
        {/* Exact user handwritten note: "*Please note that Deposit scheme menu, loan scheme menu and Services menu to be routed to this tab of Request for a service." */}
        <div id="request-service" className="pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Request for a Service
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
                Select your required Deposit Scheme, Loan Facility, or Utility Service. Our branch officer will contact you within 24 working hours.
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
              
              {submitted ? (
                <div className="text-center py-6 sm:py-8 space-y-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl border-2 border-emerald-500/40 p-2 flex items-center justify-center mx-auto shadow-md">
                    <img 
                      src={SOCIETY_INFO.logoUrl} 
                      alt="PVC Logo" 
                      className="w-full h-full object-contain" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = SOCIETY_INFO.logoExternalUrl;
                      }}
                    />
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Inquiry Logged & Dispatched to WhatsApp</span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      Service Request Submitted Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed mt-1">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry for{' '}
                      <strong className="text-emerald-800">{formData.serviceName}</strong> has been directed to our{' '}
                      <strong className="text-slate-900">{formData.branch}</strong>.
                    </p>
                  </div>

                  {/* WhatsApp Action Card */}
                  <div className="max-w-md mx-auto bg-emerald-50/80 border border-emerald-300/80 rounded-2xl p-4 sm:p-5 text-left shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">WhatsApp Notification Ready</div>
                        <div className="text-[11px] text-emerald-800">Direct message with your application details</div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      If WhatsApp did not launch automatically, tap the button below to review and send your request straight to the branch officer.
                    </p>

                    {submittedWhatsAppUrl && (
                      <a
                        href={submittedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold px-4 py-3 rounded-xl shadow-md transition-all active:scale-98"
                        id="open-whatsapp-submitted-btn"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>Open & Chat in WhatsApp Now</span>
                      </a>
                    )}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-xs"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Official Header Badge */}
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/90 mb-5 shadow-2xs">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center p-0.5 flex-shrink-0">
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
                      <div className="text-xs font-bold text-slate-900">{SOCIETY_INFO.fullName}</div>
                      <div className="text-[11px] text-emerald-700 font-medium">Official Member Helpdesk & Inquiry Portal • Estd. 1997</div>
                    </div>
                  </div>
                  {/* Name Input */}
                  <div>
                    <label htmlFor="req-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Name :- <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="req-name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="req-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email :-
                    </label>
                    <input
                      id="req-email"
                      type="email"
                      placeholder="example@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone / Mobile Input */}
                  <div>
                    <label htmlFor="req-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / Mobile No. :- <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="req-phone"
                      type="tel"
                      required
                      placeholder="+91 98221 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Service Request Dropdown (grouped by all deposit, loan, and service schemes) */}
                  <div>
                    <label htmlFor="req-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Request :- <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="req-service"
                      required
                      value={formData.serviceName}
                      onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                    >
                      <optgroup label="Deposit Schemes (from Page 5)">
                        {DEPOSIT_SCHEMES.map((s) => (
                          <option key={s.id} value={s.title}>
                            Deposit: {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Loan Schemes (from Page 5)">
                        {LOAN_SCHEMES.map((s) => (
                          <option key={s.id} value={s.title}>
                            Loan: {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Utility Services (from Page 5)">
                        {UTILITY_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            Service: {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="General / Other">
                        <option value="New Society Membership Inquiry">New Society Membership Inquiry</option>
                        <option value="Pigmy Collection Doorstep Request">Pigmy Collection Doorstep Request</option>
                        <option value="Passbook / Account Statement Help">Passbook / Account Statement Help</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Preferred Branch */}
                  <div>
                    <label htmlFor="req-branch" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Branch :-
                    </label>
                    <select
                      id="req-branch"
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                    >
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name} ({b.address.split(',')[0]})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message / Details */}
                  <div>
                    <label htmlFor="req-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Additional Message / Details (Optional) :-
                    </label>
                    <textarea
                      id="req-message"
                      rows={3}
                      placeholder="Mention preferred contact time, loan amount required, or specific query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button with WhatsApp sending indicator */}
                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 min-h-[44px]"
                      id="submit-request-btn"
                    >
                      <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>Submit Request & Send to WhatsApp</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>

      </div>

      {/* Modal for Social Activity Photo Zoom */}
      {activePhotoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95">
            <div className="relative aspect-16/10 bg-slate-900">
              <img
                src={activePhotoModal.imageUrl}
                alt={activePhotoModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActivePhotoModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-emerald-800/90 text-white text-xs font-semibold px-2.5 py-1 rounded">
                {activePhotoModal.category} • {activePhotoModal.date}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {activePhotoModal.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activePhotoModal.description}
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActivePhotoModal(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
