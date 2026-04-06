"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Eye, Edit2, ShieldOff } from "lucide-react";
import { getApiErrorMessage, getUsers } from "@/lib/api/client";
import type { UserDto } from "@/lib/api/types";

interface UserTableProps {
  searchTerm: string;
  roleFilter: string;
}

const roleLabels: Record<string, string> = {
  CUSTOMER: "Müştəri",
  VENDOR: "Satıcı",
  ADMIN: "Admin",
};

const UserTable: React.FC<UserTableProps> = ({ searchTerm, roleFilter }) => {
  const [users, setUsers] = useState<UserDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadUsers = async () => {
      try {
        setLoading(true);
        setError("");
        const page = await getUsers({
          searchTerm: searchTerm || undefined,
          page: 0,
          size: 100,
        });

        if (!cancelled) {
          setUsers(page.content);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(getApiErrorMessage(loadError, "İstifadəçilər yüklənmədi."));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void loadUsers();

    return () => {
      cancelled = true;
    };
  }, [searchTerm]);

  const filteredUsers = useMemo(() => {
    if (roleFilter === "all") {
      return users;
    }

    const roleMap: Record<string, string> = {
      customer: "CUSTOMER",
      seller: "VENDOR",
      admin: "ADMIN",
    };

    return users.filter((user) => user.role === roleMap[roleFilter]);
  }, [roleFilter, users]);

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
                Rolu
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Qoşulma Tarixi
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
            {loading ? (
              <tr>
                <td colSpan={6} className="py-8 px-6 text-center text-gray-500">
                  Yüklənir...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={6} className="py-8 px-6 text-center text-red-500">
                  {error}
                </td>
              </tr>
            ) : filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-semibold text-gray-900">{user.username}</p>
                      <p className="text-sm text-gray-600">ID: {user.id}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-sm">{user.email}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "ADMIN"
                          ? "bg-purple-100 text-purple-700"
                          : user.role === "VENDOR"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {roleLabels[user.role]}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-sm">
                    {new Date(user.createdAt).toLocaleDateString("az-AZ")}
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Aktiv
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
                        <ShieldOff size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-8 px-6 text-center">
                  <p className="text-gray-500">Axtarışa uyğun istifadəçi tapılmadı</p>
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
