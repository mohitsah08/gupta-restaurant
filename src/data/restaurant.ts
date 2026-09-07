import { RestaurantInfo } from '@/types/restaurant';

export const restaurantData: RestaurantInfo = {
  name: 'Gupta Restaurant',
  hindiName: 'गुप्ता रेस्टोरेंट',
  tagline: 'Good Food. Great Moments.',
  subTagline: 'Discover comforting Indian flavours, satisfying favourites and memorable meals at Gupta Restaurant.',
  address: {
    shopNo: 'Shop No. 1',
    street: 'Main Road',
    landmark: 'Near V Mart',
    ward: 'Ward No. 15',
    locality: 'Thawe',
    city: 'Gopalganj',
    state: 'Bihar',
    pincode: '841428',
    full: 'Shop No. 1, Main Road, Near V Mart, Ward No. 15, Thawe, Gopalganj, Bihar 841428',
  },
  phone: '08002970915',
  displayPhone: '+91 80029 70915',
  whatsapp: '918002970915',
  displayWhatsApp: '+91 80029 70915',
  hours: {
    open: '09:00 AM',
    close: '11:00 PM',
    formatted: '9:00 AM – 11:00 PM',
    days: 'All 7 Days (Mon – Sun)',
  },
  pricing: {
    range: '₹200 – ₹400',
    approxForTwo: '₹500 for two',
  },
  services: [
    'Dine-In',
    'Takeaway & Parcel',
    'Fast Home Delivery',
    'Family Dining Hall',
    'Group & Party Bookings',
  ],
  googleMaps: {
    directUrl: 'https://www.google.com/maps/search/?api=1&query=Gupta+Restaurant+Near+V+Mart+Ward+No+15+Thawe+Gopalganj+Bihar+841428',
    embedUrl: 'https://www.google.com/maps?q=Gupta+Restaurant+Near+V+Mart+Thawe+Gopalganj+Bihar+841428&output=embed',
    coordinates: {
      lat: 26.4357,
      lng: 84.4079,
    },
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
};
