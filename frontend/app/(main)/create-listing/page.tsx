"use client";

import React, { useState } from "react";
import { Camera, Phone, Tag, DollarSign, FileText, ChevronDown, CheckCircle } from "lucide-react";

const CreateListingPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    occasion: "",
    size: "",
    type: "rent", // 'rent' or 'sell' or 'both'
    rentPrice: "",
    sellPrice: "",
    condition: "",
    description: "",
    phone: "",
    city: "",
    photos: [] as File[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTypeToggle = (val: string) => {
    setForm({ ...form, type: val });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAF7F5] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-12 max-w-md w-full text-center shadow-lg">
          <CheckCircle className="mx-auto mb-6 text-[#8E6969]" size={56} strokeWidth={1.5} />
          <h2 className="text-2xl font-serif font-bold text-[#4A3728] mb-3">Elanınız göndərildi!</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Elanınız moderasiya üçün göndərildi. Yaxın zamanda əlaqə saxlanılacaq.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ title: "", category: "", occasion: "", size: "", type: "rent", rentPrice: "", sellPrice: "", condition: "", description: "", phone: "", city: "", photos: [] }); }}
            className="bg-[#8E6969] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#725454] transition"
          >
            Yeni Elan Yarat
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF7F5]">
      {/* Header Banner */}
      <section className="bg-[#4A3728] text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide mb-3">
          Elan Yarat
        </h1>
        <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
          Geyimini kirayəyə ver və ya sat. Bütün məlumatları doldurun, elanınız yayınlansın.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* ─── 1. Əsas Məlumatlar ─── */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 space-y-6">
            <h2 className="text-[#4A3728] font-serif font-bold text-xl flex items-center gap-2">
              <FileText size={20} className="text-[#A37A7A]" /> Əsas Məlumatlar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Başlıq */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Elan Başlığı <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="məs. Qızıl Atlas Axşam Geyimi"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8E6969] focus:ring-1 focus:ring-[#8E6969] transition bg-gray-50"
                />
              </div>

              {/* Kateqoriya */}
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Kateqoriya <span className="text-red-400">*</span>
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8E6969] bg-gray-50 appearance-none pr-10"
                >
                  <option value="">Seçin...</option>
                  <option value="bridal">Gəlinliklər</option>
                  <option value="women">Xanım Geyimləri</option>
                  <option value="mens">Kişi Kostyumları</option>
                  <option value="kids">Uşaq Geyimləri</option>
                  <option value="accessories">Aksesuarlar</option>
                  <option value="other">Digər</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-10 text-gray-400 pointer-events-none" />
              </div>

              {/* Münasibət */}
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Münasibət
                </label>
                <select
                  name="occasion"
                  value={form.occasion}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8E6969] bg-gray-50 appearance-none pr-10"
                >
                  <option value="">Seçin...</option>
                  <option value="wedding">Toy</option>
                  <option value="evening">Ziyafət</option>
                  <option value="ceremony">Mərasim / Nişan</option>
                  <option value="graduation">Məzuniyyət</option>
                  <option value="everyday">Gündəlik</option>
                  <option value="other">Digər</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-10 text-gray-400 pointer-events-none" />
              </div>

              {/* Ölçü */}
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Ölçü
                </label>
                <select
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8E6969] bg-gray-50 appearance-none pr-10"
                >
                  <option value="">Seçin...</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>Universal</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-10 text-gray-400 pointer-events-none" />
              </div>

              {/* Vəziyyət */}
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Geyimin Vəziyyəti
                </label>
                <select
                  name="condition"
                  value={form.condition}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8E6969] bg-gray-50 appearance-none pr-10"
                >
                  <option value="">Seçin...</option>
                  <option value="new">Yeni (geyilməmiş)</option>
                  <option value="like-new">Demək olar yeni (1 dəfə geyilib)</option>
                  <option value="good">Yaxşı vəziyyətdə</option>
                  <option value="fair">Qənaətbəxş</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-10 text-gray-400 pointer-events-none" />
              </div>

              {/* Şəhər */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Şəhər / Rayon
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="məs. Bakı, Sumqayıt..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8E6969] focus:ring-1 focus:ring-[#8E6969] transition bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* ─── 2. Qiymət ─── */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 space-y-6">
            <h2 className="text-[#4A3728] font-serif font-bold text-xl flex items-center gap-2">
              <DollarSign size={20} className="text-[#A37A7A]" /> Qiymət və Elan Növü
            </h2>

            {/* Tip seçimi */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Elan Növü <span className="text-red-400">*</span>
              </label>
              <div className="flex gap-3 flex-wrap">
                {[
                  { val: "rent", label: "Kirayə" },
                  { val: "sell", label: "Satış" },
                  { val: "both", label: "Kirayə + Satış" },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.val}
                    onClick={() => handleTypeToggle(opt.val)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition border ${
                      form.type === opt.val
                        ? "bg-[#8E6969] text-white border-[#8E6969]"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#8E6969]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(form.type === "rent" || form.type === "both") && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Kirayə Qiyməti (AZN) <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="rentPrice"
                      value={form.rentPrice}
                      onChange={handleChange}
                      placeholder="0"
                      min="0"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:border-[#8E6969] bg-gray-50"
                    />
                    <span className="absolute left-4 top-3.5 text-gray-400 text-sm font-bold">₼</span>
                  </div>
                </div>
              )}
              {(form.type === "sell" || form.type === "both") && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Satış Qiyməti (AZN) <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="sellPrice"
                      value={form.sellPrice}
                      onChange={handleChange}
                      placeholder="0"
                      min="0"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:border-[#8E6969] bg-gray-50"
                    />
                    <span className="absolute left-4 top-3.5 text-gray-400 text-sm font-bold">₼</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ─── 3. Ətraflı Məlumat ─── */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 space-y-6">
            <h2 className="text-[#4A3728] font-serif font-bold text-xl flex items-center gap-2">
              <Tag size={20} className="text-[#A37A7A]" /> Ətraflı Məlumat
            </h2>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                Geyim Haqqında Məlumat
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="Geyimin rəngi, parçası, xüsusiyyətləri, istifadə şərtləri, depozit tələbi (kirayə üçün) və s. burada qeyd edin..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8E6969] focus:ring-1 focus:ring-[#8E6969] transition bg-gray-50 resize-none"
              />
            </div>
          </div>

          {/* ─── 4. Şəkillər ─── */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 space-y-4">
            <h2 className="text-[#4A3728] font-serif font-bold text-xl flex items-center gap-2">
              <Camera size={20} className="text-[#A37A7A]" /> Şəkillər
            </h2>
            <p className="text-xs text-gray-400">
              Aydın, yüksək keyfiyyətli şəkillər yükləyin. Tövsiyə: ağ fon, 3–5 şəkil.
            </p>
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-[#A37A7A]/40 rounded-xl cursor-pointer bg-[#FAF7F5] hover:bg-[#f5efeb] transition">
              <Camera size={32} className="text-[#A37A7A] mb-2" strokeWidth={1.5} />
              <span className="text-sm font-medium text-[#8E6969]">Şəkil seçmək üçün klikləyin</span>
              <span className="text-xs text-gray-400 mt-1">PNG, JPG — maks. 5 şəkil</span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) {
                    setForm({ ...form, photos: Array.from(e.target.files).slice(0, 5) });
                  }
                }}
              />
            </label>
            {form.photos.length > 0 && (
              <div className="flex gap-3 flex-wrap mt-2">
                {form.photos.map((f, i) => (
                  <div key={i} className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
                    <img src={URL.createObjectURL(f)} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
                <p className="w-full text-xs text-gray-400">{form.photos.length} şəkil seçildi</p>
              </div>
            )}
          </div>

          {/* ─── 5. Əlaqə ─── */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 space-y-6">
            <h2 className="text-[#4A3728] font-serif font-bold text-xl flex items-center gap-2">
              <Phone size={20} className="text-[#A37A7A]" /> Əlaqə Məlumatları
            </h2>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                Telefon Nömrəsi <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+994 50 000 00 00"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-sm focus:outline-none focus:border-[#8E6969] focus:ring-1 focus:ring-[#8E6969] transition bg-gray-50"
                />
                <Phone size={16} className="absolute left-4 top-3.5 text-gray-400" />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Bu nömrə elanınızda görünəcək. Alıcılar sizinlə birbaşa əlaqə saxlayacaq.
              </p>
            </div>
          </div>

          {/* ─── Razılaşma + Göndər ─── */}
          <div className="bg-[#4A3728]/5 border border-[#4A3728]/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
              Elanı göndərməklə siz{" "}
              <a href="/seller-agreement" className="underline text-[#8E6969] hover:opacity-80">Satıcı Müqaviləsini</a>{" "}
              və{" "}
              <a href="/terms" className="underline text-[#8E6969] hover:opacity-80">İstifadəçi Şərtlərini</a>{" "}
              qəbul etdiyinizi təsdiqləyirsiniz.
            </p>
            <button
              type="submit"
              className="shrink-0 bg-[#8E6969] text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#725454] transition-all duration-300 shadow-lg"
            >
              Elanı Göndər
            </button>
          </div>

        </form>
      </section>
    </main>
  );
};

export default CreateListingPage;
