"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Product } from "@/app/(main)/collections/productSlice";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, products }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() === "" 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-white/95 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Header */}
      <div className="w-full h-24 border-b border-gray-100 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center flex-1 max-w-4xl mx-auto space-x-4">
          <SearchIcon className="text-gray-400" size={24} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Nə axtarırsınız? (məs: Atlas, Gəlinlik...)"
            className="w-full bg-transparent border-none outline-none text-xl md:text-2xl font-serif text-gray-800 placeholder:text-gray-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors group"
        >
          <X size={28} className="text-gray-400 group-hover:text-black transition-colors" />
        </button>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {query.trim() === "" ? (
            <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Populyar Axtarışlar</h3>
              <div className="flex flex-wrap gap-3">
                {["Ziyafət Geyimi", "Gəlinlik", "Atlas", "Kostyum", "Uşaq"].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-6 py-3 bg-stone-50 hover:bg-stone-100 text-stone-600 text-sm font-bold rounded-full transition-all border border-stone-100 hover:border-stone-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="flex items-end justify-between border-b border-gray-100 pb-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#8E6969]">
                  Nəticələr ({filteredProducts.length})
                </h3>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 outline-none">
                  {filteredProducts.map((p, idx) => (
                    <Link 
                      key={p.id} 
                      href={`/product/${p.id}`}
                      onClick={onClose}
                      className="group flex gap-6 p-4 rounded-3xl hover:bg-stone-50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className="w-24 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100 shadow-sm transition-transform group-hover:scale-105 duration-500">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col justify-center space-y-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">{p.category}</span>
                        <h4 className="text-lg font-serif font-bold text-gray-900 group-hover:text-[#8E6969] transition-colors">{p.name}</h4>
                        <p className="text-sm font-bold text-[#8E6969]">{p.rentPrice} AZN <span className="text-[10px] text-stone-400 font-medium">/ kirayə</span></p>
                        <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black mt-2 transition-colors">
                          Məhsula bax <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
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
                  <p className="text-gray-400 font-serif italic italic text-lg">"{query}" ilə bağlı məhsul tapılmadı</p>
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
