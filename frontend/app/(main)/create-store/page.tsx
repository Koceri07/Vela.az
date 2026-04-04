"use client";

import React, { useState } from "react";
import { Store, Camera, MapPin, Info, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CreateStorePage = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    storeName: "",
    category: "Geuilmiş Geyim",
    description: "",
    address: "",
    website: "",
    instagram: "",
    logo: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Store Creation JSON Data:", JSON.stringify(form, null, 2));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAF7F5] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-12 max-w-md w-full text-center shadow-2xl border border-stone-50">
          <div className="w-20 h-20 bg-[#8E6969] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="text-white" size={40} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#4A3728] mb-3">{t("create_store.success_title")}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            {t("create_store.success_desc")}
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className="w-full bg-[#8E6969] text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#725454] transition shadow-md"
          >
            {t("create_store.back_home")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF7F5] pb-20">
      {/* Hero Banner */}
      <section className="bg-[#4A3728] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8E6969] rounded-full -mr-32 -mt-32 opacity-20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
            {t("create_store.hero_title")}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t("create_store.hero_desc")}
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Main Info */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-100 flex flex-col md:flex-row gap-10">
            {/* Logo Upload */}
            <div className="shrink-0 flex flex-col items-center space-y-4">
              <div className="w-32 h-32 rounded-2xl bg-[#FAF7F5] border-2 border-dashed border-stone-200 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer hover:border-[#8E6969] transition">
                {form.logo ? (
                  <img src={URL.createObjectURL(form.logo)} alt="Logo" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <Camera size={32} className="text-stone-300 group-hover:text-[#8E6969] transition" />
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-tighter mt-2">{t("create_store.upload_logo")}</span>
                  </>
                )}
                <input 
                  type="file" 
                  className="absolute inset-0 opacity-0 cursor-pointer" 
                  onChange={(e) => e.target.files && setForm({...form, logo: e.target.files[0]})}
                />
              </div>
              <p className="text-[10px] text-gray-400 max-w-[120px] text-center italic">{t("create_store.logo_desc")}</p>
            </div>

            {/* Fields */}
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4A3728]/60 mb-2">{t("create_store.store_name")} <span className="text-red-400">*</span></label>
                  <div className="relative">
                    <Store size={16} className="absolute left-4 top-3.5 text-stone-300" />
                    <input 
                      type="text" 
                      name="storeName"
                      required
                      value={form.storeName}
                      onChange={handleChange}
                      placeholder="Məs. Elegant Boutique"
                      className="w-full pl-11 pr-4 py-3 bg-[#FAF7F5] border border-stone-100 rounded-xl focus:outline-none focus:border-[#8E6969] transition text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4A3728]/60 mb-2">{t("create_store.category")} <span className="text-red-400">*</span></label>
                  <select 
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FAF7F5] border border-stone-100 rounded-xl focus:outline-none focus:border-[#8E6969] transition text-sm appearance-none"
                  >
                    <option>Geyimlər (Yeni & Geyilmiş)</option>
                    <option>Yalnız Yeni Geyim</option>
                    <option>Yalnız Geyilmiş Geyim (Kirayə)</option>
                    <option>Aksessuar və Ayaqqabı</option>
                    <option>Böyük Ölçülü Geyim</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4A3728]/60 mb-2">{t("create_store.about_store")} <span className="text-red-400">*</span></label>
                <div className="relative">
                  <Info size={16} className="absolute left-4 top-4 text-stone-300" />
                  <textarea 
                    name="description"
                    required
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Müştərilərinizə mağazanızın hansı növ geyimlər təklif etdiyi barədə qısa məlumat verin..."
                    className="w-full pl-11 pr-4 py-4 bg-[#FAF7F5] border border-stone-100 rounded-xl focus:outline-none focus:border-[#8E6969] transition text-sm resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-100 space-y-6">
            <h2 className="text-lg font-serif font-bold text-[#4A3728] flex items-center gap-2">
              <Globe size={20} className="text-[#8E6969]" /> {t("create_store.contact_integration")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4A3728]/60 mb-2">{t("create_store.address")}</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-4 top-3.5 text-stone-300" />
                  <input 
                    type="text" 
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Məs. Bakı şəh., Nizami küç. 45"
                    className="w-full pl-11 pr-4 py-3 bg-[#FAF7F5] border border-stone-100 rounded-xl focus:outline-none focus:border-[#8E6969] transition text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4A3728]/60 mb-2">{t("create_store.instagram")}</label>
                <div className="relative">
                  <div className="absolute left-4 top-3.5 text-stone-300 font-bold text-sm">@</div>
                  <input 
                    type="text" 
                    name="instagram"
                    value={form.instagram}
                    onChange={handleChange}
                    placeholder="mağaza_adım"
                    className="w-full pl-11 pr-4 py-3 bg-[#FAF7F5] border border-stone-100 rounded-xl focus:outline-none focus:border-[#8E6969] transition text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#8E6969] rounded-2xl shadow-xl text-white">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-serif font-bold mb-1">{t("create_store.submit_title")}</h3>
              <p className="text-white/70 text-xs max-w-sm">{t("create_store.submit_desc")}</p>
            </div>
            <button
              type="submit"
              className="bg-white text-[#8E6969] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
            >
              {t("create_store.submit_btn")} <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateStorePage;
