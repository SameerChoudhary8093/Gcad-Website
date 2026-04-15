import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const steps = [
  {
    number: "1",
    title: "Apply Online",
    description: "Fill out the digital application form and submit your preliminary creative portfolio.",
  },
  {
    number: "2",
    title: "Design Interview",
    description: "Showcase your vision in a creative interaction with our master faculty members.",
  },
];

const eligibilityCriteria = [
  {
    label: "UNDERGRADUATE (B.DES HONS)",
    description: "Minimum 50% in 10+2 from any recognized board. Creative aptitude preferred.",
  },
  {
    label: "POSTGRADUATE (M.DES)",
    description: "Bachelors degree in Design or related field with a strong portfolio showcase.",
  },
];

export const AdmissionsCallToActionSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#1a2b48] overflow-hidden">
      {/* Decorative bg blurs */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#fd8b001a] rounded-full blur-[50px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#1a2b4833] rounded-full blur-2xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-screen-xl mx-auto gap-12 lg:gap-20 relative z-10">

        {/* Left: Heading + Steps */}
        <div className="flex flex-col items-start gap-8 w-full">
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-transparent text-4xl sm:text-5xl tracking-[0] leading-tight w-full">
            <span className="font-extrabold text-white">
              TAKE THE LEAP
              <br />
            </span>
            <span className="text-[#fd8b00]">JOIN THE TRIBE</span>
          </h2>

          <div className="flex flex-col items-start gap-8 sm:gap-10 w-full">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-5 sm:gap-6 w-full">
                <div className="flex-shrink-0 flex w-12 h-12 sm:w-14 sm:h-14 items-center justify-center rounded-full border-2 border-solid border-[#fd8b00]">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-lg sm:text-xl text-center leading-7">
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 flex-1">
                  <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-xl sm:text-2xl leading-8">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff99] text-base sm:text-lg leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Eligibility card + CTA */}
        <div className="flex flex-col items-start gap-6 sm:gap-8 w-full">
          <Card className="relative w-full bg-[#1a2b48] rounded-2xl border border-solid border-[#ffffff1a]">
            <CardContent className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-10">
              <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xl sm:text-2xl leading-8">
                Eligibility Criteria
              </h3>
              <div className="flex flex-col items-start gap-5 sm:gap-6 w-full">
                {eligibilityCriteria.map((criteria) => (
                  <div
                    key={criteria.label}
                    className="flex flex-col items-start gap-2 p-4 sm:p-5 w-full bg-[#ffffff0d] rounded-xl border border-solid border-[#ffffff1a]"
                  >
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#fd8b00] text-[10px] tracking-[2.00px] leading-[15px]">
                      {criteria.label}
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-medium text-white text-sm sm:text-base leading-6">
                      {criteria.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="relative flex justify-center items-center w-full bg-[#fd8b00] rounded-2xl py-6 sm:py-7 overflow-hidden cursor-pointer hover:bg-[#e07d00] transition-colors">
            <Button
              variant="ghost"
              className="relative z-10 h-auto [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-xl sm:text-2xl text-center tracking-[-0.60px] leading-8 whitespace-nowrap hover:bg-transparent hover:text-[#1a2b48] p-0"
            >
              APPLY NOW FOR 2026
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
