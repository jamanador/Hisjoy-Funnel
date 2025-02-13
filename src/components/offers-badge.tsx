import { twMerge } from "tailwind-merge";

type OffersBadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function OffersBadge({ className }: Readonly<OffersBadgeProps>) {
  return (
    <div className="flex justify-center items-center my-6 p-2 space-y-2">
      <div
        className={twMerge(
          className,
          "bg-blue-50 p-4 rounded-lg w-full text-center border border-gray-200 flex flex-wrap items-center justify-center gap-7 sm:gap-10 md:gap-14 text-sm font-[600] md:font-semibold"
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
    </div>
  );
}
