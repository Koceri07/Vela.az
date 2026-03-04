"use client"; // Keçid funksiyası üçün mütləqdir

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const HeroPage = () => {
  const router = useRouter();

  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-[#F9F6F3]">
      {/* Arxa fon şəkli simulyasiyası (Şəkildəki o qız olan hissə) */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="Vela Hero" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        {/* Şəklin üzərinə yüngül qat (overlay) */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Kontent Hissəsi */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-start">
        <div className="max-w-2xl space-y-6">
          <p className="text-[#A37A7A] font-bold tracking-[0.3em] uppercase text-sm animate-fade-in">
            Yeni Mövsüm 2026
          </p>
          
          <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight drop-shadow-md">
            Zəriflik <br /> 
            <span className="italic">Sizinlə</span> Başlar
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl max-w-md font-light leading-relaxed">
            Hər bir geyim bir hekayə danışır. Öz hekayəni Vela-nın eksklüziv kolleksiyası ilə yaz.
          </p>

          <div className="pt-4">
            <button 
              onClick={() => router.push('/collections')}
              className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-500 shadow-xl"
            >
              Kolleksiyanı Gör
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Sağ aşağı küncdə xırda detal (Opsional) */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex items-center gap-4 text-white/50 text-[10px] tracking-[0.5em] uppercase vertical-rl rotate-180">
          <div className="w-[1px] h-20 bg-white/30"></div>
          Scroll Down
        </div>
      </div>
    </section>
  );
};

export default HeroPage;