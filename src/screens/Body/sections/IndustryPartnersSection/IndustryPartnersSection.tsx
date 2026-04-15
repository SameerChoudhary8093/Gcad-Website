import { Card, CardContent } from "../../../../components/ui/card";

const partnerCards = [
  {
    icon: "https://c.animaapp.com/mnyx7rno5LIHte/img/container-1.svg",
    title: "Skill & Academic Partners",
    image: "https://c.animaapp.com/mnyx7rno5LIHte/img/skill-and-academic-partners-logos.png",
  },
  {
    icon: "https://c.animaapp.com/mnyx7rno5LIHte/img/container-6.svg",
    title: "International Collaborations",
    image: "https://c.animaapp.com/mnyx7rno5LIHte/img/international-collaborations-logos.png",
  },
];

const graduateCompanies = ["GOOGLE", "NETFLIX", "ZARA", "ADOBE", "LANDOR", "PINTEREST"];

export const IndustryPartnersSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#f2f4f7]">
      <div className="flex flex-col max-w-screen-xl items-start gap-12 lg:gap-16 px-8 py-0 w-full mx-auto">
        <div className="flex flex-col items-center gap-2 self-stretch w-full">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#904d00] text-sm sm:text-base text-center tracking-[1.60px] leading-6">
            GLOBAL ECOSYSTEM
          </p>
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-2xl sm:text-3xl lg:text-4xl text-center tracking-[0] leading-10">
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
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#75777e] text-xs text-center tracking-[3.60px] leading-4 whitespace-nowrap">
              OUR GRADUATES WORK AT
            </p>
          </div>
          <div className="self-stretch w-full overflow-x-auto">
            <div className="inline-flex items-center gap-8 sm:gap-12 lg:gap-16 min-w-max px-2">
              {graduateCompanies.map((company, index) => (
                <span
                  key={index}
                  className="[font-family:'Inter',Helvetica] font-normal text-[#1a2b4833] text-2xl sm:text-3xl lg:text-4xl tracking-[0] leading-10 whitespace-nowrap"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
