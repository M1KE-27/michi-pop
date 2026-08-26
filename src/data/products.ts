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
    colors: ['azul', 'menta', 'lila'],
    available: true,
    image: 'llavero-bubble-dog.png',
    description: 'Un pequeño perrito lleno de color para darle personalidad a tus llaves, mochila o bolso. Está formado por abalorios combinados a mano para conseguir ese acabado divertido y único de Michi Pop.',
  },
  {
    slug: 'llavero-love',
    name: 'Love Charm',
    price: 5.99,
    category: 'llaveros',
    colors: ['rosa', 'lila'],
    available: true,
    image: 'llavero-love.png',
    description: 'Nuestro charm más romántico: una combinación de tonos rosas y lilas con un pequeño corazón que convierte cualquier bolso, mochila o estuche en un accesorio mucho más tuyo.',
  },
  {
    slug: 'collar-candy',
    name: 'Candy Collar',
    price: 5.99,
    category: 'collares',
    colors: ['lima', 'menta', 'lila'],
    available: true,
    image: 'collar-candy.png',
    description: 'Un collar con efecto de bolsa de chuches: cuentas verdes, menta y lilas mezcladas para crear una pieza alegre, original y fácil de combinar. De esos accesorios que hacen que un look sencillo cambie por completo.',
  },
  {
    slug: 'collar-mint-heart',
    name: 'Mint Heart',
    price: 5.99,
    category: 'collares',
    colors: ['azul', 'naranja', 'menta'],
    available: true,
    image: 'collar-mint-heart.png',
    description: 'Una mezcla fresca de tonos menta, azul y naranja con un corazón central que aporta el toque divertido. Una pieza pequeña pero muy llamativa para llevarla todos los días.',
  },
  {
    slug: 'charm-flower-party',
    name: 'Flower Party',
    price: 5.99,
    category: 'accesorios',
    colors: ['rosa', 'amarillo', 'lima'],
    available: true,
    image: 'charm-flower-party.png',
    description: 'Un estallido de color en formato charm. Sus tonos rosas, amarillos y lima hacen que quede genial colgado del bolso, mochila, neceser o combinado con otros accesorios de Michi Pop.',
  },
  {
    slug: 'clip-candy',
    name: 'Candy Clip',
    price: 5.99,
    category: 'accesorios',
    colors: ['lila', 'rosa', 'naranja', 'azul'],
    available: true,
    image: 'clip-candy.png',
    description: 'Color por todas partes. Un clip alegre y original con cuentas en lila, rosa, naranja y azul para engancharlo donde quieras y añadir ese pequeño detalle que hace diferente cualquier accesorio.',
  },
  {
    slug: 'botella-michi-pop',
    name: 'Botella Michi Pop',
    price: 5.99,
    category: 'accesorios',
    colors: ['rosa', 'menta'],
    available: true,
    image: 'botella-michi-pop.png',
    description: 'Botella Michi Pop decorada con el universo y la energía de la marca para mantenerte hidratado con estilo.',
  },
  {
    slug: 'termo-michi-pop',
    name: 'Termo Michi Pop',
    price: 5.99,
    category: 'accesorios',
    colors: ['rosa', 'menta'],
    available: true,
    image: 'termo-michi-pop.png',
    description: 'Termo Michi Pop para llevar tu bebida fría o caliente con un toque adorable y único.',
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  llaveros: 'Llaveros',
  collares: 'Collares',
  accesorios: 'Accesorios',
};
