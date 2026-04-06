"use client";

import { useEffect, useState } from "react";
import { BinocularsIcon } from "lucide-react";
import ProductCard from "@/components/common/ProductCard";
import { fetchProducts } from "@/lib/products";
import type { Product } from "../productSlice";

export default function Page() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    void fetchProducts({ page: 0, size: 12 }).then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="flex justify-between items-center mb-10 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Our Collections</h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            <BinocularsIcon size={18} /> Discover the latest trends
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
