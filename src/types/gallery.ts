export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'food' | 'ambiance' | 'specialties' | 'dining';
  categoryLabel: string;
  image: string;
  alt: string;
  description?: string;
}
