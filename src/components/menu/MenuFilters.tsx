import React from 'react';
import { MenuFilter } from '@/types/menu';
import { menuCategories } from '@/data/menu';
import { VegBadge } from '@/components/common/VegBadge';

interface MenuFiltersProps {
  currentFilter: MenuFilter;
  setFilter: (filter: MenuFilter) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const MenuFilters: React.FC<MenuFiltersProps> = ({
  currentFilter,
  setFilter,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="space-y-4">
      {/* Primary Dietary Filters (ALL, VEG, NON-VEG) */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        {/* ALL */}
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
            currentFilter === 'all'
              ? 'bg-brand-gold text-brand-dark shadow-gold-glow scale-105'
              : 'bg-brand-surface text-stone-300 hover:text-white border border-stone-800'
          }`}
        >
          All Dishes
        </button>

        {/* VEG */}
        <button
          type="button"
          onClick={() => setFilter('veg')}
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
            currentFilter === 'veg'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30 scale-105'
              : 'bg-brand-surface text-stone-300 hover:text-white border border-stone-800'
          }`}
        >
          <VegBadge type="veg" size="sm" />
          <span>Pure Veg</span>
        </button>

        {/* NON-VEG */}
        <button
          type="button"
          onClick={() => setFilter('non-veg')}
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
            currentFilter === 'non-veg'
              ? 'bg-red-600 text-white shadow-lg shadow-red-900/30 scale-105'
              : 'bg-brand-surface text-stone-300 hover:text-white border border-stone-800'
          }`}
        >
          <VegBadge type="non-veg" size="sm" />
          <span>Non-Veg</span>
        </button>
      </div>

      {/* Category Filter Chips (Horizontal Scrollable on Mobile) */}
      <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-2">
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            selectedCategory === 'all'
              ? 'bg-brand-surface text-brand-gold border border-brand-gold/40'
              : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border border-stone-800'
          }`}
        >
          All Categories
        </button>

        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-brand-surface text-brand-gold border border-brand-gold/40'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};
