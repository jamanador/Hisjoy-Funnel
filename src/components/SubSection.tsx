import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";

const SubSection = () => {
  return (
    <div className="bg-[#EEF7FF] py-8 md:py-10 xl:py-12 mb-3 md:mb-6 lg:mb-10">
      <div className="grid justify-items-center gap-6">
        <CartBadge />
        <AddToCartButton />
        <OffersBadge />
      </div>
    </div>
  );
};

export default SubSection;
