
import React from "react";
import { Camera, AlertCircle, Phone, Mail } from "lucide-react";

const SellerAgreementPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#4A3728] text-white py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-widest mb-4 uppercase">
          Satıcı Müqaviləsi
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto font-sans leading-relaxed">
          Platformamızda elan yerləşdirən hər bir şəxs üçün qüvvədə olan rəsmi şərtlər.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Provisions */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Section 1 & 2 */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
                  <span className="text-[#A37A7A]">01.</span> Xidmətin mahiyyəti
                </h2>
                <p className="text-gray-700 font-sans pl-10 space-y-2">
                  1.1. Platforma Satıcıya tədbir geyimləri ilə bağlı pulsuz elan yerləşdirmək imkanı verir.<br/>
                  1.2. Platforma satış, kirayə və digər əməliyyatlara qarışmır. Satıcı ilə alıcı arasında bütün razılaşmalar birbaşa bağlanır.<br/>
                  1.3. Hazırda komissiya tutulmur. Ödənişli xidmətlər tətbiq edilərsə, 30 gün əvvəlcədən məlumat veriləcək.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
                  <span className="text-[#A37A7A]">02.</span> Satıcının öhdəlikləri
                </h2>
                <div className="text-gray-700 font-sans pl-10 space-y-3">
                   <p>2.1. Satıcı bəyan edir ki, elanını yerləşdirdiyi məhsul onun mülkiyyətindədir.</p>
                   <p>2.2. Satıcı elanda doğru, tam və aldadıcı olmayan məlumat təqdim edir.</p>
                   <p>2.3. Kirayə şərtləri (depozit, zədələnmə, gecikmə) Satıcı tərəfindən yazılı razılaşdırılmalıdır.</p>
                </div>
              </div>
            </div>

            {/* Section 3: Qadağan olunmuş fəaliyyətlər */}
            <div className="bg-red-50 border border-red-100 p-8 rounded-2xl space-y-4 relative overflow-hidden">
               <AlertCircle className="absolute -top-4 -right-4 w-24 h-24 text-red-100/50" />
               <h2 className="text-2xl font-serif font-bold text-red-800 flex items-center gap-3">
                 <span className="text-red-600">03.</span> Qadağan olunmuş fəaliyyətlər
               </h2>
               <div className="text-red-900/80 font-sans pl-10 space-y-3">
                 <p>3.1. Azərbaycan Respublikasının qanunları ilə qadağan olunmuş malların (silah, narkotik, saxta sənəd və s.) elanı yerləşdirmək qəti qadağandır.</p>
                 <p>3.2. Spam, təhqir, nəzakət pozuntusu, irqçi və ya zorakılığı təbliğ edən elanlar qadağandır.</p>
                 <p className="font-bold underline">Qaydaları pozan elanlar silinəcək, istifadəçi hesabı isə bloklanacaqdır.</p>
               </div>
            </div>

            {/* Section 4 & 5 */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
                  <span className="text-[#A37A7A]">04.</span> Məsuliyyət
                </h2>
                <p className="text-gray-700 font-sans pl-10">
                  Satıcı yerləşdirdiyi elana və alıcı ilə bağladığı əməliyyatlara görə tam məsuliyyət daşıyır. Platforma yaranan mübahisələrdə heç bir məsuliyyət daşımır.
                </p>
              </div>

               <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-[#4A3728] flex items-center gap-3">
                  <span className="text-[#A37A7A]">05.</span> Müddət və ləğv
                </h2>
                <p className="text-gray-700 font-sans pl-10">
                  Satıcı istədiyi zaman elanını silə bilər. Platforma şikayət toplayan və ya qaydaları pozan elanları silmək hüququnu özündə saxlayır.
                </p>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Image Requirements */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#FAF7F5] border border-[#F2EBE6] p-8 rounded-3xl sticky top-24">
              <Camera className="w-12 h-12 text-[#A37A7A] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-serif font-bold text-[#4A3728] mb-6">Şəkil Tələbləri</h3>
              
              <ul className="space-y-6 text-sm font-sans text-gray-700">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#A37A7A]/10 text-[#A37A7A] flex items-center justify-center shrink-0 font-bold italic">1</div>
                  <p><span className="font-bold">Aydınlıq:</span> Şəkillər aydın, yüksək keyfiyyətli və fokusda olmalıdır.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#A37A7A]/10 text-[#A37A7A] flex items-center justify-center shrink-0 font-bold italic">2</div>
                  <p><span className="font-bold">Fon:</span> Üstünlük təşkil edən hallarda təmiz ağ və ya açıq fon, kənar əşyalar olmamalıdır.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#A37A7A]/10 text-[#A37A7A] flex items-center justify-center shrink-0 font-bold italic">3</div>
                  <p><span className="font-bold text-red-700 italic">İmtina Hüququ:</span> Şəkillər tələblərə cavab vermədikdə, Platforma məhsulu elana çıxarmaqdan imtina edə bilər.</p>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-[#F2EBE6] space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#4A3728]">
                  <Phone size={18} className="text-[#A37A7A]" />
                  <span>077 127 97 59</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#4A3728]">
                  <Mail size={18} className="text-[#A37A7A]" />
                  <span>vela7az@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default SellerAgreementPage;
