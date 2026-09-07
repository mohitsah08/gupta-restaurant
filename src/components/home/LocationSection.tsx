import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock } from 'lucide-react';
import { restaurantData } from '@/data/restaurant';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-brand-surface text-brand-ivory border-t border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us In Thawe</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-ivory">
            Come Find Us
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light">
            Conveniently located on Main Road near V-Mart, easily accessible for local diners and visitors traveling via Thawe Road.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Map Column (Desktop Left / Mobile Second) */}
          <div className="lg:col-span-7 order-2 lg:order-1 rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-gold/25 shadow-2xl bg-brand-dark min-h-[350px] sm:min-h-[420px] relative">
            <iframe
              title="Gupta Restaurant Location Map"
              src="https://maps.google.com/maps?q=Gupta+Restaurant+Near+V+Mart+Ward+No+15+Thawe+Gopalganj+Bihar+841428&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[350px] sm:min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Restaurant Information Column (Desktop Right / Mobile First) */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-card border border-stone-800 space-y-4 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-brand-dark border border-brand-gold/30 text-brand-gold flex-shrink-0 mt-1 shadow-gold-glow">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-ivory">
                    Gupta Restaurant
                  </h3>
                  <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider mt-0.5">
                    Thawe, Gopalganj
                  </p>
                  <address className="not-italic text-sm text-stone-300 mt-2 leading-relaxed font-light">
                    {restaurantData.address.full}
                  </address>
                </div>
              </div>

              {/* Landmark & Hours */}
              <div className="pt-4 border-t border-stone-800 space-y-2.5 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span className="text-stone-300 font-medium">
                    Hours: {restaurantData.hours.formatted} ({restaurantData.hours.days})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span className="text-stone-300 font-medium">
                    Phone: {restaurantData.displayPhone}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href={restaurantData.googleMaps.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:bg-brand-gold-hover transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${restaurantData.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-card hover:bg-stone-800 text-brand-ivory border border-stone-700 hover:border-brand-gold/40 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>Call Restaurant</span>
                </a>

                <a
                  href={`https://wa.me/${restaurantData.whatsapp}?text=${encodeURIComponent(
                    'Hello Gupta Restaurant, I would like to enquire about your location and restaurant.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
