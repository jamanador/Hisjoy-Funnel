import Advertisement from "../../components/Advertisement";
import { Benefits } from "../../components/Benefits";
import { CustomerReviews } from "../../components/customer-reviews";
import FastActingCard from "../../components/FastActingCard";
import PricingTable from "../../components/PricingTable";
import SuccessCard from "../../components/SuccessCard";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto ">
         <Benefits/>
         <Advertisement/>
         <PricingTable/>
         <SuccessCard/>
         <FastActingCard/>
         <CustomerReviews />
    </div>
  )
}
