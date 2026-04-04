
"use client";

import React from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, UserPlus } from "lucide-react";
import { navigation } from "@/data/header/header";
import { useCart } from "@/context/CartContext";
import SearchOverlay from "./SearchOverlay";
import { mockProducts } from "@/app/(main)/collections/productSlice";

const Header = () => {
  const { cart, wishlist } = useCart();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

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
              {item.label}
            </Link>
          ))}

          {/* Elan Yarat & Mağaza Yarat CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/create-store"
              className="flex items-center gap-1.5 border border-[#8E6969] text-[#8E6969] text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-[#8E6969] hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap"
            >
              Mağaza Yarat
            </Link>
            <Link
              href="/create-listing"
              className="flex items-center gap-1.5 bg-[#8E6969] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-[#725454] transition-all duration-300 shadow-sm whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Elan Yarat
            </Link>
          </div>
        </nav>

        {/* Sağ tərəf: User və İkonlar */}
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center border-r border-gray-200 pr-6 space-x-4">
            <Link
              href="/login"
              className="flex items-center space-x-1.5 text-xs font-medium text-gray-600 hover:text-black transition uppercase"
            >
              <User size={18} strokeWidth={1.5} />
              <span>Daxil ol</span>
            </Link>
            <Link
              href="/register"
              className="flex items-center space-x-1.5 text-xs font-medium text-gray-600 hover:text-black transition uppercase"
            >
              <UserPlus size={18} strokeWidth={1.5} />
              <span>Qeydiyyat</span>
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
