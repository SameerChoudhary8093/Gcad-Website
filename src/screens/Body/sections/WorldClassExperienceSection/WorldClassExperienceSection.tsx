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
  {
    title: "Modern Design Studio",
    description: "Bright, collaborative space with professional drafting stations.",
    bgImage: "modern_design_studio.png",
  },
];

export const WorldClassExperienceSection = (): JSX.Element => {
  return (
    <section id="infrastructure" className="flex flex-col w-full items-start gap-10 sm:gap-12 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#0D244B] overflow-hidden">
      {/* Header */}
      <div className="flex max-w-screen-xl items-end justify-between w-full mx-auto">
        <div className="flex flex-col items-start gap-2">
          <p className="font-sans font-bold text-accent-gold text-sm sm:text-base tracking-[4px] leading-6 uppercase">
            THE WORKSPACE
          </p>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-7xl tracking-tighter leading-tight whitespace-nowrap">
            WORLD-CLASS <span className="text-accent-gold font-serif italic font-normal">Studios</span>
          </h2>
          <div className="w-24 h-1 bg-accent-gold mt-4" />
        </div>
      </div>

      {/* Studio cards with marquee */}
      <div className="w-full relative">
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-6 sm:gap-8 py-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            {[...studios, ...studios].map((studio, index) => (
              <Card
                key={index}
                className="relative min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] h-[420px] sm:h-[500px] rounded-2xl overflow-hidden shadow-[0px_10px_40px_-10px_#0000001a] border-0 flex-shrink-0 group cursor-pointer"
              >
                <CardContent className="p-0 h-full w-full relative">
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${studio.bgImage})` }}
                  />
                  <div
                    className="absolute inset-0 w-full h-full opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                    style={{ background: "linear-gradient(0deg, #0D244B 0%, rgba(13,36,75,0) 60%)" }}
                  />
                  <div className="absolute left-0 bottom-0 flex flex-col gap-2 p-6 sm:p-8 w-full">
                    <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-xl sm:text-2xl leading-8 group-hover:text-accent-gold transition-colors duration-300">
                      {studio.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffb2] text-sm sm:text-base leading-6 whitespace-normal">
                      {studio.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        @media (min-width: 640px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1.5rem)); }
          }
        }
      `}</style>
    </section>
  );
};
