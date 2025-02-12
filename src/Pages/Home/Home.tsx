import Advertisement from "../../components/Advertisement";
import { Benefits } from "../../components/Benefits";
import { CustomerReviews } from "../../components/CustomerRivews";
import DeliveryCard from "../../components/DeliveryCard";
import FastActingCard from "../../components/FastActingCard";
import GuaranteeCard from "../../components/GuaranteeCard";
import { OffersBadge } from "../../components/offers-badge";
import PricingTable from "../../components/PricingTable";
import SecurityInfoCard from "../../components/SecurityInfoCard";
import SuccessCard from "../../components/SuccessCard";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto ">
         <Benefits/>
         <Advertisement/>
         <PricingTable/>
         <SuccessCard/>
         <FastActingCard/>
         <DeliveryCard/>
         <CustomerReviews/>
         <OffersBadge/>
         <GuaranteeCard/>
         <SecurityInfoCard/>
    </div>
  )
}
