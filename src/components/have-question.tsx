import { BsCart3 } from "react-icons/bs";
import { Link } from "react-scroll";


function HaveAquestion() {
  return (
    <div className="secGap relative mx-auto w-full bg-[url(/images/callbg.png)] text-white">
      <div className="container relative mx-auto px-4 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center justify-items-center gap-12 lg:grid-cols-2 lg:justify-items-start">
            {/* Left section with text */}
            <div className="order-2 space-y-6 text-left lg:order-1">
              <div className="space-y-2">
                <h1 className="text-xl font-bold leading-tight lg:text-2xl">
                  Have Questions? We're Here to Help!
                </h1>
                <p className="text-xl lg:text-2xl">
                  Call us at{" "}
                  <a href="tel:(844) -640-0728" className="text-green-500">
                    (844) -640-0728
                  </a>{" "}
                  for answers.
                </p>
              </div>

              <div className="space-y-3">
                <p className="max-w-[400px] text-[15px] leading-8 md:text-[20px]">
                  Act quickly—these are selling fast! 🔥 43 sold in the past
                  hour.
                </p>
                <p className="max-w-[400px] text-[15px] leading-8 md:text-[20px]">
                  Stock is limited due to high demand, so availability cannot be
                  guaranteed.
                </p>
              </div>
              <Link to="packages" smooth={true} duration={500}  offset={-50} className="cursor-pointer relative z-10 flex h-12 w-[16rem] transform items-center rounded-lg border border-none border-brand-maroon bg-brand-maroon px-3 text-sm font-semibold text-white transition-all duration-100 ease-in-out hover:scale-100 active:scale-[98%]">
                Claim It Before It's Gone!
                <img
                  className="absolute right-[1.6em] z-10"
                  src="/icons/icon-add-to-cart-button.svg"
                  alt=""
                />
                <span className="rounded-r-inherit absolute right-[-14px] top--1 flex h-[calc(100%+.0px)] lg:h-[calc(100%+.1px)] w-[4em] transform items-center justify-center rounded-md border-[1.5px] border-dashed border-yellow-500 bg-[#ffffe2] px-4 text-lg font-semibold text-neutral-dark transition-all duration-100 ease-in-out hover:scale-100 active:scale-[94%]"><BsCart3 className="h-5 w-5 ms-4 text-maroon font-bold"/> </span>
              </Link>
            </div>

            {/* Right section with image */}
            <div className="relative mx-auto w-[83%] md:w-full md:max-w-md lg:order-2 lg:max-w-lg">
              <div className="relative aspect-square">
                <img
                  src="/images/call.jpg"
                  className="h-full w-full rounded-full object-cover"
                  alt="Image"
                />
                {/* Circle at the top-right corner */}
                <div className="absolute right-[8%] top-4 z-10 h-16 w-16 rounded-full bg-brand-maroon md:right-[16%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaveAquestion;
