import { StoreDto } from "./api/types";
import { deleteProductsByStoreId } from "./products";

export interface Store extends StoreDto {
  logoUrl?: string;
  description?: string;
  isLocal?: boolean;
}

const demoStores: Store[] = [
  {
    id: 1,
    name: "Elegant Boutique",
    address: "Bakı, Nizami küç. 45",
    email: "contact@elegant.az",
    phoneNumber: "+994 50 123 45 67",
    active: true,
    vendorId: 101,
    vendorName: "Elegant LLC",
    logoUrl: "https://images.unsplash.com/photo-1541013517358-397d16739665?auto=format&fit=crop&w=300&h=300",
    description: "Specialized in luxury evening gowns and bridal dresses."
  },
  {
    id: 2,
    name: "Classic Menswear",
    address: "Baku, 28 May",
    email: "info@classicmen.az",
    phoneNumber: "+994 77 987 65 43",
    active: true,
    vendorId: 102,
    vendorName: "Classic Style",
    logoUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=300&h=300",
    description: "Traditional and modern suits for every gentleman."
  },
  {
    id: 3,
    name: "Kids World",
    address: "Sumqayıt, Sülh pr.",
    email: "hello@kidsworld.az",
    phoneNumber: "+994 55 555 55 55",
    active: true,
    vendorId: 103,
    vendorName: "Kids Joy",
    logoUrl: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=300&h=300",
    description: "Best outfits for children's ceremonies."
  },
  {
    id: 4,
    name: "Modern Accessories",
    address: "Bakı, Xətai",
    email: "access@vela.az",
    phoneNumber: "+994 12 400 00 00",
    active: true,
    vendorId: 104,
    vendorName: "Vela Style",
    logoUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&h=300",
    description: "Elegant bags, jewelry and more."
  }
];

const LOCAL_STORES_KEY = "vela_local_stores";

export function getLocalStores(): Store[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(LOCAL_STORES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveLocalStore(store: Partial<Store>) {
  if (typeof window === "undefined") return;
  const current = getLocalStores();
  const newStore: Store = {
    id: Date.now(), // Generate a fake ID
    name: store.name || "Unknown Store",
    address: store.address || "",
    email: store.email || "",
    phoneNumber: store.phoneNumber || "",
    active: true,
    vendorId: 999,
    vendorName: "Local Vendor",
    isLocal: true,
    logoUrl: store.logoUrl || "https://images.unsplash.com/photo-1541013517358-397d16739665?auto=format&fit=crop&w=300&h=300",
    description: store.description || "A newly created local boutique.",
    ...store,
  };
  localStorage.setItem(LOCAL_STORES_KEY, JSON.stringify([newStore, ...current]));
  return newStore;
}

export function deleteLocalStore(id: number) {
  if (typeof window === "undefined") return;
  const current = getLocalStores();
  const filtered = current.filter((s) => s.id !== id);
  localStorage.setItem(LOCAL_STORES_KEY, JSON.stringify(filtered));
  
  // Cascade delete: Remove all products belonging to this store
  deleteProductsByStoreId(id);
}

export async function fetchStores(): Promise<Store[]> {
  const local = getLocalStores();
  return local;
}

export async function fetchStoreById(id: number): Promise<Store | null> {
  const local = getLocalStores();
  const found = local.find((s) => s.id === id);
  return found || null;
}
