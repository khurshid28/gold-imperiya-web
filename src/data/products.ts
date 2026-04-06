export interface Product {
  id: number;
  nameUz: string;
  nameRu: string;
  category: 'rings' | 'chains' | 'earrings' | 'bracelets';
  weight: number;
  price: number;
  oldPrice: number;
  discount: number;
  image: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    nameUz: "Oltin uzuk «Malika»",
    nameRu: "Золотое кольцо «Малика»",
    category: "rings",
    weight: 3.5,
    price: 2_800_000,
    oldPrice: 3_200_000,
    discount: 12,
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    nameUz: "Oltin zanjir «Imperator»",
    nameRu: "Золотая цепочка «Император»",
    category: "chains",
    weight: 8.2,
    price: 6_500_000,
    oldPrice: 7_800_000,
    discount: 17,
    image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6fc?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    nameUz: "Oltin sirg'a «Nilufar»",
    nameRu: "Золотые серьги «Нилуфар»",
    category: "earrings",
    weight: 2.8,
    price: 2_200_000,
    oldPrice: 2_600_000,
    discount: 15,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    nameUz: "Oltin bilaguzuk «Shohona»",
    nameRu: "Золотой браслет «Шахона»",
    category: "bracelets",
    weight: 5.0,
    price: 4_000_000,
    oldPrice: 4_800_000,
    discount: 17,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    nameUz: "Oltin uzuk «Sulton»",
    nameRu: "Золотое кольцо «Султан»",
    category: "rings",
    weight: 4.2,
    price: 3_400_000,
    oldPrice: 4_000_000,
    discount: 15,
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    nameUz: "Oltin zanjir «Zar»",
    nameRu: "Золотая цепочка «Зар»",
    category: "chains",
    weight: 12.0,
    price: 9_600_000,
    oldPrice: 11_500_000,
    discount: 17,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 7,
    nameUz: "Oltin sirg'a «Durona»",
    nameRu: "Золотые серьги «Дурона»",
    category: "earrings",
    weight: 3.2,
    price: 2_500_000,
    oldPrice: 3_000_000,
    discount: 17,
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 8,
    nameUz: "Oltin bilaguzuk «Zarhal»",
    nameRu: "Золотой браслет «Зархал»",
    category: "bracelets",
    weight: 6.5,
    price: 5_200_000,
    oldPrice: 6_200_000,
    discount: 16,
    image: "https://images.unsplash.com/photo-1612903351685-a8b2a059da24?w=400&h=400&fit=crop&q=80",
  },
];
