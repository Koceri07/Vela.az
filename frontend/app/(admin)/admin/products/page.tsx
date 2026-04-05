"use client";

import React, { useState } from "react";
import { Search, Plus, Edit2, Trash2, Eye } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ProductTable from "@/components/admin/ProductTable";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t("admin.products.title")}
          </h1>
          <p className="text-gray-600 mt-1">{t("admin.products.subtitle")}</p>
        </div>
        <Link href="/admin/products/new">
          <button className="flex items-center gap-2 bg-[#8E6969] text-white px-6 py-3 rounded-lg hover:bg-[#725454] transition font-medium">
            <Plus size={20} />
            <span>{t("admin.products.add_new")}</span>
          </button>
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder={t("admin.products.search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969] transition"
            />
          </div>
          <select className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969] transition bg-white">
            <option>{t("admin.products.all_categories")}</option>
            <option>{t("admin.products.categories.wedding_dresses")}</option>
            <option>{t("admin.products.categories.mens_suits")}</option>
            <option>{t("admin.products.categories.womens_clothing")}</option>
            <option>{t("admin.products.categories.childrens_clothing")}</option>
          </select>
          <select className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969] transition bg-white">
            <option>{t("admin.products.all_statuses")}</option>
            <option>{t("admin.products.statuses.active")}</option>
            <option>{t("admin.products.statuses.inactive")}</option>
            <option>{t("admin.products.statuses.draft")}</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <ProductTable searchTerm={searchTerm} />
    </div>
  );
}
