"use client";

import React, { useState } from "react";
import { Search, Filter, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import OrderTable from "@/components/admin/OrderTable";

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t("admin.orders.title")}</h1>
          <p className="text-gray-600 mt-1">{t("admin.orders.subtitle")}</p>
        </div>
        <button className="flex items-center gap-2 bg-[#8E6969] text-white px-6 py-3 rounded-lg hover:bg-[#725454] transition font-medium">
          <Download size={20} />
          <span>{t("admin.orders.download_report")}</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder={t("admin.orders.search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969] transition"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969] transition bg-white"
          >
            <option value="all">{t("admin.orders.statuses.all")}</option>
            <option value="pending">{t("admin.orders.statuses.pending")}</option>
            <option value="processing">{t("admin.orders.statuses.processing")}</option>
            <option value="shipped">{t("admin.orders.statuses.shipped")}</option>
            <option value="delivered">{t("admin.orders.statuses.delivered")}</option>
            <option value="cancelled">{t("admin.orders.statuses.cancelled")}</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
            <Filter size={18} className="text-gray-600" />
            <span className="text-gray-700">{t("admin.orders.more_filters")}</span>
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <OrderTable searchTerm={searchTerm} statusFilter={filterStatus} />
    </div>
  );
}
