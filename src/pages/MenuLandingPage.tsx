import React, { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Utensils } from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';
import { menuCategories, menuItems } from '@/data/menu';
import { MenuItem, MenuFilter } from '@/types/menu';
import { MenuSearch } from '@/components/menu/MenuSearch';
import { MenuFilters } from '@/components/menu/MenuFilters';
import { FoodCard } from '@/components/menu/FoodCard';
import { FoodDetailModal } from '@/components/menu/FoodDetailModal';

export const MenuLandingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<MenuFilter>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Filter items based on search query, dietary type, and category
  const filteredDishes = useMemo(() => {
    return menuItems.filter((item) => {
      // 1. Dietary filter
      if (dietaryFilter !== 'all' && item.type !== dietaryFilter) {
        return false;
      }
      // 2. Category filter
      if (selectedCategory !== 'all' && item.categoryId !== selectedCategory) {
        return false;
      }
      // 3. Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesHindi = item.hindiName?.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(query));
        return matchesName || matchesHindi || matchesDesc || matchesCategory || matchesTags;
      }
      return true;
    });
  }, [searchQuery, dietaryFilter, selectedCategory]);

  return (
    <div className="bg-brand-dark min-h-screen text-brand-ivory pt-24 sm:pt-28 pb-24">
      <SEOHead
        title="Gupta Restaurant | Complete Food & Dining Menu"
        description="Explore our complete menu of authentic North Indian curries, Mutton Handi, Dum Biryani, Paneer specials, Tandoori breads, and Indo-Chinese at Gupta Restaurant Thawe."
      />

      {/* Hero Header */}
      <section className="relative py-12 sm:py-16 bg-brand-surface border-b border-brand-gold/20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
            alt="Culinary background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest">
            <Utensils className="w-3.5 h-3.5" />
            <span>Gupta Restaurant Dining</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-ivory">
            Explore Our Menu
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            From comforting classics to bold flavours, find something for every appetite.
            Every dish is prepared fresh to order with authentic spices and regional traditions.
          </p>

          {/* Search Bar */}
          <div className="pt-4">
            <MenuSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              resultCount={filteredDishes.length}
            />
          </div>
        </div>
      </section>

      {/* Visual Category Grid (Only shown when not actively searching) */}
      {!searchQuery && selectedCategory === 'all' && dietaryFilter === 'all' && (
        <section className="py-12 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif font-bold text-2xl text-brand-ivory">
                  Explore by Category
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  Select a category to view its dedicated selection
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {menuCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/menu/${cat.slug}`}
                  className="group relative rounded-2xl overflow-hidden bg-brand-surface border border-stone-800 hover:border-brand-gold/50 transition-all p-3 sm:p-4 flex flex-col justify-between shadow-md hover:shadow-gold-glow/20"
                >
                  <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden mb-3">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-brand-ivory group-hover:text-brand-gold transition-colors leading-snug">
                      {cat.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-800/80 text-[11px] text-stone-400">
                      <span>{cat.itemCount}+ Dishes</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-gold transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Catalog & Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Filters Bar */}
          <div className="p-4 sm:p-6 rounded-2xl bg-brand-surface border border-stone-800">
            <MenuFilters
              currentFilter={dietaryFilter}
              setFilter={setDietaryFilter}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Dishes Grid */}
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredDishes.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onSelect={setSelectedDish}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-brand-surface border border-stone-800 space-y-4 max-w-md mx-auto">
              <Utensils className="w-10 h-10 text-stone-500 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-brand-ivory">
                No matching dishes found
              </h3>
              <p className="text-xs text-stone-400">
                We couldn't find any dishes matching your current search or filter combination.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setDietaryFilter('all');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2.5 rounded-full bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider shadow-gold-glow"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Food Detail Modal */}
      <FoodDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
};
