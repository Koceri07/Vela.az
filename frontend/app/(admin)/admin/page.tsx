"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart3,
  Users,
  ShoppingBag,
  TrendingUp,
  Download,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import StatCard from "@/components/admin/StatCard";
import ChartCard from "@/components/admin/ChartCard";
import RecentOrders from "@/components/admin/RecentOrders";
import { getAllProducts, getApiErrorMessage, getUsers } from "@/lib/api/client";

export default function AdminDashboard() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({
    users: "0",
    products: "0",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadStats = async () => {
      try {
        const [usersPage, productsPage] = await Promise.all([
          getUsers({ page: 0, size: 1 }),
          getAllProducts({ page: 0, size: 1 }),
        ]);

        if (!cancelled) {
          setStats({
            users: String(usersPage.totalElements),
            products: String(productsPage.totalElements),
          });
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(getApiErrorMessage(loadError, "Dashboard statistikası yüklənmədi."));
        }
      }
    };

    void loadStats();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="space-y-8">
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

      {error ? <p className="text-sm text-red-500">{error}</p> : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t("admin.dashboard.total_revenue")}
          value="N/A"
          change="No endpoint"
          icon={<TrendingUp className="text-[#8E6969]" />}
          changeType="negative"
        />
        <StatCard
          title={t("admin.dashboard.products")}
          value={stats.products}
          change="Live API"
          icon={<ShoppingBag className="text-[#8E6969]" />}
          changeType="positive"
        />
        <StatCard
          title={t("admin.dashboard.orders")}
          value="N/A"
          change="No endpoint"
          icon={<BarChart3 className="text-[#8E6969]" />}
          changeType="negative"
        />
        <StatCard
          title={t("admin.dashboard.users")}
          value={stats.users}
          change="Live API"
          icon={<Users className="text-[#8E6969]" />}
          changeType="positive"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartCard title={t("admin.dashboard.sales_chart")} />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            {t("admin.dashboard.quick_stats")}
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-600">API Users</span>
              <span className="font-bold text-[#8E6969]">{stats.users}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-600">API Products</span>
              <span className="font-bold text-[#8E6969]">{stats.products}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-600">Orders API</span>
              <span className="font-bold text-[#8E6969]">Missing</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Revenue API</span>
              <span className="font-bold text-[#8E6969]">Missing</span>
            </div>
          </div>
        </div>
      </div>

      <RecentOrders />
    </div>
  );
}
