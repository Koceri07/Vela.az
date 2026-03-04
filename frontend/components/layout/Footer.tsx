import React from 'react';
import Link from 'next/link';
import { Mail, Instagram, Facebook, Send, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4A3728] text-gray-300 py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo və Haqqında */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-white tracking-widest">VELA</h2>
            <p className="text-sm leading-relaxed">
              Hər tədbir üçün mükəmməl görünüş. <br />
              Kirayə götür, satın al, parla.
            </p>
          </div>

          {/* Kəşf Et */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">KƏŞF ET</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Kolleksiya</Link></li>
              <li><Link href="#" className="hover:text-white transition">Gəlinliklər</Link></li>
              <li><Link href="#" className="hover:text-white transition">Kişi Kostyumları</Link></li>
              <li><Link href="#" className="hover:text-white transition">Ailə Kombinləri</Link></li>
            </ul>
          </div>

          {/* Dəstək */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">DƏSTƏK</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Haqqımızda</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition">Qaytarılma Şərtləri</Link></li>
              <li><Link href="#" className="hover:text-white transition">Çatdırılma</Link></li>
            </ul>
          </div>

          {/* Xəbərdar Ol */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">XƏBƏRDAR OL</h3>
            <p className="text-sm">Yeni kolleksiyalar və kampaniyalardan xəbərdar ol.</p>
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
            <div className="flex items-center space-x-4 pt-4 text-gray-400">
              <Link href="#" className="hover:text-white transition"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-white transition"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-white transition"><Send size={20} /></Link> {/* Telegram */}
              <Link href="#" className="hover:text-white transition"><MessageCircle size={20} /></Link> {/* WhatsApp */}
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