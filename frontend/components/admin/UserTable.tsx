"use client";

import React from "react";
import { Eye, Edit2, Trash2, Shield, ShieldOff } from "lucide-react";

interface UserTableProps {
  searchTerm: string;
  roleFilter: string;
}

const UserTable: React.FC<UserTableProps> = ({ searchTerm, roleFilter }) => {
  const users = [
    {
      id: "001",
      name: "Ayşə Məmmədova",
      email: "ayse@example.com",
      phone: "+994 50 123 45 67",
      role: "customer",
      status: "active",
      joinDate: "2025-01-15",
      orders: 12,
    },
    {
      id: "002",
      name: "Fiqrət Hüseynov",
      email: "fiqrat@example.com",
      phone: "+994 51 234 56 78",
      role: "seller",
      status: "active",
      joinDate: "2025-02-10",
      orders: 45,
    },
    {
      id: "003",
      name: "Leyla İsmayılova",
      email: "leyla@example.com",
      phone: "+994 70 345 67 89",
      role: "customer",
      status: "active",
      joinDate: "2025-03-05",
      orders: 8,
    },
    {
      id: "004",
      name: "Rəfiq Əliyev",
      email: "rafiq@example.com",
      phone: "+994 55 456 78 90",
      role: "admin",
      status: "active",
      joinDate: "2024-06-20",
      orders: 0,
    },
    {
      id: "005",
      name: "Samirə Qasımova",
      email: "samire@example.com",
      phone: "+994 99 567 89 01",
      role: "customer",
      status: "inactive",
      joinDate: "2024-12-01",
      orders: 3,
    },
  ];

  const roleLabels: Record<string, string> = {
    customer: "Müştəri",
    seller: "Satıcı",
    admin: "Admin",
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm);

    const matchesRole = roleFilter === "all" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                İstifadəçi
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                E-poçt
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Rolü
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Qoşulma Tarixi
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Sifarişlər
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Status
              </th>
              <th className="text-center py-4 px-6 font-semibold text-gray-700 text-sm">
                Əməliyyatlar
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-600">{user.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-sm">
                    {user.email}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "admin"
                          ? "bg-purple-100 text-purple-700"
                          : user.role === "seller"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {roleLabels[user.role]}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-sm">
                    {user.joinDate}
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    {user.orders}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status === "active" ? "Aktiv" : "Qeyri-aktiv"}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600 hover:text-[#8E6969]">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600 hover:text-[#8E6969]">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600 hover:text-red-600">
                        {user.status === "active" ? (
                          <ShieldOff size={18} />
                        ) : (
                          <Shield size={18} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-8 px-6 text-center">
                  <p className="text-gray-500">
                    Axtarış kriteriyasına uyğun istifadəçi tapılmadı
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
