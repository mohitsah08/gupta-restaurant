import React from 'react';
import { Camera } from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';

export const GalleryPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-ivory pt-24 sm:pt-28 pb-24">
      <SEOHead
        title="Gupta Restaurant | Dining & Food Gallery"
        description="Experience the visual atmosphere of Gupta Restaurant Thawe, Gopalganj. Explore our signature Mutton Handi, Biryanis, tandoori appetizers, and dining ambiance."
      />

      {/* Hero */}
      <section className="relative py-14 sm:py-20 bg-brand-surface border-b border-brand-gold/20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Dining Experience</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-ivory">
            Our Gallery
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            A glimpse into our kitchen's artistry, signature slow-cooked clay pot specialties, and welcoming dining space in Thawe, Gopalganj.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
};
