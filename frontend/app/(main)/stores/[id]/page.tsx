"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, MapPin, Mail, Phone, ShoppingBag, Trash2 } from "lucide-react";
import ProductCard from "@/components/common/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { fetchStoreById, Store, deleteLocalStore } from "@/lib/stores";
import { fetchProducts, mapCategoryParamToBackendCategory } from "@/lib/products";
import { getSessionUser } from "@/lib/api/session";
import type { Product } from "@/app/(main)/collections/productSlice";

const StoreProfilePage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const [store, setStore] = useState<Store | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const user = getSessionUser();
  const isAdmin = user?.role === "ADMIN";

  const handleDeleteStore = () => {
    if (confirm("Bu mağazanı və bütün elanlarını silmək istədiyinizə əminsiniz?")) {
      deleteLocalStore(Number(id));
      router.push("/");
    }
  };

  useEffect(() => {
    const loadStoreData = async () => {
      try {
        setLoading(true);
        const storeData = await fetchStoreById(Number(id));
        setStore(storeData);
        
        // Fetch products and filter by this store
        // In a real app, you'd use a backend endpoint like /products/store/:id
        const allProducts = await fetchProducts({ page: 0, size: 100 });
        const storeProducts = allProducts.filter(p => p.storeId === Number(id));
        setProducts(storeProducts);
      } catch (err) {
        console.error("Failed to load store profile", err);
      } finally {
        setLoading(false);
      }
    };

    void loadStoreData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F5]">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-stone-200 rounded-full"></div>
          <div className="h-4 w-32 bg-stone-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!store) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F5] gap-6">
        <h1 className="text-2xl font-serif font-bold text-[#4A3728]">Mağaza tapılmadı</h1>
        <button
          onClick={() => router.push("/")}
          className="bg-[#8E6969] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest"
        >
          Ana Səhifəyə Qayıt
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header / Cover Section */}
      <section className="bg-[#4A3728] text-white pt-24 pb-32 px-4 relative">
        <button
          onClick={() => router.back()}
          className="absolute top-8 left-8 p-2 hover:bg-white/10 rounded-full transition"
        >
          <ArrowLeft size={24} />
        </button>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:items-start relative z-10">
          <div className="relative w-40 h-40 rounded-3xl overflow-hidden bg-white shadow-2xl p-4 shrink-0 transition-transform hover:scale-105 duration-500">
            <Image
              src={store.logoUrl || "https://images.unsplash.com/photo-1541013517358-397d16739665?auto=format&fit=crop&w=400&h=400"}
              alt={store.name}
              fill
              className="object-cover p-2"
            />
          </div>
          
          <div className="space-y-6 text-center md:text-left flex-1">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
                  {store.name}
                </h1>
                {(isAdmin || store.isLocal) && (
                  <button
                    onClick={handleDeleteStore}
                    className="p-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-full transition-all duration-300"
                    title="Mağazanısil"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
              <p className="text-gray-300 max-w-2xl text-lg italic font-light leading-relaxed">
                {store.description}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium text-white/80">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#A37A7A]" />
                {store.address}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-[#A37A7A]" />
                {store.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-[#A37A7A]" />
                {store.phoneNumber}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 pb-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-stone-100 min-h-[400px]">
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-stone-100">
            <h2 className="text-2xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
              <ShoppingBag className="text-[#8E6969]" /> Mağazanın Məhsulları
            </h2>
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              {products.length} Məhsul
            </div>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center space-y-4">
              <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto text-stone-200">
                <ShoppingBag size={40} />
              </div>
              <p className="text-gray-400 font-serif italic text-lg uppercase tracking-widest">
                Bu mağaza hələ ki elan yerləşdirməyib.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default StoreProfilePage;
