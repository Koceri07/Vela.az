
"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const TermsPage = () => {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 border-b border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#4A3728] mb-4">
            {t("terms.title")}
          </h1>
          <p className="text-gray-600 font-sans italic">
            {t("terms.desc")}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 md:px-0">
        <div className="prose prose-stone max-w-none space-y-10">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">1</span>
              {t("terms.section_1")}
            </h2>
            <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
              <p>{t("terms.section_1_1")}</p>
              <p>{t("terms.section_1_2")}</p>
              <p>{t("terms.section_1_3")}</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">2</span>
              {t("terms.section_2")}
            </h2>
            <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
              <p>{t("terms.section_2_1")}</p>
              <p>{t("terms.section_2_2")}</p>
              <p>{t("terms.section_2_3")}</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">3</span>
              {t("terms.section_3")}
            </h2>
            <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
              <p>{t("terms.section_3_1")}</p>
              <p>{t("terms.section_3_2")}</p>
              <p>{t("terms.section_3_3")}</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3727] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">4</span>
              {t("terms.section_4")}
            </h2>
            <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
              <p>{t("terms.section_4_1")}</p>
              <p>{t("terms.section_4_2")}</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">5</span>
              {t("terms.section_5")}
            </h2>
            <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
              <p>{t("terms.section_5_1")}</p>
              <p>{t("terms.section_5_2")}</p>
              <p>{t("terms.section_5_3")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="bg-[#FAF7F5] p-6 rounded-lg border border-[#F2EBE6]">
              <h3 className="font-serif font-bold text-[#4A3728] mb-2">6. {t("terms.section_6")}</h3>
              <p className="text-gray-600 font-sans text-sm">{t("terms.section_6_text")}</p>
            </div>
            <div className="bg-[#FAF7F5] p-6 rounded-lg border border-[#F2EBE6]">
              <h3 className="font-serif font-bold text-[#4A3728] mb-2">7. {t("terms.section_7")}</h3>
              <p className="text-gray-600 font-sans text-sm italic">{t("terms.section_7_text")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
