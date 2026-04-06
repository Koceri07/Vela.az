"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/common/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { fetchProducts } from "@/lib/products";
import type { Product } from "@/app/(main)/collections/productSlice";

const SelectedItems = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    void fetchProducts({ page: 0, size: 4 })
      .then((products) => setItems(products.slice(0, 4)))
      .catch(() => setItems([]));
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-serif font-bold text-[#4A3728]">{t("home.sel_title")}</h2>
            <p className="text-gray-500 text-sm italic">{t("home.sel_sub")}</p>
          </div>
          <button
            onClick={() => router.push("/collections")}
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#8E6969] hover:text-[#725454] transition-all"
          >
            <span>{t("home.see_all")}</span>
            <span className="w-8 h-[1px] bg-[#8E6969] group-hover:w-12 transition-all" />
          </button>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-stone-100 bg-stone-50 px-6 py-12 text-center text-sm text-stone-500">
            {t("coll.not_found")}
          </div>
        )}
      </div>
    </section>
  );
};

export default SelectedItems;
