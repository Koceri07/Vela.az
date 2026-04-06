"use client"; // Keçid funksiyası üçün mütləqdir

// import React-a ehtiyac yoxdur
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HeroPage = () => {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-[#F9F6F3]">
      {/* Background Image -vale-woman.jpg */}
      <div className="absolute inset-0">
        <Image
          src="/mainPage/vale-woman.jpg"
          alt="Vela Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top lg:object-center"
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Centered Content Section (As per mockup) */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight drop-shadow-lg font-bold">
            {t("home.hero_title_1")} <span className="italic font-normal">{t("home.hero_title_span")}</span> <br />
            {t("home.hero_title_2")}
          </h1>

          <p className="text-white/95 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            {t("home.hero_desc")}
          </p>

          <div className="pt-6 flex justify-center">
            <button
              onClick={() => router.push("/collections")}
              className="flex items-center gap-3 bg-[#8E6969] text-white px-8 py-3.5 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-[#725454] transition-all duration-300 shadow-xl"
            >
              {t("home.hero_btn")}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Sağ aşağı küncdə xırda detal (Opsional) */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex items-center gap-4 text-white/50 text-[10px] tracking-[0.5em] uppercase vertical-rl rotate-180">
          <div className="w-px h-20 bg-white/30"></div>
          {t("home.hero_scroll")}
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
