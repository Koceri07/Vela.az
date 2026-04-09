"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MapPin, Search, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fetchStores, Store } from "@/lib/stores";

const StoresPage = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const [stores, setStores] = useState<Store[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    void fetchStores().then(setStores);
  }, []);

  const filteredStores = stores.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#FAF7F5]">
      <section className="bg-[#4A3728] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
            {t("home.store_title")}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto italic font-light">
            {t("home.store_sub")}
          </p>
          
          <div className="max-w-xl mx-auto relative mt-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Mağaza axtar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStores.map((store) => (
            <div 
              key={store.id}
              onClick={() => router.push(`/stores/${store.id}`)}
              className="group cursor-pointer bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src={store.logoUrl || "https://images.unsplash.com/photo-1541013517358-397d16739665?auto=format&fit=crop&w=400&h=400"} 
                    alt={store.name}
                    fill
                    className="object-cover p-2"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-[#4A3728] group-hover:text-[#8E6969] transition-colors line-clamp-1">
                    {store.name}
                  </h3>
                  <div className="flex items-center text-xs text-gray-400 gap-1 font-medium">
                    <MapPin size={14} className="text-[#8E6969]/60" />
                    {store.address}
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-sm text-gray-500 line-clamp-2 italic leading-relaxed">
                {store.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-stone-50 flex items-center justify-between text-[#8E6969] font-bold text-xs uppercase tracking-widest">
                <span>Mağazanı Kəşf Et</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        
        {filteredStores.length === 0 && (
          <div className="py-20 text-center text-gray-400 italic">
            Axtarışa uyğun mağaza tapılmadı.
          </div>
        )}
      </section>
    </main>
  );
};

export default StoresPage;
