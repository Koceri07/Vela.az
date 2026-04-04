
import Link from "next/link";
import { Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4A3728] text-gray-300 py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo və Haqqında */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-white tracking-widest">
              VELA
            </h2>
            <p className="text-sm leading-relaxed">
              Hər tədbir üçün mükəmməl görünüş. <br />
              Kirayə götür, satın al, parla.
            </p>
          </div>

          {/* Kəşf Et */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">
              KƏŞF ET
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/gelinlikler" className="hover:text-white transition">
                  Gəlinliklər
                </Link>
              </li>
              <li>
                <Link href="/category/kostyumlar" className="hover:text-white transition">
                  Kişi Kostyumları
                </Link>
              </li>
              <li>
                <Link href="/category/xanim-geyimleri" className="hover:text-white transition">
                  Xanım Geyimləri
                </Link>
              </li>
              <li>
                <Link href="/category/usaq-geyimleri" className="hover:text-white transition">
                  Uşaq Geyimləri
                </Link>
              </li>
            </ul>
          </div>

          {/* Dəstək */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">
              DƏSTƏK
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  İstifadəçi Şərtləri
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Məxfilik Siyasəti
                </Link>
              </li>
              <li>
                <Link href="/seller-agreement" className="hover:text-white transition">
                  Satıcı Müqaviləsi
                </Link>
              </li>
            </ul>
          </div>

          {/* Xəbərdar Ol */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">
              XƏBƏRDAR OL
            </h3>
            <p className="text-sm">
              Yeni kolleksiyalar və kampaniyalardan xəbərdar ol.
            </p>
            <div className="flex items-stretch gap-2">
              <input
                type="email"
                placeholder="E-poçt ünvanınız"
                className="bg-[#5D4636] border border-gray-600 px-4 py-2 text-sm w-full focus:outline-none focus:border-gray-400"
              />
              <button className="bg-[#A37A7A] hover:bg-[#8e6969] text-white px-4 py-2 transition flex items-center justify-center">
                <Mail size={18} />
              </button>
            </div>

            {/* Sosial Şəbəkələr + WhatsApp & Telegram */}
            <div className="flex items-center space-x-6 pt-4 text-gray-400">
              <Link
                href="https://www.instagram.com/vela.az_official?igsh=eG1rbDM5N3dlY2xz"
                target="_blank"
                className="hover:text-white transition"
              >
                <Instagram size={22} />
              </Link>
              <Link
                href="https://www.tiktok.com/@vela.az_official"
                target="_blank"
                className="hover:text-white transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Alt Hissə */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col items-center">
          <p className="text-xs text-gray-500">
            © 2026 VELA. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
