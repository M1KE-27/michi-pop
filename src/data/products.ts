export type ProductCategory = 'llaveros' | 'collares' | 'accesorios';

export interface Product {
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  colors: string[];
  available: boolean;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    slug: 'llavero-bubble-dog',
    name: 'Bubble Dog',
    price: 18,
    category: 'llaveros',
    colors: ['rosa', 'menta', 'lila'],
    available: true,
    image: 'bubble-dog',
    description: 'Llavero mini de abalorios y charm, montado a mano pieza a pieza.',
  },
  {
    slug: 'llavero-love',
    name: 'Love Charm',
    price: 16,
    category: 'llaveros',
    colors: ['rosa', 'amarillo'],
    available: true,
    image: 'love-charm',
    description: 'Un charm pequeño, colorido y ligero para llevarlo donde quieras.',
  },
  {
    slug: 'collar-candy',
    name: 'Candy Collar',
    price: 24,
    category: 'collares',
    colors: ['rosa', 'lila', 'azul'],
    available: true,
    image: 'candy-collar',
    description: 'Collar de cuentas pastel con cierre suave y corazón central.',
  },
  {
    slug: 'collar-mint-heart',
    name: 'Mint Heart',
    price: 22,
    category: 'collares',
    colors: ['menta', 'amarillo'],
    available: false,
    image: 'mint-heart',
    description: 'Composición de cuentas menta y un corazón central hecho para destacar.',
  },
  {
    slug: 'charm-flower-party',
    name: 'Flower Party',
    price: 14,
    category: 'accesorios',
    colors: ['amarillo', 'rosa', 'lima'],
    available: true,
    image: 'flower-party',
    description: 'Charm floral para añadir color a bolso, mochila, funda o llavero.',
  },
  {
    slug: 'clip-candy',
    name: 'Candy Clip',
    price: 12,
    category: 'accesorios',
    colors: ['lila', 'naranja', 'azul'],
    available: true,
    image: 'candy-clip',
    description: 'Clip colorido para sujetar tus pequeños objetos con personalidad.',
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  llaveros: 'Llaveros',
  collares: 'Collares',
  accesorios: 'Accesorios',
};
