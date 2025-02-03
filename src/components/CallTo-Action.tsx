import { twMerge } from "tailwind-merge";

const CallToAction = () => {
  return (
    <div className="secGap mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
      <div
        className={twMerge(
          "rounded-[40px] bg-center px-4 py-12 text-center text-white shadow-lg sm:px-6 md:px-12 md:py-16",
        )}
        style={{
          backgroundImage: "url('/images/tryecobg.png')",
        }}
      >
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <h2 className="mx-auto w-[90%] text-2xl font-bold leading-tight sm:w-[80%] sm:text-3xl md:text-4xl">
            Try Eco Health® Advanced Urinary Formula Risk Free for 90 Days
          </h2>
          {/* Paragraph */}
          <p className="mt-4 text-sm leading-relaxed sm:text-base md:mt-6">
            Eco Health® Advanced Urinary Formula is a premium,
            doctor-formulated blend designed to support bladder health and
            urinary function. This comprehensive formula combines clinically
            supported ingredients to enhance bladder control and promote urinary
            comfort.
          </p>
          {/* Button */}
          <div className="mt-6">
            <button className="rounded-full bg-[#B11E54] px-10 py-3 text-sm font-bold text-white sm:px-12 sm:py-4 sm:text-base md:px-20">
              ADD TO CART
            </button>
          </div>
          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:mt-10 sm:grid-cols-3 sm:gap-8">
            <div className="flex items-center justify-center">
              <img
                src="/icons/CallToAction/secure.svg"
                alt="100% Secure Checkout"
                className="mr-3 h-10 w-10"
              />
              <span className="text-sm font-semibold leading-snug sm:text-base">
                100% Secure
                <br />
                Checkout
              </span>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/icons/CallToAction/delevry.svg"
                alt="Ships in 1 Business Day"
                className="mr-3 h-10 w-10"
              />
              <span className="text-sm font-semibold leading-snug sm:text-base">
                Ships in 1<br />
                Business Day
              </span>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/icons/CallToAction/Frame.svg"
                alt="90-Day Guarantee"
                className="mr-3 h-10 w-10"
              />
              <span className="text-sm font-semibold leading-snug sm:text-base">
                90-Day
                <br />
                Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
