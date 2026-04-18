import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What programs does GCAD offer?",
    answer: "GCAD offers Bachelor of Design (Hons.), Master of Design, Diploma programs, and Certificate courses in various design specializations including Fashion Design, Communication Design, Interior Design, and Graphic Design."
  },
  {
    question: "What is the admission process?",
    answer: "The admission process includes filling out the application form, submitting required documents, appearing for a design aptitude test, and attending a personal interview. Final selection is based on portfolio review and overall performance."
  },
  {
    question: "What are the eligibility criteria?",
    answer: "For B.Des: 10+2 with minimum 50% marks. For M.Des: Bachelor's degree in any discipline with minimum 50% marks. For Diploma: 10+2 pass. Specific requirements may vary for different programs."
  },
  {
    question: "Does GCAD provide placement assistance?",
    answer: "Yes, GCAD has a dedicated placement cell that provides 100% placement assistance. We have tie-ups with leading design companies and brands. Our graduates work with top national and international companies."
  },
  {
    question: "What facilities are available on campus?",
    answer: "GCAD offers state-of-the-art design studios, computer labs with latest software, well-equipped workshops, library with extensive design resources, exhibition spaces, and modern classrooms with audio-visual facilities."
  },
  {
    question: "Are hostel facilities available?",
    answer: "Yes, GCAD provides separate hostel facilities for boys and girls with all necessary amenities including Wi-Fi, mess, recreation rooms, and 24/7 security."
  }
];

export const FAQsSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left side: FAQs */}
            <div className="lg:col-span-7">
              {/* Header */}
              <div className="text-left mb-12">
                <h2 className="font-display font-black text-primary-blue text-4xl sm:text-5xl lg:text-7xl mb-4 tracking-tighter">
                  Curiosity <span className="text-accent-gold font-serif italic font-normal">& Answers</span>
                </h2>
                <div className="w-24 h-1 bg-accent-gold mb-8"></div>
                <p className="font-sans font-medium text-gray-500 text-sm sm:text-lg max-w-2xl leading-relaxed">
                  Everything you need to know about starting your creative journey with GCAD.
                </p>
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`group border-b border-gray-100 transition-all duration-500 ${openIndex === index ? 'pb-4' : 'pb-0'}`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50/50 transition-all duration-300 rounded-xl px-4"
                    >
                      <span className={`font-sans font-bold text-base sm:text-lg transition-colors duration-300 ${openIndex === index ? 'text-accent-gold' : 'text-primary-blue'}`}>
                        <span className="text-accent-gold/40 mr-3 font-serif italic">{String(index + 1).padStart(2, '0')}</span>
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-accent-gold/20 flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-accent-gold' : ''}`}>
                        <ChevronDown className={`w-4 h-4 transition-colors ${openIndex === index ? 'text-white' : 'text-accent-gold'}`} />
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 px-4 ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <p className="font-sans font-medium text-gray-500 text-sm sm:text-base leading-relaxed border-l-2 border-accent-gold pl-4 py-1">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: SGVU Advantage */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 p-8 sm:p-10 bg-[#0D244B] rounded-3xl shadow-2xl overflow-hidden border border-white/10 relative group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-accent-gold/20 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 blur-xl" />
                
                <div className="relative z-10">
                  <p className="font-sans font-bold text-accent-gold text-xs sm:text-sm tracking-[4px] leading-6 uppercase mb-4">
                    The Sgvu Advantage
                  </p>
                  <h3 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-tight mb-8">
                    Apple-Authorized <span className="text-accent-gold font-serif italic font-normal">Training</span>
                  </h3>
                  
                  <div className="flex flex-col gap-8">
                    <p className="font-sans font-medium text-gray-400 text-base sm:text-lg leading-relaxed">
                      Unleash your creative side with latest configuration <span className="text-white">Apple workstations</span> with <span className="text-white">Adobe Suite</span> for all your design needs.
                    </p>
                    
                    <div className="flex items-center gap-6">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-10 brightness-0 invert opacity-50" />
                      <div className="w-px h-8 bg-white/10" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Experience_Cloud_logo.svg" alt="Adobe" className="h-10 brightness-0 invert opacity-50" />
                    </div>

                    <div className="mt-4 pt-8 border-t border-white/5">
                      <button className="w-full py-4 bg-accent-gold text-[#0D244B] font-sans font-black text-sm tracking-widest rounded-xl hover:bg-white transition-all duration-300 uppercase shadow-lg shadow-accent-gold/10">
                        Explore Infrastructure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
