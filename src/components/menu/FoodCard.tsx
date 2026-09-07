import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { MenuItem } from '@/types/menu';
import { VegBadge } from '@/components/common/VegBadge';
import { getDishEnquiryUrl } from '@/lib/whatsapp';

interface FoodCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onSelect }) => {
  const whatsappUrl = getDishEnquiryUrl(item.name, item.price);

  return (
    <div
      onClick={() => onSelect(item)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-brand-surface border border-stone-800 hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-gold-glow/20 relative"
    >
      {/* Top Image Section */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-stone-900">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-black/20" />

        {/* Dietary Badge */}
        <div className="absolute top-3 left-3 bg-brand-dark/85 backdrop-blur-sm p-1.5 rounded-lg border border-stone-700/60 shadow-md">
          <VegBadge type={item.type} size="md" />
        </div>

        {/* Popular / Specialty Badge */}
        {item.popular && (
          <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-brand-gold text-brand-dark font-bold text-[10px] uppercase tracking-wider shadow-md">
            Popular
          </div>
        )}

        {item.chefSpecial && (
          <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-amber-500 text-brand-dark font-bold text-[10px] uppercase tracking-wider shadow-md">
            Specialty
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-3">
        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif font-bold text-base sm:text-lg text-brand-ivory group-hover:text-brand-gold transition-colors leading-snug">
              {item.name}
            </h3>
          </div>

          {item.hindiName && (
            <span className="text-xs text-brand-gold/80 block font-normal">
              {item.hindiName}
            </span>
          )}

          <p className="text-xs text-stone-400 leading-relaxed line-clamp-2 pt-1">
            {item.description}
          </p>
        </div>

        {/* Portion & Pricing Footer */}
        <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
          <div>
            {item.halfPrice && item.fullPrice ? (
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-stone-400">Half:</span>
                  <span className="font-serif font-bold text-brand-gold">₹{item.halfPrice}</span>
                  <span className="text-stone-600">•</span>
                  <span className="text-stone-400">Full:</span>
                  <span className="font-serif font-bold text-brand-gold">₹{item.fullPrice}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="font-serif font-bold text-lg text-brand-gold">
                  ₹{item.price}
                </span>
                <span className="text-[10px] text-stone-400">per portion</span>
              </div>
            )}
          </div>

          {/* Actions: View Details / WhatsApp */}
          <div className="flex items-center gap-1.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/60 transition-colors"
              title="Enquire on WhatsApp"
              aria-label={`Enquire about ${item.name} on WhatsApp`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            <div className="p-2 rounded-full text-stone-400 group-hover:text-brand-gold group-hover:bg-brand-gold/10 transition-colors">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
