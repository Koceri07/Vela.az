"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Edit2, Eye } from "lucide-react";
import { getAllProducts, getApiErrorMessage } from "@/lib/api/client";
import type { ProductDto } from "@/lib/api/types";

interface ProductTableProps {
  searchTerm: string;
}

const ProductTable: React.FC<ProductTableProps> = ({ searchTerm }) => {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");
        const page = await getAllProducts({ page: 0, size: 100 });
        if (!cancelled) {
          setProducts(page.content);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(getApiErrorMessage(loadError, "Məhsullar yüklənmədi."));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void loadProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (product.sku || "").toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [products, searchTerm],
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
                Kateqoriya
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Satış/Kirayə Qiyməti
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Stok
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                Store
              </th>
              <th className="text-center py-4 px-6 font-semibold text-gray-700 text-sm">
                Əməliyyatlar
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={7} className="py-8 px-6 text-center text-gray-500">
                  Yüklənir...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={7} className="py-8 px-6 text-center text-red-500">
                  {error}
                </td>
              </tr>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🛍️</span>
                      <div>
                        <p className="font-semibold text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-600">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700 font-medium">{product.sku || "-"}</td>
                  <td className="py-4 px-6 text-gray-600">{product.category}</td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">{product.price} AZN</p>
                      <p className="text-sm text-gray-600">Kirayə: {product.dailyPrice} AZN</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        product.stockQuantity > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.stockQuantity} ədəd
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{product.storeName}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600 hover:text-[#8E6969]">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600 hover:text-[#8E6969]">
                        <Edit2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-8 px-6 text-center">
                  <p className="text-gray-500">&quot;{searchTerm}&quot; üçün məhsul tapılmadı</p>
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
