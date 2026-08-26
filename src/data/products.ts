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
    price: 5.99,
    category: 'llaveros',
    colors: ['rosa', 'menta', 'lila'],
    available: true,
    image: 'llavero-bubble-dog.png',
    description: 'Llavero mini de abalorios y charm, montado a mano pieza a pieza.',
  },
  {
    slug: 'llavero-love',
    name: 'Love Charm',
    price: 5.99,
    category: 'llaveros',
    colors: ['rosa', 'amarillo'],
    available: true,
    image: 'llavero-love.png',
    description: 'Un charm pequeño, colorido y ligero para llevarlo donde quieras.',
  },
  {
    slug: 'collar-candy',
    name: 'Candy Collar',
    price: 5.99,
    category: 'collares',
    colors: ['rosa', 'lila', 'azul'],
    available: true,
    image: 'collar-candy.png',
    description: 'Collar de cuentas pastel con cierre suave y corazón central.',
  },
  {
    slug: 'collar-mint-heart',
    name: 'Mint Heart',
    price: 5.99,
    category: 'collares',
    colors: ['menta', 'amarillo'],
    available: true,
    image: 'collar-mint-heart.png',
    description: 'Composición de cuentas menta y un corazón central hecho para destacar.',
  },
  {
    slug: 'charm-flower-party',
    name: 'Flower Party',
    price: 5.99,
    category: 'accesorios',
    colors: ['amarillo', 'rosa', 'lima'],
    available: true,
    image: 'charm-flower-party.png',
    description: 'Charm floral para añadir color a bolso, mochila, funda o llavero.',
  },
  {
    slug: 'clip-candy',
    name: 'Candy Clip',
    price: 5.99,
    category: 'accesorios',
    colors: ['lila', 'naranja', 'azul'],
    available: true,
    image: 'clip-candy.png',
    description: 'Clip colorido para sujetar tus pequeños objetos con personalidad.',
  },
  {
    slug: 'botella-michi-pop',
    name: 'Botella Michi Pop',
    price: 5.99,
    category: 'accesorios',
    colors: ['rosa', 'menta'],
    available: true,
    image: 'botella-michi-pop.png',
    description: 'Botella Michi Pop decorada con el universo de la marca.',
  },
  {
    slug: 'termo-michi-pop',
    name: 'Termo Michi Pop',
    price: 5.99,
    category: 'accesorios',
    colors: ['rosa', 'menta'],
    available: true,
    image: 'termo-michi-pop.png',
    description: 'Termo Michi Pop para llevar tu bebida con mucho estilo.',
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  llaveros: 'Llaveros',
  collares: 'Collares',
  accesorios: 'Accesorios',
};
