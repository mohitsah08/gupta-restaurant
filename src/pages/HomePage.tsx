import React from 'react';
import { SEOHead } from '@/components/common/SEOHead';
import { Hero } from '@/components/home/Hero';
import { QuickInfoStrip } from '@/components/home/QuickInfoStrip';
import { FoodExperience } from '@/components/home/FoodExperience';
import { MenuPreview } from '@/components/home/MenuPreview';
import { StorySection } from '@/components/home/StorySection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { LocationSection } from '@/components/home/LocationSection';
import { ClosingCTA } from '@/components/home/ClosingCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Gupta Restaurant | Authentic Indian & Indo-Chinese Dining in Thawe, Gopalganj"
        description="Experience authentic North Indian flavours, signature Mutton Handi, aromatic Biryanis, and Indo-Chinese specialties at Gupta Restaurant, Thawe, Gopalganj, Bihar."
      />
      <div className="space-y-0">
        <Hero />
        <QuickInfoStrip />
        <FoodExperience />
        <MenuPreview />
        <StorySection />
        <ReviewsSection />
        <LocationSection />
        <ClosingCTA />
      </div>
    </>
  );
};
