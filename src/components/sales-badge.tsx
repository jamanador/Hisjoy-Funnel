import { twMerge } from "tailwind-merge";

type SalesBadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function SalesBadge({ className }: Readonly<SalesBadgeProps>) {
  return (
    <div
      className={twMerge(
        className,
        "relative text-[12px] md:text-[15px] rounded-xl border border-dashed border-brand-maroon bg-white px-3 sm:px-4 py-1 font-semibold ",
      )}
    >
      Selling fast, HURRY!
      <span className="text-brand-maroon"> 43 sold in last hour!</span>
      <span className="absolute -right-[0.5em] -top-[0.75em] text-3xl">🔥</span>
    </div>
  );
}
