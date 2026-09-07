import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone } from 'lucide-react';
import { MenuItem } from '@/types/menu';
import { VegBadge } from '@/components/common/VegBadge';
import { getDishEnquiryUrl } from '@/lib/whatsapp';
import { restaurantData } from '@/data/restaurant';

interface FoodDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const FoodDetailModal: React.FC<FoodDetailModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappUrl = getDishEnquiryUrl(item.name, item.price);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal / Bottom Sheet Container */}
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 280 }}
          className="relative w-full max-w-2xl bg-brand-dark border-t sm:border border-brand-gold/30 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dish-modal-title"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:text-brand-gold border border-stone-700/60 backdrop-blur-md transition-colors"
            aria-label="Close dish details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden flex-shrink-0 bg-stone-900">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />

            {/* Badges on Image */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2.5">
              <div className="bg-brand-dark/90 backdrop-blur-sm p-1.5 rounded-lg border border-stone-700/60 shadow-md">
                <VegBadge type={item.type} size="md" showLabel />
              </div>
              <span className="px-3 py-1 rounded-full bg-brand-surface border border-brand-gold/30 text-xs font-semibold text-brand-gold">
                {item.category}
              </span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
            {/* Title & Hindi Script */}
            <div className="space-y-1 border-b border-stone-800 pb-4">
              <h2 id="dish-modal-title" className="font-serif font-bold text-2xl sm:text-3xl text-brand-ivory leading-snug">
                {item.name}
              </h2>
              {item.hindiName && (
                <p className="text-sm sm:text-base text-brand-gold font-normal">
                  {item.hindiName}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                Description &amp; Preparation
              </span>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>

            {/* Pricing & Portion Breakdown */}
            <div className="p-4 rounded-2xl bg-brand-surface border border-stone-800 space-y-3">
              <span className="text-xs uppercase tracking-wider text-brand-gold font-bold block">
                Portion Pricing
              </span>

              {item.halfPrice && item.fullPrice ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-brand-dark border border-stone-800">
                    <span className="text-xs text-stone-400 block">Half Portion</span>
                    <span className="font-serif font-bold text-xl text-brand-gold">
                      ₹{item.halfPrice}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-dark border border-stone-800">
                    <span className="text-xs text-stone-400 block">Full Portion</span>
                    <span className="font-serif font-bold text-xl text-brand-gold">
                      ₹{item.fullPrice}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-2xl text-brand-gold">
                    ₹{item.price}
                  </span>
                  <span className="text-xs text-stone-400">Regular serving</span>
                </div>
              )}
            </div>

            {/* Dietary Tags & Notes */}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-brand-surface border border-stone-700 text-xs text-stone-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Modal Actions Footer */}
          <div className="p-4 sm:p-6 bg-brand-surface border-t border-stone-800 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask About This Dish on WhatsApp</span>
            </a>

            <a
              href={`tel:${restaurantData.phone}`}
              className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-brand-dark hover:bg-stone-800 text-brand-gold border border-brand-gold/40 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Restaurant</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
