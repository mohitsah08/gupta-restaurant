import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { restaurantData } from '@/data/restaurant';
import { MobileNav } from './MobileNav';

export const Navbar: React.FC = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Location', href: '/#location' },
    { name: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') return location === '/';
    if (href.startsWith('/#')) return false;
    return location.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 border-b border-brand-gold/15 shadow-premium-dark'
            : 'bg-gradient-to-b from-brand-dark/95 via-brand-dark/70 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link href="/" className="group flex items-center gap-3 select-none">
              <div className="w-10 h-10 rounded-full bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-gold-glow group-hover:border-brand-gold transition-colors">
                <span className="font-serif font-bold text-xl tracking-tight text-brand-gold">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-brand-ivory group-hover:text-brand-gold transition-colors leading-tight">
                  GUPTA
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  Restaurant
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    isLinkActive(link.href)
                      ? 'text-brand-gold'
                      : 'text-stone-300 hover:text-brand-ivory'
                  }`}
                >
                  {link.name}
                  {isLinkActive(link.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Quick Action Buttons (Desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${restaurantData.phone}`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-brand-gold transition-colors"
                title="Call Restaurant"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>{restaurantData.displayPhone}</span>
              </a>

              <a
                href={`https://wa.me/${restaurantData.whatsapp}?text=${encodeURIComponent(
                  'Hello Gupta Restaurant, I would like to enquire about your menu and dining.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-brand-gold text-brand-dark hover:bg-brand-gold-hover shadow-gold-glow transition-all active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${restaurantData.phone}`}
                className="p-2 text-brand-gold hover:text-brand-ivory rounded-full bg-brand-surface/60 border border-brand-gold/20"
                aria-label="Call Restaurant"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-200 hover:text-brand-gold rounded-lg focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
};
