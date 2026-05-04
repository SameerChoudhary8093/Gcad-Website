
const partners = [
  { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" },
  { name: "Paper Boat", logo: "/paperboat-logo.jpeg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "AND", logo: "/AND-logo.jpg" },
  { name: "Shoppers Stop", logo: "/ShoppersStop-logo.png" },
  { name: "Aditya Birla Group", logo: "/AdityaBirlaGroup-Logo.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Ajio", logo: "/ajio-logo.svg" },
  { name: "Reliance Retail", logo: "/relianceretail-logo.webp" },
  { name: "U.S. Polo Assn.", logo: "/us-polo-logo.png" },
  { name: "Prime Video", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg" },
  { name: "Disney+ Hotstar", logo: "/Disney+Hotstar-logo.svg" },
  { name: "Myntra", logo: "/myntra-logo.png" },
  { name: "Titan", logo: "/Titan-logo.jpg" },
  { name: "Arvind", logo: "/Arvind-logo.png" },
  { name: "Arrow", logo: "/arrow-logo.svg" },
  { name: "Viacom 18", logo: "/Viacom18-logo.png" },
  { name: "Fabindia", logo: "/Fabindia-logo.svg" },
  { name: "Microsoft", logo: "/Microsoft-logo.webp" },
  { name: "Zara", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" },
  { name: "Clovia", logo: "/clovia-logo.png" },
  { name: "PhonePe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" },
  { name: "ITC Limited", logo: "/itclimited-logo.svg" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "Tata CLiQ", logo: "/TataCliq-logo.png" },
  { name: "Tanishq", logo: "/Tanishq-Logo.png" },
  { name: "CRED", logo: "/cred-LOGO.png" }
];

const row1 = partners.slice(0, 14);
const row2 = partners.slice(14);

const LogoItem = ({ company }: { company: { name: string; logo: string } }) => {
  return (
    <div className="flex items-center justify-center min-w-[140px] sm:min-w-[180px] h-16 sm:h-20 transition-all duration-300 hover:scale-110 px-6 sm:px-10 group">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={company.logo}
          alt={company.name}
          className="max-h-full max-w-full w-auto object-contain transition-all duration-300"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div 
          className="hidden absolute inset-0 items-center justify-center text-center font-sans font-black text-primary-blue/30 text-[10px] sm:text-xs uppercase tracking-widest px-2 leading-tight"
          style={{ display: 'none' }}
        >
          {company.name}
        </div>
      </div>
    </div>
  );
};

export const IndustryPartnersSection = (): JSX.Element => {
  return (
    <section id="placements" className="flex flex-col w-full items-start py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col items-start gap-12 lg:gap-16 w-full relative z-10">
        <div className="flex flex-col items-center gap-2 self-stretch w-full px-4 sm:px-6 lg:px-8">
          <p className="font-sans font-bold text-accent-gold text-sm sm:text-base text-center tracking-[4px] leading-6 uppercase">
            Our Hiring Partners
          </p>
          <h2 className="font-display font-black text-primary-blue text-4xl sm:text-5xl lg:text-7xl text-center tracking-tighter leading-tight pb-4">
            A Strong Start <br /> to <span className="text-accent-gold font-serif italic font-normal">Successful Careers</span>
          </h2>
          <div className="w-24 h-1 bg-accent-gold rounded-full" />
        </div>

        {/* Bidirectional Logo Marquees - True Full Width */}
        <div className="flex flex-col gap-8 sm:gap-12 w-full py-16 border-y border-gray-100 overflow-hidden bg-gray-50/20">

          {/* Row 1: Partners - Slides Left */}
          <div className="relative w-full">
            <div className="flex animate-marquee-left whitespace-nowrap items-center">
              {[...row1, ...row1, ...row1, ...row1].map((company, index) => (
                <LogoItem key={`row1-${index}`} company={company} />
              ))}
            </div>
          </div>

          {/* Row 2: Partners - Slides Right */}
          <div className="relative w-full">
            <div className="flex animate-marquee-right whitespace-nowrap items-center">
              {[...row2, ...row2, ...row2, ...row2].map((partner, index) => (
                <LogoItem key={`row2-${index}`} company={partner} />
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-25%)); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(calc(-25%)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 80s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 80s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

