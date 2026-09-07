import React, { useState, useMemo } from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, Utensils } from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';
import { menuCategories, menuItems } from '@/data/menu';
import { MenuItem, MenuFilter } from '@/types/menu';
import { FoodCard } from '@/components/menu/FoodCard';
import { FoodDetailModal } from '@/components/menu/FoodDetailModal';
import { MenuSearch } from '@/components/menu/MenuSearch';
import { VegBadge } from '@/components/common/VegBadge';

export const MenuCategoryPage: React.FC = () => {
  const [, params] = useRoute('/menu/:category');
  const categorySlug = params?.category || '';

  const currentCategory = useMemo(() => {
    return menuCategories.find((c) => c.slug === categorySlug);
  }, [categorySlug]);

  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<MenuFilter>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Filter items matching current category, dietary, search, and subcategory
  const categoryDishes = useMemo(() => {
    return menuItems.filter((item) => {
      // 1. Category match
      if (categorySlug === 'vegetarian') {
        if (item.type !== 'veg') return false;
      } else if (categorySlug === 'non-vegetarian') {
        if (item.type !== 'non-veg') return false;
      } else if (item.categoryId !== categorySlug) {
        return false;
      }

      // 2. Dietary filter toggle
      if (dietaryFilter !== 'all' && item.type !== dietaryFilter) {
        return false;
      }

      // 3. Subcategory
      if (selectedSubcategory !== 'all' && item.subcategory !== selectedSubcategory) {
        return false;
      }

      // 4. Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesHindi = item.hindiName?.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        return matchesName || matchesHindi || matchesDesc;
      }

      return true;
    });
  }, [categorySlug, dietaryFilter, selectedSubcategory, searchQuery]);

  // Extract distinct subcategories within this category
  const subcategories = useMemo(() => {
    const subs = new Set<string>();
    menuItems.forEach((item) => {
      if (
        categorySlug === 'vegetarian' && item.type === 'veg' && item.subcategory ||
        categorySlug === 'non-vegetarian' && item.type === 'non-veg' && item.subcategory ||
        item.categoryId === categorySlug && item.subcategory
      ) {
        if (item.subcategory) subs.add(item.subcategory);
      }
    });
    return Array.from(subs);
  }, [categorySlug]);

  if (!currentCategory && categorySlug !== 'vegetarian' && categorySlug !== 'non-vegetarian') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-brand-dark text-brand-ivory text-center">
        <h2 className="font-serif text-3xl font-bold mb-4">Category Not Found</h2>
        <p className="text-stone-400 text-sm mb-6">
          The requested menu category does not exist in our catalog.
        </p>
        <Link
          href="/menu"
          className="px-6 py-3 rounded-full bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider shadow-gold-glow"
        >
          Return to Menu
        </Link>
      </div>
    );
  }

  // Titles for special categories
  const categoryTitle =
    categorySlug === 'vegetarian'
      ? 'Vegetarian Favourites'
      : categorySlug === 'non-vegetarian'
      ? 'Non-Vegetarian Favourites'
      : currentCategory?.name || 'Menu Category';

  const seoTitle = currentCategory?.seoTitle || `Gupta Restaurant | ${categoryTitle}`;
  const seoDescription =
    currentCategory?.seoDescription ||
    `Browse authentic ${categoryTitle} at Gupta Restaurant, Thawe, Gopalganj. Freshly prepared with traditional spices.`;

  const heroImage =
    currentCategory?.image ||
    (categorySlug === 'vegetarian'
      ? 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop'
      : 'https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=1200&auto=format&fit=crop');

  return (
    <div className="bg-brand-dark min-h-screen text-brand-ivory pt-24 sm:pt-28 pb-24">
      <SEOHead title={seoTitle} description={seoDescription} />

      {/* Category Hero Banner */}
      <section className="relative py-14 sm:py-20 bg-brand-surface border-b border-brand-gold/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={categoryTitle}
            className="w-full h-full object-cover object-center filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-surface/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-gold-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Categories</span>
          </Link>

          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-ivory">
              {categoryTitle}
            </h1>
            <p className="text-stone-300 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
              {currentCategory?.description ||
                'Prepared fresh with traditional slow-cooking methods and authentic regional flavours.'}
            </p>
          </div>

          {/* Search Bar */}
          <div className="pt-2">
            <MenuSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              resultCount={categoryDishes.length}
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Subcategory & Dietary Filters */}
          <div className="p-4 sm:p-5 rounded-2xl bg-brand-surface border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Dietary Toggle (only for mixed categories) */}
            {categorySlug !== 'vegetarian' && categorySlug !== 'non-vegetarian' && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setDietaryFilter('all')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    dietaryFilter === 'all'
                      ? 'bg-brand-gold text-brand-dark'
                      : 'bg-brand-dark text-stone-300 hover:text-white border border-stone-700'
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setDietaryFilter('veg')}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    dietaryFilter === 'veg'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-brand-dark text-stone-300 hover:text-white border border-stone-700'
                  }`}
                >
                  <VegBadge type="veg" size="sm" />
                  <span>Veg</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    dietaryFilter === 'non-veg'
                      ? 'bg-red-600 text-white'
                      : 'bg-brand-dark text-stone-300 hover:text-white border border-stone-700'
                  }`}
                >
                  <VegBadge type="non-veg" size="sm" />
                  <span>Non-Veg</span>
                </button>
              </div>
            )}

            {/* Subcategory Chips */}
            {subcategories.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                <button
                  type="button"
                  onClick={() => setSelectedSubcategory('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex-shrink-0 transition-all ${
                    selectedSubcategory === 'all'
                      ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold/50 font-semibold'
                      : 'bg-brand-dark text-stone-400 hover:text-stone-200 border border-stone-800'
                  }`}
                >
                  All {categoryTitle}
                </button>

                {subcategories.map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex-shrink-0 transition-all ${
                      selectedSubcategory === sub
                        ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold/50 font-semibold'
                        : 'bg-brand-dark text-stone-400 hover:text-stone-200 border border-stone-800'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dishes Grid */}
          {categoryDishes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {categoryDishes.map((dish) => (
                <FoodCard
                  key={dish.id}
                  item={dish}
                  onSelect={setSelectedDish}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-brand-surface border border-stone-800 space-y-4 max-w-md mx-auto">
              <Utensils className="w-10 h-10 text-stone-500 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-brand-ivory">
                No dishes match your selection
              </h3>
              <p className="text-xs text-stone-400">
                Try switching your dietary or subcategory filter to discover more offerings.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setDietaryFilter('all');
                  setSelectedSubcategory('all');
                }}
                className="px-5 py-2.5 rounded-full bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider shadow-gold-glow"
              >
                Reset Filters
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
