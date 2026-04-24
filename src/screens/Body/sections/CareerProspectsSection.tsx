import { ScrollReveal } from "../../../components/ScrollReveal";

const prospects = [
  {
    title: "Communication Design",
    color: "bg-accent-gold",
    textColor: "text-[#0d244b]",
    roles: [
      "UI/UX Designer",
      "Graphic Designer",
      "Visual Storyteller",
      "Illustrator",
      "Animator",
      "Photographer & Videographer",
      "Branding Specialist",
      "Space Designer",
    ],
    shape: "rounded-tr-[100px]",
  },
  {
    title: "Fashion & Lifestyle Accessories",
    color: "bg-accent-gold",
    textColor: "text-[#0d244b]",
    roles: [
      "Fashion Designer",
      "Accessories Designer",
      "Fashion Merchandiser",
      "Visual Merchandiser",
      "Lifestyle Accessory Designer",
      "Fashion Stylist",
      "Fashion Retail Manager",
    ],
    shape: "rounded-tr-[100px]",
  },
];

export const CareerProspectsSection = () => {
  return (
    <section className="py-24 bg-primary-blue relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0d244b]/5 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <ScrollReveal direction="left">
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-4 uppercase">
              Your Career <span className="text-accent-gold font-serif italic font-normal">prospects</span>
            </h2>
            <p className="text-white/80 font-bold tracking-widest uppercase">Graduates are prepared for thriving roles including:</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {prospects.map((prospect, index) => (
            <ScrollReveal 
              key={index} 
              direction={index === 0 ? "left" : "right"} 
              delay={index * 200}
            >
              <div className={`${prospect.color} ${prospect.textColor} p-12 sm:p-16 ${prospect.shape} shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}>
                {/* Bauhaus semi-circle overlay */}
                <div className="absolute top-0 right-0 w-32 h-64 bg-white/10 rounded-l-full transform translate-x-16" />
                
                <h3 className="text-3xl sm:text-4xl font-black mb-10 tracking-tight uppercase relative z-10">
                  {prospect.title}
                </h3>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {prospect.roles.map((role, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${prospect.textColor === 'text-white' ? 'bg-accent-gold' : 'bg-primary-blue'}`} />
                      <span className="font-bold text-sm sm:text-base opacity-90">{role}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom decorative shape */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/20" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
