import { twMerge } from "tailwind-merge";

type OffersBadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function OffersBadge({ className }: Readonly<OffersBadgeProps>) {
  return (
    <div
      className={twMerge(
        className,
        "p-4 border my-6 border-gray-300 bg-gray-50 flex flex-wrap items-center justify-center gap-7 sm:gap-10 md:gap-14 text-sm font-[600] md:font-semibold mt-4"
      )}
    >
      <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:text-start">
        <img
          className="size-8"
          src="/icons/icon-offerings-1.svg"
          alt="offerings icon"
        />
        <span>
          100% Secure
          <br />
          Checkout
        </span>
      </div>
      <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:text-start">
        <img
          className="size-8"
          src="/icons/icon-offerings-2.svg"
          alt="offerings icon"
        />
        <span>
          Ships in 1<br />
          Business Day
        </span>
      </div>
      <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:text-start">
        <img
          className="size-8"
          src="/icons/icon-offerings-3.svg"
          alt="offerings icon"
        />
        <span>
          90-Day
          <br />
          Guarantee
        </span>
      </div>
    </div>
  );
}