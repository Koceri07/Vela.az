
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { mockProducts } from "@/app/(main)/collections/productSlice";
import ProductCard from "@/components/common/ProductCard";

const SelectedItems = () => {
  const router = useRouter();
  const items = mockProducts.slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-serif font-bold text-[#4A3728]">Seçilmiş Məhsullar</h2>
            <p className="text-gray-500 text-sm italic">Sizin üçün özəl olaraq seçdiyimiz ən yeni modellər</p>
          </div>
          <button
            onClick={() => router.push("/collections")}
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#8E6969] hover:text-[#725454] transition-all"
          >
            <span>Hamısını Gör</span>
            <span className="w-8 h-[1px] bg-[#8E6969] group-hover:w-12 transition-all" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedItems;
