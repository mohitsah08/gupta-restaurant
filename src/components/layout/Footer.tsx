import React from 'react';
import { Link } from 'wouter';
import { Phone, MessageCircle, MapPin, Clock, Navigation, ArrowUp } from 'lucide-react';
import { restaurantData } from '@/data/restaurant';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-brand-gold/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                <span className="font-serif font-bold text-xl">G</span>
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-brand-ivory tracking-wider block">
                  GUPTA RESTAURANT
                </span>
                <span className="text-[10px] tracking-widest text-brand-gold uppercase block -mt-1 font-semibold">
                  Thawe, Gopalganj
                </span>
              </div>
            </div>

            <p className="font-serif italic text-lg text-brand-gold">
              "{restaurantData.tagline}"
            </p>

            <p className="text-sm text-stone-400 leading-relaxed">
              Serving comforting North Indian classics, signature Mutton Handi, aromatic dum biryanis, and Indo-Chinese favourites for families and travellers.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={restaurantData.googleMaps.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-gold/30 text-xs text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all flex items-center gap-1.5 font-medium"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
              <a
                href={`tel:${restaurantData.phone}`}
                className="px-3.5 py-1.5 rounded-full bg-brand-surface border border-stone-700 text-xs text-stone-300 hover:text-white transition-all flex items-center gap-1.5 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-brand-gold transition-colors block py-0.5">
                  Complete Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors block py-0.5">
                  Our Story &amp; Ambiance
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-gold transition-colors block py-0.5">
                  Food &amp; Dining Gallery
                </Link>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-brand-gold transition-colors block py-0.5">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="/#location" className="hover:text-brand-gold transition-colors block py-0.5">
                  Location &amp; Maps
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors block py-0.5">
                  Contact &amp; Group Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Menu Categories */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold">
              Signature Menus
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/menu/biryani" className="hover:text-brand-gold transition-colors block py-0.5">
                  Dum Biryani Special
                </Link>
              </li>
              <li>
                <Link href="/menu/non-vegetarian" className="hover:text-brand-gold transition-colors block py-0.5">
                  Mutton Handi &amp; Curries
                </Link>
              </li>
              <li>
                <Link href="/menu/vegetarian" className="hover:text-brand-gold transition-colors block py-0.5">
                  Paneer &amp; Dal Makhani
                </Link>
              </li>
              <li>
                <Link href="/menu/starters" className="hover:text-brand-gold transition-colors block py-0.5">
                  Tandoori Sizzlers &amp; Kebabs
                </Link>
              </li>
              <li>
                <Link href="/menu/chinese" className="hover:text-brand-gold transition-colors block py-0.5">
                  Indo-Chinese Chowmein
                </Link>
              </li>
              <li>
                <Link href="/menu/breads" className="hover:text-brand-gold transition-colors block py-0.5">
                  Fresh Butter Naan &amp; Rotis
                </Link>
              </li>
              <li>
                <Link href="/menu/rolls" className="hover:text-brand-gold transition-colors block py-0.5">
                  Kolkata-Style Rolls
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Business Info */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold">
              Restaurant Details
            </h4>

            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-1" />
                <p className="text-xs leading-relaxed text-stone-300">
                  {restaurantData.address.full}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-xs">
                  {restaurantData.hours.formatted} ({restaurantData.hours.days})
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href={`tel:${restaurantData.phone}`}
                  className="text-xs hover:text-brand-gold transition-colors"
                >
                  {restaurantData.displayPhone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${restaurantData.whatsapp}?text=${encodeURIComponent(
                    'Hello Gupta Restaurant, I would like to enquire about your menu and restaurant.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-gold text-brand-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:bg-brand-gold-hover transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Direct WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Gupta Restaurant, Thawe, Gopalganj. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span>Dine-In • Takeaway • Fast Delivery</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-brand-surface hover:bg-brand-gold hover:text-brand-dark transition-colors border border-stone-800"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
