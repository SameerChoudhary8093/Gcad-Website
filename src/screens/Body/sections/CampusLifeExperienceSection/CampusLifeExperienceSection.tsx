import { Card, CardContent } from "../../../../components/ui/card";

const sideCards = [
  {
    id: "studios",
    title: "Creative Studios",
    label: "STUDIOS",
    description: "State-of-the-art design studios equipped with latest technology and tools",
    image: "DSC01034.jpg.jpeg",
  },
  {
    id: "workshops",
    title: "Workshop Spaces",
    label: "WORKSHOPS", 
    description: "Hands-on workshop areas for practical learning and experimentation",
    image: "DSC00937.jpg.jpeg",
  },
];

export const CampusLifeExperienceSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#f2f4f7]">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 lg:gap-12 w-full mx-auto">

        {/* Header */}
        <div className="flex flex-col items-start gap-2 w-full">
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-3xl sm:text-4xl tracking-[0] leading-10">
            CAMPUS CULTURE
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#44474d] text-sm sm:text-base tracking-[0] leading-6">
            More than just academics, it&#39;s a creative tribe.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">

          {/* Large featured card — full width on mobile, 2/3 on desktop */}
          <Card className="relative lg:col-span-2 h-[360px] sm:h-[480px] lg:h-[600px] flex flex-col rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_#0000001a] bg-[#ffffff01] border-0 p-0">
            <CardContent className="p-0 w-full h-full relative">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url(/DSC00988.jpg.jpeg)" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(26,43,72,0.8)_0%,rgba(26,43,72,0)_50%)]" />
              <div className="flex flex-col items-start gap-2 p-6 sm:p-8 absolute left-0 bottom-0">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#fd8b00] text-sm tracking-[2.80px] leading-5 whitespace-nowrap">
                  STUDENT EXPERIENCES
                </span>
                <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-2xl sm:text-3xl tracking-[0] leading-9 whitespace-nowrap">
                  Events &amp; Activities
                </h3>
                <p className="max-w-lg [font-family:'Inter',Helvetica] font-normal text-[#ffffffcc] text-sm sm:text-base tracking-[0] leading-6">
                  From the Tattva design festival to masterclasses on Design Thinking, our campus
                  is always buzzing with creative energy.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right stacked cards — row on mobile, column on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8 w-full">
            {sideCards.map((card) => (
              <Card
                key={card.id}
                className="w-full rounded-2xl overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a] bg-[#ffffff01] border-0 p-0"
              >
                <CardContent className="p-0 w-full relative group">
                  <div
                    className="w-full h-40 sm:h-52 lg:h-[284px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className="flex w-full h-full items-center justify-center absolute top-0 left-0 bg-[#1a2b4866] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-base sm:text-xl tracking-[2.00px] leading-7 whitespace-nowrap">
                      {card.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
