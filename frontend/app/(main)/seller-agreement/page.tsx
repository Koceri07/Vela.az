"use client";

import React from "react";
import { Camera, AlertCircle, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SellerAgreementPage = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#4A3728] text-white py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-widest mb-4 uppercase">
          {t("seller_agreement.title")}
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto font-sans leading-relaxed">
          {t("seller_agreement.desc")}
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
                  <span className="text-[#A37A7A]">01.</span> {t("seller_agreement.section_1")}
                </h2>
                <div className="text-gray-700 font-sans pl-10 space-y-2">
                  <p>{t("seller_agreement.section_1_text")}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
                  <span className="text-[#A37A7A]">02.</span> {t("seller_agreement.section_2")}
                </h2>
                <div className="text-gray-700 font-sans pl-10 space-y-3">
                  <p>{t("seller_agreement.section_2_text")}</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 p-8 rounded-2xl space-y-4 relative overflow-hidden">
              <AlertCircle className="absolute -top-4 -right-4 w-24 h-24 text-red-100/50" />
              <h2 className="text-2xl font-serif font-bold text-red-800 flex items-center gap-3">
                <span className="text-red-600">03.</span> {t("seller_agreement.section_5")}
              </h2>
              <div className="text-red-900/80 font-sans pl-10 space-y-3">
                <p>{t("seller_agreement.section_5_text")}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
                  <span className="text-[#A37A7A]">04.</span> {t("seller_agreement.section_4")}
                </h2>
                <p className="text-gray-700 font-sans pl-10">{t("seller_agreement.section_4_text")}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
                  <span className="text-[#A37A7A]">05.</span> {t("seller_agreement.section_3")}
                </h2>
                <p className="text-gray-700 font-sans pl-10">{t("seller_agreement.section_3_text")}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#FAF7F5] border border-[#F2EBE6] p-8 rounded-3xl sticky top-24">
              <Camera className="w-12 h-12 text-[#A37A7A] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-serif font-bold text-[#4A3728] mb-6">{t("seller_agreement.image_requirements")}</h3>
              <ul className="space-y-6 text-sm font-sans text-gray-700">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#A37A7A]/10 text-[#A37A7A] flex items-center justify-center shrink-0 font-bold italic">1</div>
                  <p><span className="font-bold">{t("seller_agreement.image_requirement_1_title")}</span> {t("seller_agreement.image_requirement_1_text")}</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#A37A7A]/10 text-[#A37A7A] flex items-center justify-center shrink-0 font-bold italic">2</div>
                  <p><span className="font-bold">{t("seller_agreement.image_requirement_2_title")}</span> {t("seller_agreement.image_requirement_2_text")}</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#A37A7A]/10 text-[#A37A7A] flex items-center justify-center shrink-0 font-bold italic">3</div>
                  <p><span className="font-bold text-red-700 italic">{t("seller_agreement.image_requirement_3_title")}</span> {t("seller_agreement.image_requirement_3_text")}</p>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-[#F2EBE6] space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#4A3728]">
                  <Phone size={18} className="text-[#A37A7A]" />
                  <span>{t("seller_agreement.phone")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#4A3728]">
                  <Mail size={18} className="text-[#A37A7A]" />
                  <span>{t("seller_agreement.email")}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default SellerAgreementPage;
