"use client";

import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Seç",
      description: "Münasibətə uyğun an vaxışını tap. Filtrla, muqayisə et."
    },
    {
      number: "02",
      title: "Sifariş Et",
      description: "Kiraya və ya satın al. Qapına qədər çatdıraq."
    },
    {
      number: "03",
      title: "Parla",
      description: "Tədbirin ulduzı ol. Kirayəni geri qaytar, xatirani saxla."
    }
  ];

  return (
    <section className="bg-[#F9F6F3] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-serif mb-16 text-black">
          Necə İşləyir?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#E8DCD8] flex items-center justify-center mb-8">
                <span className="text-2xl font-serif text-[#A37A7A]">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif text-black mb-4">
                {step.title}
              </h3>
              
              <p className="text-[#A37A7A] text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
