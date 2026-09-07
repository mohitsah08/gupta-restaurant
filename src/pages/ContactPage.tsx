import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Navigation } from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';
import { restaurantData } from '@/data/restaurant';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    enquiryType: 'General Enquiry',
    date: '',
    guests: '',
    message: '',
  });

  const enquiryTypes = [
    'General Enquiry',
    'Menu Enquiry',
    'Family Visit',
    'Group Booking',
    'Food Availability',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Hello Gupta Restaurant,\n\nI would like to make an enquiry:`;
    text += `\n• Name: ${formData.name.trim() || 'Guest'}`;
    if (formData.phone.trim()) text += `\n• Phone: ${formData.phone.trim()}`;
    text += `\n• Type: ${formData.enquiryType}`;

    if (formData.enquiryType === 'Family Visit' || formData.enquiryType === 'Group Booking') {
      if (formData.date) text += `\n• Preferred Date: ${formData.date}`;
      if (formData.guests) text += `\n• Number of Guests: ${formData.guests}`;
    }

    if (formData.message.trim()) {
      text += `\n• Message: ${formData.message.trim()}`;
    }

    const whatsappUrl = getWhatsAppUrl(text);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-brand-dark min-h-screen text-brand-ivory pt-24 sm:pt-28 pb-24">
      <SEOHead
        title="Contact & Location | Gupta Restaurant Thawe, Gopalganj"
        description="Get in touch with Gupta Restaurant. Send a direct WhatsApp enquiry, book a table for family visits, call us, or find directions to our restaurant on Main Road, Thawe."
      />

      {/* Hero */}
      <section className="relative py-14 sm:py-20 bg-brand-surface border-b border-brand-gold/20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-ivory">
            Let's Talk
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Have questions about today's special handi preparation, family gatherings, or catering? We are always glad to assist you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. CALL US */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-stone-800 flex flex-col justify-between space-y-4 shadow-lg">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold shadow-gold-glow">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-ivory">
                  Call Us Directly
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Call our team for quick table reservations, urgent take-out orders, or general questions.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${restaurantData.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-card hover:bg-stone-800 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{restaurantData.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* 2. WHATSAPP */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-stone-800 flex flex-col justify-between space-y-4 shadow-lg">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-ivory">
                  Chat on WhatsApp
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Fastest way to check real-time dish availability, send location queries, or order takeaway.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${restaurantData.whatsapp}?text=${encodeURIComponent(
                    'Hello Gupta Restaurant, I would like to enquire about your menu and restaurant.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 3. VISIT US */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-stone-800 flex flex-col justify-between space-y-4 shadow-lg">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold shadow-gold-glow">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-ivory">
                  Visit The Restaurant
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Near V-Mart, Ward No. 15, Main Road, Thawe, Gopalganj, Bihar 841428.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={restaurantData.googleMaps.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-dark text-xs font-bold uppercase tracking-wider shadow-gold-glow transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive WhatsApp Enquiry Form */}
      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-brand-surface border border-brand-gold/25 shadow-2xl space-y-8">
            <div className="space-y-2 text-center max-w-xl mx-auto">
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-ivory">
                Send an Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 font-light">
                Fill in your details below. Your enquiry will open instantly in WhatsApp with prefilled text ready to send.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-300 font-medium block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ankit Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-stone-800 text-brand-ivory placeholder-stone-500 text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-300 font-medium block">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-stone-800 text-brand-ivory placeholder-stone-500 text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              {/* Enquiry Type Radio Chips */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-stone-300 font-medium block">
                  Enquiry Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {enquiryTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, enquiryType: type })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.enquiryType === type
                          ? 'bg-brand-gold text-brand-dark border-brand-gold font-semibold shadow-gold-glow'
                          : 'bg-brand-dark text-stone-300 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Conditional Date & Guests if Group/Family Visit */}
              {(formData.enquiryType === 'Family Visit' || formData.enquiryType === 'Group Booking') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-brand-dark/60 border border-stone-800">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-brand-gold font-medium block">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-stone-800 text-brand-ivory text-sm focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-brand-gold font-medium block">
                      Number of Guests
                    </label>
                    <input
                      type="text"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      placeholder="e.g. 6 persons"
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-stone-800 text-brand-ivory text-sm focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-stone-300 font-medium block">
                  Additional Details or Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you'd like to know (e.g. Mutton Handi availability, special seating, celebration arrangements)..."
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-stone-800 text-brand-ivory placeholder-stone-500 text-sm focus:outline-none focus:border-brand-gold"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send Enquiry on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl h-80 sm:h-96">
            <iframe
              title="Gupta Restaurant Map"
              src="https://maps.google.com/maps?q=Gupta+Restaurant+Near+V+Mart+Ward+No+15+Thawe+Gopalganj+Bihar+841428&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
