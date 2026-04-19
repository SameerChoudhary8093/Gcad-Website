import React from "react";
import { ScrollReveal } from "../../../components/ScrollReveal";

const labs = [
  {
    title: "Apple MAC Lab",
    subtitle: "Authorized Training Centre",
    icon: "🍎",
    image: "DSC00897.jpg.jpeg",
  },
  {
    title: "Google Chrome Lab",
    subtitle: "Digital Innovation workspace",
    icon: "💻",
    image: "DSC01034.jpg.jpeg",
  },
  {
    title: "Fashion & Textile Studio",
    subtitle: "Full creative production space",
    icon: "🧵",
    image: "DSC00941.jpg.jpeg",
  },
  {
    title: "3D Printing & Workshop Lab",
    subtitle: "Prototyping & fabrication",
    icon: "🖨️",
    image: "DSC00967.jpg.jpeg",
  },
  {
    title: "Design Studios & Exhibition",
    subtitle: "Showcase & critique space",
    icon: "🎨",
    image: "DSC00951.jpg.jpeg",
  },
  {
    title: "Lathe Machine Lab",
    subtitle: "Industrial craft & making",
    icon: "⚙️",
    image: "DSC00933.jpg.jpeg",
  },
  {
    title: "Fully-Equipped Library",
    subtitle: "Extensive design resources",
    icon: "📚",
    image: "DSC00882.jpg.jpeg",
  },
  {
    title: "Wi-Fi Enabled Campus",
    subtitle: "Seamless connectivity",
    icon: "📡",
    image: "DSC00919.jpg.jpeg",
  },
];

const amenities = [
  "AC Hostels", "Fitness Centre", "Cafeterias", "Auditorium", 
  "Amphitheatre", "Medical Facilities", "Sports facilities", 
  "24x7 CCTV Surveillance", "Transportation"
];

export const InfrastructureDetailsSection = () => {
  return (
    <section className="py-24 bg-[#f8f9fc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl sm:text-6xl font-black text-[#0d244b] tracking-tighter mb-4 uppercase">
              World-Class <span className="text-accent-gold">Infrastructure</span>
            </h2>
            <p className="text-gray-500 font-bold tracking-widest uppercase">Spread across 130 acres, the GCAD campus is equipped with 40+ state-of-the-art labs and studios:</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {labs.map((lab, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={index * 100}
            >
              <div className="bg-white rounded-[40px] overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 h-full">
                <div className="h-48 relative overflow-hidden">
                  <img src={lab.image} alt={lab.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#0d244b]/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-4 left-6 w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-xl shadow-lg border-4 border-white">
                    {lab.icon}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-[#0d244b] text-lg font-black uppercase mb-2 leading-tight tracking-tight group-hover:text-accent-gold transition-colors">
                    {lab.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {lab.subtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Campus Amenities - Purple Capsule */}
        <ScrollReveal direction="up" delay={800}>
          <div className="bg-[#6b4e8d] rounded-[60px] p-10 lg:p-16 shadow-2xl relative overflow-hidden group">
            {/* Bauhaus background accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-gold/20 rounded-full -ml-16 -mb-16" />
            
            <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
              <div className="lg:w-1/3">
                <h3 className="text-white text-3xl lg:text-4xl font-black tracking-tighter uppercase mb-4 leading-tight">
                  Campus <br /> Amenities:
                </h3>
              </div>
              <div className="lg:w-2/3">
                <div className="flex flex-wrap gap-3">
                  {amenities.map((amenity, idx) => (
                    <span 
                      key={idx} 
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-bold text-sm transition-all cursor-default"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
