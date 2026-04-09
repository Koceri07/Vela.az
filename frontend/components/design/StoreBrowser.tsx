"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fetchStores, Store } from "@/lib/stores";

const StoreBrowser = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    void fetchStores()
      .then(setStores)
      .catch(() => setStores([]));
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-serif font-bold text-[#4A3728]">
              {t("home.store_title")}
            </h2>
            <p className="text-gray-500 text-sm italic">
              {t("home.store_sub")}
            </p>
          </div>
          <button
            onClick={() => router.push("/stores")}
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#8E6969] hover:text-[#725454] transition-all"
          >
            <span>{t("home.see_all")}</span>
            <span className="w-8 h-[1px] bg-[#8E6969] group-hover:w-12 transition-all" />
          </button>
        </div>

        {stores.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stores.map((store) => (
              <div
                key={store.id}
                onClick={() => router.push(`/stores/${store.id}`)}
                className="group cursor-pointer bg-white/40 backdrop-blur-md rounded-3xl p-7 border border-white/50 hover:border-[#8E6969]/40 hover:shadow-[0_22px_50px_-12px_rgba(142,105,105,0.15)] transition-all duration-500 overflow-hidden relative"
              >
                {store.vendorId === 999 && (
                  <div className="absolute top-4 right-4 bg-[#8E6969] text-white text-[9px] font-black px-2 py-1 rounded-full tracking-tighter shadow-lg z-10 animate-pulse">
                    YENİ
                  </div>
                )}
                
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-8 bg-white/80 shadow-inner flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-700 ease-out">
                  <Image
                    src={store.logoUrl || "https://images.unsplash.com/photo-1541013517358-397d16739665?auto=format&fit=crop&w=400&h=400"}
                    alt={store.name}
                    fill
                    className="object-cover p-1"
                  />
                  <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                <div className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#4A3728] mb-1.5 group-hover:text-[#8E6969] transition-colors duration-300 line-clamp-1">
                      {store.name}
                    </h3>
                    <div className="flex items-center text-[10px] text-stone-400 gap-2 font-bold uppercase tracking-wider">
                      <MapPin size={14} className="text-[#8E6969]/50" />
                      {store.address}
                    </div>
                  </div>
                  
                  <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed italic font-light">
                    {store.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-stone-100/60">
                    <span className="text-[10px] uppercase font-black tracking-[0.2em] text-stone-300 group-hover:text-stone-900 transition-colors duration-300">
                      Discover Store
                    </span>
                    <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-[#8E6969] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-stone-100 bg-stone-50 px-6 py-12 text-center text-sm text-stone-500 italic">
            Hələlik heç bir mağaza qeydə alınmayıb.
          </div>
        )}
      </div>
    </section>
  );
};

export default StoreBrowser;
