import { Card, CardContent } from "../../../../components/ui/card";

const partnerCards = [
  {
    icon: "🎓",
    title: "Skill & Academic Partners",
    image: "/public/DSC00988.jpg.jpeg",
  },
  {
    icon: "🌍",
    title: "International Collaborations", 
    image: "/public/DSC00967.jpg.jpeg",
  },
];

const graduateCompanies = [
  { name: "Google", logo: "🔍" },
  { name: "Microsoft", logo: "🪟" },
  { name: "Adobe", logo: "🎨" },
  { name: "Amazon", logo: "📦" },
  { name: "Netflix", logo: "🎬" },
  { name: "Meta", logo: "📘" },
  { name: "Apple", logo: "🍎" },
  { name: "IBM", logo: "💻" }
];

const hiringPartners = [
  { name: "TCS", logo: "💼" },
  { name: "Infosys", logo: "🏢" },
  { name: "Wipro", logo: "🌐" },
  { name: "HCL", logo: "🔧" },
  { name: "Accenture", logo: "🎯" },
  { name: "Deloitte", logo: "📊" }
];

export const IndustryPartnersSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#f2f4f7]">
      <div className="flex flex-col max-w-screen-xl items-start gap-12 lg:gap-16 px-8 py-0 w-full mx-auto">
        <div className="flex flex-col items-center gap-2 self-stretch w-full">
          <p className="font-sans font-normal text-accent-gold text-sm sm:text-base text-center tracking-[1.60px] leading-6">
            GLOBAL ECOSYSTEM
          </p>
          <h2 className="font-display font-extrabold text-primary-blue text-2xl sm:text-3xl lg:text-4xl text-center tracking-[0] leading-10">
            PLACEMENTS &amp; HIRING PARTNERS
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-8 lg:gap-12">
          {partnerCards.map((card, index) => (
            <Card
              key={index}
              className="relative flex flex-col items-start gap-6 sm:gap-8 p-6 sm:p-10 bg-white rounded-2xl border border-solid border-[#c5c6ce1a] shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a] h-fit"
            >
              <CardContent className="p-0 flex flex-col items-start gap-6 sm:gap-8 w-full">
                <div className="flex items-center gap-3 self-stretch w-full">
                  <img
                    className="flex-shrink-0 w-6 h-6"
                    alt={card.title}
                    src={card.icon}
                  />
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-lg sm:text-xl tracking-[0] leading-7">
                    {card.title}
                  </span>
                </div>
                <div
                  className="self-stretch w-full h-64 sm:h-80 lg:h-[502px] rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-start gap-8 sm:gap-10 pt-12 sm:pt-16 pb-10 sm:pb-12 px-0 self-stretch w-full border-t border-b border-solid border-[#c5c6ce33]">
          <div className="flex flex-col items-center self-stretch w-full">
            <p className="font-sans font-normal text-gray-500 text-xs text-center tracking-[3.60px] leading-4 whitespace-nowrap">
              OUR GRADUATES WORK AT
            </p>
          </div>
          <div className="self-stretch w-full overflow-x-auto">
            <div className="inline-flex items-center gap-8 sm:gap-12 lg:gap-16 min-w-max px-2">
              {graduateCompanies.map((company, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {company.logo}
                  </div>
                  <span className="font-sans font-medium text-primary-blue text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hiring Partners Section */}
        <div className="flex flex-col items-start gap-8 sm:gap-10 pt-12 sm:pt-16 pb-10 sm:pb-12 px-0 self-stretch w-full">
          <div className="flex flex-col items-center self-stretch w-full">
            <p className="font-sans font-normal text-accent-gold text-xs text-center tracking-[3.60px] leading-4 whitespace-nowrap">
              TOP HIRING PARTNERS
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
            {hiringPartners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="text-3xl sm:text-4xl">
                  {partner.logo}
                </div>
                <span className="font-sans font-semibold text-primary-blue text-sm text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
