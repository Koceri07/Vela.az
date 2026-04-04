"use client";

import React from "react";
import { Eye, MoreVertical } from "lucide-react";

interface OrderTableProps {
  searchTerm: string;
  statusFilter: string;
}

const OrderTable: React.FC<OrderTableProps> = ({ searchTerm, statusFilter }) => {
  const orders = [
    {
      id: "#2024001",
      customer: "Ayşə Məmmədova",
      email: "ayse@example.com",
      date: "2026-04-03",
      total: "₼450",
      items: 3,
      status: "delivered",
    },
    {
      id: "#2024002",
      customer: "Fiqrət Hüseynov",
      email: "fiqrat@example.com",
      date: "2026-04-02",
      total: "₼890",
      items: 2,
      status: "processing",
    },
    {
      id: "#2024003",
      customer: "Leyla İsmayılova",
      email: "leyla@example.com",
      date: "2026-04-01",
      total: "₼650",
      items: 4,
      status: "shipped",
    },
    {
      id: "#2024004",
      customer: "Rəfiq Əliyev",
      email: "rafiq@example.com",
      date: "2026-03-31",
      total: "₼320",
      items: 1,
      status: "delivered",
    },
    {
      id: "#2024005",
      customer: "Samirə Qasımova",
      email: "samire@example.com",
      date: "2026-03-30",
      total: "₼780",
      items: 5,
      status: "pending",
    },
  ];

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-700",
    processing: "bg-blue-100 text-blue-700",
    shipped: "bg-purple-100 text-purple-700",
    delivered: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  const statusLabels: Record<string, string> = {
    pending: "Gözləmə",
    processing: "İşlənir",
    shipped: "Göndərildi",
    delivered: "Çatdırıldı",
    cancelled: "Ləğv Edildi",
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Sifariş ID
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Müştəri
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Tarix
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Məbləğ
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Məhsullar
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
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    {order.id}
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {order.customer}
                      </p>
                      <p className="text-sm text-gray-600">{order.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-sm">
                    {order.date}
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    {order.total}
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {order.items} məhsul
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColors[order.status as keyof typeof statusColors]
                      }`}
                    >
                      {statusLabels[order.status]}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600 hover:text-[#8E6969]">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                        <MoreVertical size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-8 px-6 text-center">
                  <p className="text-gray-500">
                    Axtarış kriteriyasına uyğun sifariş tapılmadı
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

export default OrderTable;
