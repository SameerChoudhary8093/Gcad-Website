import React from "react";
import { ScrollReveal } from "../../../components/ScrollReveal";

const pillars = [
  {
    title: "Learning by Doing",
    description: "50% of learning happens outside the classroom through workshops, field trips, and live projects.",
    icon: (
      <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Industry-Aligned Curriculum",
    description: "Programmes designed with and for leading design brands.",
    icon: (
      <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Startup & Incubation",
    description: "Dedicated support for student entrepreneurs to launch design-led ventures.",
    icon: (
      <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Portfolio-First Approach",
    description: "Continuous portfolio creation with real industry projects from year one.",
    icon: (
      <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    title: "Heart of the Design District",
    description: "Campus situated amid 500+ design industries in Jaipur.",
    icon: (
      <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Faculty Excellence",
    description: "15+ years average experience; 10+ dedicated mentors and advisors.",
    icon: (
      <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export const TheGcadDifferenceSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Bauhaus Geometric Shapes as Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0d244b]/5 rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-gold/5 rounded-tr-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl sm:text-6xl font-black text-[#0d244b] tracking-tighter mb-4">
              THE <span className="text-accent-gold">GCAD</span> DIFFERENCE
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={index * 100}
              className="group"
            >
              <div className="p-8 h-full bg-[#0d244b] rounded-3xl border border-white/10 hover:border-accent-gold transition-all duration-500 relative overflow-hidden shadow-2xl">
                {/* Number indicator */}
                <span className="absolute top-4 right-8 text-5xl font-black text-white/5 group-hover:text-accent-gold/10 transition-colors">
                  0{index + 1}
                </span>

                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {pillar.icon}
                </div>

                <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-accent-gold transition-colors uppercase">
                  {pillar.title}
                </h3>

                <p className="text-gray-300 font-medium leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bauhaus Accent Shape */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-accent-gold/10 rounded-tl-3xl group-hover:w-16 group-hover:h-16 transition-all" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Hero-style large card for "Learning by Doing" image context */}
        <ScrollReveal direction="up" delay={600} className="mt-20">
          <div className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="DSC00919.jpg.jpeg" 
              alt="Learning by Doing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d244b] to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-16 lg:left-16">
               <h4 className="text-white text-3xl lg:text-5xl font-black tracking-tighter uppercase mb-4">
                 Where Creativity <br className="hidden sm:block" /> Meets Industry
               </h4>
               <p className="text-white/70 text-lg font-medium max-w-2xl">
                 Our students don't just study design; they live it every day in our 130-acre design district.
               </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
