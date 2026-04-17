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
    <section className="relative w-full flex items-center justify-center min-h-[560px] py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/Public/DSC00919.jpg.jpeg"
          alt="GCAD Campus"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0B1E40]/70 lg:bg-[#0B1E40]/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">

          {/* Left: Hero text */}
          <div className="flex flex-col items-start gap-5 w-full lg:col-span-8 lg:pl-0 pl-4">
            <ScrollReveal direction="up" delay={200}>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
                <span className="text-white font-sans">We Give </span>
                <span className="text-accent-gold font-serif">Wings </span>
                <span className="text-white font-sans">to </span>
                <span className="text-accent-gold font-serif">your Dreams!</span>
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={400}>
              <h1 className="font-display font-black text-white text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[1.1] w-full">
                Gyan Vihar Center of <span className="text-accent-gold">Art & Design</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <p className="font-sans font-normal text-gray-300 text-base sm:text-lg lg:text-xl tracking-[0] leading-[1.6] max-w-xl">
                Your path to becoming a visionary designer starts here.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <div className="flex items-center gap-4 pt-4 justify-start">
                <img
                  className="flex-shrink-0 h-10 sm:h-12 w-auto object-contain bg-white/10 p-2 rounded-lg backdrop-blur-sm"
                  alt="GCAD Logo"
                  src="/Public/gcad logo.png"
                />
                <img
                  className="flex-shrink-0 h-10 sm:h-12 w-auto object-contain bg-white/10 p-2 rounded-lg backdrop-blur-sm"
                  alt="SGVU Logo"
                  src="/Public/SGVU.png"
                />
                <img
                  className="flex-shrink-0 h-10 sm:h-12 w-auto object-contain bg-white/10 p-2 rounded-lg backdrop-blur-sm"
                  alt="NAAC & NIRF"
                  src="/Public/NACC&NIRF.png"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form card */}
          <div className="flex justify-end w-full relative lg:col-span-4 lg:pr-0 pr-4">
            <ScrollReveal direction="right" delay={500} className="w-full relative z-10 flex justify-end">
              <Card className="relative w-full max-w-xl bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-[0px_25px_50px_-12px_#00000040]">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent-gold z-10" />
                <CardContent className="flex flex-col gap-6 pt-10 pb-10 px-6 sm:px-10">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-display font-extrabold text-white text-xl sm:text-3xl leading-8 whitespace-nowrap">
                      Begin Your Application
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">Join the next generation of creative leaders.</p>
                  </div>

                  {formFields.map((field) => (
                    <div key={field.id} className="flex flex-col gap-2 w-full">
                      <Label
                        htmlFor={field.id}
                        className="font-medium text-gray-300 text-xs leading-4"
                      >
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-white/10 text-white border-white/20 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:border-accent-gold focus-visible:ring-0 focus-visible:ring-offset-0 h-auto transition-colors"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-2 w-full">
                    <Label
                      htmlFor="desiredCourse"
                      className="font-medium text-gray-300 text-xs leading-4"
                    >
                      DESIRED COURSE
                    </Label>
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                      <SelectTrigger
                        id="desiredCourse"
                        className="w-full bg-white/10 text-white border-white/20 rounded-xl px-4 py-3 focus:ring-0 focus:border-accent-gold h-auto transition-colors"
                      >
                        <SelectValue placeholder="Select a Program" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-blue border-white/20 text-white">
                        {courseOptions.map((course) => (
                          <SelectItem key={course} value={course} className="focus:bg-accent-gold focus:text-white">
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    className="w-full bg-accent-gold hover:bg-light-gold border border-light-gold rounded-xl py-4 h-auto shadow-[0px_5px_15px_-3px_#c1963f66] transition-all duration-300"
                    type="submit"
                  >
                    <span className="font-extrabold text-white text-base sm:text-lg tracking-wide uppercase">
                      Apply Now
                    </span>
                  </Button>

                  <p className="font-normal text-gray-400 text-[10px] text-center leading-[15px]">
                    By submitting, you agree to our privacy policy and terms.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            {/* Added geometric decorative blob */}
            <ScrollReveal direction="none" delay={800}>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-gold rounded-tl-full opacity-60 blur-2xl z-0 hidden lg:block" />
            </ScrollReveal>
            <ScrollReveal direction="none" delay={800}>
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-white rounded-br-full opacity-20 blur-xl z-0 hidden lg:block" />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
