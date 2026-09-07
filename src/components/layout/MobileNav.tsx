import React from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, Navigation, MapPin, Clock, ChevronRight } from 'lucide-react';
import { restaurantData } from '@/data/restaurant';

interface NavLink {
  name: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, links }) => {
  const [location] = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-brand-dark border-l border-brand-gold/20 z-50 flex flex-col justify-between p-6 shadow-2xl overflow-y-auto lg:hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                    <span className="font-serif font-bold text-xl">G</span>
                  </div>
                  <div>
                    <span className="font-serif font-bold text-lg text-brand-ivory block">GUPTA</span>
                    <span className="text-[10px] tracking-widest text-brand-gold uppercase block -mt-1 font-semibold">
                      Restaurant
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-stone-400 hover:text-white rounded-full bg-stone-900 border border-stone-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 space-y-1">
                {links.map((link) => {
                  const isActive = link.href === '/' ? location === '/' : location.startsWith(link.href);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-surface text-brand-gold border border-brand-gold/20'
                          : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-stone-500" />
                    </a>
                  );
                })}
              </nav>

              {/* Quick Category Shortcut */}
              <div className="pt-2 pb-4 border-t border-stone-800/80">
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-3 block">
                  Popular Categories
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    href="/menu/biryani"
                    onClick={onClose}
                    className="p-2.5 rounded-lg bg-brand-surface text-stone-300 hover:text-brand-gold border border-stone-800 text-center"
                  >
                    Biryani
                  </Link>
                  <Link
                    href="/menu/non-vegetarian"
                    onClick={onClose}
                    className="p-2.5 rounded-lg bg-brand-surface text-stone-300 hover:text-brand-gold border border-stone-800 text-center"
                  >
                    Mutton Handi
                  </Link>
                  <Link
                    href="/menu/vegetarian"
                    onClick={onClose}
                    className="p-2.5 rounded-lg bg-brand-surface text-stone-300 hover:text-brand-gold border border-stone-800 text-center"
                  >
                    Paneer Specials
                  </Link>
                  <Link
                    href="/menu/chinese"
                    onClick={onClose}
                    className="p-2.5 rounded-lg bg-brand-surface text-stone-300 hover:text-brand-gold border border-stone-800 text-center"
                  >
                    Indo-Chinese
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Actions & Info */}
            <div className="pt-6 border-t border-stone-800 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${restaurantData.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-brand-surface border border-stone-700 text-brand-ivory text-xs font-semibold hover:border-brand-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>Call Us</span>
                </a>
                <a
                  href={restaurantData.googleMaps.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-brand-surface border border-stone-700 text-brand-ivory text-xs font-semibold hover:border-brand-gold transition-colors"
                >
                  <Navigation className="w-4 h-4 text-brand-gold" />
                  <span>Directions</span>
                </a>
              </div>

              <a
                href={`https://wa.me/${restaurantData.whatsapp}?text=${encodeURIComponent(
                  'Hello Gupta Restaurant, I would like to enquire about your menu and restaurant.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-gold text-brand-dark font-semibold text-sm shadow-gold-glow uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Enquiry</span>
              </a>

              <div className="text-[11px] text-stone-400 space-y-1.5 pt-2">
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>Near V-Mart, Ward 15, Thawe, Gopalganj</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                  <span>9:00 AM – 11:00 PM (Daily)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
