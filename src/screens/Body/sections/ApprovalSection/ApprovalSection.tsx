import { ScrollReveal } from "../../../../components/ScrollReveal";

const accreditations = [
  { name: "UGC", logo: "/UGC.jpg" },
  { name: "AICTE", logo: "/AICTE.jpg" },
  { name: "NIRF", logo: "/nirf.png" },
  { name: "BCI", logo: "/BCI.jpg" },
];

export const ApprovalSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden border-y border-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <h2 className="font-display font-black text-primary-blue text-3xl sm:text-4xl text-center mb-16 sm:mb-24">
            Approval & <span className="text-accent-gold font-serif italic font-normal">Accreditations</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col items-center gap-12 sm:gap-16">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
            {accreditations.map((item, index) => (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={index * 50}
                className="flex flex-col items-center justify-center relative group"
              >
              {/* Laurel Wreath Mockup using CSS/SVG */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full text-gray-300 group-hover:text-accent-gold transition-colors duration-500" viewBox="0 0 100 100">
                  <path d="M50 85 C20 85, 10 60, 10 40 M50 85 C80 85, 90 60, 90 40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="6 3" />
                </svg>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center z-10 shadow-sm group-hover:shadow-md transition-shadow overflow-hidden">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    crossOrigin="anonymous"
                    className="w-[85%] h-[85%] object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <span className="mt-4 font-sans font-bold text-[#0D244B]/60 group-hover:text-[#0D244B] text-[10px] sm:text-xs tracking-widest uppercase transition-colors">
                {item.name}
              </span>
            </ScrollReveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
