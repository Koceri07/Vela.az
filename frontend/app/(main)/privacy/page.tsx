
import React from "react";

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-stone-50 border-b border-stone-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#4A3728] mb-4 uppercase tracking-widest">
            Məxfilik Siyasəti
          </h1>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto">
            Sizin məxfiliyiniz bizim üçün önəmlidir. Məlumatlarınızın necə toplandığını və qorunduğunu buradan öyrənə bilərsiniz.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Toplanan məlumatlar */}
          <div className="space-y-6">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-2 border-l-4 border-[#A37A7A] pl-4">
              1. Toplanan məlumatlar
            </h2>
            <ul className="space-y-4 text-gray-700 font-sans text-sm md:text-base">
              <li className="flex flex-col">
                <span className="font-bold text-gray-900">1.1. Qeydiyyat zamanı:</span>
                ad, soyad, telefon nömrəsi, e-poçt ünvanı.
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-900">1.2. Elan yerləşdirərkən:</span>
                məhsul haqqında məlumatlar, şəkillər, ünvan (istəyə bağlı).
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-900">1.3. Sayta giriş zamanı:</span>
                IP ünvanı, brauzer növü, cihaz məlumatları (təhlükəsizlik və statistika üçün).
              </li>
            </ul>
          </div>

          {/* Məlumatların istifadəsi */}
          <div className="space-y-6">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-2 border-l-4 border-[#A37A7A] pl-4">
              2. Məlumatların istifadəsi
            </h2>
            <ul className="space-y-4 text-gray-700 font-sans text-sm md:text-base">
              <li className="flex gap-2 items-start">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#A37A7A] shrink-0" />
                <span>Telefon nömrəniz alıcıların sizinlə əlaqə saxlaması üçün elanın altında göstərilir.</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#A37A7A] shrink-0" />
                <span>E-poçt ünvanınız yalnız texniki bildirişlər və vacib xəbərdarlıqlar üçün istifadə olunur.</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#A37A7A] shrink-0" />
                <span className="font-bold text-[#4A3728]">Biz şəxsi məlumatlarınızı üçüncü tərəflərə satmırıq!</span>
              </li>
            </ul>
          </div>

          {/* Məlumatların qorunması */}
          <div className="bg-[#FAF7F5] p-8 rounded-xl space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728]">3. Məlumatların qorunması</h2>
            <p className="text-gray-600 font-sans text-sm">
              Bütün məlumatlar şifrələnmiş kanallarla ötürülür. Yalnız platformanın texniki dəstəyi məlumatlara giriş hüququna malikdir.
            </p>
          </div>

          {/* Sizin hüquqlarınız */}
          <div className="bg-[#4A3728] text-white p-8 rounded-xl space-y-4">
            <h2 className="text-xl font-serif font-bold">4. Sizin hüquqlarınız</h2>
            <p className="font-sans text-sm opacity-90 leading-relaxed">
              İstədiyiniz zaman &quot;şəxsi kabinet&quot;də məlumatlarınızı yeniləyə və ya hesabınızı silə bilərsiniz. Məlumatların silinməsi üçün <span className="underline">vela7az@gmail.com</span> ünvanına müraciət edin.

            </p>
          </div>

          {/* Kuki faylları */}
          <div className="space-y-4 md:col-span-2 border-t pt-8">
            <h2 className="text-xl font-serif font-bold text-[#4A3728]">5. Kuki faylları (Cookies)</h2>
            <p className="text-gray-700 font-sans">
              Sayt daha yaxşı işləmək üçün kuki fayllarından istifadə edir. Brauzerinizdən bu faylları silə və ya bloklaya bilərsiniz, lakin bu zaman bəzi funksiyalar düzgün işləməyə bilər.
            </p>
          </div>

           {/* Razılıq */}
           <div className="md:col-span-2 bg-[#FDF9F6] border border-[#F2EBE6] p-6 text-center rounded-lg italic text-[#A37A7A] font-sans">
             Saytda qeydiyyatdan keçməklə siz fərdi məlumatlarınızın bu siyasətdə göstərilən qaydada işlənməsinə razılıq verirsiniz.
           </div>

        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
