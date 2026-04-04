
"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { mockProducts } from "@/app/(main)/collections/productSlice";
import ProductCard from "@/components/common/ProductCard";

const categoryMap: Record<string, { title: string; categories: string[] }> = {
  "gelinlikler": {
    title: "Gəlinliklər",
    categories: ["Gəlinlik"]
  },
  "kostyumlar": {
    title: "Kişi Kostyumları",
    categories: ["Kostyum"]
  },
  "xanim-geyimleri": {
    title: "Xanım Geyimləri",
    categories: ["Geyim", "Ziyafət"]
  },
  "usaq-geyimleri": {
    title: "Uşaq Geyimləri",
    categories: ["Uşaq"]
  }
};

const CategoryPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const categoryInfo = categoryMap[slug];

  const filteredProducts = useMemo(() => {
    if (!categoryInfo) return [];
    return mockProducts.filter(p => categoryInfo.categories.includes(p.category));
  }, [categoryInfo]);

  if (!categoryInfo) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Kateqoriya tapılmadı</h1>
        <p className="text-gray-500">Axtardığınız səhifə mövcud deyil.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section for Category */}
      <div className="bg-[#FDF8F6] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728]">
            {categoryInfo.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ən özəl anlarınız üçün seçilmiş kolleksiyamızla tanış olun. 
            Mükəmməl görünüşünüzü burada tapacaqsınız.
          </p>
          <div className="w-24 h-1 bg-[#8E6969] mx-auto rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-100">
          <p className="text-sm text-gray-500 font-medium italic">
            Cəmi {filteredProducts.length} məhsul tapıldı
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
            <p className="text-gray-400 italic text-lg">Hazırda bu kateqoriyada məhsul yoxdur.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
