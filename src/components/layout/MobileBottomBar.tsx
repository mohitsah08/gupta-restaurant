import React from 'react';
import { Link, useLocation } from 'wouter';
import { Home, UtensilsCrossed, MapPin, MessageCircle, Phone } from 'lucide-react';
import { restaurantData } from '@/data/restaurant';

export const MobileBottomBar: React.FC = () => {
  const [location] = useLocation();

  const isHome = location === '/';
  const isMenu = location.startsWith('/menu');
  const isContact = location === '/contact';

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#141210]/95 backdrop-blur-md border-t border-brand-gold/20 shadow-[0_-4px_25px_rgba(0,0,0,0.5)] transition-all"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Mobile Bottom Navigation"
    >
      <div className="grid grid-cols-5 items-center h-16 px-1">
        {/* 1. HOME */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
            isHome
              ? 'text-brand-gold font-semibold scale-105'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Home className={`w-5 h-5 transition-transform ${isHome ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
          <span className="text-[10px] tracking-tight mt-1 uppercase font-medium">Home</span>
          {isHome && (
            <span className="w-1 h-1 bg-brand-gold rounded-full mt-0.5" />
          )}
        </Link>

        {/* 2. MENU */}
        <Link
          href="/menu"
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
            isMenu
              ? 'text-brand-gold font-semibold scale-105'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <UtensilsCrossed className={`w-5 h-5 transition-transform ${isMenu ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
          <span className="text-[10px] tracking-tight mt-1 uppercase font-medium">Menu</span>
          {isMenu && (
            <span className="w-1 h-1 bg-brand-gold rounded-full mt-0.5" />
          )}
        </Link>

        {/* 3. LOCATION */}
        <a
          href="/#location"
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
            isContact
              ? 'text-brand-gold font-semibold scale-105'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <MapPin className="w-5 h-5 stroke-[1.8px]" />
          <span className="text-[10px] tracking-tight mt-1 uppercase font-medium">Location</span>
        </a>

        {/* 4. WHATSAPP */}
        <a
          href={`https://wa.me/${restaurantData.whatsapp}?text=${encodeURIComponent(
            'Hello Gupta Restaurant, I would like to enquire about your menu and restaurant.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-emerald-400 hover:text-emerald-300 transition-all duration-200 active:scale-95"
          aria-label="Enquire on WhatsApp"
        >
          <div className="p-1 rounded-full bg-emerald-950/80 border border-emerald-500/40">
            <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 uppercase font-semibold text-[#25D366]">
            WhatsApp
          </span>
        </a>

        {/* 5. CALL */}
        <a
          href={`tel:${restaurantData.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-brand-gold hover:text-brand-gold-light transition-all duration-200 active:scale-95"
          aria-label="Call Restaurant"
        >
          <div className="p-1 rounded-full bg-brand-gold/15 border border-brand-gold/40">
            <Phone className="w-4 h-4 stroke-[2.2px] text-brand-gold" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 uppercase font-semibold text-brand-gold">
            Call
          </span>
        </a>
      </div>
    </nav>
  );
};
