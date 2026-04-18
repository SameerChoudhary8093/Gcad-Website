import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { ScrollReveal } from "../../../../components/ScrollReveal";

const mentors = [
  { name: "DR. NEHA KAPOOR", role: "FASHION DESIGN", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=250&auto=format&fit=crop" },
  { name: "DR. SURAJ K SINGH", role: "TEXTILE TECHNOLOGY", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=250&auto=format&fit=crop" },
  { name: "DR. ANKUR JAIN", role: "VISUAL COMMUNICATION", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=250&auto=format&fit=crop" },
  { name: "DR. SARMAD MOIN", role: "INTERIOR DESIGN", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=250&auto=format&fit=crop" },
  { name: "DR. KISHAN KUMAR", role: "INDUSTRIAL DESIGN", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=250&auto=format&fit=crop" },
  { name: "DR. GAURAV SHARMA", role: "ANIMATION LEAD", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=250&auto=format&fit=crop" },
  { name: "KRITI SHRIVASTAV", role: "CRAFT & TEXTILES", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=250&auto=format&fit=crop" },
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

        {/* Mentor grid: 2 cols on mobile, 4 on tablet, 7 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 pt-12 w-full">
          {mentors.map((mentor, index) => (
            <ScrollReveal key={`mentor-${index}`} direction="up" delay={index * 100} className="w-full">
              <div className="group flex flex-col items-center w-full cursor-pointer">
                <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 border border-gray-100">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" 
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
