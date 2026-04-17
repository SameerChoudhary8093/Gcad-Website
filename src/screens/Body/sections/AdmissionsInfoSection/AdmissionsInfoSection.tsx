export const AdmissionsInfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col items-start p-1.5 w-full max-w-screen-xl mx-auto bg-primary-blue rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_#00000040]">
        <div className="flex flex-col sm:flex-row items-stretch w-full bg-white rounded-[22.4px] overflow-hidden">

          {/* Image panel */}
          <div className="w-full sm:w-80 lg:w-[401px] min-h-[200px] sm:min-h-[300px] relative flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/public/DSC00933.jpg.jpeg)" }}
            />
          </div>

          {/* Content panel */}
          <div className="flex flex-col items-start gap-5 p-6 sm:p-8 lg:p-12 flex-1">
            <div className="inline-flex items-center px-4 py-1.5 bg-accent-gold/10 rounded-full">
              <span className="font-sans font-normal text-accent-gold text-xs tracking-[1.20px] leading-4 whitespace-nowrap">
                ADMISSIONS OPEN 2026
              </span>
            </div>

            <h2 className="font-sans font-normal leading-tight w-full text-3xl sm:text-4xl lg:text-5xl tracking-[0]">
              <span className="font-extrabold text-white">
                Centre of Art &amp; Design
                <br />
              </span>
              <span className="text-accent-gold">Shaping Visionaries Through Design</span>
            </h2>

            <p className="font-sans font-medium text-gray-300 text-base sm:text-lg tracking-[0] leading-7">
              Step into the world of science and creativity with our award-winning programs.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 w-full flex-wrap">
              <button className="inline-flex justify-center px-6 sm:px-8 py-4 bg-accent-gold rounded-lg shadow-[0px_10px_15px_-3px_#fd8b004c] cursor-pointer border-0 hover:bg-light-gold transition-colors">
                <span className="font-sans font-extrabold text-primary-blue text-sm sm:text-base text-center leading-6 whitespace-nowrap">
                  APPLY NOW
                </span>
              </button>
              <button className="inline-flex justify-center px-6 sm:px-8 py-4 rounded-lg border-2 border-solid border-white bg-transparent cursor-pointer hover:bg-white hover:text-primary-blue transition-colors group">
                <span className="font-sans font-extrabold text-white text-sm sm:text-base text-center leading-6 whitespace-nowrap group-hover:text-primary-blue transition-colors">
                  FUELING INDIA&#39;S NEXT BREAKTHROUGHS
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
