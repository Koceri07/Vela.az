"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import { mockProducts } from "@/app/(main)/collections/productSlice";
import { useCart } from "@/context/CartContext";

const SelectedItems = () => {
  const router = useRouter();
  const { addToCart, addToWishlist, wishlist } = useCart();
  const items = mockProducts.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif text-gray-900">Seçilmişlər</h2>
          <button
            onClick={() => router.push('/collections')}
            className="text-sm font-medium text-[#a37a7a] hover:underline flex items-center gap-1"
          >
            Hamısını Gör →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((p) => (
            <div key={p.id} className="flex flex-col">
              <div className="relative w-full aspect-3/4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#a37a7a] text-white text-xs uppercase px-2 py-1 rounded z-10">
                  Yeni
                </span>
                <button 
                  onClick={() => addToWishlist({ id: p.id, name: p.name, price: p.price, image: p.image })}
                  className={`absolute top-3 right-3 rounded-full p-1 z-10 transition-colors ${
                    wishlist.find((w) => w.id === p.id)
                      ? "bg-[#a37a7a] text-white"
                      : "bg-white/80 text-[#a37a7a] hover:bg-white"
                  }`}
                >
                  <Heart size={20} fill={wishlist.find((w) => w.id === p.id) ? "white" : "#a37a7a"} />
                </button>
              </div>
              <div className="mt-4 text-left">
                <h3 className="text-sm font-medium text-gray-900 tracking-wider">
                  {p.name}
                </h3>
                <div className="flex gap-2 mt-2">
                  <button className="px-3 py-1 bg-[#a37a7a] text-white text-xs rounded">
                    Kirayə
                  </button>
                  <button className="px-3 py-1 bg-white border border-gray-300 text-xs rounded">
                    Satın al
                  </button>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    {p.price} AZN
                  </p>
                  <button 
                    onClick={() => addToCart({ id: p.id, name: p.name, price: p.price, image: p.image })}
                    className="px-4 py-2 bg-[#a37a7a] text-white rounded text-sm hover:bg-[#925f5f]"
                  >
                    Səbətə At
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedItems;
