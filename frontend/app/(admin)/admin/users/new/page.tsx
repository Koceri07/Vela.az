"use client";

import React, { useState } from "react";
import { Save, X, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddUserPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "customer",
    password: "",
    confirmPassword: "",
    isActive: true,
  });

  const handleSave = () => {
    if (user.password !== user.confirmPassword) {
      alert("Şifrələr uyğun gəlmir!");
      return;
    }
    // Save user logic here
    alert("İstifadəçi əlavə edildi!");
    router.push("/admin/users");
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Yeni İstifadəçi Əlavə Et
          </h1>
          <p className="text-gray-600 mt-1">
            Yeni istifadəçi məlumatlarını daxil edin
          </p>
        </div>
        <Link
          href="/admin/users"
          className="flex items-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          <X size={20} />
          <span>Ləğv Et</span>
        </Link>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Şəxsi Məlumatlar
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ad *
                </label>
                <input
                  type="text"
                  value={user.firstName}
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                  placeholder="Ad daxil edin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Soyad *
                </label>
                <input
                  type="text"
                  value={user.lastName}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                  placeholder="Soyad daxil edin"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                placeholder="+994 XX XXX XX XX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rol *
              </label>
              <select
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
              >
                <option value="customer">Müştəri</option>
                <option value="seller">Satıcı</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          {/* Account Settings */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Hesab Parametrləri
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Şifrə *
              </label>
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                placeholder="Şifrə daxil edin"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Şifrə Təkrar *
              </label>
              <input
                type="password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                placeholder="Şifrəni təkrar daxil edin"
              />
            </div>

            <div className="flex items-center gap-3 pt-4">
              <input
                type="checkbox"
                id="isActive"
                checked={user.isActive}
                onChange={(e) =>
                  setUser({ ...user, isActive: e.target.checked })
                }
                className="w-4 h-4 text-[#8E6969] border-gray-300 rounded focus:ring-[#8E6969]"
              />
              <label
                htmlFor="isActive"
                className="text-sm font-medium text-gray-700"
              >
                Aktiv İstifadəçi
              </label>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-blue-700">
                <User size={16} />
                <span className="text-sm font-medium">Şifrə tələbləri:</span>
              </div>
              <ul className="text-sm text-blue-600 mt-2 space-y-1">
                <li>• Ən azı 8 simvol</li>
                <li>• Böyük və kiçik hərflər</li>
                <li>• Ən azı bir rəqəm</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-8 pt-8 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-[#8E6969] text-white px-8 py-3 rounded-lg hover:bg-[#725454] transition font-medium"
          >
            <Save size={20} />
            <span>Yadda Saxla</span>
          </button>
        </div>
      </div>
    </div>
  );
}
