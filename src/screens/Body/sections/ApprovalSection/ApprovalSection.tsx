import { ScrollReveal } from "../../../../components/ScrollReveal";

const accreditations = [
  { name: "NIRF", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/National_Institutional_Ranking_Framework_logo.png" },
  { name: "UGC", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/University_Grants_Commission_logo.png" },
  { name: "PCI", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pharmacy_Council_of_India_logo.png" },
  { name: "AICTE", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/All_India_Council_for_Technical_Education_logo.png" },
  { name: "NCTE", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/NCTE_logo.png" },
  { name: "ICAR", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/ICAR_Logo.svg" },
  { name: "BCI", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bar_Council_of_India_logo.png" },
  { name: "ISO", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/ISO_logo_(2010).svg" },
  { name: "AIU", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Association_of_Indian_Universities_logo.png" },
  { name: "RCI", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rehabilitation_Council_of_India_logo.png" },
  { name: "NCC", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/National_Cadet_Corps_(India)_logo.png" },
  { name: "DEB", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Distance_Education_Bureau_logo.png" },
  { name: "SIRO", logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/DSIR_Logo.png" },
];

export const ApprovalSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden border-y border-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <h2 className="font-display font-black text-[#0D244B] text-3xl sm:text-4xl text-center mb-16 sm:mb-24">
            Approval & Accreditations
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 sm:gap-y-20 gap-x-8">
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
    </section>
  );
};
