"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephoneInbound } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Page = () => {
  const router = useRouter();

  return (
    <div className="relative w-[95%] max-w-6xl shadow-2xl mx-auto my-10 rounded-xl p-8 bg-white border border-stone-50">
      <div
        className="text-[28px] absolute right-6 top-6 cursor-pointer hover:text-[#8E6969] transition"
        onClick={() => router.push("/")}
      >
        <IoMdClose />
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-[#4A3728]">
            Əlaqə
          </h2>

          <p className="text-[15px] text-gray-500 leading-relaxed max-w-[450px] mx-auto lg:mx-0">
            “Məmnuniyyətiniz bizim üçün önəmlidir. Elə indi bizimlə əlaqə
            saxlayın, bütün suallarınızı ətraflı cavablandıraq.”
          </p>

          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-4 text-[17px]">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F5] flex items-center justify-center text-[#8E6969]">
                <CiMail size={22} />
              </div>
              <p className="font-semibold text-gray-700">vela7az@gmail.com</p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-[17px]">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F5] flex items-center justify-center text-[#8E6969]">
                <BsTelephoneInbound size={20} />
              </div>
              <p className="font-semibold text-gray-700">+994 77 127 97 59</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#FAF7F5] p-8 rounded-2xl border border-stone-100">
          <h2 className="text-[24px] font-serif font-bold mb-6 text-[#4A3728]">
            Bizə yazın
          </h2>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); console.log("Contact Form Sent"); }}>
            <input
              type="text"
              placeholder="Ad soyad"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8E6969] transition bg-white"
              required
            />

            <input
              type="tel"
              placeholder="Mobil nömrə"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8E6969] transition bg-white"
              required
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8E6969] transition bg-white"
            />

            <textarea
              placeholder="Mesajınızı yazın..."
              rows={4}
              className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-[#8E6969] transition bg-white resize-none"
              required
            />

            <button
              className="bg-[#8E6969] w-full h-[50px] rounded-full text-white font-bold uppercase tracking-widest text-xs hover:bg-[#725454] transition shadow-lg mt-4"
              type="submit"
            >
              Göndər
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
