"use client";

import React from 'react';

interface Testimonial {
  text: string;
  name: string;
  age: string;
}

const Testimonials = () => {
  const data: Testimonial[] = [
    {
      text: "VELA sayəsində hər toya fərqli görünürəm. Kirayə sistemi əla işləyir!",
      name: "Aynur",
      age: "28 yaş",
    },
    {
      text: "Ailə üçün kombin tapmaq heç vaxt bu qədər asan olmamışdı. Uşaqlar da çox sevdi!",
      name: "Leyla",
      age: "34 yaş",
    },
    {
      text: "Kostyum keyfiyyəti mükəmməl idi. Satın almaq əvəzinə kirayə götürmək ən doğru qərar oldu.",
      name: "Rəşad",
      age: "31 yaş",
    },
  ];

  return (
    <section className="bg-[#F9F6F3] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-serif mb-16 text-black">
          Müştərilərimiz Nə Deyir?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-[#A37A7A] italic mb-6">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8DCD8] flex items-center justify-center">
                  <span className="text-[#A37A7A] font-bold">{item.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-black">{item.name}</p>
                  <p className="text-sm text-[#A37A7A]">{item.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
