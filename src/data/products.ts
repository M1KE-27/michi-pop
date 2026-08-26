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
    slug: 'llavero-perrito',
    name: 'Llavero Perrito',
    price: 5.99,
    category: 'llaveros',
    colors: ['rosa', 'menta', 'lila'],
    available: true,
    image: 'bubble-dog',
    description: 'Llavero mini de abalorios y charm, montado a mano pieza a pieza.',
  },
  {
    slug: 'llavero-corazon',
    name: 'Llavero Corazón',
    price: 5.99,
    category: 'llaveros',
    colors: ['rosa', 'amarillo'],
    available: true,
    image: 'love-charm',
    description: 'Un charm pequeño, colorido y ligero para llevarlo donde quieras.',
  },
  {
    slug: 'collar-candy',
    name: 'Collar Candy',
    price: 5.99,
    category: 'collares',
    colors: ['rosa', 'lila', 'azul'],
    available: true,
    image: 'candy-collar',
    description: 'Collar de cuentas pastel con cierre suave y corazón central.',
  },
  {
    slug: 'collar-mint-heart',
    name: 'Collar Mint Heart',
    price: 5.99,
    category: 'collares',
    colors: ['menta', 'amarillo'],
    available: false,
    image: 'mint-heart',
    description: 'Composición de cuentas menta y un corazón central hecho para destacar.',
  },
  {
    slug: 'charm-flower-party',
    name: 'Charm Flower Party',
    price: 5.99,
    category: 'accesorios',
    colors: ['amarillo', 'rosa', 'lima'],
    available: true,
    image: 'flower-party',
    description: 'Charm floral para añadir color a bolso, mochila, funda o llavero.',
  },
  {
    slug: 'clip-candy',
    name: 'Clip Candy',
    price: 5.99,
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
