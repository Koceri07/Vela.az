"use client";

import React, { useEffect, useState } from "react";
import { Search, Plus, UserCheck, UserX } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import UserTable from "@/components/admin/UserTable";
import { getApiErrorMessage, getUsers } from "@/lib/api/client";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
  });
  const [error, setError] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    let cancelled = false;

    const loadStats = async () => {
      try {
        const page = await getUsers({ page: 0, size: 100 });
        if (!cancelled) {
          setStats({
            total: page.totalElements,
            active: page.totalElements,
            inactive: 0,
          });
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(getApiErrorMessage(loadError, "User statistikasi yuklenmedi."));
        }
      }
    };

    void loadStats();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t("admin.users.title")}</h1>
          <p className="text-gray-600 mt-1">{t("admin.users.subtitle")}</p>
        </div>
        <Link href="/admin/users/new">
          <button className="flex items-center gap-2 bg-[#8E6969] text-white px-6 py-3 rounded-lg hover:bg-[#725454] transition font-medium">
            <Plus size={20} />
            <span>{t("admin.users.add_new")}</span>
          </button>
        </Link>
      </div>

      {error ? <p className="text-sm text-red-500">{error}</p> : null}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{t("admin.users.stats.total_users")}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">Users</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{t("admin.users.stats.active_users")}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.active}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <UserCheck size={24} className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{t("admin.users.stats.inactive_users")}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.inactive}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <UserX size={24} className="text-red-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder={t("admin.users.search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969] transition"
            />
          </div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969] transition bg-white"
          >
            <option value="all">{t("admin.users.all_roles")}</option>
            <option value="customer">{t("admin.users.user")}</option>
            <option value="seller">{t("admin.users.seller")}</option>
            <option value="admin">{t("admin.users.admin")}</option>
          </select>
        </div>
      </div>

      <UserTable searchTerm={searchTerm} roleFilter={filterRole} />
    </div>
  );
}
