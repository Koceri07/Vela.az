
"use client";

import React from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, UserPlus, Globe, ChevronDown } from "lucide-react";
import { navigation } from "@/data/header/header";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import SearchOverlay from "./SearchOverlay";
import { mockProducts } from "@/app/(main)/collections/productSlice";

const Header = () => {
  const { cart, wishlist } = useCart();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        products={mockProducts} 
      />
      {/* Header fixed deyil */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
          <Link href="/">
            <img
              src="/mainPage/logo.jpg"
              alt="VELA"
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Dinamik Naviqasiya */}
        <nav className="hidden md:flex items-center space-x-8">
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
              {/* CollectionLink componenti yarat */}
              {t("nav." + (item.href === "/" ? "home" : item.href.replace("/", "")))}
            </Link>
          ))}

          {/* Elan Yarat & Mağaza Yarat CTA */}
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
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              {t("header.create_listing")}
            </Link>
          </div>
        </nav>

        {/* Sağ tərəf: User, Dil və İkonlar */}
        <div className="flex items-center space-x-5 lg:space-x-6">
          
          {/* Language Switcher */}
          <div className="relative group hidden sm:flex items-center">
            <button className="flex items-center space-x-1 text-xs font-semibold text-gray-600 hover:text-black transition uppercase py-2">
              <Globe size={16} strokeWidth={1.5} className="text-gray-500" />
              <span className="mt-[1px]">{language}</span>
              <ChevronDown size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:rotate-180 text-gray-400" />
            </button>
            
            {/* Invisible hover bridge to keep dropdown open */}
            <div className="absolute top-full right-0 left-0 h-4"></div>
            
            {/* Dropdown Menu */}
            <div className="absolute top-[calc(100%+0.5rem)] right-0 w-24 bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] transform origin-top scale-95 group-hover:scale-100">
              <div className="py-1.5 flex flex-col">
                {(['AZ', 'RU', 'EN'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`text-left px-4 py-2 text-xs font-bold uppercase transition-colors flex items-center justify-between ${
                      language === lang 
                        ? 'text-[#8E6969] bg-gray-50/80' 
                        : 'text-gray-600 hover:text-[#8E6969] hover:bg-gray-50'
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

          <div className="hidden lg:flex items-center border-l border-r border-gray-200 px-5 lg:px-6 space-x-4">
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
              className="hover:text-black transition"
            >
              <Search size={22} strokeWidth={1.2} />
            </button>
            <Link
              href="/wishlist"
              className="hover:text-black transition relative"
              aria-label="Bəyəndiklərim"
              title="Bəyəndiklərim"
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
              aria-label="Səbət"
              title="Səbət"
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
    </header>
  );
};

export default Header;
