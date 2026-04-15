const navigationLinks = [
  { label: "Programs" },
  { label: "Admissions" },
  { label: "About" },
  { label: "Infrastructure" },
  { label: "Placements" },
];

export const FooterLinksSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-[#031632] border-t border-[#ffffff0d]">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-screen-xl mx-auto gap-10 sm:gap-12">

        {/* Brand + description + social */}
        <div className="flex flex-col items-start gap-7 w-full">
          <span className="[font-family:'Inter',Helvetica] font-normal text-2xl sm:text-3xl tracking-[-1.50px] leading-9">
            <span className="text-white">GCAD </span>
            <span className="text-[#fd8b00]">X</span>
            <span className="text-white"> SGVU</span>
          </span>

          <p className="[font-family:'Inter',Helvetica] font-medium text-slate-400 text-sm leading-[23px]">
            Suresh Gyan Vihar University&#39;s flagship Centre of Art &amp; Design.
            Redefining creative education for the 21st century.
          </p>

          <img
            className="w-full max-w-[200px]"
            alt="Social media links"
            src="https://c.animaapp.com/mnyx7rno5LIHte/img/container.svg"
          />
        </div>

        {/* Navigation links */}
        <div className="flex flex-col items-start gap-6 w-full">
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[1.20px] leading-4">
            NAVIGATION
          </span>
          <nav className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-5 w-full">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="[font-family:'Inter',Helvetica] font-normal text-slate-400 text-sm leading-5 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

      </div>

      {/* Bottom divider + copyright */}
      <div className="mt-12 pt-8 w-full max-w-screen-xl mx-auto border-t border-[#ffffff0d]">
        <p className="[font-family:'Inter',Helvetica] font-normal text-slate-600 text-xs leading-5 text-center sm:text-left">
          © 2026 GCAD X SGVU — Suresh Gyan Vihar University. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
