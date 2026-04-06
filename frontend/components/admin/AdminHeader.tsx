"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Menu, Bell, Settings, LogOut } from "lucide-react";

const AdminHeader = ({ onSidebarToggle }: { onSidebarToggle: () => void }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    router.push("/admin/login");
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left - Menu Toggle */}
        <button
          onClick={onSidebarToggle}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
          title="Menyu"
        >
          <Menu size={24} className="text-gray-700" />
        </button>

        {/* Right - Actions */}
        <div className="flex items-center gap-6">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
            <Bell size={20} className="text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Settings size={20} className="text-gray-700" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8E6969] to-[#725454] rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">Admin</p>
              <p className="text-xs text-gray-600">admin@vela.az</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-red-50 rounded-lg transition text-red-600"
              title="Çıxış"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
