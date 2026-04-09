"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const TermsPage = () => {
  const { t } = useLanguage();

  const sections = [
    {
      number: "1",
      title: t("terms.section_1"),
      items: [t("terms.section_1_1"), t("terms.section_1_2"), t("terms.section_1_3")],
    },
    {
      number: "2",
      title: t("terms.section_2"),
      items: [t("terms.section_2_1"), t("terms.section_2_2"), t("terms.section_2_3")],
    },
    {
      number: "3",
      title: t("terms.section_3"),
      items: [t("terms.section_3_1"), t("terms.section_3_2"), t("terms.section_3_3")],
    },
    {
      number: "4",
      title: t("terms.section_4"),
      items: [t("terms.section_4_1"), t("terms.section_4_2")],
    },
    {
      number: "5",
      title: t("terms.section_5"),
      items: [t("terms.section_5_1"), t("terms.section_5_2"), t("terms.section_5_3")],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-50 border-b border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#4A3728] mb-4">
            {t("terms.title")}
          </h1>
          <p className="text-gray-600 font-sans italic">{t("terms.desc")}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6 md:px-0">
        <div className="prose prose-stone max-w-none space-y-10">
          {sections.map((section) => (
            <div key={section.number} className="space-y-4">
              <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">
                  {section.number}
                </span>
                {section.title}
              </h2>
              <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
                {section.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-[#FAF7F5] p-6 rounded-lg border border-[#F2EBE6]">
            <h3 className="font-serif font-bold text-[#4A3728] mb-2">6. {t("terms.section_6")}</h3>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
              {t("terms.section_6_text")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
