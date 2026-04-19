import React from "react";
import { ScrollReveal } from "../../../components/ScrollReveal";

const eligibility = [
  {
    program: "B.Design",
    criteria: "10+2 pass/appearing (any stream) or 3-year Diploma with min. 50% aggregate.",
    color: "bg-accent-gold",
    textColor: "text-[#0d244b]",
  },
  {
    program: "M.Design",
    criteria: "Bachelor's degree or 5-year Diploma (any stream) with min. 50% aggregate.",
    color: "bg-primary-blue",
    textColor: "text-white",
  },
  {
    program: "Diploma / B.Voc",
    criteria: "10+2 appearing (any stream) with min. 50% aggregate.",
    color: "bg-[#fd8b00]",
    textColor: "text-white",
  },
];

export const EligibilitySection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admission Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-4xl sm:text-6xl font-black text-[#0d244b] tracking-tighter mb-8 uppercase">
              Admission <span className="text-accent-gold">Process</span>
            </h2>
            <div className="flex flex-col gap-10">
              <div className="flex gap-6 items-start">
                <span className="text-4xl font-black text-gray-200">01</span>
                <div>
                  <h3 className="text-xl font-black text-[#0d244b] uppercase mb-2">Apply</h3>
                  <p className="text-gray-500 font-medium">Complete the online registration form at <a href="https://www.gyanvihar.org" className="text-accent-gold hover:underline">www.gyanvihar.org</a></p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-4xl font-black text-gray-200">02</span>
                <div>
                  <h3 className="text-xl font-black text-[#0d244b] uppercase mb-2">Online Interview</h3>
                  <p className="text-gray-500 font-medium">An interactive assessment where faculty evaluate your creativity, design aptitude, and readiness.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
             <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img src="DSC00919.jpg.jpeg" alt="Admission" className="w-full h-auto" />
                <div className="absolute inset-0 bg-accent-gold/10 mix-blend-multiply" />
             </div>
          </ScrollReveal>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-12">
          <ScrollReveal direction="up">
            <h2 className="text-4xl sm:text-5xl font-black text-[#0d244b] tracking-tighter mb-4 uppercase">
              Eligibility <span className="text-accent-gold">Criteria</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eligibility.map((item, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={index * 200}
            >
              <div className={`${item.color} ${item.textColor} p-10 rounded-[40px] h-full shadow-xl hover:scale-105 transition-transform duration-500 relative overflow-hidden group`}>
                {/* Bauhaus Circle */}
                <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight relative z-10">
                  {item.program}
                </h3>
                <p className="font-bold text-sm sm:text-base leading-relaxed relative z-10">
                  {item.criteria}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
