import { ScrollReveal } from "../../../../components/ScrollReveal";

const benefits = [
  "Full access to thousands of courses (tech, business, data science, etc.)",
  "Skills-based short courses integrated into regular curriculum",
  "Courses from top tech companies, focusing on practical and in-demand skills",
  "Blended learning model to boost academic and job readiness",
];

export const CourseraPartnershipSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0D244B] py-16 sm:py-20 overflow-hidden text-white">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-64 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full -ml-32 -mb-32 pointer-events-none" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="left">
              <div className="inline-block bg-accent-gold px-4 py-1 rounded-sm mb-6">
                <span className="font-display font-black text-white text-xl">Join</span>
              </div>
              
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl leading-tight mb-8">
                <span className="text-[#0D244B] bg-white px-3 py-1 inline-block rounded-sm transform -rotate-1">Suresh Gyan Vihar University &</span>
                <br />
                <span className="text-[#0D244B] bg-accent-gold px-3 py-1 inline-block mt-2 rounded-sm transform rotate-1">Get Free Access to</span>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-logo_small.svg" 
                  alt="Coursera" 
                  className="inline-block h-8 sm:h-12 ml-4 align-middle"
                />
              </h2>
              
              <div className="mb-6">
                <span className="bg-white/20 border border-white/30 px-3 py-1 font-bold text-accent-gold tracking-wide uppercase text-sm rounded">
                  Key Benefits For SGVU Students
                </span>
              </div>
              
              <div className="flex flex-col gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent-gold rounded-full flex items-center justify-center border border-white/20 mt-1 shadow-lg transition-transform group-hover:scale-110">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="font-sans font-bold text-white text-base sm:text-lg leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right Content - Stats & Logos */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-[0px_20px_40px_rgba(0,0,0,0.3)] border-b-4 border-accent-gold text-center w-full max-w-[320px] mb-8 group hover:-translate-y-2 transition-all duration-500">
                <div className="font-display font-black text-[#0D244B] text-6xl mb-2">3,800+</div>
                <div className="text-gray-500 text-sm font-black uppercase tracking-widest">Coursera courses</div>
              </div>
              
              <div className="w-full max-w-[380px] bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                   <span className="font-display font-black text-[#0D244B] text-base uppercase tracking-widest border-b-2 border-accent-gold pb-1">
                     OFFERINGS FROM
                   </span>
                </div>
                
                <div className="grid grid-cols-1 gap-12 items-center justify-items-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                    alt="Google" 
                    className="h-10 object-contain"
                  />
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                    alt="IBM" 
                    className="h-12 object-contain"
                  />
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                    alt="AWS" 
                    className="h-10 object-contain"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Circle */}
      <div className="absolute bottom-[-100px] right-1/4 w-[200px] h-[200px] border-[30px] border-blue-600 rounded-full opacity-10 pointer-events-none" />
    </section>
  );
};
