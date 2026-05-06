import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { ScrollReveal } from "../../../../components/ScrollReveal";

const mentors = [
  { name: "Meenakshi Singh", role: "Fashion Educator", image: "/Mentors/MeenakshiSingh.png" },
  { name: "Rashmi Bhardwaj", role: "Textile Technologist", image: "/Mentors/RashmiBhardwaj.png" },
  { name: "Padma Raj Kesri", role: "Visual Strategist", image: "/Mentors/PadmaRajKesri.png" },
  { name: "Gaurav Choudhary", role: "Design Founder", image: "/Mentors/GauravChoudhary.png" },
  { name: "Dr. Rajesh Dangoria", role: "Design Academic", image: "/Mentors/Dr.RajeshDangoria.png" },
  { name: "Anuraag Singhal", role: "Design Consultant", image: "/Mentors/AnuraagSinghal.png" },
  { name: "Umang Maheshwari", role: "Brand Strategist", image: "/Mentors/UmangMaheshwari.png", position: "top center" },
  { name: "Priyanka Gahlot", role: "Design Researcher", image: "/Mentors/PriyankaGahlot.png", position: "top center" },
  { name: "Saumya Pandey", role: "Design Curator", image: "/Mentors/SaumyaPandey.png" },
  { name: "Aashima Arora Arya", role: "UX Designer", image: "/Mentors/AashimaAroraArya.png" },
  { name: "Reena Bhatia", role: "Fashion Practitioner", image: "/Mentors/ReenaBhatia.png" },
];

export const MentorshipProgramSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col w-full items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-10 left-10 w-24 h-48 bg-accent-gold/10 rounded-r-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-[20px] border-[#0D244B]/5 rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col max-w-screen-xl items-center gap-4 w-full">

        <ScrollReveal direction="down">
          <h2 className="font-display font-black text-[#0D244B] text-3xl sm:text-4xl lg:text-6xl text-center tracking-tight leading-tight">
            GUIDED BY <span className="text-accent-gold font-serif italic font-normal">Masters</span>
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mt-4" />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <p className="font-sans font-medium text-gray-500 text-sm sm:text-lg text-center leading-relaxed max-w-3xl mt-4">
            Learn from industry veterans and award-winning artists who bring real-world wisdom to the classroom.
          </p>
        </ScrollReveal>

        {/* Mentor container: 6 on top, 5 on bottom (centered) */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-12 w-full">
          {mentors.map((mentor, index) => (
            <ScrollReveal 
              key={`mentor-${index}`} 
              direction="up" 
              delay={index * 100} 
              className="w-[calc(50%-1rem)] sm:w-[calc(33.33%-1.5rem)] lg:w-[calc(16.66%-1.5rem)] min-w-[140px] sm:min-w-[160px]"
            >
              <div className="group flex flex-col items-center w-full cursor-pointer">
                <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 border border-gray-100">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 scale-105 group-hover:scale-110 origin-top"
                    style={{ objectPosition: mentor.position || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D244B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex flex-col items-center w-full text-center">
                  <h3 className="font-sans font-black text-[#0D244B] text-[10px] sm:text-xs tracking-wider leading-tight uppercase group-hover:text-accent-gold transition-colors duration-300">
                    {mentor.name}
                  </h3>
                  <p className="font-sans font-bold text-gray-400 text-[8px] sm:text-[9px] tracking-widest uppercase mt-1">
                    {mentor.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
