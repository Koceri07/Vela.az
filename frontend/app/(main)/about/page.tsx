"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#4A3728] text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest mb-4">
          {t("about.title")}
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto font-sans leading-relaxed">
          {t("about.subtitle")}
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 md:px-0">
        <div className="space-y-12">
          {/* Vela.az nədir? */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3728] border-b pb-2">
              {t("about.what_is")}
            </h2>
            <p className="text-gray-700 leading-relaxed font-sans">
              {t("about.what_is_desc1")}
            </p>
            <p className="text-gray-700 leading-relaxed font-sans">
              {t("about.what_is_desc2")}
            </p>
          </div>

          {/* Grid: Biz nə edirik? vs Biz nə etmirik? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FDF9F6] p-8 rounded-lg border border-[#F2EBE6]">
              <h3 className="text-xl font-serif font-bold text-[#A37A7A] mb-4">
                {t("about.we_do")}
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-700 font-sans">
                <li>{t("about.we_do_1")}</li>
                <li>{t("about.we_do_2")}</li>
                <li>{t("about.we_do_3")}</li>
              </ul>
            </div>

            <div className="bg-[#FAF7F5] p-8 rounded-lg border border-[#F2EBE6]">
              <h3 className="text-xl font-serif font-bold text-[#4A3728] mb-4">
                {t("about.we_dont")}
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-700 font-sans">
                <li>{t("about.we_dont_1")}</li>
                <li>{t("about.we_dont_2")}</li>
                <li>{t("about.we_dont_3")}</li>
              </ul>
            </div>
          </div>

          {/* Məqsədimiz */}
          <div className="bg-[#4A3728] text-white p-10 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-serif font-bold mb-4">{t("about.goal")}</h2>
            <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
              {t("about.goal_desc")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
