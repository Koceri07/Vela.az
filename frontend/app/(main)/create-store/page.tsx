"use client";

import React, { useState } from "react";
import {
  Store,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createStore, getApiErrorMessage } from "@/lib/api/client";
import { getSessionUser } from "@/lib/api/session";

const CreateStorePage = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = getSessionUser();
    if (!user) {
      setError("Mağaza yaratmaq üçün əvvəlcə daxil olun.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      await createStore(user.id, form);
      setSubmitted(true);
    } catch (submitError) {
      setError(getApiErrorMessage(submitError, "Mağaza yaradılmadı."));
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAF7F5] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-12 max-w-md w-full text-center shadow-2xl border border-stone-50">
          <div className="w-20 h-20 bg-[#8E6969] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="text-white" size={40} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#4A3728] mb-3">
            {t("create_store.success_title")}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            {t("create_store.success_desc")}
          </p>
          <button
            onClick={() => (window.location.href = "/")}
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

      <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-100 space-y-6">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4A3728]/60 mb-2">
                {t("create_store.store_name")}
              </label>
              <div className="relative">
                <Store size={16} className="absolute left-4 top-3.5 text-stone-300" />
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-[#FAF7F5] border border-stone-100 rounded-xl focus:outline-none focus:border-[#8E6969] transition text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4A3728]/60 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-3.5 text-stone-300" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-[#FAF7F5] border border-stone-100 rounded-xl focus:outline-none focus:border-[#8E6969] transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4A3728]/60 mb-2">
                  Telefon
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-3.5 text-stone-300" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={form.phoneNumber}
                    onChange={handleChange}
                    placeholder="+994501234567"
                    className="w-full pl-11 pr-4 py-3 bg-[#FAF7F5] border border-stone-100 rounded-xl focus:outline-none focus:border-[#8E6969] transition text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4A3728]/60 mb-2">
                {t("create_store.address")}
              </label>
              <div className="relative">
                <MapPin size={16} className="absolute left-4 top-3.5 text-stone-300" />
                <input
                  type="text"
                  name="address"
                  required
                  value={form.address}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-[#FAF7F5] border border-stone-100 rounded-xl focus:outline-none focus:border-[#8E6969] transition text-sm"
                />
              </div>
            </div>
          </div>

          {error ? <p className="text-sm text-red-500">{error}</p> : null}

          <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#8E6969] rounded-2xl shadow-xl text-white">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-serif font-bold mb-1">{t("create_store.submit_title")}</h3>
              <p className="text-white/70 text-xs max-w-sm">{t("create_store.submit_desc")}</p>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="bg-white text-[#8E6969] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2 shadow-lg disabled:opacity-60"
            >
              {submitting ? "Göndərilir..." : t("create_store.submit_btn")} <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateStorePage;
