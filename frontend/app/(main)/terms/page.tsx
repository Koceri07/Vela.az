
import React from "react";

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 border-b border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#4A3728] mb-4">
            İstifadəçi Şərtləri
          </h1>
          <p className="text-gray-600 font-sans italic">
            Bu sənəd həm alıcılar, həm satıcılar, həm də sadəcə sayta baxanlar üçündür.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 md:px-0">
        <div className="prose prose-stone max-w-none space-y-10">
          
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">1</span>
              Ümumi müddəalar
            </h2>
            <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
              <p>1.1. Vela.az (bundan sonra “Platforma”) istifadəçilərə tədbir geyimləri ilə bağlı pulsuz elan yerləşdirmək və bu elanlara baxmaq imkanı yaradan onlayn resursdur.</p>
              <p>1.2. Platforma alıcı ilə satıcı arasında heç bir əqdin tərəfi deyil. Alqı-satqı, kirayə, depozit, çatdırılma və digər şərtlər tamamilə istifadəçilərin öz aralarında razılaşdırdığı məsələlərdir.</p>
              <p>1.3. Platformadan istifadə etməklə siz bu şərtləri oxuduğunuzu və qəbul etdiyinizi bildirirsiniz.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">2</span>
              Qeydiyyat və hesab
            </h2>
            <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
              <p>2.1. Elan yerləşdirmək üçün qeydiyyatdan keçmək lazımdır. Qeydiyyat zamanı doğru ad, soyad, əlaqə nömrəsi və e-poçt təqdim etməlisiniz.</p>
              <p>2.2. Hesabınızı başqaları ilə paylaşmayın. Hesabınızla edilən bütün əməliyyatlardan siz məsulsunuz.</p>
              <p>2.3. 18 yaşı tamam olmamış şəxslər yalnız valideyn icazəsi ilə qeydiyyatdan keçə bilər.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">3</span>
              Elanlar
            </h2>
            <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
              <p>3.1. Satıcı yerləşdirdiyi elanın məzmununa, şəkillərin doğruluğuna, məhsulun qanuniliyinə və təsvirinin həqiqiliyinə görə tam məsuliyyət daşıyır.</p>
              <p>3.2. Qadağan olunmuş mallar (silah, narkotik, saxta sənəd, təhlükəli maddələr və s.) üzrə elan yerləşdirmək qəti qadağandır. Belə elanlar dərhal silinəcək, istifadəçi bloklanacaq və aidiyyəti orqanlara məlumat veriləcək.</p>
              <p>3.3. Platforma elanı yoxlamaq, redaktə etmək və ya qaydaları pozduqda silmək hüququnu özündə saxlayır.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">4</span>
              Alıcı və satıcı arasında əlaqə
            </h2>
            <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
              <p>4.1. Elanın altında satıcının telefon nömrəsi və ya mesaj forması olur. Bütün danışıqlar, razılaşmalar, ödənişlər və təhvil-təslim birbaşa tərəflər arasında aparılır.</p>
              <p>4.2. Kirayə əməliyyatlarında qiymət, müddət, depozit, cərimələr və qaytarılma şərtləri tərəflər tərəfindən yazılı (WhatsApp, SMS və s.) razılaşdırılmalıdır. Platforma bu şərtlərin icrasına görə məsuliyyət daşımır.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A37A7A] text-white text-sm font-sans">5</span>
              Məsuliyyətin məhdudlaşdırılması
            </h2>
            <div className="pl-11 space-y-3 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
              <p>5.1. Platforma satılan və ya kirayə verilən məhsulun keyfiyyətinə, təmizliyinə, sazlığına və ya vaxtında çatdırılmasına heç bir zəmanət vermir.</p>
              <p>5.2. İstifadəçilər arasında yaranan maliyyə itkiləri, dəymiş zərər, aldadılma və digər problemlər yalnız tərəflərin öz aralarında həll edilir.</p>
              <p>5.3. Platforma texniki səbəblərdən (server problemləri və s.) müvəqqəti olaraq əlçatmaz ola bilər. Bu hallarda dəymiş itkilərə görə məsuliyyət daşımırıq.</p>
            </div>
          </div>

          {/* Section 6 & 7 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
             <div className="bg-[#FAF7F5] p-6 rounded-lg border border-[#F2EBE6]">
                <h3 className="font-serif font-bold text-[#4A3728] mb-2">6. Dəyişikliklər</h3>
                <p className="text-gray-600 font-sans text-sm">Bu şərtlər vaxtaşırı yenilənə bilər. Yeniliklər saytda yerləşdirildiyi gündən qüvvəyə minir.</p>
             </div>
             <div className="bg-[#FAF7F5] p-6 rounded-lg border border-[#F2EBE6]">
                <h3 className="font-serif font-bold text-[#4A3728] mb-2">7. Əlaqə</h3>
                <p className="text-gray-600 font-sans text-sm italic">Suallarınız üçün: <span className="text-[#A37A7A] font-bold">vela7az@gmail.com</span></p>
             </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default TermsPage;
