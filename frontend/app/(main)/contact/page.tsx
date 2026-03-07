"use client";
// import React-a ehtiyac yoxdur
import React from "react";
import { useRouter } from "next/navigation";
// React icons yüklənməyib, amma burada işlənib deyə xəta verir.
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephoneInbound } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

// Struktur yaxşıdır, amma birləşdiriləndə dizayn editləri lazım olacaq.

const Page = () => {
  const router = useRouter();

  return (
    <div className="relative w-[95%] max-w-6xl shadow-2xl mx-auto my-10 rounded-xl p-6">
      {/* Bu modal yox, səhifədir deyə ehtiyac yoxdur X-ə  */}
      <div
        className="text-[28px] absolute right-6 top-6 cursor-pointer hover:text-red-500 transition"
        onClick={() => router.push("/")}
      >
        <IoMdClose />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[32px] md:text-[40px] font-medium mb-5">
            Contact
          </h2>

          <p className="text-[15px] max-w-[400] mx-auto lg:mx-0">
            “Məmnuniyyətiniz bizim üçün önəmlidir. Elə indi bizimlə əlaqə
            saxlayın, bütün suallarınızı ətraflı cavablandıraq.”
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-6 text-[18px]">
            <CiMail />
            <p className="font-bold">example@contact.com</p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-6 text-[18px]">
            <CiLocationOn />
            <p className="font-bold">Online satış</p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-6 text-[18px]">
            <BsTelephoneInbound />
            <p className="font-bold">+994 50 123 45 67</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-[26px] md:text-[30px] font-medium mb-4 text-center lg:text-left">
            Contact form
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ad soyad"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />

            <input
              type="tel"
              placeholder="Mobil nömrə"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />

            <textarea
              placeholder="Mesajınızı yazın..."
              className="border border-gray-300 px-3 py-2 rounded-md"
              required
            />
          </form>

          <div className="flex justify-center lg:justify-start mt-6">
            <button
              className="bg-blue-500 w-[140] h-[42] rounded text-white hover:bg-blue-600 transition"
              type="submit"
            >
              Göndər
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
