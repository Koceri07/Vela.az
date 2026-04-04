
"use client";

import React, { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  Heart, 
  Share2, 
  MessageCircle, 
  Copy, 
  Check, 
  ShoppingBag, 
  ArrowLeft,
  ShieldCheck,
  Truck,
  RotateCcw
} from "lucide-react";
import { mockProducts } from "@/app/(main)/collections/productSlice";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/common/ProductCard";

const ProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const { addToWishlist, removeFromWishlist, wishlist } = useCart();
  
  const [priceType, setPriceType] = useState<"rent" | "buy">("rent");
  const [isCopied, setIsCopied] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const product = useMemo(() => {
    const id = parseInt(params.id as string);
    return mockProducts.find(p => p.id === id);
  }, [params.id]);

  const isInWishlist = wishlist.find((w) => w.id === product?.id);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
          <ShoppingBag size={40} />
        </div>
        <h1 className="text-2xl font-serif font-bold text-gray-800">Məhsul tapılmadı</h1>
        <button 
          onClick={() => router.push("/collections")}
          className="text-[#8E6969] font-bold uppercase tracking-widest text-xs hover:underline"
        >
          Kolleksiyaya qayıt
        </button>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleAction = () => {
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Breadcrumbs & Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Geri qayıt</span>
        </button>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={handleCopyLink}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:text-[#8E6969] hover:border-[#8E6969]/20 transition"
            title="Linki kopyala"
          >
            {isCopied ? <Check size={18} className="text-green-500" /> : <Share2 size={18} />}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Sticky Image Gallery */}
        <div className="relative">
          <div className="aspect-[3/4] rounded-[32px] overflow-hidden bg-gray-50 sticky top-8">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <span className="absolute top-8 left-8 bg-[#8E6969]/90 backdrop-blur-md text-white text-xs uppercase font-black px-4 py-2 rounded-xl tracking-widest shadow-xl">
                YENİ KOLLEKSİYA
              </span>
            )}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-stone-100 text-stone-500 text-[10px] uppercase font-bold tracking-widest rounded-md">
                {product.category}
              </span>
              <div className="h-[1px] w-8 bg-stone-200" />
              <span className="text-[10px] text-stone-400 uppercase font-medium tracking-wider">
                Kod: VLA-{product.id}024
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" /> Stokda var
              </span>
              <span className="text-stone-300">|</span>
              <span>Ölçü: <span className="font-bold text-black">{product.size}</span></span>
            </div>
          </div>

          {/* Pricing Toggle */}
          <div className="p-2 bg-stone-50 rounded-3xl flex gap-2 border border-stone-100">
            <button 
              onClick={() => setPriceType("rent")}
              className={`flex-1 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                priceType === "rent" 
                ? "bg-white text-[#8E6969] shadow-md border-stone-100" 
                : "text-stone-400 hover:text-stone-600"
              }`}
            >
              Kirayə Götür
            </button>
            <button 
              onClick={() => setPriceType("buy")}
              className={`flex-1 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                priceType === "buy" 
                ? "bg-[#8E6969] text-white shadow-lg shadow-[#8E6969]/20" 
                : "text-stone-400 hover:text-stone-600"
              }`}
            >
              Satın Al
            </button>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] uppercase font-black tracking-tighter text-stone-400">Yekun Qiymət</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-gray-900">
                {priceType === "rent" ? product.rentPrice : product.sellPrice} 
              </span>
              <span className="text-xl font-bold text-[#8E6969]">AZN</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 relative">
            {showWarning && (
              <div className="absolute -top-14 left-0 right-0 z-50">
                <div className="bg-yellow-400 text-black text-xs font-black px-6 py-3 rounded-2xl shadow-2xl border border-yellow-500 flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                  <span className="text-xl">⚠️</span> Hələlik aktiv deyil!
                </div>
              </div>
            )}
            <button 
              onClick={handleAction}
              className="flex-[3] h-16 bg-black text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
            >
              <ShoppingBag size={20} />
              {priceType === "rent" ? "İndi Kirayələ" : "İndi Satın Al"}
            </button>
            <button 
              onClick={() => isInWishlist ? removeFromWishlist(product.id) : addToWishlist({id: product.id, name: product.name, price: product.rentPrice, image: product.image})}
              className={`flex-1 h-16 rounded-2xl border transition-all flex items-center justify-center ${
                isInWishlist 
                ? "bg-red-50 border-red-100 text-red-500" 
                : "border-gray-200 text-gray-400 hover:border-[#8E6969] hover:text-[#8E6969]"
              }`}
            >
              <Heart size={24} fill={isInWishlist ? "currentColor" : "none"} />
            </button>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-[#8E6969]">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest">Zəmanətli Keyfiyyət</h4>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-[#8E6969]">
                <RotateCcw size={24} />
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest">Asan Geri Qaytarma</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Products Section */}
      <div className="max-w-7xl mx-auto px-4 mt-32 space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Bunları da Bəyənə Bilərsiniz</h2>
          <div className="w-20 h-1 bg-[#8E6969] rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {mockProducts
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 4)
            .map(p => (
              <ProductCard key={p.id} product={p} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
