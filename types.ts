
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
