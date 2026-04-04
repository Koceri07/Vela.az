"use client";

import React from "react";
import { Eye, MoreVertical } from "lucide-react";

const RecentOrders = () => {
  const orders = [
    {
      id: "#2024001",
      customer: "Ayşə Məmmədova",
      date: "2026-04-03",
      total: "₼450",
      status: "completed",
      items: 3,
    },
    {
      id: "#2024002",
      customer: "Fiqrət Hüseynov",
      date: "2026-04-02",
      total: "₼890",
      status: "processing",
      items: 2,
    },
    {
      id: "#2024003",
      customer: "Leyla İsmayılova",
      date: "2026-04-01",
      total: "₼650",
      status: "shipped",
      items: 4,
    },
    {
      id: "#2024004",
      customer: "Rəfiq Əliyev",
      date: "2026-03-31",
      total: "₼320",
      status: "delivered",
      items: 1,
    },
  ];

  const statusColors = {
    completed: "bg-green-100 text-green-700",
    processing: "bg-blue-100 text-blue-700",
    shipped: "bg-purple-100 text-purple-700",
    delivered: "bg-emerald-100 text-emerald-700",
    cancelled: "bg-red-100 text-red-700",
  };

  const statusLabels: Record<string, string> = {
    completed: "Tamamlandı",
    processing: "İşlənir",
    shipped: "Göndərildi",
    delivered: "Çatdırıldı",
    cancelled: "Ləğv Edildi",
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Son Sifarişlər</h3>
        <a href="/admin/orders" className="text-[#8E6969] hover:text-[#725454] font-medium text-sm">
          Hamısını Gör →
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                Sifariş ID
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                Müştəri
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                Tarix
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                Məblağ
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                Status
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700 text-sm">
                Əməliyyat
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="py-3 px-4 font-medium text-gray-900">{order.id}</td>
                <td className="py-3 px-4 text-gray-700">{order.customer}</td>
                <td className="py-3 px-4 text-gray-600 text-sm">{order.date}</td>
                <td className="py-3 px-4 font-semibold text-gray-900">{order.total}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[order.status as keyof typeof statusColors]
                    }`}
                  >
                    {statusLabels[order.status]}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="text-gray-400 hover:text-[#8E6969] transition">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
