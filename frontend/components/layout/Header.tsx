// import React from 'react';
// import Link from 'next/link';
// import { Search, Heart, ShoppingBag, User, UserPlus } from 'lucide-react';

// const Header = () => {
//   return (
//     <header className="w-full bg-white border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

//         <div className="flex-shrink-0">
//           <Link href="/" className="text-4xl font-serif tracking-widest font-bold text-black">
//             VELA
//           </Link>
//         </div>

//         <nav className="hidden md:flex items-center space-x-8">
//           <Link href="/" className="text-sm font-medium text-gray-700 hover:text-black uppercase tracking-wider">
//             ANA SƏHİFƏ
//           </Link>
//           <Link href="/collections" className="text-sm font-medium text-[#a37a7a] hover:opacity-80 uppercase tracking-wider">
//             KOLLEKSİYA
//           </Link>
//           <Link href="/kampaniyalar" className="text-sm font-medium text-gray-700 hover:text-black uppercase tracking-wider">
//             KAMPANİYALAR
//           </Link>
//           <Link href="/elaqe" className="text-sm font-medium text-gray-700 hover:text-black uppercase tracking-wider">
//             ƏLAQƏ
//           </Link>
//         </nav>

//           {/* <nav className="flex flex-row gap-6 text-[#666]  font-semibold  items-center">
//             {navigation.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="hover:text-black/70 hover:bg-[#00000008]
// transform hover:scale-100 rounded-3xl py-1 px-1.5 hidden lg:block"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav> */}

//         <div className="flex items-center space-x-6">

//           <div className="hidden lg:flex items-center border-r border-gray-200 pr-6 space-x-4">
//             <Link href="/login" className="flex items-center space-x-1.5 text-xs font-medium text-gray-600 hover:text-black transition uppercase">
//               <User size={18} strokeWidth={1.5} />
//               <span>Daxil ol</span>
//             </Link>
//             <Link href="/register" className="flex items-center space-x-1.5 text-xs font-medium text-gray-600 hover:text-black transition uppercase">
//               <UserPlus size={18} strokeWidth={1.5} />
//               <span>Qeydiyyat</span>
//             </Link>
//           </div>

//           <div className="flex items-center space-x-4 text-gray-700">
//             <button className="hover:text-black transition">
//               <Search size={22} strokeWidth={1.2} />
//             </button>
//             <button className="hover:text-black transition relative">
//               <Heart size={22} strokeWidth={1.2} />
//             </button>
//             <button className="hover:text-black transition relative">
//               <ShoppingBag size={22} strokeWidth={1.2} />
//             </button>
//           </div>
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
// import React-a ehtiyac yoxdur
import React from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, UserPlus } from "lucide-react";
import { navigation } from "@/data/header/header";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { cart, wishlist } = useCart();

  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Header fixed deyil */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-4xl font-serif tracking-widest font-bold text-black"
          >
            VELA
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
            <button className="hover:text-black transition">
              <Search size={22} strokeWidth={1.2} />
            </button>
            <Link
              href="/wishlist"
              className="hover:text-black transition relative"
            >
              <Heart size={22} strokeWidth={1.2} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#a37a7a] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link href="/cart" className="hover:text-black transition relative">
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
