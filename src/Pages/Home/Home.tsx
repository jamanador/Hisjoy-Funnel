import Advertisement from "../../components/Advertisement";
import { Benefits } from "../../components/Benefits";
import { CustomerReviews } from "../../components/customer-reviews";
import PricingTable from "../../components/PricingTable";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto ">
         <Benefits/>
         <Advertisement/>
         <PricingTable/>
         <CustomerReviews />
    </div>
  )
}
