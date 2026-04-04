
import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#4A3728] text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest mb-4">
          HAQQIMIZDA
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto font-sans leading-relaxed">
          Azərbaycanda tədbir geyimlərinin bir nömrəli ünvanı: Vela.az
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 md:px-0">
        <div className="space-y-12">
          {/* Vela.az nədir? */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3728] border-b pb-2">
              Vela.az nədir?
            </h2>
            <p className="text-gray-700 leading-relaxed font-sans">
              Vela, Azərbaycanda insanların toy, nişan, ad günü və digər tədbirlər üçün geyim satmaq, almaq və ya kirayə götürmək istədikdə istifadə edə biləcəyi onlayn elan platformasıdır.
            </p>
            <p className="text-gray-700 leading-relaxed font-sans">
              Biz satıcı ilə alıcını bir araya gətiririk. Satıcı öz geyimini elanda göstərir, alıcı həmin elanı görüb satıcı ilə birbaşa əlaqə saxlayır. Bütün razılaşmalar (qiymət, kirayə müddəti, depozit, çatdırılma, geri qaytarma) satıcı ilə alıcı arasında bağlanır.
            </p>
          </div>

          {/* Grid: Biz nə edirik? vs Biz nə etmirik? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FDF9F6] p-8 rounded-lg border border-[#F2EBE6]">
              <h3 className="text-xl font-serif font-bold text-[#A37A7A] mb-4">
                Biz nə edirik?
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-700 font-sans">
                <li>Satıcılara pulsuz elan yerləşdirmək imkanı veririk.</li>
                <li>Alıcılara axtardıqları geyimi rahat tapmaq üçün filtr, axtarış və təsvir imkanları təqdim edirik.</li>
                <li>Hər iki tərəfin təhlükəsizliyi üçün sadə qaydalar qoyuruq.</li>
              </ul>
            </div>

            <div className="bg-[#FAF7F5] p-8 rounded-lg border border-[#F2EBE6]">
              <h3 className="text-xl font-serif font-bold text-[#4A3728] mb-4">
                Biz nə etmirik?
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-700 font-sans">
                <li>Geyimləri saxlamırıq, təmizləmirik, çatdırmırıq.</li>
                <li>Satış və kirayə əməliyyatlarına görə məsuliyyət daşımırıq.</li>
                <li>Heç bir komissiya almırıq (hələlik).</li>
              </ul>
            </div>
          </div>

          {/* Məqsədimiz */}
          <div className="bg-[#4A3728] text-white p-10 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-serif font-bold mb-4">Məqsədimiz</h2>
            <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
              Tədbir geyimləri üçün etibarlı, sadə və təmiz bir onlayn məkana sahib olmaqdır.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
