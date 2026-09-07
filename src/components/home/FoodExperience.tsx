import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Sparkles } from 'lucide-react';
import { VegBadge } from '@/components/common/VegBadge';

export const FoodExperience: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-ivory text-brand-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>The Culinary Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark">
            Made for Every Appetite
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Whether you crave the rustic warmth of slow-cooked Handi Mutton, the creamy comfort of Paneer Butter Masala, or steaming street-style Chowmein, every recipe is prepared fresh to order with pure mustard oil and hand-ground masalas.
          </p>
        </div>

        {/* Editorial Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Hero Card (7 Cols) */}
          <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden shadow-2xl bg-brand-surface">
            <div className="relative h-[400px] sm:h-[480px] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop"
                alt="Slow-cooked Dum Biryani layered with saffron and aromatic spices"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Badges on image */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider shadow-md">
                  Signature Specialty
                </span>
                <VegBadge type="non-veg" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  Biryani Craftsmanship
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory">
                  Dum Pukht Saffron Biryani
                </h3>
                <p className="text-sm text-stone-300 max-w-lg leading-relaxed line-clamp-2">
                  Layered with fragrant basmati, caramelised crispy onions, roasted spices, and slow-dum sealed for authentic aroma.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-brand-gold font-serif font-bold text-xl">₹220 – ₹540</span>
                  <Link
                    href="/menu/biryani"
                    className="text-xs uppercase tracking-wider text-brand-gold font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Biryani Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Cards Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Supporting Card 1: Handi Curries */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-brand-surface flex h-[190px] sm:h-[220px]">
              <div className="w-2/5 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop"
                  alt="Clay pot cooked rich Indian gravies and butter chicken"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="w-3/5 p-4 sm:p-5 flex flex-col justify-between text-brand-ivory bg-brand-surface">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold">
                      Handi Specialties
                    </span>
                    <VegBadge type="non-veg" size="sm" />
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg leading-snug">
                    Chicken &amp; Mutton Handi
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                    Simmered in earthen pots for deep, rich traditional flavours.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-stone-800">
                  <span className="font-serif font-bold text-brand-gold text-sm sm:text-base">
                    From ₹220
                  </span>
                  <Link
                    href="/menu/non-vegetarian"
                    className="text-[11px] font-semibold text-stone-300 hover:text-brand-gold uppercase tracking-wider"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>

            {/* Supporting Card 2: Pure Vegetarian Paneer Delights */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-brand-surface flex h-[190px] sm:h-[220px]">
              <div className="w-2/5 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop"
                  alt="Creamy Paneer Butter Masala in brass bowl"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="w-3/5 p-4 sm:p-5 flex flex-col justify-between text-brand-ivory bg-brand-surface">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                      Pure Vegetarian
                    </span>
                    <VegBadge type="veg" size="sm" />
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg leading-snug">
                    Paneer &amp; Dal Makhani
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                    Velvety tomato makhani gravies and slow-cooked black lentils.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-stone-800">
                  <span className="font-serif font-bold text-brand-gold text-sm sm:text-base">
                    From ₹150
                  </span>
                  <Link
                    href="/menu/vegetarian"
                    className="text-[11px] font-semibold text-stone-300 hover:text-brand-gold uppercase tracking-wider"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center pt-4">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-dark hover:bg-stone-900 text-brand-ivory font-bold text-sm uppercase tracking-wider shadow-xl hover:border-brand-gold/50 transition-all border border-transparent"
          >
            <span>Explore The Full Menu</span>
            <ArrowRight className="w-4 h-4 text-brand-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
};
