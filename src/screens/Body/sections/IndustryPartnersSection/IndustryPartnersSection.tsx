import { Card, CardContent } from "../../../../components/ui/card";

const graduateCompanies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
];

const hiringPartners = [
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/HCL_Technologies_logo.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" }
];

export const IndustryPartnersSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#f2f4f7]">
      <div className="flex flex-col max-w-screen-xl items-start gap-12 lg:gap-16 w-full mx-auto">
        <div className="flex flex-col items-center gap-2 self-stretch w-full">
          <p className="font-sans font-normal text-accent-gold text-sm sm:text-base text-center tracking-[1.60px] leading-6">
            GLOBAL ECOSYSTEM
          </p>
          <h2 className="font-display font-extrabold text-primary-blue text-3xl sm:text-4xl lg:text-5xl text-center tracking-[0] leading-tight pb-4">
            PLACEMENTS & HIRING PARTNERS
          </h2>
          <div className="w-20 sm:w-24 h-1.5 bg-accent-gold rounded-full" />
        </div>

        {/* Real Logos Marquee for Graduates */}
        <div className="flex flex-col items-start gap-8 sm:gap-10 pt-8 pb-12 px-0 self-stretch w-full border-t border-b border-solid border-[#c5c6ce33] overflow-hidden">
          <div className="flex flex-col items-center self-stretch w-full">
            <p className="font-sans font-normal text-gray-500 text-xs text-center tracking-[3.60px] leading-4 whitespace-nowrap uppercase mb-4">
              OUR GRADUATES WORK AT
            </p>
          </div>
          <div className="relative w-full">
             <div className="flex gap-12 sm:gap-16 lg:gap-24 animate-marquee-slow whitespace-nowrap items-center">
              {[...graduateCompanies, ...graduateCompanies].map((company, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 group cursor-pointer grayscale hover:grayscale-0 transition-all duration-500"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-10 sm:h-12 lg:h-14 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="font-sans font-semibold text-primary-blue text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hiring Partners Grid */}
        <div className="flex flex-col items-start gap-8 sm:gap-10 pt-4 pb-10 sm:pb-12 px-0 self-stretch w-full">
          <div className="flex flex-col items-center self-stretch w-full">
            <p className="font-sans font-normal text-accent-gold text-xs text-center tracking-[3.60px] leading-4 whitespace-nowrap uppercase mb-4">
              TOP HIRING PARTNERS
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
            {hiringPartners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4 p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="h-12 w-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                   <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-sans font-bold text-primary-blue text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 3rem)); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

