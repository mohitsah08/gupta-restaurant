export type DietaryType = 'veg' | 'non-veg';

export interface PriceVariation {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: string;
  categoryId: string;
  subcategory?: string;
  type: DietaryType;
  price: number;
  halfPrice?: number;
  fullPrice?: number;
  variations?: PriceVariation[];
  description: string;
  image: string;
  popular?: boolean;
  chefSpecial?: boolean;
  spicyLevel?: 1 | 2 | 3;
  available: boolean;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount?: number;
  seoTitle: string;
  seoDescription: string;
}

export type MenuFilter = 'all' | 'veg' | 'non-veg';
