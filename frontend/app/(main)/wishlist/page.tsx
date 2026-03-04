"use client";

import React from "react";
import Link from "next/link";
import { Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-serif mb-12">Beğendiklərim</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4">Beğendikləriniz boşdur</p>
          <Link href="/collections" className="text-[#a37a7a] hover:underline">
            Ağlayaqları kəşf edin
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-lg font-bold mt-2">{item.price} AZN</p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-[#a37a7a] text-white py-2 rounded hover:bg-[#925f5f] flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={16} />
                    Səbətə At
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
