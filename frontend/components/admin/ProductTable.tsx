"use client";

import React from "react";
import { Edit2, Trash2, Eye } from "lucide-react";

interface ProductTableProps {
  searchTerm: string;
}

const ProductTable: React.FC<ProductTableProps> = ({ searchTerm }) => {
  const products = [
    {
      id: "001",
      name: "Premium Gəlinlik",
      category: "Gəlinliklər",
      sku: "SKU-001",
      price: "₼850",
      rentPrice: "₼250",
      stock: 5,
      status: "active",
      image: "👗",
    },
    {
      id: "002",
      name: "Kişi Mərasim Kostyumu",
      category: "Kişi Kostyumları",
      sku: "SKU-002",
      price: "₼650",
      rentPrice: "₼180",
      stock: 12,
      status: "active",
      image: "🤵",
    },
    {
      id: "003",
      name: "Xanım Ziyafət Geyimi",
      category: "Xanım Geyimləri",
      sku: "SKU-003",
      price: "₼450",
      rentPrice: "₼120",
      stock: 0,
      status: "inactive",
      image: "👰",
    },
    {
      id: "004",
      name: "Uşaq Mərasim Geyimi",
      category: "Uşaq Geyimləri",
      sku: "SKU-004",
      price: "₼250",
      rentPrice: "₼80",
      stock: 8,
      status: "active",
      image: "👧",
    },
  ];

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Məhsul
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                SKU
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                KCategory
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Satış/Kirayə Qiyməti
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Stok
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{product.image}</span>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          ID: {product.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700 font-medium">
                    {product.sku}
                  </td>
                  <td className="py-4 px-6 text-gray-600">{product.category}</td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">
                        {product.price}
                      </p>
                      <p className="text-sm text-gray-600">
                        Kirayə: {product.rentPrice}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        product.stock > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.stock} adet
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        product.status === "active"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {product.status === "active" ? "Aktiv" : "Qeyri-aktiv"}
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
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-8 px-6 text-center">
                  <p className="text-gray-500">
                    "{searchTerm}" üçün məhsul tapılmadı
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

export default ProductTable;
