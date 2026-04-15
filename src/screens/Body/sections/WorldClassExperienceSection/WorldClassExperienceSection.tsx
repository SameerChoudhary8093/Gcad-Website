import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

const studios = [
  {
    title: "Advanced Labs",
    description: "Equipped with the latest technology for hands-on technical design.",
    bgImage: "https://c.animaapp.com/mnyx7rno5LIHte/img/adbb0uj6x3knfu-4cv8i4svvo8d5cqykqpd-4g86hmhz5ycy4crkra00odz8dzac.png",
  },
  {
    title: "Creative Workshops",
    description: "Spacious areas for prototyping, fashion design, and artistic exploration.",
    bgImage: "https://c.animaapp.com/mnyx7rno5LIHte/img/adbb0ugqe6vafz9tezppneg1bpb34twoofjrutcr5wdjsao9zeh2f65oiq3-kiiz.png",
  },
  {
    title: "Innovation Lab",
    description: "High-end computing and VR stations for next-gen design solutions.",
    bgImage: "https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axubzt0uxpufz5eozpukso6l6ggv-id7wmojghjzjtyzqd-r-lo3xtqp4dido.png",
  },
];

export const WorldClassExperienceSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-10 sm:gap-12 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#f7f9fc]">
      {/* Header */}
      <div className="flex max-w-screen-xl items-end justify-between w-full mx-auto">
        <div className="flex flex-col items-start gap-2">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#904d00] text-sm sm:text-base tracking-[1.60px] leading-6 whitespace-nowrap">
            THE WORKSPACE
          </p>
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-3xl sm:text-4xl tracking-[0] leading-10 whitespace-nowrap">
            WORLD-CLASS STUDIOS
          </h2>
        </div>
        <img
          className="flex-shrink-0 w-10 h-10 sm:w-auto sm:h-auto hidden sm:block"
          alt="Navigation arrows"
          src="https://c.animaapp.com/mnyx7rno5LIHte/img/container-4.svg"
        />
      </div>

      {/* Studio cards */}
      <div className="w-full max-w-screen-xl mx-auto">
        <ScrollArea className="w-full">
          <div className="flex gap-6 sm:gap-8 pb-6">
            {studios.map((studio, index) => (
              <Card
                key={index}
                className="relative min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] h-[420px] sm:h-[500px] rounded-xl overflow-hidden shadow-[0px_10px_40px_-10px_#0000001a] border-0 flex-shrink-0"
              >
                <CardContent className="p-0 h-full w-full relative">
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${studio.bgImage})` }}
                  />
                  <div
                    className="absolute inset-0 w-full h-full opacity-80"
                    style={{ background: "linear-gradient(0deg, rgba(26,43,72,1) 0%, rgba(26,43,72,0) 50%)" }}
                  />
                  <div className="absolute left-0 bottom-0 flex flex-col gap-2 p-6 sm:p-8">
                    <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-xl sm:text-2xl leading-8 whitespace-nowrap">
                      {studio.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffb2] text-sm sm:text-base leading-6">
                      {studio.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
