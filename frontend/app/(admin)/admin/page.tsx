"use client";

import React from "react";
import {
  BarChart3,
  Users,
  ShoppingBag,
  TrendingUp,
  Calendar,
  Download,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import StatCard from "@/components/admin/StatCard";
import ChartCard from "@/components/admin/ChartCard";
import RecentOrders from "@/components/admin/RecentOrders";

export default function AdminDashboard() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t("admin.dashboard.title")}</h1>
          <p className="text-gray-600 mt-1">{t("admin.dashboard.welcome")}</p>
        </div>
        <button className="flex items-center gap-2 bg-[#8E6969] text-white px-6 py-3 rounded-lg hover:bg-[#725454] transition">
          <Download size={18} />
          <span>{t("admin.dashboard.download_report")}</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t("admin.dashboard.total_revenue")}
          value="₼45,230"
          change="+12.5%"
          icon={<TrendingUp className="text-[#8E6969]" />}
          changeType="positive"
        />
        <StatCard
          title={t("admin.dashboard.products")}
          value="1,240"
          change="+5.2%"
          icon={<ShoppingBag className="text-[#8E6969]" />}
          changeType="positive"
        />
        <StatCard
          title={t("admin.dashboard.orders")}
          value="456"
          change="+8.1%"
          icon={<BarChart3 className="text-[#8E6969]" />}
          changeType="positive"
        />
        <StatCard
          title={t("admin.dashboard.users")}
          value="3,240"
          change="+3.2%"
          icon={<Users className="text-[#8E6969]" />}
          changeType="positive"
        />
      </div>

      {/* Charts and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2">
          <ChartCard title={t("admin.dashboard.sales_chart")} />
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            {t("admin.dashboard.quick_stats")}
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-600">{t("admin.dashboard.monthly_revenue")}</span>
              <span className="font-bold text-[#8E6969]">₼18,450</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-600">Orta Sifariş</span>
              <span className="font-bold text-[#8E6969]">₼245.50</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-600">Dönüş Dərəcəsi</span>
              <span className="font-bold text-[#8E6969]">42.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Müştəri Məmnuniyyəti</span>
              <span className="font-bold text-[#8E6969]">4.8/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <RecentOrders />
    </div>
  );
}
