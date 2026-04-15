import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";

const mentors = [
  { name: "Meenakshi Singh", role: "FASHION MENTOR",   image: "https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axududlfony1h0k9-inixfqhmqlmowfgudbdjqploa57ijwosqwadjwioktkl.png" },
  { name: "Padma Raj Kesri", role: "TEXTILE EXPERT",   image: "https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axuaxnga479iqogaon--znmo9na9jrgw-s-kwn7qqjmj6rtpeogs6l79qj-qu.png" },
  { name: "Ananya Sharma",   role: "UX EVANGELIST",    image: "https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axua2empbqe0q7ypyg6tiljer3vldcfuhtf0rdesfx9s4dcyyyk-ga4z5f8eo.png" },
  { name: "Vikram Goel",     role: "INDUSTRIAL LEAD",  image: "https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axub3fcmb-08zyvfvk2ljtvzmkikrqyt2ckyu2y-ouqxvgk98kdaycgong7rj.png" },
  { name: "Sania Mirza",     role: "RESEARCH HEAD",    image: "https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axudapeksro4g-t0--gisynsrauipkb7osipta2yq-fov5hiaehuqd50wjz3t.png" },
  { name: "Rajiv Verma",     role: "DEAN OF DESIGN",   image: "https://c.animaapp.com/mnyx7rno5LIHte/img/ab6axucah3c6crfxqertwvkkzgcvdvaq7yrafz6oerjz3-c6ypvaofthiykxbcpm.png" },
];

export const MentorshipProgramSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#f7f9fc]">
      <div className="flex flex-col max-w-screen-xl items-center gap-4 w-full">

        <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#1a2b48] text-3xl sm:text-4xl text-center tracking-[0] leading-10">
          GUIDED BY MASTERS
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-[#44474d] text-sm sm:text-base text-center leading-6 max-w-2xl">
          Learn from industry veterans and award-winning artists who bring real-world wisdom to the classroom.
        </p>

        {/* Mentor grid: 2 cols on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 pt-10 w-full">
          {mentors.map((mentor, index) => (
            <div key={`mentor-${index}`} className="flex flex-col items-center gap-4 w-full">
              <Avatar className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 shadow-[0px_0px_0px_4px_#fd8b00] rounded-full flex-shrink-0">
                <AvatarImage src={mentor.image} alt={mentor.name} className="object-cover" />
                <AvatarFallback className="bg-gray-200 text-gray-600 font-bold text-base">
                  {mentor.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-center w-full">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1a2b48] text-sm sm:text-base text-center leading-6">
                  {mentor.name}
                </span>
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#904d00] text-[10px] text-center tracking-[-0.50px] leading-[15px]">
                  {mentor.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
