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
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axuaphnuqt1aqaqpgy2dkntoorxtrrf0m-56yszipyuds37ztczppkblweki1.png)" }}
        />
        <div className="absolute inset-0 bg-[#1a2b48cc] backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Hero text */}
          <div className="flex flex-col items-start gap-5 w-full">
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#fd8b00] text-sm sm:text-base tracking-[3px] leading-6">
              STEP INTO THE WORLD OF CREATIVITY...
            </p>

            <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-5xl sm:text-6xl lg:text-7xl tracking-[-2.5px] leading-[1] w-full">
              YOUR CREATIVE{" "}
              <span className="text-[#fd8b00]">JOURNEY</span>{" "}
              STARTS NOW
            </h1>

            <p className="[font-family:'Inter',Helvetica] font-normal text-[#8293b5] text-base sm:text-lg lg:text-xl tracking-[0] leading-[1.6] max-w-xl">
              Experience a transformative design education backed by world-class
              infrastructure and a philosophy of experimental learning. GCAD is
              where passion meets professional excellence.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <img
                className="flex-shrink-0 w-6 h-6"
                alt="NAAC badge"
                src="https://c.animaapp.com/mnyx7rno5LIHte/img/container-3.svg"
              />
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm sm:text-base leading-6">
                NAAC A+ Accredited
              </span>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="flex justify-center w-full">
            <Card className="relative w-full max-w-md bg-white rounded-xl overflow-hidden border border-[#c5c6ce33] shadow-[0px_25px_50px_-12px_#00000040]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#fd8b00] z-10" />
              <CardContent className="flex flex-col gap-5 pt-10 pb-10 px-6 sm:px-10">
                <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-xl sm:text-2xl leading-8">
                  Begin Your Application
                </h2>

                {formFields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-1.5 w-full">
                    <Label
                      htmlFor={field.id}
                      className="[font-family:'Inter',Helvetica] font-normal text-[#75777e] text-xs leading-4"
                    >
                      {field.label}
                    </Label>
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-[#f2f4f7] border-transparent rounded-lg px-4 py-3.5 [font-family:'Inter',Helvetica] text-gray-500 text-base focus:border-[#fd8b00] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1.5 w-full">
                  <Label
                    htmlFor="desiredCourse"
                    className="[font-family:'Inter',Helvetica] font-normal text-[#75777e] text-xs leading-4"
                  >
                    DESIRED COURSE
                  </Label>
                  <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                    <SelectTrigger
                      id="desiredCourse"
                      className="w-full bg-[#f2f4f7] border-transparent rounded-lg px-4 py-3 [font-family:'Inter',Helvetica] text-[#191c1e] text-base focus:ring-0 h-auto"
                    >
                      <SelectValue placeholder="Select a Program" />
                    </SelectTrigger>
                    <SelectContent>
                      {courseOptions.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full bg-[#fd8b00] hover:bg-[#e07d00] rounded-lg py-4 h-auto shadow-[0px_10px_15px_-3px_#fd8b0033]"
                  type="submit"
                >
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#603100] text-base sm:text-lg tracking-[-0.45px]">
                    APPLY NOW
                  </span>
                </Button>

                <p className="[font-family:'Inter',Helvetica] font-normal text-[#75777e] text-[10px] text-center leading-[15px]">
                  By submitting, you agree to our privacy policy and terms.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
