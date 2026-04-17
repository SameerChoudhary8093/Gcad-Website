import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const specializations = [
  "Fashion & Lifestyle Accessories Design",
  "Communication Design",
];

export const CentreOfArtDesignSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start px-4 sm:px-6 lg:px-12 xl:px-32 py-16 sm:py-20 lg:py-24 bg-[#f2f4f7]">
      <Card className="w-full max-w-screen-lg mx-auto bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden border border-solid border-[#c5c6ce1a] shadow-[0px_25px_50px_-12px_#00000040] p-0">
        <CardContent className="flex flex-col lg:flex-row items-stretch w-full p-0">

          {/* Left content panel */}
          <div className="flex flex-col items-start justify-center p-8 sm:p-12 lg:p-20 flex-1 bg-[linear-gradient(123deg,rgba(255,255,255,1)_0%,rgba(242,244,247,1)_100%)]">
            <div className="flex flex-col items-start gap-3 w-full">
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#904d00] text-sm sm:text-base tracking-[1.60px] leading-6">
                ADMISSION OPEN 2026
              </p>
              <h2 className="font-extrabold text-[#1a2b48] leading-tight w-full [font-family:'Plus_Jakarta_Sans',Helvetica] text-4xl sm:text-5xl tracking-[0]">
                Centre of Art
                <br />
                &amp; Design
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#44474d] text-lg sm:text-xl tracking-[0] leading-7 w-full">
                Shaping Visionaries Through Design
              </p>
            </div>

            <div className="pt-8 w-full">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-3 w-full">
                  <img
                    className="flex-shrink-0 w-6 h-6"
                    alt="Degree icon"
                    src="https://c.animaapp.com/mnyx7rno5LIHte/img/container-5.svg"
                  />
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1a2b48] text-sm sm:text-base leading-6 whitespace-nowrap">
                    Bachelors of Design (Hons)
                  </span>
                </div>
                <div className="flex flex-col gap-2 pl-9 w-full">
                  {specializations.map((item, index) => (
                    <p
                      key={index}
                      className="[font-family:'Inter',Helvetica] font-normal text-[#44474d] text-sm leading-5"
                    >
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button className="px-8 sm:px-10 py-4 sm:py-5 h-auto bg-[#fd8b00] hover:bg-[#e07d00] rounded-lg shadow-[0px_20px_25px_-5px_#fd8b004c]">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-sm sm:text-base text-center leading-6 whitespace-nowrap">
                  APPLY NOW
                </span>
              </Button>
            </div>
          </div>

          {/* Right image panel */}
          <div className="w-full lg:flex-1 min-h-[250px] sm:min-h-[360px] lg:min-h-0">
            <div
              className="w-full h-full min-h-[250px] sm:min-h-[360px] lg:min-h-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/public/DSC00967.jpg.jpeg)" }}
            />
          </div>

        </CardContent>
      </Card>
    </section>
  );
};
