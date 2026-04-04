"use client";

import React from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [showWarning, setShowWarning] = useState(false);

  const handleCheckout = () => {
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 3000);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-serif mb-12">Səbətim</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4">Səbətiniz boşdur</p>
          <Link href="/collections" className="text-[#a37a7a] hover:underline">
            Ağlayaqları kəşf edin
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                {/* CartItem componenti yarat */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-lg font-bold mt-2">{item.price} AZN</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-semibold mb-4">Cəmi</h2>
            <div className="text-3xl font-bold text-[#a37a7a] mb-6">
              {total.toFixed(2)} AZN
            </div>
            <div className="relative">
              {showWarning && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-[100] w-[200px]">
                  <div className="bg-yellow-400 text-black text-[12px] font-bold px-4 py-2 rounded-lg shadow-xl animate-bounce border border-yellow-500 flex items-center justify-center gap-2">
                    <span className="text-sm">⚠️</span> Hələlik aktiv deyil
                  </div>
                </div>
              )}
              <button 
                onClick={handleCheckout}
                className="w-full bg-[#a37a7a] text-white py-3 rounded hover:bg-[#925f5f] mb-2"
              >
                Ödəniş et
              </button>
            </div>
            <Link
              href="/"
              className="w-full block text-center border border-gray-300 py-3 rounded hover:bg-gray-100"
            >
              Alışverişə davam et
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
