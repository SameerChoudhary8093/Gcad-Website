
export const TopNavbar = (): JSX.Element => {
  return (
    <div className="w-full h-[43px] hidden md:flex items-center justify-between bg-[#0D244B] border-b border-[#ffffff1a] px-10">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2.5">
          <img className="w-[18px] h-[18px]" alt="Phone" src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-6.svg" />
          <a href="tel:+8306694440" className="[font-family:'Lato',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[16.5px] whitespace-nowrap hover:underline">
            +83066 94440
          </a>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-5 h-4" alt="Email" src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-14.svg" />
          <a href="mailto:admissions@gyanvihar.org" className="[font-family:'Lato',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[16.5px] whitespace-nowrap hover:underline">
            admissions@gyanvihar.org
          </a>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-[#ffffff1a] rounded-sm border border-white/20 px-2 py-0.5 cursor-pointer">
        <img className="w-5 h-5" alt="Language" src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-13.svg" />
        <span className="[font-family:'Lato',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[16.5px] whitespace-nowrap">
          English
        </span>
      </div>
    </div>
  );
};
