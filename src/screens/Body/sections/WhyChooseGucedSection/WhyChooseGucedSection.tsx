import { Button } from "../../../../components/ui/button";
import { ScrollReveal } from "../../../../components/ScrollReveal";

const reasons = [
  "Industry Aligned Curriculum",
  "Startup & Incubation Support",
  "50% Learning continues outside the classroom",
  "Continuous Portfolio creation with Real Projects",
  "2nd year onwards Live projects & internships",
  "Industry visits, workshops, field trips, international exposure, live industry and social projects",
];

export const WhyChooseGucedSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Bauhaus-inspired artistic shapes */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#1a2b48] bg-opacity-5 rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-48 sm:h-48 bg-[#fd8b00] bg-opacity-10 rounded-tr-full pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#008f7a] bg-opacity-20 rounded-full pointer-events-none hidden lg:block" />

      <div className="relative z-10 flex flex-col lg:flex-row max-w-screen-xl items-center gap-12 lg:gap-16 w-full mx-auto">

        {/* Left: text */}
        <div className="flex flex-col items-start gap-8 lg:gap-10 w-full lg:flex-1">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-col items-start gap-2 w-full">
              <span className="font-sans font-normal text-accent-gold text-sm sm:text-base tracking-[1.60px] leading-6">
                REASONS
              </span>
              <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-[0] leading-tight w-full">
                WHY GCAD?
              </h2>
            </div>
          </ScrollReveal>

          <ul className="flex flex-col items-start gap-5 w-full">
            {reasons.map((reason, index) => (
              <ScrollReveal key={index} direction="left" delay={200 + index * 100}>
                <li className="flex items-start gap-4 w-full">
                  <div className="w-2 h-[18px] pt-2.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-[#fd8b00] rounded-full" />
                  </div>
                  <span className="font-sans font-bold text-white text-base sm:text-lg lg:text-xl tracking-[0] leading-7">
                    {reason}
                  </span>
                </li>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal direction="up" delay={600}>
            <Button className="inline-flex justify-center px-8 sm:px-10 py-4 h-auto bg-accent-gold hover:bg-light-gold rounded-lg shadow-[0px_20px_25px_-5px_#0000001a]">
              <span className="font-sans font-extrabold text-primary-blue text-sm sm:text-base tracking-[-0.40px] leading-6 whitespace-nowrap">
                APPLY NOW!
              </span>
            </Button>
          </ScrollReveal>
        </div>

        {/* Right: image */}
        <div className="relative w-full lg:flex-1">
          <ScrollReveal direction="up" delay={300}>
            {/* Added rounded-tr-[100px] rounded-br-[100px] and rounded-tl-[100px] to match brochure shapes */}
            <div
              className="w-full h-72 sm:h-96 lg:h-[576px] rounded-t-full rounded-br-full shadow-[0px_25px_50px_-12px_#00000040] bg-cover bg-center border-4 border-accent-gold"
              style={{ backgroundImage: "url(/DSC00897.jpg.jpeg)" }}
            />
            {/* Overlay card */}
            <div className="inline-flex items-center gap-3 p-3 sm:p-4 absolute -left-2 -bottom-4 sm:-left-4 sm:-bottom-5 bg-white rounded-xl shadow-[0px_10px_15px_-3px_#00000040] z-20">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cover bg-center flex-shrink-0 border-2 border-accent-gold"
                style={{ backgroundImage: "url(/DSC00882.jpg.jpeg)" }}
              />
              <div className="flex flex-col pr-4">
                <span className="font-sans font-bold text-primary-blue text-xs leading-4 whitespace-nowrap">
                  Join Our Tribe
                </span>
                <span className="font-sans font-normal text-gray-600 text-xs leading-4 whitespace-nowrap">
                  Gyan Vihar School Of Design
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
