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
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-primary-blue text-4xl sm:text-5xl lg:text-7xl mb-4 tracking-tighter">
              Curiosity <span className="text-accent-gold font-serif italic font-normal">& Answers</span>
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-8"></div>
            <p className="font-sans font-medium text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about starting your creative journey with GCAD.
            </p>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`group border-b border-gray-100 transition-all duration-500 ${openIndex === index ? 'pb-6' : 'pb-0'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 text-left flex items-center justify-between bg-white hover:bg-gray-50/50 transition-all duration-300 rounded-xl px-6"
                >
                  <span className={`font-sans font-bold text-lg sm:text-xl transition-colors duration-300 ${openIndex === index ? 'text-accent-gold' : 'text-primary-blue'}`}>
                    <span className="text-accent-gold/40 mr-4 font-serif italic">{String(index + 1).padStart(2, '0')}</span>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-accent-gold/20 flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-accent-gold' : ''}`}>
                    <ChevronDown className={`w-4 h-4 transition-colors ${openIndex === index ? 'text-white' : 'text-accent-gold'}`} />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 px-6 ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="font-sans font-medium text-gray-500 text-sm sm:text-lg leading-relaxed border-l-2 border-accent-gold pl-6 py-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="font-sans text-gray-600 text-lg mb-6">
              Still have questions? We're here to help!
            </p>
            <button className="px-8 py-3 bg-accent-gold text-primary-blue font-sans font-bold rounded-lg hover:bg-light-gold transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
