
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  details: string[];
  stock: number;
  colors: string[];
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}
