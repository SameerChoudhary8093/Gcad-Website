import { ScrollReveal } from "../../../../components/ScrollReveal";

const studios = [
  {
    title: "Fashion Lab",
    description: "Industry-standard garment construction and pattern making studio.",
    bgImage: "DSC00941.jpg.jpeg",
  },
  {
    title: "iMac Design Studio",
    description: "High-end computing lab equipped with the latest Adobe Creative Suite.",
    bgImage: "DSC00897.jpg.jpeg",
  },
  {
    title: "Textile Workshop",
    description: "Creative space for material exploration and textile design.",
    bgImage: "DSC00967.jpg.jpeg",
  },
  {
    title: "Drafting Room",
    description: "Spacious studio for technical drawing and architectural drafting.",
    bgImage: "DSC01034.jpg.jpeg",
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
          <h2 className="font-display font-black text-white text-3xl sm:text-5xl lg:text-7xl tracking-tighter leading-tight">
            WORLD-CLASS <span className="text-accent-gold font-serif italic font-normal">Studios</span>
          </h2>
        </div>
      </div>

      {/* Studio Cards Grid - Vertical Pill Style */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-screen-xl mx-auto h-[450px] sm:h-[650px]">
        {studios.map((studio, index) => (
          <ScrollReveal
            key={index}
            direction="up"
            delay={index * 150}
            className="relative h-full"
          >
            <div className={`group relative w-full h-full overflow-hidden rounded-[80px] sm:rounded-[200px] border-2 border-white/10 hover:border-accent-gold transition-all duration-700 shadow-2xl ${index % 2 === 1 ? 'mt-8 sm:mt-12' : 'mb-8 sm:mb-12'}`}>
              <img
                src={studio.bgImage}
                alt={studio.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D244B] via-[#0D244B]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-x-0 bottom-12 sm:bottom-20 px-4 sm:px-8 flex flex-col items-center text-center">
                <h3 className="font-display font-bold text-white text-base sm:text-2xl mb-2 sm:mb-3 drop-shadow-md">
                  {studio.title}
                </h3>
                <p className="font-sans font-normal text-white/80 text-[10px] sm:text-xs leading-relaxed max-w-[120px] sm:max-w-[180px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {studio.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
