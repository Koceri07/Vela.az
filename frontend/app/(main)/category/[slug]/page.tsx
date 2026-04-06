"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductCard from "@/components/common/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { fetchProductsByBackendCategory } from "@/lib/products";
import type { ProductCategory } from "@/lib/api/types";
import type { Product } from "@/app/(main)/collections/productSlice";

const categoryMap: Record<string, ProductCategory> = {
  gelinlikler: "WOMEN",
  kostyumlar: "MEN",
  "xanim-geyimleri": "WOMEN",
  "usaq-geyimleri": "KIDS",
};

const CategoryPage = () => {
  const { t } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;
  const backendCategory = categoryMap[slug];
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!backendCategory) {
      return;
    }

    void fetchProductsByBackendCategory(backendCategory)
      .then(setProducts)
      .catch(() => setProducts([]));
  }, [backendCategory]);

  if (!backendCategory) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">{t("category.not_found_t")}</h1>
        <p className="text-gray-500">{t("category.not_found_d")}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#FDF8F6] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728]">
            {t("category." + slug.replace("-", "_"))}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("category.hero_d")}</p>
          <div className="w-24 h-1 bg-[#8E6969] mx-auto rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-100">
          <p className="text-sm text-gray-500 font-medium italic">
            {t("category.count_pre")}
            {products.length}
            {t("category.count_post")}
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
            <p className="text-gray-400 italic text-lg">{t("category.empty")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
