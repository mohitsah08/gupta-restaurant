import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
  url?: string;
  variant?: 'gold' | 'green' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
  iconOnly?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hello Gupta Restaurant, I would like to enquire about your menu and restaurant.",
  url,
  variant = 'green',
  size = 'md',
  label = 'WhatsApp Us',
  className = '',
  iconOnly = false,
}) => {
  const targetUrl = url || getWhatsAppUrl(message);

  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-95 text-center";

  const sizeStyles = {
    sm: iconOnly ? 'p-2' : 'px-3.5 py-1.5 text-xs gap-1.5',
    md: iconOnly ? 'p-2.5' : 'px-5 py-2.5 text-sm gap-2',
    lg: iconOnly ? 'p-3.5' : 'px-6 py-3.5 text-base gap-2.5 shadow-lg',
  };

  const variantStyles = {
    green: 'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-emerald-900/20 hover:shadow-lg',
    gold: 'bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-semibold shadow-gold-glow hover:shadow-gold-glow-lg',
    dark: 'bg-brand-dark hover:bg-brand-surface text-brand-ivory border border-brand-gold/30',
    outline: 'border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white',
  };

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label={label}
    >
      <MessageCircle className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} fill-current`} />
      {!iconOnly && <span>{label}</span>}
    </a>
  );
};
