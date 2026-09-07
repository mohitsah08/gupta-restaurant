import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { reviewsData } from '@/data/reviews';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-brand-dark text-brand-ivory border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Verified Local Feedback</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-ivory">
            What Our Patrons Say
          </h2>

          {/* Rating Summary Pill */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface border border-brand-gold/30">
              <div className="flex text-brand-gold">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <Star className="w-4 h-4 fill-current opacity-60" />
              </div>
              <span className="font-serif font-bold text-lg text-brand-gold">
                {reviewsData.rating}
              </span>
              <span className="text-xs text-stone-400">
                ({reviewsData.totalReviewsCount} Google Reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {reviewsData.reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-stone-800 hover:border-brand-gold/30 transition-all duration-300 flex flex-col justify-between shadow-lg relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-brand-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-500 font-medium">
                    {rev.date}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-ivory">
                    {rev.author}
                  </h4>
                  <span className="text-xs text-stone-400">
                    {rev.location}
                  </span>
                </div>

                {rev.highlightDish && (
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-brand-gold block font-semibold">
                      Recommended
                    </span>
                    <span className="text-xs text-stone-300">
                      {rev.highlightDish}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA: Read Google Reviews on Google Maps */}
        <div className="text-center">
          <a
            href={reviewsData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-surface hover:bg-stone-800 text-brand-gold border border-brand-gold/40 hover:border-brand-gold font-bold text-xs uppercase tracking-wider shadow-gold-glow transition-all active:scale-95"
          >
            <span>Read Google Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
