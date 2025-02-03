import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { SalesBadge } from "./sales-badge";

export function Satisfaction() {
  return (
    <div className="bg-[#EEF7FF]">
      <section className="mx-auto my-0 grid max-w-7xl place-items-center justify-items-center p-5 lg:grid-cols-2 lg:gap-12 lg:p-8 xl:p-5">
        {/* Image Section */}
        <div className=" relative order-first mx-auto flex  max-w-[370px] items-center justify-center md:order-first md:max-w-[500px] lg:order-last ">
          <img
            className="h-full w-full  object-cover"
            src="/images/heroartho.png"
            alt="satisfaction image"
          />
        </div>

        {/* Text Section */}
        <div className="w-full py-6 text-center md:py-8 lg:py-12 lg:text-start">
          <h3 className="text-maroon text-xl font-bold md:text-2xl">
            You have nothing to lose!
          </h3>
          <p className="mx-auto my-2 sm:my-3 max-w-[600px] text-2xl sm:text-3xl font-bold md:my-5 md:text-4xl md:leading-[40px] lg:text-4xl lg:leading-[50px]">
            100% satisfaction guaranteed on every order!
          </p>
          <p className="text-center text-sm  my-5 md:text-base lg:text-start">
          Our formula is designed by health professionals with expertise in joint health and inammation management. We use only premium, high-quality ingredients that are backed by clinical studies and rigorous research.
          </p>
          <div className="flex flex-col items-center gap-4 md:gap-5 lg:items-start">
            <SalesBadge className="w-full max-w-[360px] text-center" />
            <CartBadge />
            <div className="flex flex-col items-center gap-3 lg:flex-row">
              <AddToCartButton />
              <img
                className="w-16 md:w-20"
                src="/icons/icon-90-day.png"
                alt="90 day icon"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
