"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { fetchProducts } from "@/lib/products";

interface Category {
  title: string;
  count: number;
  image: string;
  link: string;
}

const PopularCategories = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const [counts, setCounts] = useState({ bridal: 0, evening: 0, mens: 0, kids: 0 });

  useEffect(() => {
    fetchProducts({ page: 0, size: 50 }).then(data => {
      let bridal = 0, evening = 0, mens = 0, kids = 0;
      data.forEach(p => {
        if (p.backendCategory === "KIDS" || p.category === "kids") kids++;
        else if (p.backendCategory === "MEN" || p.category === "mens") mens++;
        else if (p.backendCategory === "WOMEN" || p.category === "bridal" || p.category === "evening") {
          if (p.occasion === "Ziyafət" || p.category === "evening") evening++;
          else bridal++;
        }
      });
      setCounts({ bridal, evening, mens, kids });
    }).catch(() => {});
  }, []);

  const categories: Category[] = [
    {
      title: t("home.cat_bride"),
      count: counts.bridal,
      image: "/mainPage/cat-wedding.jpg",
      link: "/collections?cat=bridal",
    },
    {
      title: t("home.cat_evening"),
      count: counts.evening,
      image: "/mainPage/cat-gala.jpg",
      link: "/collections?cat=evening",
    },
    {
      title: t("home.cat_mens"),
      count: counts.mens,
      image: "/mainPage/cat-men.jpg",
      link: "/collections?cat=mens",
    },
    {
      title: t("home.cat_kids"),
      count: counts.kids,
      image: "/mainPage/cat-kids.jpg",
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
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold drop-shadow-sm">{cat.title}</h3>
                <p className="text-sm text-white/85">{cat.count} {t("home.products_count")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
