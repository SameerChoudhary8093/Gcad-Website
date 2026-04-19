import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { ScrollReveal } from "../../../../components/ScrollReveal";

const formFields = [
  { id: "fullName",  label: "FULL NAME",       placeholder: "Enter your name",   type: "text"  },
  { id: "email",     label: "EMAIL ADDRESS",   placeholder: "name@example.com",  type: "email" },
  { id: "phone",     label: "PHONE NUMBER",    placeholder: "+91 00000 00000",   type: "tel"   },
];

const courseOptions = [
  "Bachelor of Design",
  "Master of Design",
  "Diploma in Graphic Design",
  "Diploma in Interior Design",
  "Certificate in UI/UX Design",
];

export const HeroBannerSection = (): JSX.Element => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  return (
    <section id="hero-section" className="relative w-full flex flex-col items-center justify-center min-h-[700px] lg:min-h-[850px] py-16 overflow-hidden">
      {/* Background with image and geometric shapes overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="DSC00919.jpg.jpeg"
          alt="GCAD Campus"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0d244b]/60 backdrop-blur-[2px]" />
      </div>

      <div className="absolute inset-0 w-full h-full z-1 pointer-events-none overflow-hidden">
        {/* Large Decorative Shapes from Image 2 */}
        <div className="absolute top-10 right-[10%] w-32 h-32 bg-[#fd8b00] rounded-full opacity-30 animate-pulse" />
        <div className="absolute top-40 left-[5%] w-48 h-24 bg-white rounded-full opacity-10 rotate-45" />
        <div className="absolute bottom-20 right-[5%] w-64 h-32 bg-[#c1963f] rounded-t-full opacity-30" />
      </div>

      <div className="absolute inset-0 w-full h-full opacity-20 z-2 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-8 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left: Hero text */}
          <div className="flex flex-col items-start gap-6 w-full lg:col-span-7">
            <ScrollReveal direction="up" delay={200}>
              <p className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white font-sans tracking-tight">We Give </span>
                <span className="text-accent-gold font-serif italic">Wings </span>
                <span className="text-white font-sans tracking-tight">to </span>
                <br />
                <span className="text-white font-sans tracking-tight">your </span>
                <span className="text-accent-gold font-serif italic">Dreams!</span>
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={400}>
              <h1 className="font-display font-black text-white text-4xl sm:text-6xl lg:text-8xl tracking-tighter leading-[1.0] w-full">
                Gyan Vihar Center of <br className="hidden sm:block" />
                <span className="text-accent-gold underline decoration-white/20 underline-offset-8 uppercase">Art & Design</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <p className="font-sans font-medium text-white/80 text-lg lg:text-xl max-w-xl leading-relaxed">
                Your path to becoming a visionary designer starts here. Spread across a vibrant 130-acre campus, we combine world-class infrastructure with industry-driven learning.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1000}>
              <div className="flex flex-wrap items-center gap-6 pt-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">130+</span>
                  <span className="text-xs font-bold text-white/50 tracking-widest uppercase">Acre Campus</span>
                </div>
                <div className="w-[1px] h-10 bg-white/20" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">100+</span>
                  <span className="text-xs font-bold text-white/50 tracking-widest uppercase">Collaborations</span>
                </div>
                <div className="w-[1px] h-10 bg-white/20" />
                <div className="flex flex-col">
                   <img src="naac-nirf.png" alt="NIRF NAAC" className="h-10 w-auto object-contain brightness-0 invert" />
                   <span className="text-xs font-bold text-white/50 tracking-widest uppercase mt-2">Global Standards</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form card */}
          <div className="flex justify-end w-full relative lg:col-span-5">
            <ScrollReveal direction="right" delay={500} className="w-full relative z-10 flex justify-end">
              <Card className="relative w-full max-w-lg bg-black/40 backdrop-blur-xl rounded-[40px] overflow-hidden border border-white/20 shadow-[0px_50px_100px_-20px_rgba(0,0,0,0.3)] p-1">
                <div className="bg-[#0d244b]/80 rounded-[36px] px-8 py-10 sm:px-12 sm:py-12 flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-display font-black text-white text-3xl sm:text-4xl tracking-tight leading-tight">
                      Ready to <span className="text-accent-gold italic font-serif font-normal">Apply?</span>
                    </h2>
                    <p className="text-gray-400 text-sm font-medium">Join 500+ student creators this academic year.</p>
                  </div>

                  <div className="flex flex-col gap-5">
                    {formFields.map((field) => (
                      <div key={field.id} className="flex flex-col gap-2 w-full">
                        <Input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full bg-white/5 text-white border-white/10 rounded-2xl px-6 py-4 placeholder:text-gray-500 focus:border-accent-gold focus-visible:ring-0 focus-visible:ring-offset-0 h-auto transition-all hover:bg-white/10"
                        />
                      </div>
                    ))}

                    <div className="flex flex-col gap-2 w-full">
                      <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                        <SelectTrigger
                          id="desiredCourse"
                          className="w-full bg-white/5 text-white border-white/10 rounded-2xl px-6 py-4 focus:ring-0 focus:border-accent-gold h-auto transition-all hover:bg-white/10"
                        >
                          <SelectValue placeholder="Select a Program" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d244b] border-white/10 text-white">
                          {courseOptions.map((course) => (
                            <SelectItem key={course} value={course} className="focus:bg-accent-gold focus:text-[#0d244b] font-bold">
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      className="w-full bg-accent-gold hover:bg-white text-[#0d244b] rounded-2xl py-5 h-auto shadow-[0px_20px_40px_-10px_rgba(193,150,63,0.3)] transition-all duration-500 transform hover:-translate-y-1 group"
                      type="submit"
                    >
                      <span className="font-black text-sm tracking-[2px] uppercase group-hover:tracking-[4px] transition-all">
                        Submit Application
                      </span>
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Floating Stats Bar - Bottom of Hero */}
      <div className="w-full mt-12 lg:mt-24 px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={1200}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {/* Alternating Cards: Blue and White/Yellow */}
            <div className="bg-[#0d244b] text-white p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col gap-2 items-center text-center">
              <span className="text-4xl sm:text-5xl font-black tracking-tighter">13:1</span>
              <span className="text-[10px] sm:text-xs font-bold text-accent-gold tracking-[3px] uppercase">Ratio</span>
            </div>
            
            <div className="bg-white text-[#0d244b] p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col gap-2 items-center text-center">
              <span className="text-4xl sm:text-5xl font-black tracking-tighter">40+</span>
              <span className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-[3px] uppercase">Labs</span>
            </div>

            <div className="bg-accent-gold text-[#0d244b] p-8 rounded-3xl shadow-2xl border border-white/20 flex flex-col gap-2 items-center text-center">
              <span className="text-4xl sm:text-5xl font-black tracking-tighter">100+</span>
              <span className="text-[10px] sm:text-xs font-bold text-[#0d244b]/60 tracking-[3px] uppercase">Partners</span>
            </div>

            <div className="bg-[#0d244b] text-white p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col gap-2 items-center text-center">
              <span className="text-4xl sm:text-5xl font-black tracking-tighter">15+</span>
              <span className="text-[10px] sm:text-xs font-bold text-accent-gold tracking-[3px] uppercase">Exp.</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
