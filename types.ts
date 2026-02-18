
export interface Flavor {
  id: string;
  name: string;
  description: string;
  image: string;
  bgColor: string;
  span: string;
  align: 'left' | 'center' | 'right';
  rotate?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  bgColor: string;
  tag: string;
  description?: string;
}

export type PackSize = '6-PACK' | '12-PACK' | '24-PACK';

export interface CartItem {
  id: string;
  product: Product;
  size: PackSize;
  quantity: number;
}
