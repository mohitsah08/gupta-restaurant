import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Navigation, MessageCircle, Utensils, Star, Clock, MapPin } from 'lucide-react';
import { restaurantData } from '@/data/restaurant';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center bg-brand-dark overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Ambient background glow & atmospheric vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-dark/60 to-brand-dark" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left pt-4 lg:pt-0"
          >
            {/* Kicker badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-widest shadow-gold-glow"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Authentic North Indian &amp; Mughlai</span>
            </motion.div>

            {/* Restaurant Name & Main Headline */}
            <div className="space-y-2">
              <span className="block text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-gold font-bold">
                GUPTA RESTAURANT
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold text-brand-ivory leading-[1.1] tracking-tight">
                Good Food.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold-light italic">
                  Great Moments.
                </span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Discover comforting Indian flavours, satisfying favourites and memorable meals at Gupta Restaurant. From our renowned clay-pot Mutton Handi to fragrant Dum Biryanis and sizzling tandoori delicacies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-bold text-sm tracking-wider uppercase shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 active:scale-95"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={restaurantData.googleMaps.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-brand-surface hover:bg-stone-800 text-brand-ivory border border-stone-700 hover:border-brand-gold/50 font-semibold text-sm tracking-wider uppercase transition-all duration-300 active:scale-95"
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
                className="inline-flex items-center gap-2 px-5 py-3.5 sm:py-4 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-sm font-semibold tracking-wider uppercase transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-2 sm:p-3 rounded-xl bg-brand-surface/40 border border-stone-800">
                <div className="flex items-center gap-1 text-brand-gold font-bold text-sm sm:text-base">
                  <Star className="w-4 h-4 fill-current" />
                  <span>3.8 / 5</span>
                </div>
                <span className="text-[11px] sm:text-xs text-stone-400 block mt-0.5">300+ Google Reviews</span>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-brand-surface/40 border border-stone-800">
                <div className="flex items-center gap-1 text-brand-gold font-bold text-sm sm:text-base">
                  <Clock className="w-4 h-4" />
                  <span>9AM - 11PM</span>
                </div>
                <span className="text-[11px] sm:text-xs text-stone-400 block mt-0.5">Daily Dining Hours</span>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-brand-surface/40 border border-stone-800">
                <div className="flex items-center gap-1 text-brand-gold font-bold text-sm sm:text-base">
                  <MapPin className="w-4 h-4" />
                  <span>Thawe</span>
                </div>
                <span className="text-[11px] sm:text-xs text-stone-400 block mt-0.5">Near V-Mart</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Editorial Food Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative Gold Rim Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-brand-gold/30 via-amber-500/20 to-transparent blur-md opacity-70" />

              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl bg-brand-surface">
                <img
                  src="https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=1000&auto=format&fit=crop"
                  alt="Gupta Restaurant signature slow cooked Mutton Handi in earthen pot"
                  className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />

                {/* Floating Dish Tag Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-brand-dark/90 backdrop-blur-md border border-brand-gold/30 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold block">
                      House Specialty
                    </span>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-brand-ivory leading-tight">
                      Special Mutton Handi
                    </h3>
                    <p className="text-xs text-stone-300 mt-0.5">
                      Slow-cooked in clay pots with whole garlic &amp; mustard oil
                    </p>
                  </div>
                  <div className="text-right pl-3 border-l border-stone-700">
                    <span className="text-[10px] uppercase text-stone-400 block">From</span>
                    <span className="font-serif font-bold text-lg sm:text-xl text-brand-gold">
                      ₹320
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative culinary badge */}
              <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 bg-brand-surface border border-brand-gold/40 text-brand-gold p-3 rounded-2xl shadow-gold-glow flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-ivory">
                  Dine-In &amp; Parcel
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
