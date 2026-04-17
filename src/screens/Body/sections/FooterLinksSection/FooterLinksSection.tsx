export const FooterLinksSection = (): JSX.Element => {
  const scrollToHero = () => {
    const heroElement = document.getElementById("hero-section");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#0D244B] border-t border-white/10">
      <div className="w-full px-4 md:px-8 pt-[83px] pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[46px] max-w-[1231px] mx-auto">

          {/* Brand & Description */}
          <div className="flex flex-col gap-0">
            <div className="w-[245px] h-[59px] mb-[22px]">
              <div
                className="w-full h-full [background:url(https://c.animaapp.com/mn0n10j9vDypoz/img/container-1.png)_50%_50%_/_contain_no-repeat] brightness-0 invert"
                aria-label="SGVU Logo"
              ></div>
            </div>
            <p className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[21.9px] mb-[22px]">
              Suresh Gyan Vihar University is a self-financed state university located in Jaipur, Rajasthan, India. In 2017, the university became the first private university in Rajasthan to be awarded an A+ grade by NAAC.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a href="https://learning.linkedin.com/for-higher-education" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <img className="w-9 h-9" alt="Linkedin" src="https://c.animaapp.com/mn0n10j9vDypoz/img/linkedin-.svg" />
              </a>
              <a href="https://www.instagram.com/sureshgyanvihar.university/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <img className="w-9 h-9" alt="Insta" src="https://c.animaapp.com/mn0n10j9vDypoz/img/insta.svg" />
              </a>
              <a href="https://x.com/SureshGyanVihar?mx=2" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <img className="w-9 h-9" alt="X" src="https://c.animaapp.com/mn0n10j9vDypoz/img/x.svg" />
              </a>
              <a href="https://www.facebook.com/sureshgyanviharuniversityjaipur" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <img className="w-9 h-9" alt="Facebook" src="https://c.animaapp.com/mn0n10j9vDypoz/img/dribbble.svg" />
              </a>
              <a href="https://www.youtube.com/channel/UCXCA8AXoD-7h_0-9Num54zg" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <img className="w-[27px] h-[19px]" alt="Youtube" src="https://c.animaapp.com/mn0n10j9vDypoz/img/frame.svg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <div className="pb-2 mb-[30px] border-b border-[#ffffff1a]">
              <h3 className="[font-family:'Lato',Helvetica] font-black text-white text-[17.3px] tracking-[0] leading-[26.9px] whitespace-nowrap">
                Quick Links
              </h3>
            </div>
            <div className="flex flex-col gap-[15px]">
              <a href="https://sgvu.edu.in/admission-procedure" target="_blank" rel="noopener noreferrer" className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white transition-colors bg-transparent border-0 text-left cursor-pointer p-0 no-underline block w-fit">Admission</a>
              <a href="https://www.gyanvihar.org/fees-structure" target="_blank" rel="noopener noreferrer" className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white transition-colors bg-transparent border-0 text-left cursor-pointer p-0 no-underline block w-fit">Program Fee</a>
              <a href="https://www.gyanvihar.org/wp-content/uploads/attach/sgvu-scholarships.pdf" target="_blank" rel="noopener noreferrer" className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white transition-colors bg-transparent border-0 text-left cursor-pointer p-0 no-underline block w-fit">Scholarship</a>
              <a href="https://www.gyanvihar.org/placement" target="_blank" rel="noopener noreferrer" className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white transition-colors bg-transparent border-0 text-left cursor-pointer p-0 no-underline block w-fit">Placements</a>
              <a href="https://www.gyanvihar.org/uploads/Anti_Ragging_Committee_Squad_and_Monitoring_Cell_2024_7b5e021e97.pdf" target="_blank" rel="noopener noreferrer" className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white transition-colors bg-transparent border-0 text-left cursor-pointer p-0 no-underline block w-fit">Anti-Ragging Policy</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <div className="pb-2 mb-[30px] border-b border-[#ffffff1a]">
              <h3 className="[font-family:'Lato',Helvetica] font-black text-white text-[17.3px] tracking-[0] leading-[26.9px] whitespace-nowrap">
                Contact Info
              </h3>
            </div>
            <div className="flex flex-col gap-[15px]">
              <a href="https://maps.google.com/?q=Suresh+Gyan+Vihar+University+Jaipur" target="_blank" rel="noopener noreferrer" className="flex items-start gap-[11px] hover:opacity-80 transition-opacity">
                <img className="w-4 h-[38px] shrink-0" alt="Contact icon" src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-15.svg" />
                <span className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px]">
                  Mahal Rd, Jagatpura, Jaipur, Rajasthan<br />302017
                </span>
              </a>
              <a href="tel:+8306694440" className="flex items-start gap-[11px] hover:opacity-80 transition-opacity">
                <img className="w-[18px] h-[19px] shrink-0" alt="Contact icon" src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-7.svg" />
                <span className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px]">
                  Call: 83066 94440
                </span>
              </a>
              <a href="mailto:admissions@gyanvihar.org" className="flex items-start gap-[11px] hover:opacity-80 transition-opacity">
                <img className="w-5 h-[19px] shrink-0" alt="Contact icon" src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-12.svg" />
                <span className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px]">
                  admissions@gyanvihar.org
                </span>
              </a>
            </div>
          </div>

          {/* Admissions Help */}
          <div className="flex flex-col">
            <div className="pb-2 mb-[30px] border-b border-[#ffffff1a]">
              <h3 className="[font-family:'Lato',Helvetica] font-black text-white text-[17.3px] tracking-[0] leading-[26.9px] whitespace-nowrap">
                Admissions Help
              </h3>
            </div>
            <a href="tel:+8306694440" className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px] whitespace-nowrap mb-[27px] hover:text-white transition-colors block">
              Call: 83066 94440
            </a>
            <button
              onClick={scrollToHero}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-auto w-full bg-[#c1963f] hover:bg-[#a87d33] rounded-[7.69px] py-[11px] px-4 [font-family:'Lato',Helvetica] font-bold text-white text-[15.4px] leading-[23.1px] tracking-[0] border-0 cursor-pointer shadow-lg hover:shadow-accent-gold/20"
            >
              Apply Now
            </button>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full border-t border-white/5 py-6">
        <p className="text-center text-slate-500 text-xs font-sans">
          © 2026 Suresh Gyan Vihar University. All Rights Reserved. Accredited with NAAC 'A+' Grade.
        </p>
      </div>
    </footer>
  );
};
