import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Navigation, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { restaurantData } from '@/data/restaurant';

export const ClosingCTA: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-brand-dark overflow-hidden border-t border-brand-gold/20">
      {/* Background Image with Dark Culinary Mood */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
          alt="Gupta Restaurant atmospheric dining"
          className="w-full h-full object-cover object-center filter brightness-[0.25]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-widest shadow-gold-glow">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Warm Dining Hospitality</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-ivory max-w-3xl mx-auto leading-tight">
          "Good food is better when shared."
        </h2>

        <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Join us for an unforgettable dining experience in Thawe, Gopalganj, or order your favourite dishes for home parcel and delivery.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-bold text-sm tracking-wider uppercase shadow-gold-glow hover:shadow-gold-glow-lg transition-all active:scale-95"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={restaurantData.googleMaps.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-brand-surface hover:bg-stone-800 text-brand-ivory border border-stone-700 hover:border-brand-gold/50 font-semibold text-sm tracking-wider uppercase transition-all active:scale-95"
          >
            <Navigation className="w-4 h-4 text-brand-gold" />
            <span>Get Directions</span>
          </a>

          <a
            href={`https://wa.me/${restaurantData.whatsapp}?text=${encodeURIComponent(
              'Hello Gupta Restaurant, I would like to enquire about your menu and restaurant.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-sm font-semibold tracking-wider uppercase transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
