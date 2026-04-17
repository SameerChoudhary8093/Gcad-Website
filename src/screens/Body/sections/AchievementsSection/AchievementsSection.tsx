import { ScrollReveal } from "../../../../components/ScrollReveal";

const achievements = [
  {
    number: "500+",
    label: "Students Placed",
    description: "Successfully placed in top companies"
  },
  {
    number: "50+",
    label: "Industry Partners", 
    description: "Collaborations with leading design firms"
  },
  {
    number: "15+",
    label: "Awards Won",
    description: "National and international recognition"
  },
  {
    number: "100%",
    label: "Internship Rate",
    description: "All students get internship opportunities"
  }
];

const stats = [
  { value: "95%", label: "Placement Rate" },
  { value: "8.5 LPA", label: "Average Package" },
  { value: "25 LPA", label: "Highest Package" },
  { value: "50+", label: "Companies Visited" }
];

export const AchievementsSection = (): JSX.Element => {
  return (
    <section className="bg-[#0D244B] py-16 sm:py-20 lg:py-24 relative overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={200}>
              <h2 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-7xl mb-4 tracking-tighter">
                Our <span className="text-accent-gold font-serif italic font-normal">Impact</span>
              </h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
              <p className="font-sans font-medium text-gray-400 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Celebrating excellence in design education and student success across the globe.
              </p>
            </ScrollReveal>
          </div>

          {/* Main Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} direction="up" delay={300 + index * 100}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-accent-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0px_0px_20px_#c1963f40]">
                      <span className="font-display font-black text-[#0D244B] text-2xl">
                        {achievement.number}
                      </span>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 mx-auto bg-accent-gold rounded-full animate-ping opacity-20"></div>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-accent-gold transition-colors">
                    {achievement.label}
                  </h3>
                  <p className="font-sans font-medium text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl">
            <div className="text-center mb-12">
              <ScrollReveal direction="up" delay={500}>
                <h3 className="font-display font-black text-white text-3xl sm:text-5xl mb-4 tracking-tighter">
                  Placement <span className="text-accent-gold font-serif italic font-normal">Statistics</span>
                </h3>
                <div className="w-16 h-1 bg-accent-gold mx-auto"></div>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} direction="up" delay={600 + index * 100}>
                  <div className="text-center">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                      <div className="font-display font-black text-accent-gold text-3xl sm:text-5xl mb-2 group-hover:scale-110 transition-transform">
                        {stat.value}
                      </div>
                      <div className="font-sans font-bold text-gray-400 text-xs uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <ScrollReveal direction="up" delay={1000}>
                <button className="px-12 py-4 bg-accent-gold text-[#0D244B] font-sans font-black text-sm uppercase tracking-widest rounded-full hover:bg-light-gold transition-all duration-300 shadow-[0px_10px_20px_#c1963f40]">
                  View Placement Report
                </button>
              </ScrollReveal>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
