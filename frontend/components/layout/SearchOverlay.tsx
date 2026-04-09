"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search as SearchIcon, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Product } from "@/app/(main)/collections/productSlice";
import { useLanguage } from "@/context/LanguageContext";
import { getProductHref } from "@/lib/products";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, products }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { t, language } = useLanguage();
  const localizedKey = language.toLowerCase();

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setQuery("");
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredProducts =
    query.trim() === ""
      ? []
      : products.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()),
        );

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-white/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="w-full h-24 border-b border-gray-100 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center flex-1 max-w-4xl mx-auto space-x-4">
          <SearchIcon className="text-gray-400" size={24} />
          <input
            ref={inputRef}
            type="text"
            placeholder={t("search.placeholder")}
            className="w-full bg-transparent border-none outline-none text-xl md:text-2xl font-serif text-gray-800 placeholder:text-gray-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          onClick={handleClose}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors group"
        >
          <X size={28} className="text-gray-400 group-hover:text-black transition-colors" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {query.trim() === "" ? (
            <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                {t("search.popular")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {["evening", "bridal", "satin", "suit", "kids"].map((tagKey) => (
                  <button
                    key={tagKey} onClick={() => setQuery(t("search.tags." + tagKey))}
                    className="px-6 py-3 bg-stone-50 hover:bg-stone-100 text-stone-600 text-sm font-bold rounded-full transition-all border border-stone-100 hover:border-stone-200"
                  >
                    {t("search.tags." + tagKey)}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="flex items-end justify-between border-b border-gray-100 pb-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#8E6969]">
                  {t("search.results")} ({filteredProducts.length})
                </h3>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 outline-none">
                  {filteredProducts.map((product, index) => (
                    <Link
                      key={product.id}
                      href={getProductHref(product)}
                      onClick={handleClose}
                      className="group flex gap-6 p-4 rounded-3xl hover:bg-stone-50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="relative w-24 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100 shadow-sm transition-transform group-hover:scale-105 duration-500">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center space-y-2">
                        {(() => {
                          const localizedProduct =
                            product as unknown as Record<string, string | undefined>;
                          return (
                            <>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">
                          {localizedProduct[`category_${localizedKey}`] || product.category}
                        </span>
                        <h4 className="text-lg font-serif font-bold text-gray-900 group-hover:text-[#8E6969] transition-colors">
                          {localizedProduct[`name_${localizedKey}`] || product.name}
                        </h4>
                            </>
                          );
                        })()}
                        <p className="text-sm font-bold text-[#8E6969]">
                          {product.rentPrice} AZN{" "}
                          <span className="text-[10px] text-stone-400 font-medium">
                            {t("search.per_rent")}
                          </span>
                        </p>
                        <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black mt-2 transition-colors">
                          {t("search.view_product")}{" "}
                          <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center text-stone-200">
                    <SearchIcon size={32} />
                  </div>
                  <p className="text-gray-400 font-serif italic text-lg">
                    &quot;{query}&quot; {t("search.not_found")}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
