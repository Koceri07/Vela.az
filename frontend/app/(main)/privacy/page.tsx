"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const PrivacyPage = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-stone-50 border-b border-stone-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#4A3728] mb-4 uppercase tracking-widest">
            {t("privacy.title")}
          </h1>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto">
            {t("privacy.desc")}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Toplanan məlumatlar */}
          <div className="space-y-6">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-2 border-l-4 border-[#A37A7A] pl-4">
              1. {t("privacy.section_1")}
            </h2>
            <ul className="space-y-4 text-gray-700 font-sans text-sm md:text-base">
              <li className="flex flex-col">
                <span className="font-bold text-gray-900">1.1. {t("privacy.section_1_1")}</span>
                {t("privacy.section_1_1_text")}
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-900">1.2. {t("privacy.section_1_2")}</span>
                {t("privacy.section_1_2_text")}
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-900">1.3. {t("privacy.section_1_3")}</span>
                {t("privacy.section_1_3_text")}
              </li>
            </ul>
          </div>

          {/* Məlumatların istifadəsi */}
          <div className="space-y-6">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-2 border-l-4 border-[#A37A7A] pl-4">
              2. {t("privacy.section_2")}
            </h2>
            <ul className="space-y-4 text-gray-700 font-sans text-sm md:text-base">
              <li className="flex gap-2 items-start">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#A37A7A] shrink-0" />
                <span>{t("privacy.section_2_1")}</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#A37A7A] shrink-0" />
                <span>{t("privacy.section_2_2")}</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#A37A7A] shrink-0" />
                <span className="font-bold text-[#4A3728]">{t("privacy.section_2_3")}</span>
              </li>
            </ul>
          </div>

          {/* Məlumatların qorunması */}
          <div className="bg-[#FAF7F5] p-8 rounded-xl space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728]">3. {t("privacy.section_3")}</h2>
            <p className="text-gray-600 font-sans text-sm">
              {t("privacy.section_3_text")}
            </p>
          </div>

          {/* Sizin hüquqlarınız */}
          <div className="bg-[#4A3728] text-white p-8 rounded-xl space-y-4">
            <h2 className="text-xl font-serif font-bold">4. {t("privacy.section_4")}</h2>
            <p className="font-sans text-sm opacity-90 leading-relaxed">
              {t("privacy.section_4_text")}
            </p>
          </div>

          {/* Kuki faylları */}
          <div className="space-y-4 md:col-span-2 border-t pt-8">
            <h2 className="text-xl font-serif font-bold text-[#4A3728]">5. {t("privacy.section_5")}</h2>
            <p className="text-gray-700 font-sans">
              {t("privacy.section_5_text")}
            </p>
          </div>

           {/* Razılıq */}
           <div className="md:col-span-2 bg-[#FDF9F6] border border-[#F2EBE6] p-6 text-center rounded-lg italic text-[#A37A7A] font-sans">
             {t("privacy.consent")}
           </div>

        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
