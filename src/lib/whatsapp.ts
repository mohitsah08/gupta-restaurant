import { restaurantData } from '@/data/restaurant';

export interface GroupBookingParams {
  date?: string;
  guests?: string | number;
  time?: string;
  name?: string;
  notes?: string;
}

export function getWhatsAppUrl(message: string): string {
  const phone = restaurantData.whatsapp;
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function getDishEnquiryUrl(dishName: string, price?: number): string {
  const priceInfo = price ? ` (₹${price})` : '';
  const message = `Hello Gupta Restaurant,
I would like to enquire about *${dishName}*${priceInfo}.
Please share its availability, portion details, and how quickly it can be prepared.`;
  return getWhatsAppUrl(message);
}

export function getGeneralEnquiryUrl(): string {
  const message = `Hello Gupta Restaurant,
I would like to enquire about your menu, dining space, and restaurant services.`;
  return getWhatsAppUrl(message);
}

export function getMenuEnquiryUrl(): string {
  const message = `Hello Gupta Restaurant,
I would like to know more about today's menu specials and current availability.`;
  return getWhatsAppUrl(message);
}

export function getGroupBookingUrl(params: GroupBookingParams): string {
  const message = `Hello Gupta Restaurant,
I would like to enquire about a family/group visit.

• Name: ${params.name || 'Valued Guest'}
• Date: ${params.date || 'Upcoming'}
• Number of people: ${params.guests || 'Not specified'}
• Preferred time: ${params.time || 'Dinner/Lunch'}
${params.notes ? `• Special request: ${params.notes}` : ''}

Please confirm table availability and dining arrangements.`;
  return getWhatsAppUrl(message);
}
