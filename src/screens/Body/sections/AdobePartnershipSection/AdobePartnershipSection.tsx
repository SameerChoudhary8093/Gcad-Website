import { ScrollReveal } from "../../../../components/ScrollReveal";

const adobeApps = [
  { name: "Pr", color: "#00005b", fullName: "Premiere Pro" },
  { name: "Id", color: "#49021f", fullName: "InDesign" },
  { name: "Xd", color: "#470137", fullName: "Adobe XD" },
  { name: "Ai", color: "#330000", fullName: "Illustrator" },
  { name: "Lr", color: "#001e36", fullName: "Lightroom" },
  { name: "Ps", color: "#001e36", fullName: "Photoshop" },
  { name: "Ae", color: "#00005b", fullName: "After Effects" },
];

export const AdobePartnershipSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#1a1a1a] py-16 sm:py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">
            <ScrollReveal direction="left">
              <h2 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Get free Macbook
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl font-medium mt-2">
                With pre-installed apple software and adobe creative cloud.
              </p>
              
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.966 22.624l-1.69-4.281h-2.119l-1.689 4.281h-2.433l4.318-10.925h2.433l4.318 10.925h-2.433zM15.031 0h7.222v22.624h-2.433v-19.165h-4.789v-3.459zM8.969 0h-7.222v22.624h2.433v-19.165h4.789v-3.459z" />
                  </svg>
                  <span className="font-display font-black text-[#FF0000] text-3xl sm:text-4xl tracking-tighter">Adobe</span>
                </div>
                
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
                  {adobeApps.map((app) => (
                    <div 
                      key={app.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer border border-white/10 hover:border-white/30"
                      style={{ backgroundColor: app.color }}
                      title={app.fullName}
                    >
                      <span className="font-sans font-black text-white text-lg sm:text-2xl tracking-tighter">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Macbook Image */}
          <div className="relative flex justify-center lg:justify-end">
            <ScrollReveal direction="right" delay={300}>
              <div className="relative w-full max-w-[500px] lg:max-w-[650px]">
                <img 
                  src="macbook-pro.png" 
                  alt="Macbook Pro" 
                  className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105"
                />
                {/* Decorative Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[80px] -z-10" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900 rounded-full blur-[120px] -ml-48 -mb-48" />
      </div>
    </section>
  );
};
