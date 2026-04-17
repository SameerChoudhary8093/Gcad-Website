import { useState } from "react";
import { Button } from "../../components/ui/button";
import { TopNavbar } from "../../components/TopNavbar";
import { AcademicProgrammesSection } from "./sections/AcademicProgrammesSection";
import { AdmissionsCallToActionSection } from "./sections/AdmissionsCallToActionSection";
import { AdmissionsInfoSection } from "./sections/AdmissionsInfoSection";
import { CampusLifeExperienceSection } from "./sections/CampusLifeExperienceSection";
import { CentreOfArtDesignSection } from "./sections/CentreOfArtDesignSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { IndustryPartnersSection } from "./sections/IndustryPartnersSection/IndustryPartnersSection";
import { MentorshipProgramSection } from "./sections/MentorshipProgramSection/MentorshipProgramSection";
import { WhyChooseGucedSection } from "./sections/WhyChooseGucedSection/WhyChooseGucedSection";
import { WorldClassExperienceSection } from "./sections/WorldClassExperienceSection";
import { FAQsSection } from "./sections/FAQsSection/FAQsSection";
import { GallerySection } from "./sections/GallerySection/GallerySection";
import { AchievementsSection } from "./sections/AchievementsSection/AchievementsSection";
import { CourseraPartnershipSection } from "./sections/CourseraPartnershipSection";
import { AdobePartnershipSection } from "./sections/AdobePartnershipSection";

export const Body = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", id: "why-choose" },
    { label: "Programs", id: "programs" },
    { label: "Infrastructure", id: "infrastructure" },
    { label: "Placements", id: "placements" },
    { label: "Admissions", id: "hero-section" },
  ];

  return (
    <div className="bg-white w-full flex flex-col overflow-x-hidden">
      {/* ── Top Navbar ── */}
      <TopNavbar />

      {/* ── Sticky Main Navbar ── */}
      <nav className="w-full h-16 md:h-20 bg-white shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a] flex items-center px-4 md:px-10 sticky top-0 z-50">
        <div className="flex items-center justify-between w-full">
          {/* Logo Link with both SGVU and GCAD logos */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.gyanvihar.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-[120px] md:w-[180px] h-[30px] md:h-[45px] flex-shrink-0 bg-transparent border-0 p-0 cursor-pointer" 
              aria-label="SGVU Official Website" 
              style={{ background: 'url("https://c.animaapp.com/mn0n10j9vDypoz/img/container-1.png") 50% 50% / contain no-repeat' }}
            ></a>
            <div className="w-[1px] h-8 bg-gray-200 hidden md:block"></div>
            <img 
              src="gcad-logo.png" 
              alt="GCAD Logo" 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center h-[21.5px] border-b-2 cursor-pointer bg-transparent border-x-0 border-t-0 transition-all border-transparent hover:border-[#c1963f] group"
              >
                <span className="[font-family:'Lato',Helvetica] font-black text-[13px] tracking-[0.32px] leading-[19.5px] whitespace-nowrap text-[#0d244b] group-hover:text-[#c1963f] transition-colors">
                  {link.label.toUpperCase()}
                </span>
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => scrollToSection("hero-section")}
              className="inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-auto px-6 py-2 bg-[#c1963f] hover:bg-[#a87d35] rounded-full shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] [font-family:'Lato',Helvetica] font-black text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap border-0 cursor-pointer"
            >
              APPLY NOW
            </button>
            <button className="inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-auto px-6 py-2 bg-[#0d244b] hover:bg-[#0a1d3d] rounded-full shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] [font-family:'Lato',Helvetica] font-black text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap border-0 cursor-pointer">
              LOGIN
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-0 cursor-pointer"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-[#0d244b] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0d244b] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0d244b] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="[font-family:'Lato',Helvetica] font-black text-sm tracking-wide text-[#0d244b] text-left bg-transparent border-0 p-0 cursor-pointer"
                onClick={() => {
                  scrollToSection(link.id);
                  setMenuOpen(false);
                }}
              >
                {link.label.toUpperCase()}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button 
                onClick={() => {
                  scrollToSection("hero-section");
                  setMenuOpen(false);
                }}
                className="w-full py-3 bg-[#c1963f] text-white rounded-full font-black text-xs cursor-pointer"
              >
                APPLY NOW
              </button>
              <button className="w-full py-3 bg-[#0d244b] text-white rounded-full font-black text-xs cursor-pointer">LOGIN</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── Page Sections ── */}
      <main className="flex flex-col w-full">
        {/* Hero Section */}
        <HeroBannerSection />
        
        {/* Section 1: Why Choose - Blue background */}
        <div className="bg-primary-blue text-white">
          <WhyChooseGucedSection />
        </div>
        
        {/* Section 2: Academic Programmes - White background */}
        <div className="bg-white">
          <AcademicProgrammesSection />
        </div>

        {/* Section 3: Coursera Partnership - Blue background */}
        <div className="bg-primary-blue text-white">
          <CourseraPartnershipSection />
        </div>

        {/* Section 4: Adobe & Macbook - Dark background */}
        <div className="bg-[#1a1a1a]">
          <AdobePartnershipSection />
        </div>

        {/* Section 5: Industry Partners - White background */}
        <div className="bg-white">
          <IndustryPartnersSection />
        </div>
        
        {/* Section 5: World Class Experience - Blue background */}
        <div className="bg-primary-blue text-white">
          <WorldClassExperienceSection />
        </div>

        {/* Section 6: Mentorship Program - White background */}
        <div className="bg-white">
          <MentorshipProgramSection />
        </div>
        
        {/* Section 7: Campus Life Experience - Blue background */}
        <div className="bg-primary-blue text-white">
          <CampusLifeExperienceSection />
        </div>

        {/* Section 8: Gallery Section - White background */}
        <div className="bg-white">
          <GallerySection />
        </div>
        
        {/* Section 9: Achievements Section - Blue background */}
        <div className="bg-primary-blue text-white">
          <AchievementsSection />
        </div>
        
        {/* Section 10: FAQs Section - White background */}
        <div className="bg-white">
          <FAQsSection />
        </div>

        {/* Section 11: Admissions Call to Action - Blue background */}
        <div className="bg-primary-blue text-white">
          <AdmissionsCallToActionSection />
        </div>
        
        {/* Footer Links Section - Navy dark background */}
        <div className="bg-primary-blue border-t border-white/10">
          <FooterLinksSection />
        </div>
      </main>
    </div>
  );
};
