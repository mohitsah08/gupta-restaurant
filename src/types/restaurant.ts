export interface RestaurantInfo {
  name: string;
  hindiName: string;
  tagline: string;
  subTagline: string;
  address: {
    shopNo: string;
    street: string;
    landmark: string;
    ward: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  phone: string;
  displayPhone: string;
  whatsapp: string;
  displayWhatsApp: string;
  hours: {
    open: string;
    close: string;
    formatted: string;
    days: string;
  };
  pricing: {
    range: string;
    approxForTwo: string;
  };
  services: string[];
  googleMaps: {
    directUrl: string;
    embedUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  social: {
    instagram?: string;
    facebook?: string;
  };
}
