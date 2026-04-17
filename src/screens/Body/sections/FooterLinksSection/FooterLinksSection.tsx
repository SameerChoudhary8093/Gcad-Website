const footerSections = [
  {
    title: "QUICK LINKS",
    links: [
      "About GCAD",
      "Programs Offered", 
      "Admissions",
      "Infrastructure",
      "Placements",
      "Contact Us"
    ]
  },
  {
    title: "PROGRAMS",
    links: [
      "B.Des (Hons.)",
      "M.Des",
      "Diploma Programs",
      "Certificate Courses"
    ]
  },
  {
    title: "CONTACT INFO",
    links: [
      "+83066 9444",
      "admissions@gyanvihar.org",
      "Jaipur, Rajasthan"
    ]
  }
];

export const FooterLinksSection = (): JSX.Element => {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src="/gcad logo.png" alt="GCAD Logo" className="h-12 w-auto" />
                <div className="w-[1px] h-8 bg-gray-600"></div>
                <img src="/SGVU.png" alt="SGVU Logo" className="h-10 w-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-6 mb-6">
                Suresh Gyan Vihar University's flagship Centre of Art & Design. 
                Redefining creative education for the 21st century.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-light-gold transition-colors">
                  <span className="text-primary-blue font-bold text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-light-gold transition-colors">
                  <span className="text-primary-blue font-bold text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-light-gold transition-colors">
                  <span className="text-primary-blue font-bold text-sm">in</span>
                </div>
                <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-light-gold transition-colors">
                  <span className="text-primary-blue font-bold text-sm">ig</span>
                </div>
              </div>
            </div>

            {/* Footer Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h3 className="font-display font-bold text-white text-lg mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-gray-400 text-sm hover:text-accent-gold transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 GCAD X SGVU — Suresh Gyan Vihar University. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-accent-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-accent-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 text-sm hover:text-accent-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
