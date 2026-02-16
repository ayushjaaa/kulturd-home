
import { Flavor, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Flavors', href: '#flavors' },
  { label: 'Our Story', href: '#story' },
  { label: 'Subscribe', href: '#subscribe' },
];

export const FLAVORS: Flavor[] = [
  {
    id: 'coffee-orange',
    name: 'Coffee & Orange',
    description: 'A zesty morning awakening.',
    image: 'https://kulturd.co/wp-content/uploads/2023/08/SaveInsta.App-3163995220186138833_39214009458.mp4',
    bgColor: 'bg-red-100/50',
    span: 'md:col-span-4',
    align: 'left',
  },
  {
    id: 'golden-mango',
    name: 'Golden Mango',
    description: 'Sun-drenched tropical vibes.',
    image: 'https://kulturd.co/wp-content/uploads/2023/08/SaveInsta.App-3087289122417821346_39214009458.mp4',
    bgColor: 'bg-yellow-100/50',
    span: 'md:col-span-5 md:pb-32',
    align: 'center',
    rotate: 'group-hover:rotate-12',
  },
  {
    id: 'velvet-peach',
    name: 'Velvet Peach',
    description: 'Smooth, floral, and fine.',
    image: 'https://kulturd.co/wp-content/uploads/2023/08/SaveInsta.App-3084924287654865379_39214009458.mp4',
    bgColor: 'bg-orange-100/50',
    span: 'md:col-span-3',
    align: 'left',
  },
  {
    id: 'apple-spice',
    name: 'Apple & Spice',
    description: 'The comfort of crisp autumn.',
    image: 'https://kulturd.co/wp-content/uploads/2023/08/SaveInsta.App-2930560466080804048_2016736736.mp4',
    bgColor: 'bg-orange-200/30',
    span: 'md:col-span-4 md:col-start-8 mt-12',
    align: 'right',
  }
];
