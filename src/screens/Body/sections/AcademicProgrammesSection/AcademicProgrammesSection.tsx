import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollReveal } from "../../../../components/ScrollReveal";

const programmes = [
  {
    image: "/DSC00937.jpg.jpeg",
    title: "Bachelor of Design\n(Hons.)",
    specializations: [
      "Fashion & Lifestyle Accessories Design",
      "Communication Design",
      "Interior & Graphic Design",
    ],
    label: "4 YEAR INTEGRATED",
  },
  {
    image: "/DSC00941.jpg.jpeg",
    title: "Diploma / B.Voc",
    specializations: [
      "Advance Diploma in Design",
      "B.Voc Specializations in Fashion",
      "Interior & Graphic Focus",
    ],
    label: "SKILL-FOCUSED CERTIFICATES",
  },
  {
    image: "/DSC00951.jpg.jpeg",
    title: "Master of Design",
    specializations: [
      "Communication Design Specialist",
      "Design Management & Innovation",
      "Advanced Interaction Design",
    ],
    label: "2 YEAR SPECIALIST MASTER'S",
  },
];

export const AcademicProgrammesSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Decorative geometric shapes */}
      <div className="absolute top-[-5%] left-[-5%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] border-[40px] sm:border-[50px] border-accent-gold rounded-full pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-[#008f7a] rounded-tl-full pointer-events-none opacity-30" />
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-[#e07d00] rounded-sm pointer-events-none hidden lg:block rotate-12" />

      <div className="relative z-10 flex flex-col max-w-screen-xl items-start gap-12 lg:gap-16 w-full mx-auto">

        {/* Header */}
        <ScrollReveal direction="down" className="w-full">
          <div className="flex flex-col items-center gap-2 w-full">
            <span className="font-sans font-normal text-accent-gold text-sm sm:text-base text-center tracking-[1.60px] leading-6">
              JOIN OUR
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl text-center tracking-[0] leading-tight pb-4">
              ACADEMIC PROGRAMMES
            </h2>
            <div className="w-20 sm:w-24 h-1.5 bg-accent-gold rounded-full" />
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {programmes.map((programme, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 200}>
              <Card
                className="flex flex-col items-start bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md overflow-hidden border-2 border-accent-gold shadow-lg hover:shadow-xl transition-shadow duration-300 h-fit p-0"
              >
                <div className="h-56 sm:h-64 w-full flex-shrink-0 overflow-hidden">
                  <img
                    src={programme.image}
                    alt={programme.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="flex flex-col items-start p-6 sm:p-8 w-full bg-white relative">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-accent-gold rounded-bl-full opacity-20" />
                  <div className="absolute top-0 left-0 w-2 h-full bg-accent-gold opacity-30" />
                  <div className="pb-4 w-full relative z-10">
                    <h3 className="w-full font-sans font-extrabold text-primary-blue text-xl sm:text-2xl leading-8 whitespace-pre-line">
                      {programme.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3 w-full relative z-10">
                    {programme.specializations.map((spec, specIndex) => (
                      <p
                        key={specIndex}
                        className="font-sans font-normal text-gray-600 text-sm leading-5 flex items-start gap-2"
                      >
                        <span className="text-accent-gold mt-1">•</span>
                        {spec}
                      </p>
                    ))}
                  </div>
                  <div className="pt-6 w-full border-t border-accent-gold/30 mt-6 relative z-10">
                    <span className="font-sans font-bold text-accent-gold text-xs tracking-[1.20px] leading-4 uppercase">
                      {programme.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={600} className="w-full">
          <div className="flex flex-col items-center w-full">
            <Button className="inline-flex gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-white rounded-lg items-center h-auto shadow-[0px_20px_25px_-5px_#00000033] hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                 <polyline points="7 10 12 15 17 10"></polyline>
                 <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span className="font-sans font-extrabold text-primary-blue text-sm sm:text-base tracking-[-0.40px] leading-6 whitespace-nowrap">
                DOWNLOAD BROCHURE
              </span>
            </Button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
