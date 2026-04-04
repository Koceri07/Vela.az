"use client";

// import React-a ehtiyac yoxdur
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Testimonial {
  text: string;
  name: string;
  age: string;
}

const Testimonials = () => {
  const { t } = useLanguage();
  const data: Testimonial[] = [
    {
      text: t("home.test_1"),
      name: "Aynur",
      age: "28 " + t("home.age"),
    },
    {
      text: t("home.test_2"),
      name: "Leyla",
      age: "34 " + t("home.age"),
    },
    {
      text: t("home.test_3"),
      name: "Rəşad",
      age: "31 " + t("home.age"),
    },
  ];

  return (
    <section className="bg-[#F9F6F3] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-serif mb-16 text-black">
          {t("home.test_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
              {/* Testimonial componenti yarat */}
              <p className="text-[#A37A7A] italic mb-6">&quot;{item.text}&quot;</p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8DCD8] flex items-center justify-center">
                  <span className="text-[#A37A7A] font-bold">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-black">{item.name}</p>
                  <p className="text-sm text-[#A37A7A]">{item.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
