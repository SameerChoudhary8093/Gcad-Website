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

const navLinks = [
  { label: "About", active: false },
  { label: "Programs", active: false },
  { label: "Infrastructure", active: false },
  { label: "Placements", active: false },
  { label: "Admissions", active: true },
];

export const Body = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full flex flex-col overflow-x-hidden">
      {/* ── Top Navbar ── */}
      <TopNavbar />
      
      {/* ── Sticky Main Navbar ── */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 w-full max-w-screen-xl mx-auto">

          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <img src="/gcad logo.png" alt="GCAD Logo" className="h-10 sm:h-12 w-auto object-contain" />
            <div className="w-[1px] h-8 bg-gray-300 hidden sm:block"></div>
            <img src="/SGVU.png" alt="SGVU Logo" className="h-8 sm:h-10 w-auto object-contain hidden sm:block" />
          </div>

          {/* Desktop nav links - Centered */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            {navLinks.map((link) =>
              link.active ? (
                <div
                  key={link.label}
                  className="pb-1 border-b-2 border-accent-gold"
                >
                  <span className="font-sans font-bold text-accent-gold text-sm lg:text-base tracking-[-0.40px] leading-6 whitespace-nowrap">
                    {link.label}
                  </span>
                </div>
              ) : (
                <div key={link.label} className="cursor-pointer">
                  <span className="font-sans font-bold text-primary-blue text-sm lg:text-base tracking-[-0.40px] leading-6 whitespace-nowrap hover:text-accent-gold transition-colors">
                    {link.label}
                  </span>
                </div>
              ),
            )}
          </div>

          {/* Desktop Apply Now */}
          <div className="hidden md:flex">
            <Button className="px-5 py-2 h-auto bg-accent-gold hover:bg-light-gold text-white rounded-lg shadow-md">
              <span className="font-sans font-bold text-white text-sm lg:text-base tracking-[0] leading-6 whitespace-nowrap">
                Apply Now
              </span>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block w-6 h-0.5 bg-primary-blue transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary-blue transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary-blue transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-6 flex flex-col gap-5 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`font-sans font-bold text-base ${
                  link.active ? "text-accent-gold" : "text-primary-blue"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-2 w-full py-3 h-auto bg-accent-gold hover:bg-light-gold text-white rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-sans font-bold text-white text-base">
                Apply Now
              </span>
            </Button>
          </div>
        )}
      </nav>

      {/* ── Page Sections ── */}
      <main className="flex flex-col w-full">
        {/* Hero Section - White background */}
        <div className="bg-white">
          <HeroBannerSection />
        </div>
        
        {/* Why Choose Section - Blue background */}
        <div className="bg-primary-blue">
          <WhyChooseGucedSection />
        </div>
        
        {/* Admissions Info Section - White background */}
        <div className="bg-white">
          <AdmissionsInfoSection />
        </div>
        
        {/* Academic Programmes Section - Blue background */}
        <div className="bg-primary-blue">
          <AcademicProgrammesSection />
        </div>
        
        {/* Centre of Art Design Section - White background */}
        <div className="bg-white">
          <CentreOfArtDesignSection />
        </div>
        
        {/* World Class Experience Section - Blue background */}
        <div className="bg-primary-blue">
          <WorldClassExperienceSection />
        </div>
        
        {/* Industry Partners Section - White background */}
        <div className="bg-white">
          <IndustryPartnersSection />
        </div>
        
        {/* Mentorship Program Section - Blue background */}
        <div className="bg-primary-blue">
          <MentorshipProgramSection />
        </div>
        
        {/* Campus Life Experience Section - White background */}
        <div className="bg-white">
          <CampusLifeExperienceSection />
        </div>
        
        {/* Admissions Call to Action Section - Blue background */}
        <div className="bg-primary-blue">
          <AdmissionsCallToActionSection />
        </div>
        
        {/* Gallery Section - Blue background */}
        <div className="bg-primary-blue">
          <GallerySection />
        </div>
        
        {/* FAQs Section - White background */}
        <div className="bg-white">
          <FAQsSection />
        </div>
        
        {/* Achievements Section - White background */}
        <div className="bg-white">
          <AchievementsSection />
        </div>
        
        {/* Footer Links Section - Navy dark background */}
        <div className="bg-navy-dark">
          <FooterLinksSection />
        </div>
      </main>
    </div>
  );
};
