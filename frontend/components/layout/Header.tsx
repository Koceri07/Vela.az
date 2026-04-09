"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  User,
  UserPlus,
  Globe,
  ChevronDown,
} from "lucide-react";
import { navigation } from "@/data/header/header";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import SearchOverlay from "./SearchOverlay";
import { fetchProducts } from "@/lib/products";
import type { Product } from "@/app/(main)/collections/productSlice";

const Header = () => {
  const { cart, wishlist } = useCart();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    void fetchProducts({ page: 0, size: 12 })
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  const navLabel = (href: string) =>
    t("nav." + (href === "/" ? "home" : href.replace("/", "")));

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
      />
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
        <div className="flex items-center gap-3 lg:gap-0">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Menyunu bağla" : "Menyunu aç"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-gray-700 hover:text-black transition z-[101] relative"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.8} /> : <Menu size={28} strokeWidth={1.8} />}
          </button>
        </div>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-[2rem] sm:text-[2.25rem] font-semibold tracking-[0.22em] text-[#231F20] z-10"
        >
          VELA
        </Link>

        <nav className="hidden">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-wider transition ${
                item.href === "/collections"
                  ? "text-[#a37a7a] hover:opacity-80"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {navLabel(item.href)}
            </Link>
          ))}

          <div className="flex items-center gap-3">
            <Link
              href="/create-store"
              className="flex items-center gap-1.5 border border-[#8E6969] text-[#8E6969] text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-[#8E6969] hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap"
            >
              {t("header.create_store")}
            </Link>
            <Link
              href="/create-listing"
              className="flex items-center gap-1.5 bg-[#8E6969] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-[#725454] transition-all duration-300 shadow-sm whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              {t("header.create_listing")}
            </Link>
          </div>
        </nav>

        <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
          <div className="hidden">
            <button className="flex items-center space-x-1 text-xs font-semibold text-gray-600 hover:text-black transition uppercase py-2">
              <Globe size={16} strokeWidth={1.5} className="text-gray-500" />
              <span className="mt-[1px]">{language}</span>
              <ChevronDown
                size={14}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:rotate-180 text-gray-400"
              />
            </button>

            <div className="absolute top-full right-0 left-0 h-4"></div>

            <div className="absolute top-[calc(100%+0.5rem)] right-0 w-24 bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] transform origin-top scale-95 group-hover:scale-100">
              <div className="py-1.5 flex flex-col">
                {(["AZ", "RU", "EN"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`text-left px-4 py-2 text-xs font-bold uppercase transition-colors flex items-center justify-between ${
                      language === lang
                        ? "text-[#8E6969] bg-gray-50/80"
                        : "text-gray-600 hover:text-[#8E6969] hover:bg-gray-50"
                    }`}
                  >
                    {lang}
                    {language === lang && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E6969]"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden">
            <Link
              href="/login"
              className="flex items-center space-x-1.5 text-xs font-medium text-gray-600 hover:text-black transition uppercase"
            >
              <User size={18} strokeWidth={1.5} />
              <span>{t("header.login")}</span>
            </Link>
            <Link
              href="/register"
              className="flex items-center space-x-1.5 text-xs font-medium text-gray-600 hover:text-black transition uppercase"
            >
              <UserPlus size={18} strokeWidth={1.5} />
              <span>{t("header.register")}</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4 text-gray-700">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="inline-flex hover:text-black transition"
              aria-label="Axtar"
            >
              <Search size={22} strokeWidth={1.2} />
            </button>
            <Link
              href="/wishlist"
              className="hover:text-black transition relative"
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart size={22} strokeWidth={1.2} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#a37a7a] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              className="hover:text-black transition relative"
              aria-label="Cart"
              title="Cart"
            >
              <ShoppingBag size={22} strokeWidth={1.2} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#a37a7a] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full sm:w-80 sm:left-4 z-[100] border border-t-0 border-gray-100 bg-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.22)] rounded-b-xl">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-700 border-b border-gray-100 last:border-b-0"
              >
                {navLabel(item.href)}
              </Link>
            ))}

            <Link
              href="/create-store"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 border border-[#8E6969] text-[#8E6969] text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-[#8E6969] hover:text-white transition-all duration-300"
            >
              {t("header.create_store")}
            </Link>
            <Link
              href="/create-listing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-[#8E6969] text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-[#725454] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              {t("header.create_listing")}
            </Link>

            <div className="mt-3 flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
              <div className="flex items-center gap-2">
                {(["AZ", "RU", "EN"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold uppercase transition ${
                      language === lang
                        ? "border-[#8E6969] bg-[#8E6969] text-white"
                        : "border-gray-200 text-gray-600"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 text-gray-600">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} aria-label={t("header.login")}>
                  <User size={19} strokeWidth={1.7} />
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={t("header.register")}
                >
                  <UserPlus size={19} strokeWidth={1.7} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
