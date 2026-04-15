import { useState } from "react";
import { Button } from "../../components/ui/button";
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
    <div className="bg-[#f7f9fc] w-full flex flex-col overflow-x-hidden">
      {/* ── Sticky Navbar ── */}
      <nav className="sticky top-0 z-50 w-full bg-[#ffffffb2] border-b border-[#c5c6ce33] shadow-[0px_1px_2px_#0000000d] backdrop-blur-[6px]">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 w-full max-w-screen-xl mx-auto">

          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="[font-family:'Inter',Helvetica] font-normal text-xl tracking-[-1px]">
              <span className="text-[#1a2b48]">GCAD </span>
              <span className="text-[#fd8b00]">X</span>
              <span className="text-[#1a2b48]"> SGVU</span>
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) =>
              link.active ? (
                <div
                  key={link.label}
                  className="pb-1 border-b-2 border-[#fd8b00]"
                >
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#fd8b00] text-sm lg:text-base tracking-[-0.40px] leading-6 whitespace-nowrap">
                    {link.label}
                  </span>
                </div>
              ) : (
                <div key={link.label} className="cursor-pointer">
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1a2b48] text-sm lg:text-base tracking-[-0.40px] leading-6 whitespace-nowrap hover:text-[#fd8b00] transition-colors">
                    {link.label}
                  </span>
                </div>
              ),
            )}
          </div>

          {/* Desktop Apply Now */}
          <div className="hidden md:flex">
            <Button className="px-5 py-2 h-auto bg-[#fd8b00] hover:bg-[#e07d00] rounded-lg shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#603100] text-sm lg:text-base tracking-[0] leading-6 whitespace-nowrap">
                Apply Now
              </span>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fd8b00]"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block w-6 h-0.5 bg-[#1a2b48] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1a2b48] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1a2b48] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#c5c6ce33] px-4 py-6 flex flex-col gap-5 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-base ${
                  link.active ? "text-[#fd8b00]" : "text-[#1a2b48]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-2 w-full py-3 h-auto bg-[#fd8b00] hover:bg-[#e07d00] rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#603100] text-base">
                Apply Now
              </span>
            </Button>
          </div>
        )}
      </nav>

      {/* ── Page Sections ── */}
      <main className="flex flex-col w-full">
        <HeroBannerSection />
        <WhyChooseGucedSection />
        <AdmissionsInfoSection />
        <AcademicProgrammesSection />
        <CentreOfArtDesignSection />
        <WorldClassExperienceSection />
        <IndustryPartnersSection />
        <MentorshipProgramSection />
        <CampusLifeExperienceSection />
        <AdmissionsCallToActionSection />
        <FooterLinksSection />
      </main>
    </div>
  );
};
