
"use client";

import React, { useState, useMemo } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { mockProducts } from "./productSlice";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/common/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

const CollectionsPage = () => {
  const [activeTab, setActiveTab] = useState("rent"); // 'rent' or 'buy'
  const [showFilters, setShowFilters] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number>(2000);
  
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("cat");
  const { t } = useLanguage();
  
  const filteredItems = useMemo(() => {
    return mockProducts.filter(item => {
      const matchesSize = selectedSize ? item.size === selectedSize : true;
      const matchesOccasion = selectedOccasion === "all" ? true : 
        (selectedOccasion === "wedding" && item.occasion === "Toy") ||
        (selectedOccasion === "party" && item.occasion === "Ziyafət") ||
        (selectedOccasion === "ceremony" && item.occasion === "Mərasim");
      const currentPrice = activeTab === "rent" ? item.rentPrice : item.sellPrice;
      const matchesPrice = currentPrice <= priceRange;
      
      const matchesCategory = !categoryParam || 
        (categoryParam === "bridal" && item.category === "Gəlinlik") ||
        (categoryParam === "mens" && item.category === "Kostyum") ||
        (categoryParam === "women" && (item.category === "Geyim" || item.category === "Ziyafət")) ||
        (categoryParam === "kids" && item.category === "Uşaq");

      return matchesSize && matchesOccasion && matchesPrice && matchesCategory;
    });
  }, [activeTab, selectedSize, selectedOccasion, priceRange, categoryParam]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Top Navigation - Toggles */}
        <div className="flex flex-col items-center mb-8 space-y-6">
          <div className="flex bg-gray-100 p-1 rounded-full items-center">
            <button 
              onClick={() => setActiveTab("rent")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "rent" ? "bg-[#8E6969] text-white shadow-sm" : "text-gray-500 hover:text-black"
              }`}
            >
              {t("coll.rent_prices")}
            </button>
            <button 
              onClick={() => setActiveTab("buy")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "buy" ? "bg-[#8E6969] text-white shadow-sm" : "text-gray-500 hover:text-black"
              }`}
            >
              {t("coll.buy_prices")}
            </button>
          </div>

          <div className="w-full flex justify-start">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50 transition"
            >
              <SlidersHorizontal size={16} />
              {t("coll.filters")}
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-[#FAF7F5] rounded-xl p-8 mb-10 relative border border-stone-100">
            <button 
              onClick={() => setShowFilters(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition"
            >
              <X size={20} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* ÖLÇÜ */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">{t("coll.size")}</h3>
                  {selectedSize && (
                    <button onClick={() => setSelectedSize(null)} className="text-[10px] text-[#A37A7A] underline">{t("coll.reset")}</button>
                  )}
                </div>
                <div className="flex gap-2 flex-wrap text-xs">
                  {["XS", "S", "M", "L", "XL"].map(size => (
                    <button 
                      key={size} 
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 border rounded-lg flex items-center justify-center transition ${
                        selectedSize === size ? "bg-[#8E6969] text-white border-[#8E6969]" : "bg-white border-gray-200 text-gray-600 hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* QİYMƏT ARALIĞI */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    {t("coll.price")} ({activeTab === "rent" ? t("coll.rent") : t("coll.buy")})
                  </h3>
                  <span className="text-xs font-bold text-[#8E6969]">{priceRange} AZN</span>
                </div>
                <div className="pt-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="2000" 
                    step="50"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#8E6969]"
                  />
                  <div className="flex justify-between mt-4 text-[11px] font-medium text-gray-400">
                    <span>0 AZN</span>
                    <span>2000 AZN</span>
                  </div>
                </div>
              </div>

              {/* MÜNASİBƏT */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">{t("coll.occasion")}</h3>
                <div className="flex gap-2 flex-wrap">
                  {["all", "wedding", "party", "ceremony"].map(occ => (
                    <button 
                      key={occ} 
                      onClick={() => setSelectedOccasion(occ)}
                      className={`px-4 py-2 rounded-full text-xs transition ${
                        selectedOccasion === occ ? "bg-[#8E6969] text-white" : "bg-white border border-gray-100 text-gray-600 hover:border-black"
                      }`}
                    >
                      {t(`coll.${occ}`)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((product) => (
              <ProductCard key={product.id} product={product} activeTab={activeTab as "rent" | "buy"} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-400 italic">
              {t("coll.not_found")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
