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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={200}>
              <h2 className="font-display font-extrabold text-primary-blue text-4xl sm:text-5xl lg:text-6xl mb-4">
                Our Achievements
              </h2>
              <div className="w-20 h-1.5 bg-accent-gold rounded-full mx-auto mb-6"></div>
              <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto">
                Celebrating excellence in design education and student success
              </p>
            </ScrollReveal>
          </div>

          {/* Main Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} direction="up" delay={300 + index * 100}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-accent-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-display font-bold text-primary-blue text-2xl">
                        {achievement.number}
                      </span>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 mx-auto bg-accent-gold rounded-full animate-ping opacity-20"></div>
                  </div>
                  <h3 className="font-display font-bold text-primary-blue text-xl mb-2">
                    {achievement.label}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-primary-blue rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <ScrollReveal direction="up" delay={500}>
                <h3 className="font-display font-extrabold text-white text-3xl sm:text-4xl mb-4">
                  Placement Statistics
                </h3>
                <div className="w-16 h-1 bg-accent-gold rounded-full mx-auto"></div>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} direction="up" delay={600 + index * 100}>
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                      <div className="font-display font-bold text-accent-gold text-3xl sm:text-4xl mb-2">
                        {stat.value}
                      </div>
                      <div className="font-sans text-white text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8">
              <ScrollReveal direction="up" delay={1000}>
                <button className="px-8 py-3 bg-accent-gold text-primary-blue font-sans font-bold rounded-lg hover:bg-light-gold transition-colors duration-300">
                  View Placement Report
                </button>
              </ScrollReveal>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <ScrollReveal direction="up" delay={1100}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="font-display font-bold text-primary-blue text-2xl mb-4">
                  Industry Recognition
                </h4>
                <p className="font-sans text-gray-600 max-w-3xl mx-auto mb-6">
                  GCAD has been recognized as one of the leading design institutions in India, 
                  with our students winning prestigious awards and working with renowned brands 
                  across the globe. Our commitment to excellence in design education has earned 
                  us numerous accolades from industry leaders and educational bodies.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-accent-gold/20 text-accent-gold rounded-full text-sm font-sans font-medium">
                    🏆 Best Design College 2024
                  </span>
                  <span className="px-4 py-2 bg-accent-gold/20 text-accent-gold rounded-full text-sm font-sans font-medium">
                    🎨 Industry Excellence Award
                  </span>
                  <span className="px-4 py-2 bg-accent-gold/20 text-accent-gold rounded-full text-sm font-sans font-medium">
                    🌟 Innovation in Education
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
