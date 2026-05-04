import { ScrollReveal } from "../../../../components/ScrollReveal";

const benefits = [
  "Full access to thousands of courses (tech, business, data science, etc.)",
  "Skills-based short courses integrated into regular curriculum",
  "Courses from top tech companies, focusing on practical and in-demand skills",
  "Blended learning model to boost academic and job readiness",
];

export const CourseraPartnershipSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#fdfaf5] py-20 sm:py-24 overflow-hidden text-[#0D244B] border-y border-gray-100">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full -mr-64 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D244B]/5 rounded-full -ml-32 -mb-32 pointer-events-none" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <div className="inline-block bg-accent-gold px-6 py-2 rounded-lg mb-8 shadow-lg shadow-accent-gold/20">
                <span className="font-display font-black text-white text-2xl uppercase tracking-widest">Join</span>
              </div>
              
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-10 text-[#0D244B]">
                Suresh Gyan Vihar University <br className="hidden sm:block" />
                <span className="text-accent-gold">&</span> Get Free Access to
                <img 
                  src="coursera-logo.png" 
                  alt="Coursera" 
                  className="inline-block h-10 sm:h-14 ml-4 align-middle"
                />
              </h2>
              
              <div className="mb-8">
                <span className="bg-[#0D244B]/5 border border-[#0D244B]/10 px-4 py-2 font-black text-accent-gold tracking-[3px] uppercase text-xs rounded-full">
                  Key Benefits For SGVU Students
                </span>
              </div>
              
              <div className="flex flex-col gap-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-7 h-7 bg-[#0D244B] rounded-full flex items-center justify-center border-2 border-accent-gold/30 mt-1 shadow-lg transition-transform group-hover:scale-110">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c1963f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="font-sans font-bold text-[#0D244B]/80 text-lg sm:text-xl leading-relaxed group-hover:text-[#0D244B] transition-colors">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right Content - Stats & Logos */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-[#0D244B] p-10 rounded-[40px] shadow-[0px_30px_60px_rgba(13,36,75,0.2)] border-b-8 border-accent-gold text-center w-full max-w-[340px] mb-10 group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12" />
                <div className="font-display font-black text-white text-7xl mb-2 tracking-tighter">3,800+</div>
                <div className="text-accent-gold text-xs font-black uppercase tracking-[4px]">Coursera courses</div>
              </div>
              
              <div className="w-full max-w-[420px] bg-white rounded-[40px] p-10 shadow-[0px_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="text-center mb-10">
                   <span className="font-sans font-black text-[#0D244B] text-xs uppercase tracking-[4px] border-b-2 border-accent-gold pb-2">
                     OFFERINGS FROM
                   </span>
                </div>
                
                <div className="flex flex-col gap-12 items-center">
                  <div className="flex items-center justify-center w-full gap-12 transition-all duration-500">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                      alt="Google" 
                      className="h-8 object-contain"
                    />
                    <div className="w-px h-6 bg-gray-200" />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                      alt="IBM" 
                      className="h-10 object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center w-full transition-all duration-500">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                      alt="AWS" 
                      className="h-8 object-contain"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
      
      {/* Decorative Accents */}
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 border-[40px] border-accent-gold/10 rounded-full pointer-events-none" />
    </section>
  );
};
