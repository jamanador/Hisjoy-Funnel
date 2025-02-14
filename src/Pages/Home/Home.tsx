import Advertisement from "../../components/Advertisement";
import { Benefits } from "../../components/Benefits";
import { CustomerReviews } from "../../components/CustomerRivews";
import DeliveryCard from "../../components/DeliveryCard";
import FastActingCard from "../../components/FastActingCard";
import GuaranteeCard from "../../components/GuaranteeCard";
import { MarqueeBanner } from "../../components/MarqueeBanner";
import { OffersBadge } from "../../components/offers-badge";
import PricingTable from "../../components/PricingTable";
import SecurityInfoCard from "../../components/SecurityInfoCard";
import SuccessCard from "../../components/SuccessCard";
import "../../styles/index.css";

export default function Home() {
  return (
    <div>
      <MarqueeBanner text={"TODAY ONLY: Sign up and get up to 2 Months FREE (a $128 value)!\nwith Speedy, Free shipping"} />
      <div className="max-w-xl mx-auto">
        <Benefits />
        <Advertisement />
        <PricingTable />
        <SuccessCard />
        <FastActingCard />
        <DeliveryCard />
        <CustomerReviews />
        <OffersBadge />
        <GuaranteeCard />
        <SecurityInfoCard />
      </div>
    </div>
  )
}
