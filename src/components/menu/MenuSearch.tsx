import React from 'react';
import { Search, X } from 'lucide-react';

interface MenuSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resultCount?: number;
}

export const MenuSearch: React.FC<MenuSearchProps> = ({
  searchQuery,
  setSearchQuery,
  resultCount,
}) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-stone-400">
          <Search className="w-5 h-5 text-brand-gold" />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for Paneer, Biryani, Chicken, Chowmein, Roti..."
          className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-full bg-brand-surface border border-stone-800 text-brand-ivory placeholder-stone-400 text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-2 focus:ring-brand-gold/20 transition-all shadow-lg"
          aria-label="Search dishes on menu"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-4 p-1 rounded-full text-stone-400 hover:text-white bg-stone-800"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {searchQuery && typeof resultCount === 'number' && (
        <div className="text-center mt-2 text-xs text-stone-400">
          Found <span className="font-semibold text-brand-gold">{resultCount}</span> {resultCount === 1 ? 'dish' : 'dishes'} matching "{searchQuery}"
        </div>
      )}
    </div>
  );
};
