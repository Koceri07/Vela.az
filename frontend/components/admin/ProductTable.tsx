"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Edit2, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { getAllProducts, getApiErrorMessage } from "@/lib/api/client";
import { fetchProducts, deleteLocalProduct } from "@/lib/products";
import type { Product } from "@/app/(main)/collections/productSlice";

interface ProductTableProps {
  searchTerm: string;
}

const ProductTable: React.FC<ProductTableProps> = ({ searchTerm }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchProducts({ page: 0, size: 100 });
      setProducts(data);
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, "Məhsullar yüklənmədi."));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadProducts();
  }, []);

  const handleDelete = (id: number) => {
    if (confirm("Bu məhsulu silmək istədiyinizə əminsiniz?")) {
      deleteLocalProduct(id);
      void loadProducts();
    }
  };

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
                      <p className="font-semibold text-gray-900">{product.sellPrice || product.price} AZN</p>
                      <p className="text-sm text-gray-600">Kirayə: {product.rentPrice} AZN</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        (product.stockQuantity || 0) > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.stockQuantity || 0} ədəd
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{product.storeName || "Naməlum"}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <Link href={`/collections/${product.slug}`} target="_blank">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-400 hover:text-[#8E6969]">
                          <Eye size={18} />
                        </button>
                      </Link>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={18} />
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
