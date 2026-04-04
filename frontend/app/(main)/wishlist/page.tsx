
"use client";

import React from "react";
import Link from "next/link";
import { useWishlist } from "@/context/CartContext";
import ProductCard from "@/components/common/ProductCard";
import { mockProducts } from "@/app/(main)/collections/productSlice";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  // Map wishlist items back to full product objects if possible, 
  // or just use the item data. ProductCard expects full Product type.
  const wishlistProducts = wishlist.map(item => {
    const fullProduct = mockProducts.find(p => p.id === item.id);
    return fullProduct || {
      ...item,
      rentPrice: item.price,
      sellPrice: item.price * 4, // fallback logic
      category: "Seçilmiş",
      occasion: "Ümumi",
      size: "M"
    };
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#FAF7F5] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728]">
            Bəyəndiklərim
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Ən çox bəyəndiyiniz modelləri burada toplayın və istədiyiniz zaman asanlıqla tapın.
          </p>
          <div className="w-20 h-1 bg-[#8E6969] mx-auto rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {wishlist.length === 0 ? (
          <div className="text-center py-24 space-y-6">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto transition-transform hover:scale-110 duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-medium text-gray-800">Seçilmişlər siyahınız hələ ki boşdur</p>
              <p className="text-gray-500">Bəyəndiyiniz məhsulları bura əlavə etmək üçün kolleksiyalarımıza nəzər salın.</p>
            </div>
            <Link 
              href="/collections" 
              className="inline-flex items-center justify-center bg-[#8E6969] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#725454] transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Kolleksiyaları kəşf edin
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {wishlistProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}