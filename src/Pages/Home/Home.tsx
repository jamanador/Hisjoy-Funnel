import Advertisement from "../../components/Advertisement";
import { Benefits } from "../../components/Benefits";
import { Reviews } from "../../components/customer-reviews";
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
      <MarqueeBanner text={"Today Only:  Get 2 MONTHS FREE\nWith Speedy, Free Shipping (a $128 value)"} />
      <div className="max-w-xl mx-auto">
        <Benefits />
        <Advertisement />
        <PricingTable />
        <SuccessCard />
        <FastActingCard />
        <DeliveryCard />
        <Reviews/>
        <OffersBadge />
        <GuaranteeCard />
        <SecurityInfoCard />
      </div>
    </div>
  )
}
