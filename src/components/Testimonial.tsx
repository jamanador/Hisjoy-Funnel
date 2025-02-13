import { Star } from "lucide-react";
import { Link } from "react-scroll";
import { twMerge } from "tailwind-merge";

export function TestimonialSection() {
  return (
    <div className="secGap mx-auto max-w-7xl lg:px-0 px-2">
      <div
        className={twMerge(
          "w-full bg-[url('/images/Bgherooo2.png')] bg-cover bg-center bg-no-repeat object-fill px-2 py-12 md:pt-12 text-center shadow-lg md:bg-[url('/images/Bgherooo1.png')] lg:px-4 lg:pt-14 xl:px-2 xl:pt-12",
        )}
      >
        {/* Content (Stacked above the overlay) */}
        <div className="grid md:grid-cols-12 lg:gap-3">
          {/* First Div: 2fr */}
          <div className="sm:col-span-1 lg:col-span-3"></div>

          {/* Second Div: 4fr */}
          <div className="col-span-7 mx-auto flex max-w-3xl flex-col items-center gap-4 lg:col-span-6 xl:gap-7">
            {/* Paragraph */}
            <div className="grid justify-items-center">
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 md:h-6 md:w-6"
                  />
                ))}
              </div>
              <p className="text-[14px] sm:text-[15px] max-w-[60ch] md:max-w-full font-semibold italic leading-relaxed  md:text-[15px] text-black lg:text-[16px] lg:font-bold xl:text-[18px]">
                "After using Arthro Flex 365, my joints feel more exible and pain-free. I can move with ease and comfort, allowing me to enjoy my favorite activities again -" —{" "}
                <span className="font-normal not-italic">Sarah T.</span>
              </p>
            </div>
            {/* Button */}
            <div className="relative rounded-xl border border-dashed border-brand-maroon py-1 text-[12px] font-bold text-white px-4 sm:text-[13px] md:px-2 lg:w-[350px] lg:px-3 lg:text-[15px]">
              Selling fast, HURRY!
              <span className="text-maroon"> 43 sold in last hour!</span>
              <span className="absolute -right-[0.5em] -top-[0.75em] text-3xl">
                🔥
              </span>
            </div>
            <Link
              to="packages"
              smooth={true}
              duration={500}
              offset={-50}
              className="relative z-10 flex h-12 w-[16em] transform cursor-pointer items-center
               justify-center rounded-lg border border-none border-brand-maroon bg-brand-maroon px-4 text-xl 
               font-bold text-white transition-all duration-100 ease-in-out hover:scale-100 active:scale-[98%]"
            >
              Add To Cart
              <img
                className="absolute right-[2.14em] z-10"
                src="/icons/icon-add-to-cart-button.svg"
                alt=""
              />
              <span className="rounded-r-inherit absolute right-[-5px] top--1 flex h-[calc(100%)] w-[4em] transform items-center justify-center rounded-md border-[1px] border-dashed border-yellow-500 bg-[#ffffe2] px-4 text-lg font-semibold text-neutral-dark transition-all duration-100 ease-in-out hover:scale-100 active:scale-[98%]">
                FREE
              </span>
            </Link>
          </div>

          {/* Third Div: 4fr */}
          <div className="hidden md:col-span-4 md:grid lg:col-span-3 xl:w-[300px]">
            <img src="/images/testimonialtwo.png" alt="Product Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
