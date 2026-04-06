import type { Product } from "@/app/(main)/collections/productSlice";
import {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
  searchProducts,
} from "./api/client";
import type { ProductCategory, ProductDto } from "./api/types";

export const FALLBACK_PRODUCT_IMAGE =
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&h=1000";

const demoProducts: Product[] = [
  {
    id: 9001,
    slug: "demo-evening-dress",
    name: "Evening Dress",
    description: "Demo fallback product while backend is unavailable.",
    price: 180,
    rentPrice: 35,
    sellPrice: 180,
    image: FALLBACK_PRODUCT_IMAGE,
    category: "WOMEN",
    backendCategory: "WOMEN",
    occasion: "WOMEN",
    size: "M",
    stockQuantity: 3,
    storeId: 0,
    storeName: "Vela Demo",
    createdAt: new Date().toISOString(),
    isNew: true,
  },
  {
    id: 9002,
    slug: "demo-bridal-look",
    name: "Bridal Look",
    description: "Demo fallback product while backend is unavailable.",
    price: 420,
    rentPrice: 70,
    sellPrice: 420,
    image:
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&h=1000",
    category: "WOMEN",
    backendCategory: "WOMEN",
    occasion: "WOMEN",
    size: "S",
    stockQuantity: 2,
    storeId: 0,
    storeName: "Vela Demo",
    createdAt: new Date().toISOString(),
    isNew: true,
  },
  {
    id: 9003,
    slug: "demo-classic-suit",
    name: "Classic Suit",
    description: "Demo fallback product while backend is unavailable.",
    price: 260,
    rentPrice: 45,
    sellPrice: 260,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&h=1000",
    category: "MEN",
    backendCategory: "MEN",
    occasion: "MEN",
    size: "L",
    stockQuantity: 4,
    storeId: 0,
    storeName: "Vela Demo",
    createdAt: new Date().toISOString(),
    isNew: false,
  },
  {
    id: 9004,
    slug: "demo-kids-ceremony",
    name: "Kids Ceremony Outfit",
    description: "Demo fallback product while backend is unavailable.",
    price: 110,
    rentPrice: 22,
    sellPrice: 110,
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&h=1000",
    category: "KIDS",
    backendCategory: "KIDS",
    occasion: "KIDS",
    size: "XS",
    stockQuantity: 5,
    storeId: 0,
    storeName: "Vela Demo",
    createdAt: new Date().toISOString(),
    isNew: false,
  },
];

export function mapProductDtoToProduct(product: ProductDto): Product {
  const createdAtDate = new Date(product.createdAt);
  const now = Date.now();
  const createdAtTime = Number.isNaN(createdAtDate.getTime())
    ? now
    : createdAtDate.getTime();

  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description ?? "",
    price: product.price,
    rentPrice: product.dailyPrice,
    sellPrice: product.price,
    image: product.imageUrl || FALLBACK_PRODUCT_IMAGE,
    category: product.category,
    backendCategory: product.category,
    occasion: product.category,
    size: product.stockQuantity > 0 ? `Stock: ${product.stockQuantity}` : "Out",
    stockQuantity: product.stockQuantity,
    storeId: product.storeId,
    storeName: product.storeName,
    createdAt: product.createdAt,
    isNew: now - createdAtTime < 1000 * 60 * 60 * 24 * 30,
  };
}

export function mapCategoryParamToBackendCategory(
  category: string | null,
): ProductCategory | null {
  switch (category) {
    case "bridal":
    case "evening":
    case "women":
      return "WOMEN";
    case "mens":
      return "MEN";
    case "kids":
      return "KIDS";
    default:
      return null;
  }
}

export async function fetchProducts(params?: { page?: number; size?: number }) {
  const page = await getAllProducts(params);
  return page.content.map(mapProductDtoToProduct);
}

export function getDemoProducts() {
  return demoProducts;
}

export async function fetchProductByIdentifier(identifier: string) {
  try {
    const product = await getProductBySlug(identifier);
    return mapProductDtoToProduct(product);
  } catch {
    if (!/^\d+$/.test(identifier)) {
      throw new Error("Product not found");
    }

    const products = await fetchProducts({ page: 0, size: 100 });
    const found = products.find((item) => item.id === Number(identifier));
    if (!found) {
      throw new Error("Product not found");
    }
    return found;
  }
}

export async function fetchProductsByBackendCategory(category: ProductCategory) {
  const products = await getProductsByCategory(category);
  return products.map(mapProductDtoToProduct);
}

export async function fetchProductsBySearch(name: string) {
  const products = await searchProducts(name);
  return products.map(mapProductDtoToProduct);
}

export function getProductHref(product: Product) {
  return `/product/${product.slug || product.id}`;
}
