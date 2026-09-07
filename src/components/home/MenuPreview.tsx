import React from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { menuCategories } from '@/data/menu';

export const MenuPreview: React.FC = () => {
  // Select top categories to highlight on homepage
  const featuredCategories = menuCategories.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-brand-surface text-brand-ivory border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-gold block">
              Curated Dining
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-ivory">
              Browse Menu by Category
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light">
              From hearty North Indian curries and clay-pot handi dishes to wok-tossed noodles and tandoori breads, explore our categorized dining offerings.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-card hover:bg-stone-800 text-brand-gold border border-brand-gold/30 hover:border-brand-gold font-semibold text-xs uppercase tracking-wider transition-all self-start md:self-auto"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/menu/${category.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-brand-card border border-stone-800 hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-gold-glow/20"
            >
              {/* Category Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/30 to-transparent" />

                {/* Dish Count Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-dark/80 backdrop-blur-sm border border-brand-gold/30 text-[11px] font-semibold text-brand-gold">
                  {category.itemCount}+ Dishes
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-2 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-brand-ivory group-hover:text-brand-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-gold group-hover:text-brand-gold-light">
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
