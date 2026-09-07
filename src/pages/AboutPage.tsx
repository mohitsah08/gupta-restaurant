import React from 'react';
import { Link } from 'wouter';
import { Sparkles, Utensils, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-ivory pt-24 sm:pt-28 pb-24">
      <SEOHead
        title="About Gupta Restaurant | Warm Hospitality & Authentic Flavours"
        description="Learn about Gupta Restaurant in Thawe, Gopalganj. Dedicated to honest North Indian, Mughlai, and Indo-Chinese recipes cooked fresh with care and traditional spices."
      />

      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-brand-surface border-b border-brand-gold/20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Journey &amp; Ethos</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-ivory">
            Good Food. Great Moments.
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Gupta Restaurant is rooted in the simple belief that honest hospitality and slow-cooked traditional recipes bring communities and families together.
          </p>
        </div>
      </section>

      {/* Story & Heritage */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-gold block">
                The Dining Experience
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ivory leading-tight">
                Crafting Authentic Culinary Memories in Thawe
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                Located on the prominent Main Road near V-Mart in Thawe, Gopalganj, Gupta Restaurant provides a reliable culinary sanctuary for locals, traveling pilgrims visiting the historic Thawe temple, and highway travelers.
              </p>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                Our kitchen honors time-tested North Indian culinary methods. We avoid commercial flavor boosters and pre-made gravies. Our famous Mutton Handi is slow-cooked in earthen clay pots with whole garlic cloves and mustard oil, giving it a rich aroma and extraordinarily tender texture.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="px-6 py-3 rounded-full bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:bg-brand-gold-hover transition-all"
                >
                  Explore Our Menu
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-brand-surface border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-all"
                >
                  Visit Restaurant
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/30">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
                  alt="Gupta Restaurant comfortable dining tables"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-brand-dark/90 backdrop-blur-sm border border-stone-700 text-xs text-stone-300">
                  <span className="font-semibold text-brand-gold block text-sm">
                    Welcoming Family Environment
                  </span>
                  Dedicated seating, attentive table service, and clean surroundings for all occasions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-brand-surface border-y border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-ivory">
              Our Kitchen Standards
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 font-light">
              We hold ourselves to rigorous culinary discipline across every order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-brand-card border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-ivory">
                Authentic Clay-Pot Cooking
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Traditional earthenware cooking allows slow heat distribution, tenderizing meats and infusing whole spices deeply into every bite.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-ivory">
                Fresh Farm Produce
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Freshly procured paneer, local dairy, and farm vegetables combined with hand-crushed whole coriander and roasted cumin.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <HeartHandshake className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-ivory">
                Affordable Family Dining
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Offering generous portions at accessible pricing (~₹200–₹400/person) so every family feast remains a joy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
