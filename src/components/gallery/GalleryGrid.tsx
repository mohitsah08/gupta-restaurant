import React, { useState } from 'react';
import { galleryItems } from '@/data/gallery';
import { Lightbox } from './Lightbox';
import { Eye } from 'lucide-react';

export const GalleryGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photographs' },
    { id: 'specialties', label: 'Signature Dishes' },
    { id: 'food', label: 'Food & Breads' },
    { id: 'ambiance', label: 'Ambiance' },
    { id: 'dining', label: 'Family Dining' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedFilter);

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setSelectedFilter(tab.id)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 ${
              selectedFilter === tab.id
                ? 'bg-brand-gold text-brand-dark shadow-gold-glow scale-105'
                : 'bg-brand-surface text-stone-300 hover:text-white border border-stone-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxIndex(index)}
            className="group relative cursor-pointer rounded-2xl overflow-hidden bg-brand-surface border border-stone-800 hover:border-brand-gold/40 shadow-lg hover:shadow-gold-glow/20 transition-all duration-300"
          >
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-dark/80 backdrop-blur-sm border border-brand-gold/30 text-[10px] uppercase font-bold tracking-wider text-brand-gold">
                {item.categoryLabel}
              </div>

              {/* View Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3.5 rounded-full bg-brand-gold text-brand-dark shadow-gold-glow scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-serif font-bold text-base sm:text-lg text-brand-ivory leading-tight">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        items={filteredItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
