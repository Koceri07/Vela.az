"use client";

import React, { useState } from "react";
import { Save, X, Upload, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    size: "",
    color: "",
    material: "",
    stock: "",
    images: [] as string[],
    isActive: true,
  });

  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleSave = () => {
    // Save product logic here
    alert("Məhsul əlavə edildi!");
    router.push("/admin/products");
  };

  const addImageUrl = () => {
    setImageUrls([...imageUrls, ""]);
  };

  const updateImageUrl = (index: number, url: string) => {
    const newUrls = [...imageUrls];
    newUrls[index] = url;
    setImageUrls(newUrls);
  };

  const removeImageUrl = (index: number) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Yeni Məhsul Əlavə Et
          </h1>
          <p className="text-gray-600 mt-1">
            Yeni məhsul məlumatlarını daxil edin
          </p>
        </div>
        <Link
          href="/admin/products"
          className="flex items-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          <X size={20} />
          <span>Ləğv Et</span>
        </Link>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Əsas Məlumatlar
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Məhsul Adı *
              </label>
              <input
                type="text"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                placeholder="Məhsul adını daxil edin"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Təsvir *
              </label>
              <textarea
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                rows={4}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                placeholder="Məhsul təsvirini daxil edin"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qiymət (₼) *
              </label>
              <input
                type="number"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kateqoriya *
              </label>
              <select
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
              >
                <option value="">Kateqoriya seçin</option>
                <option value="wedding_dresses">Toy Geyimləri</option>
                <option value="mens_suits">Kişi Kostyumu</option>
                <option value="womens_clothing">Qadın Geyimləri</option>
                <option value="childrens_clothing">Uşaq Geyimləri</option>
                <option value="accessories">Aksesuarlar</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brend
              </label>
              <input
                type="text"
                value={product.brand}
                onChange={(e) =>
                  setProduct({ ...product, brand: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                placeholder="Brend adını daxil edin"
              />
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Əlavə Təfərrüatlar
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ölçü
                </label>
                <input
                  type="text"
                  value={product.size}
                  onChange={(e) =>
                    setProduct({ ...product, size: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                  placeholder="M, L, XL"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rəng
                </label>
                <input
                  type="text"
                  value={product.color}
                  onChange={(e) =>
                    setProduct({ ...product, color: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                  placeholder="Qırmızı, Mavi"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Material
              </label>
              <input
                type="text"
                value={product.material}
                onChange={(e) =>
                  setProduct({ ...product, material: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                placeholder="Pambıq, İpək"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stok Miqdarı *
              </label>
              <input
                type="number"
                value={product.stock}
                onChange={(e) =>
                  setProduct({ ...product, stock: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                placeholder="0"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="isActive"
                checked={product.isActive}
                onChange={(e) =>
                  setProduct({ ...product, isActive: e.target.checked })
                }
                className="w-4 h-4 text-[#8E6969] border-gray-300 rounded focus:ring-[#8E6969]"
              />
              <label
                htmlFor="isActive"
                className="text-sm font-medium text-gray-700"
              >
                Aktiv Məhsul
              </label>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Şəkillər</h2>

          <div className="space-y-4">
            {imageUrls.map((url, index) => (
              <div key={index} className="flex gap-4 items-center">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => updateImageUrl(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8E6969]"
                  placeholder="Şəkil URL-i daxil edin"
                />
                <button
                  onClick={() => removeImageUrl(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>
            ))}

            <button
              onClick={addImageUrl}
              className="flex items-center gap-2 text-[#8E6969] hover:text-[#725454] transition"
            >
              <Plus size={20} />
              <span>Şəkil URL-i Əlavə Et</span>
            </button>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600">
              <Upload size={16} />
              <span className="text-sm">
                Şəkilləri yükləmək üçün URL-ləri daxil edin
              </span>
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
