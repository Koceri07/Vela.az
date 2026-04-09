"use client";

import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import StoreTable from "@/components/admin/StoreTable";
import Link from "next/link";

export default function StoresAdminPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-black text-[#4A3728] tracking-tight italic">
            Mağazalar
          </h1>
          <p className="text-stone-400 text-sm font-medium italic mt-1 uppercase tracking-widest">
            Platformadakı bütün mağazaları idarə et
          </p>
        </div>
        <Link href="/create-store">
          <button className="flex items-center gap-2 bg-[#8E6969] text-white px-8 py-3.5 rounded-2xl hover:bg-[#725454] transition-all duration-300 font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#8E6969]/10">
            <Plus size={18} strokeWidth={3} />
            <span>Yeni Mağaza</span>
          </button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-6 border border-stone-100">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-300" size={18} />
          <input
            type="text"
            placeholder="Mağaza adı və ya ünvan ilə axtarın..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-3.5 border border-stone-100 rounded-2xl focus:outline-none focus:border-[#8E6969]/50 bg-stone-50/50 transition-all text-sm italic font-medium"
          />
        </div>
      </div>

      {/* Stores Table */}
      <StoreTable searchTerm={searchTerm} />
    </div>
  );
}
