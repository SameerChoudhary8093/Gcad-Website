
const graduateCompanies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Adobe", logo: "/Adobe.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
];

const hiringPartners = [
  { name: "TCS", logo: "/TCS.png" },
  { name: "Adobe", logo: "/Adobe.png" },
  { name: "HCL", logo: "/HCL.png" },
  { name: "Deloitte", logo: "/Deloitte.png" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" }
];

export const IndustryPartnersSection = (): JSX.Element => {
  return (
    <section id="placements" className="flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col max-w-screen-xl items-start gap-12 lg:gap-16 w-full mx-auto relative z-10">
        <div className="flex flex-col items-center gap-2 self-stretch w-full">
          <p className="font-sans font-bold text-accent-gold text-sm sm:text-base text-center tracking-[4px] leading-6 uppercase">
            GLOBAL ECOSYSTEM
          </p>
          <h2 className="font-display font-black text-primary-blue text-4xl sm:text-5xl lg:text-7xl text-center tracking-tighter leading-tight pb-4">
            PLACEMENTS & <span className="text-accent-gold font-serif italic font-normal">Hiring Partners</span>
          </h2>
          <div className="w-24 h-1 bg-accent-gold rounded-full" />
        </div>

        {/* Bidirectional Logo Marquees */}
        <div className="flex flex-col gap-12 sm:gap-16 w-full py-8 border-y border-gray-100 overflow-hidden">
          
          {/* Row 1: Graduates - Slides Left */}
          <div className="relative w-full">
             <div className="flex gap-16 sm:gap-24 lg:gap-32 animate-marquee-left whitespace-nowrap items-center">
              {[...graduateCompanies, ...graduateCompanies].map((company, index) => (
                <div
                  key={`grad-${index}`}
                  className="flex flex-col items-center justify-center min-w-[120px] transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-10 sm:h-12 lg:h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden text-xs font-bold text-gray-600 text-center">
                    {company.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Hiring Partners - Slides Right */}
          <div className="relative w-full">
             <div className="flex gap-16 sm:gap-24 lg:gap-32 animate-marquee-right whitespace-nowrap items-center">
              {[...hiringPartners, ...hiringPartners, ...hiringPartners].map((partner, index) => (
                <div
                  key={`partner-${index}`}
                  className="flex flex-col items-center justify-center min-w-[120px] transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 sm:h-12 lg:h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden text-xs font-bold text-gray-600 text-center">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 4rem)); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(calc(-50% - 4rem)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

