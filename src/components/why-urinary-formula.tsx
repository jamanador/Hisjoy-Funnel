import { config } from "../config";

export function WhyUrinaryFormula() {
  return (
    <section className="relative mt-12 overflow-hidden bg-[#EEF7FF] py-6 sm:py-8 md:mt-16 md:py-14 xl:mt-20">
      <h3 className="title-no !important text-[#B11E54]">
      Why ArthroFlex 365?      </h3>
      <p className="px pb-2 text-center text-xl font-semibold text-black sm:text-2xl md:pb-4 md:text-[25px]">
      Arthro Flex 365 – Science-Backed Relief         <br />
      for Stronger Healthier Joints!
      </p>
      <p className="mx-auto max-w-[40ch] text-pretty px-3 text-center text-[15px] font-semibold text-black sm:max-w-[55ch] md:max-w-[65ch] md:text-lg">
      Advanced joint support with science-backed nutrients and natural anti-inflammatories for mobility and comfort.
      </p>
      <div className="absolute inset-0 mt-5 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="mx-auto mt-8 max-w-7xl px-4">
        <div className="relative grid items-center gap-8 md:grid-cols-2 lg:gap-1">
          <div className="relative">
            <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-white/50 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-orange-100/40 blur-3xl"></div>
            <div className="m relative flex items-center justify-center">
              <img
                src="/images/whyartholeft.png"
                alt="Urinary Formula Product"
                className="w-[300px] md:w-auto"
              />
            </div>
          </div>
          <div className="z-10 space-y-8">
            {config.whyUrinaryFormula.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="text-bold flex h-12 w-12 items-center justify-center rounded-full border border-brand-maroon bg-white shadow-sm">
                    <img src={item.icon} alt={item.title} className="h-7 w-7" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  {item.description !== "" &&
                  item.description !== "support_blader" ? (
                    <p className="leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                  ) : (
                    <p className="leading-relaxed text-gray-700">
                      {item.description !== "support_blader" && (
                        <span>
                         Formulated with clinically supported ingredients like Glucosamine and Boswellia Serrata to target joint discomfort and reduce stiffness. Studies show Boswellia Serrata can{" "}
                          <span className="text-gray-800 underline">
                          improve joint exibility by 70% and reduce pain by 65%
                          </span>
                          {" "}after just 6 weeks.
                        </span>
                      )}
                    </p>
                  )}
                  {item.description == "support_blader" && (
                    <p className="leading-relaxed text-gray-700">
                      With natural pain relievers like White Willow Bark, this formula provides a safer alternative to synthetic medications{" "}
                      <span className="text-gray-800 underline">
                      reducing joint discomfort by 25% 
                      </span>
                      {" "}within one month of consistent use.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
