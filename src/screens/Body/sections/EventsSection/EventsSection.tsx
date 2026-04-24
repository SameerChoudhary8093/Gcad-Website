import { ScrollReveal } from "../../../../components/ScrollReveal";

const eventList = [
  "Youth Premier League",
  "Tattva - Essence of Design",
  "Pinkest at Rajasthan International Center",
  "GCAD attended NayaPun",
  "Students attended the Shipkari Textile exhibition",
  "Students of GCAD participated as volunteers at the Nine Dot Squares exhibition",
  "Tarkashi workshop and industry visit by GCAD students at Mr. Ram Dayal sharma",
  "GCAD hosted a master class on Design Thinking",
  "GCAD attended the session I-can methodology for creative problem solving by Kiran Bir Sethi at IICD campus",
];

const collageImages = [
  "DSC00882.jpg.jpeg",
  "DSC00919.jpg.jpeg",
  "DSC00933.jpg.jpeg",
  "DSC00937.jpg.jpeg",
  "DSC00951.jpg.jpeg",
  "DSC00967.jpg.jpeg",
  "DSC00988.jpg.jpeg",
  "DSC01034.jpg.jpeg",
];

export const EventsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 sm:py-32 bg-[#fff5f7] overflow-hidden">
      {/* Background Image Collage */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
        {collageImages.map((img, i) => (
          <div key={i} className="relative h-64 overflow-hidden">
            <img src={img} alt="Event" className="w-full h-full object-cover" />
          </div>
        ))}
        {collageImages.map((img, i) => (
          <div key={`dup-${i}`} className="relative h-64 overflow-hidden">
            <img src={img} alt="Event" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Decorative Image Box (Optional based on image 3) */}
          <div className="hidden lg:block w-1/3">
            <ScrollReveal direction="left">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img src="DSC00951.jpg.jpeg" alt="Event Highlights" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>

          {/* Center/Right: Event List Card */}
          <div className="w-full lg:w-2/3">
            <ScrollReveal direction="up">
              <div className="bg-white p-8 sm:p-16 rounded-[40px] shadow-[0px_30px_60px_rgba(0,0,0,0.1)] border border-white/20 relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl" />

                <h2 className="font-display font-black text-[#0D244B] text-4xl sm:text-6xl mb-12 tracking-tighter relative inline-block">
                  Events & Activities
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-gold/30" />
                </h2>

                <ul className="space-y-6">
                  {eventList.map((event, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="mt-2.5 w-2 h-2 rounded-full bg-accent-gold group-hover:scale-150 transition-transform duration-300" />
                      <p className="font-sans font-semibold text-gray-700 text-lg sm:text-xl leading-relaxed group-hover:text-[#0D244B] transition-colors">
                        {event}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Accreditation Overlay from Image 3 */}
                <div className="mt-16 pt-12 border-t border-gray-100 flex items-center gap-8 opacity-80">
                  <div className="flex items-center gap-6">
                    <img src="/nirf.png" alt="NIRF" className="h-12 w-auto object-contain" />
                    <div className="w-px h-10 bg-gray-200" />
                    <img src="/NACC.png" alt="NAAC" className="h-12 w-auto object-contain" />
                    <div className="w-px h-10 bg-gray-200" />
                    <img src="/gcad-logo.png" alt="GCAD" className="h-12 w-auto object-contain" />
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <img src="/SGVU.png" alt="SGVU" className="h-12 w-auto object-contain" />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
