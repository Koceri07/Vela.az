
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const mockProducts: Product[] = [
  { id: 1, name: "Qızıl Atlas Geyimi", price: 95.00, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&h=500", category: "Geyim" },
  { id: 2, name: "İpək Ziyafət Geyimi", price: 80.00, image: "https://images.unsplash.com/photo-1515562141207-5dca89f118e5?auto=format&fit=crop&w=400&h=500", category: "Ziyafət" },
  { id: 3, name: "Klassik Smoking Kostyumu", price: 120.00, image: "https://images.unsplash.com/photo-1552062407-291926519529?auto=format&fit=crop&w=400&h=500", category: "Kostyum" },
  { id: 4, name: "Çəhrayı Dantel Gəlinlik", price: 150.00, image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&h=500", category: "Gəlinlik" },
];