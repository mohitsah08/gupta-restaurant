import React from 'react';
import { Link } from 'wouter';
import { Sparkles, Utensils, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-brand-ivory text-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story Mosaic */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-brand-surface border border-stone-200">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
                alt="Welcoming dining tables at Gupta Restaurant, Thawe"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Quote Box */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-brand-surface/95 backdrop-blur-md border border-brand-gold/30 text-white shadow-xl">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-gold block">
                  Our Hospitality Philosophy
                </span>
                <p className="font-serif italic text-base sm:text-lg text-brand-ivory mt-1 leading-snug">
                  "Good food brings families together, and authentic flavours turn everyday meals into memorable moments."
                </p>
              </div>
            </div>

            {/* Accent badge */}
            <div className="hidden sm:flex absolute -top-4 -left-4 bg-brand-surface border border-brand-gold/30 text-brand-gold p-4 rounded-2xl shadow-xl items-center gap-3">
              <Utensils className="w-5 h-5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-ivory block">
                  Fresh Daily
                </span>
                <span className="text-[11px] text-stone-400">Cooked to order</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>About Gupta Restaurant</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-dark leading-tight">
                Authentic Indian Flavours in the Heart of Thawe
              </h2>
            </div>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
              Situated conveniently on the Main Road near V-Mart in Thawe, Gopalganj, Gupta Restaurant is dedicated to offering a warm, hospitable dining space for local families, travelers, and food lovers alike.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              We specialize in honest, flavour-packed North Indian, Mughlai, and Indo-Chinese cuisine. From our celebrated slow-cooked Mutton Handi prepared in clay pots to fragrant basmati dum biryanis and pure vegetarian gravies, each recipe is crafted with genuine passion and hygienic preparation.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-brand-gold font-serif font-bold text-base">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Quality Ingredients</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Pure mustard oil, farm-fresh dairy, and authentic hand-blended spices for wholesome flavours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-brand-gold font-serif font-bold text-base">
                  <HeartHandshake className="w-4 h-4 text-brand-gold" />
                  <span>Family &amp; Group Friendly</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Spacious, clean, and welcoming environment tailored for family get-togethers and celebrations.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark hover:text-brand-gold transition-colors"
              >
                <span>Read More About Our Dining Space</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
