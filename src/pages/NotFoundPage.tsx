import React from 'react';
import { Link } from 'wouter';
import { Utensils, Home } from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-[85vh] text-brand-ivory flex items-center justify-center p-6 text-center pt-28 pb-20">
      <SEOHead title="Page Not Found | Gupta Restaurant" />

      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-full bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold mx-auto shadow-gold-glow">
          <Utensils className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-gold">
            Error 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ivory">
            Looks like this dish isn't on the menu.
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
            The page or recipe you are looking for might have moved, or the link may be out of date.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:bg-brand-gold-hover transition-all"
          >
            <Utensils className="w-4 h-4" />
            <span>Back to Menu</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-surface border border-stone-700 text-stone-300 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
