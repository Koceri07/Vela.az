"use client";

// import React-a ehtiyac yoxdur
import React from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

interface Category {
  title: string;
  count: number;
  image: string;
  link: string;
}

const PopularCategories = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const categories: Category[] = [
    {
      title: t("home.cat_bride"),
      count: 124,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&h=500",
      link: "/collections?cat=bridal",
    },
    {
      title: t("home.cat_evening"),
      count: 256,
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&h=500",
      link: "/collections?cat=evening",
    },
    {
      title: t("home.cat_mens"),
      count: 89,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500",
      link: "/collections?cat=mens",
    },
    {
      title: t("home.cat_kids"),
      count: 67,
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=400&h=500",
      link: "/collections?cat=kids",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-serif mb-2">
          {t("home.pop_title")}
        </h2>
        <p className="text-center text-gray-500 mb-12">
          {t("home.pop_sub")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group cursor-pointer relative overflow-hidden rounded-lg h-80"
              onClick={() => router.push(cat.link)}
            >
              {/* Category componenti yarat */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{cat.title}</h3>
                <p className="text-sm">{cat.count} {t("home.products_count")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
