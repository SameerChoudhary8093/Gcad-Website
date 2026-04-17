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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-primary-blue text-4xl sm:text-5xl lg:text-6xl mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1.5 bg-accent-gold rounded-full mx-auto"></div>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-sans font-semibold text-primary-blue text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-accent-gold" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-accent-gold" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="font-sans text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
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
