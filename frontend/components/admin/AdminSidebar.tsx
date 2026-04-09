"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  ChevronRight,
  Store,
} from "lucide-react";

const AdminSidebar = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const menuItems = [
    { icon: LayoutDashboard, label: t("admin.sidebar.dashboard"), href: "/admin" },
    { icon: ShoppingBag, label: t("admin.sidebar.products"), href: "/admin/products" },
    { icon: Store, label: "Mağazalar", href: "/admin/stores" },
    { icon: Users, label: t("admin.sidebar.users"), href: "/admin/users" },
    { icon: Settings, label: t("admin.sidebar.settings"), href: "/admin/settings" },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-[#4A3728] text-white transition-all duration-300 flex flex-col overflow-hidden shadow-lg`}
    >
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-[#5D4636]">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#8E6969] rounded-lg flex items-center justify-center font-bold text-lg">
            V
          </div>
          {isOpen && <span className="font-bold text-lg">VELA Admin</span>}
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6 px-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-[#8E6969] text-white"
                      : "text-gray-300 hover:bg-[#5D4636]"
                  }`}
                  title={item.label}
                >
                  <Icon size={20} className="shrink-0" />
                  {isOpen && <span className="font-medium">{item.label}</span>}
                  {isOpen && isActive && (
                    <ChevronRight size={18} className="ml-auto" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-[#5D4636] p-4">
        <button
          className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 transition"
          title={t("admin.sidebar.logout")}
        >
          <LogOut size={20} className="shrink-0" />
          {isOpen && <span className="font-medium">{t("admin.sidebar.logout")}</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
