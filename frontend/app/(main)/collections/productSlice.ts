
export interface Product {
  id: number;
  name: string;
  price: number;
  rentPrice: number;
  sellPrice: number;
  image: string;
  category: string;
  occasion: string;
  size: string;
  isNew?: boolean;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Qızıl Atlas Geyimi",
    price: 95,
    rentPrice: 95,
    sellPrice: 380,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&h=500",
    category: "Geyim",
    occasion: "Ziyafət",
    size: "M",
    isNew: true,
  },
  {
    id: 2,
    name: "İpək Ziyafət Geyimi",
    price: 80,
    rentPrice: 80,
    sellPrice: 320,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&h=500",
    category: "Ziyafət",
    occasion: "Ziyafət",
    size: "S",
    isNew: true,
  },
  {
    id: 3,
    name: "Klassik Smoking Kostyumu",
    price: 120,
    rentPrice: 120,
    sellPrice: 480,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9isfopz8hck1WKVVDTnGcg4sDaAmgR8LbvA&s",
    category: "Kostyum",
    occasion: "Toy",
    size: "L",
    isNew: false,
  },
  {
    id: 4,
    name: "Çəhrayı Dantel Gəlinlik",
    price: 150,
    rentPrice: 150,
    sellPrice: 600,
    image: "https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?auto=format&fit=crop&w=400&h=500",
    category: "Gəlinlik",
    occasion: "Toy",
    size: "M",
    isNew: true,
  },
  {
    id: 5,
    name: "Bej Axşam Geyimi",
    price: 70,
    rentPrice: 70,
    sellPrice: 280,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=400&h=500",
    category: "Geyim",
    occasion: "Mərasim",
    size: "S",
    isNew: false,
  },
  {
    id: 6,
    name: "Bordo Qəftan",
    price: 85,
    rentPrice: 85,
    sellPrice: 340,
    image: "https://i.etsystatic.com/33976534/r/il/291565/7236148858/il_794xN.7236148858_1gop.jpg",
    category: "Geyim",
    occasion: "Mərasim",
    size: "L",
    isNew: true,
  },
  {
    id: 7,
    name: "Ağ Toy Geyimi",
    price: 200,
    rentPrice: 200,
    sellPrice: 800,
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhTeQFqWPNN7_iiwvsW6cO_GaQesTWrmG_lrm_WYGvZZq8-sKMPa_d95VpeSgC",
    category: "Gəlinlik",
    occasion: "Toy",
    size: "XS",
    isNew: false,
  },
  {
    id: 8,
    name: "Uşaq Ziyafət Geyimi",
    price: 55,
    rentPrice: 55,
    sellPrice: 220,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=400&h=500",
    category: "Uşaq",
    occasion: "Mərasim",
    size: "XS",
    isNew: true,
  },
  {
    id: 9,
    name: "Mavi Atlas Don",
    price: 90,
    rentPrice: 90,
    sellPrice: 360,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=400&h=500",
    category: "Ziyafət",
    occasion: "Ziyafət",
    size: "M",
    isNew: false,
  },
];