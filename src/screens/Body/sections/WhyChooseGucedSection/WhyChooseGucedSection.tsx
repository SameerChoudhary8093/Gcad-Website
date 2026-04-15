import { Button } from "../../../../components/ui/button";

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
    <section className="flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#f7f9fc]">
      <div className="flex flex-col lg:flex-row max-w-screen-xl items-center gap-12 lg:gap-16 w-full mx-auto">

        {/* Left: text */}
        <div className="flex flex-col items-start gap-8 lg:gap-10 w-full lg:flex-1">
          <div className="flex flex-col items-start gap-2 w-full">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#904d00] text-sm sm:text-base tracking-[1.60px] leading-6">
              REASONS
            </span>
            <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-4xl sm:text-5xl tracking-[0] leading-tight w-full">
              WHY GCAD?
            </h2>
          </div>

          <ul className="flex flex-col items-start gap-5 w-full">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-4 w-full">
                <div className="w-2 h-[18px] pt-2.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-[#fd8b00] rounded-full" />
                </div>
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1a2b48] text-base sm:text-lg lg:text-xl tracking-[0] leading-7">
                  {reason}
                </span>
              </li>
            ))}
          </ul>

          <Button className="inline-flex justify-center px-8 sm:px-10 py-4 h-auto bg-[#1a2b48] rounded-lg shadow-[0px_20px_25px_-5px_#0000001a] hover:bg-[#1a2b48]/90">
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-sm sm:text-base tracking-[-0.40px] leading-6 whitespace-nowrap">
              APPLY NOW!
            </span>
          </Button>
        </div>

        {/* Right: image */}
        <div className="relative w-full lg:flex-1">
          <div
            className="w-full h-72 sm:h-96 lg:h-[576px] rounded-2xl shadow-[0px_25px_50px_-12px_#00000040] bg-cover bg-center"
            style={{ backgroundImage: "url(https://c.animaapp.com/mnyx7rno5LIHte/img/why-choose-gcad-visual.png)" }}
          />
          {/* Overlay card */}
          <div className="inline-flex items-center gap-3 p-3 sm:p-4 absolute -right-2 -bottom-4 sm:-right-4 sm:-bottom-5 bg-white rounded-xl shadow-[0px_10px_15px_-3px_#0000001a]">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: "url(https://c.animaapp.com/mnyx7rno5LIHte/img/student.png)" }}
            />
            <div className="flex flex-col">
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#1a2b48] text-xs leading-4 whitespace-nowrap">
                Join Our Tribe
              </span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#75777e] text-xs leading-4 whitespace-nowrap">
                Gyan Vihar School Of Design
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
