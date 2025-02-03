import { BsCart3 } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
type CartBadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function CartBadge({ className }: Readonly<CartBadgeProps>) {
  return (
    <span className={twMerge(className, " flex items-center gap-x-2 font-bold")}>
      <BsCart3 strokeWidth="0.5" className="size-6" />
      This is in 21 carts right now!
    </span>
  );
}
