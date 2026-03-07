"use client";

import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyVela = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-[#A37A7A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.428 15.341A8 8 0 006.34 6.572M15 21h.01"
          />
        </svg>
      ),
      title: "Zamanınıza Qənaət",
      description: "Evdən çıxmadan mükəmməl seçim edin",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-[#A37A7A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18v18H3V3z"
          />
        </svg>
      ),
      title: "10x Daha Ucuz",
      description: "Kirayə ilə büdcənizə qənaət edin",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-[#A37A7A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 12v6M8 12v6m8-6H8"
          />
        </svg>
      ),
      title: "Ailə Kombinləri",
      description: "Bütün ailə üçün uyğun dəstlər",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-[#A37A7A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M19 3v4m-2-2h4"
          />
        </svg>
      ),
      title: "Hər Dəfə Fərqli",
      description: "Hər tədbirə yeni görünüş",
    },
  ];

  return (
    <section className="bg-[#F9F6F3] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-serif mb-16 text-black">
          Niyə VELA?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Feature componenti yarat */}
              {f.icon}
              <h3 className="mt-4 text-xl font-semibold text-black">
                {f.title}
              </h3>
              <p className="mt-2 text-[#A37A7A] text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVela;
