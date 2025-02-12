import { Link } from "react-scroll";
import { twMerge } from "tailwind-merge";

type AddToCartButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export function AddToCartButton({ className }: Readonly<AddToCartButtonProps>) {
  return (

    <Link to="packages" smooth={true} duration={500} offset={-50}
      className={twMerge(
        className,
        "cursor-pointer relative z-10 flex h-12 w-[16em] transform items-center justify-center rounded-lg border border-brand-maroon bg-brand-maroon px-4 text-xl font-bold text-white transition-all duration-100 ease-in-out hover:scale-100 active:scale-[98%]",
      )}
    >
      Add To Cart
      {/* <img
          className="absolute right-[2.14em] z-10"
          src="/icons/icon-add-to-cart-button.svg"
          alt=""
        />
        <span className="rounded-r-inherit absolute right-[-5px] top--1 flex h-[calc(100%+1.5px)] w-[4em] transform items-center justify-center rounded-md border-[1px] border-dashed border-yellow-500 bg-[#ffffe2] px-4 text-lg font-semibold text-neutral-dark transition-all duration-100 ease-in-out hover:scale-100 active:scale-[98%]">
          FREE
        </span> */}
    </Link>
    // </Link>
  );
}
