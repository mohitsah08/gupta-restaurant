import React from 'react';
import { IndianRupee, Clock, Utensils, MapPin } from 'lucide-react';
import { restaurantData } from '@/data/restaurant';

export const QuickInfoStrip: React.FC = () => {
  return (
    <section className="bg-brand-surface border-y border-brand-gold/20 py-6 sm:py-8 text-brand-ivory relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
          {/* 1. Price Range */}
          <div className="flex items-center gap-3.5 pt-4 first:pt-0 md:pt-0">
            <div className="w-11 h-11 rounded-2xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0 shadow-gold-glow">
              <IndianRupee className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl text-brand-gold block leading-tight">
                {restaurantData.pricing.range}
              </span>
              <span className="text-xs text-stone-400 block mt-0.5 font-medium">
                Approx. price per person
              </span>
            </div>
          </div>

          {/* 2. Opening Hours */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
            <div className="w-11 h-11 rounded-2xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0 shadow-gold-glow">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl text-brand-ivory block leading-tight">
                {restaurantData.hours.formatted}
              </span>
              <span className="text-xs text-stone-400 block mt-0.5 font-medium">
                Open Daily (Mon – Sun)
              </span>
            </div>
          </div>

          {/* 3. Dining Options */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
            <div className="w-11 h-11 rounded-2xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0 shadow-gold-glow">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-base sm:text-lg text-brand-ivory block leading-tight">
                Dine-In • Delivery
              </span>
              <span className="text-xs text-stone-400 block mt-0.5 font-medium">
                Takeaway &amp; Family Dining
              </span>
            </div>
          </div>

          {/* 4. Verified Location */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
            <div className="w-11 h-11 rounded-2xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0 shadow-gold-glow">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-base sm:text-lg text-brand-ivory block leading-tight">
                Thawe, Gopalganj
              </span>
              <span className="text-xs text-stone-400 block mt-0.5 font-medium">
                Main Road, Near V-Mart
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
