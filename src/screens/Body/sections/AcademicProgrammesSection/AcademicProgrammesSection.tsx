import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const programmes = [
  {
    image: "https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axub0k36eugth-lmwucpredlngzs3q3ptsys9aw4tqwtkntt-i-3tbbyzxnbk.png",
    title: "Bachelor of Design\n(Hons.)",
    specializations: [
      "Fashion & Lifestyle Accessories Design",
      "Communication Design",
      "Interior & Graphic Design",
    ],
    label: "4 YEAR INTEGRATED",
  },
  {
    image: "https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axuafydz0x2ssui-tgry2tc21y2md4egottdukx4eu8jn-r4z-u2yp7jrwqaf.png",
    title: "Diploma / B.Voc",
    specializations: [
      "Advance Diploma in Design",
      "B.Voc Specializations in Fashion",
      "Interior & Graphic Focus",
    ],
    label: "SKILL-FOCUSED CERTIFICATES",
  },
  {
    image: "https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axudqw-grygpn9mudbixivonztlqdjtctxstnm1wmxobjwtuxjxupp6yqicqr.png",
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
    <section className="flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#f7f9fc]">
      <div className="flex flex-col max-w-screen-xl items-start gap-12 lg:gap-16 w-full mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center gap-2 w-full">
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#904d00] text-sm sm:text-base text-center tracking-[1.60px] leading-6">
            JOIN OUR
          </span>
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-3xl sm:text-4xl lg:text-5xl text-center tracking-[0] leading-tight pb-4">
            ACADEMIC PROGRAMMES
          </h2>
          <div className="w-20 sm:w-24 h-1.5 bg-[#fd8b00] rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full">
          {programmes.map((programme, index) => (
            <Card
              key={index}
              className="flex flex-col items-start bg-[#f2f4f7] rounded-2xl overflow-hidden border border-solid border-[#c5c6ce1a] shadow-[0px_10px_15px_-3px_#0000001a] h-fit p-0"
            >
              <div className="h-48 sm:h-56 w-full flex-shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${programme.image})` }}
                />
              </div>
              <CardContent className="flex flex-col items-start p-6 sm:p-8 w-full bg-white">
                <div className="pb-4 w-full">
                  <h3 className="w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-xl sm:text-2xl leading-8 whitespace-pre-line">
                    {programme.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  {programme.specializations.map((spec, specIndex) => (
                    <p
                      key={specIndex}
                      className="[font-family:'Inter',Helvetica] font-normal italic text-[#44474d] text-sm leading-5"
                    >
                      {spec}
                    </p>
                  ))}
                </div>
                <div className="pt-6 w-full border-t border-solid border-[#c5c6ce33] mt-6">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#904d00] text-xs tracking-[1.20px] leading-4">
                    {programme.label}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center w-full">
          <Button className="inline-flex gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-[#1a2b48] rounded-lg items-center h-auto shadow-[0px_20px_25px_-5px_#1a2b4833] hover:bg-[#1a2b48]/90">
            <img
              className="flex-shrink-0 w-5 h-5"
              alt="Download"
              src="https://c.animaapp.com/mnyx7rno5LIHte/img/container-2.svg"
            />
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-sm sm:text-base tracking-[-0.40px] leading-6 whitespace-nowrap">
              DOWNLOAD BROCHURE
            </span>
          </Button>
        </div>

      </div>
    </section>
  );
};
