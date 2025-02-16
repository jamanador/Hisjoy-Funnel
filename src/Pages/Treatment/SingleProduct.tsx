import { FaBatteryQuarter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { CustomerReviews } from "../../components/CustomerRivews";
import DoctorSlotAlert from "../../components/DoctorSlotAlert";
import FastActingCard from "../../components/FastActingCard";
import GuaranteeCard from "../../components/GuaranteeCard";
import { MarqueeBanner } from "../../components/MarqueeBanner";
import { OffersBadge } from "../../components/offers-badge";
import PaymentInfo from "../../components/PaymentInfo";
import SecurityInfoCard from "../../components/SecurityInfoCard";
import SuccessCard from "../../components/SuccessCard";
import WhyChooseUs from "../../components/WhyChooseUs ";


// Static product data
const products = [
    { name: "Cialis", category: "cialis", image: "/images/viagra.png", description: "Cialis is used for ED treatment." },
    { name: "Viagra", category: "viagra", image: "/images/cialis.png", description: "Viagra helps with ED issues." }
];

const SingleProduct = () => {
    const { productName } = useParams();

    // Find the product based on the URL param
    const product = products.find((p) => p.name.toLowerCase() === productName?.toLowerCase());

    if (!product) {
        return <div className="flex items-center justify-center h-screen text-xl">Product not found.</div>;
    }

    return (
        <div>
            <MarqueeBanner text="✨- Fantastic News! Your Eligible -🎈 " />
            <div className="max-w-xl mx-auto mt-10">
                <h3 className="text-black font-bold text-center text-xl lg:leading-[40px] lg:text-3xl animate-fade-in-up">
                    Get up to 2 Months FREE <br />(Instead of $10 discount)

                </h3>
                <div className="max-w-xl mx-auto bg-white rounded-lg mt-10 mb-7 border border-gray-100">
                    <h2 className="text-center text-xl font-bold text-white bg-brand-maroon p-3 rounded-t-lg">Your Plan</h2>
                    <div className="bg-green-500 text-white text-center py-2 font-bold uppercase">ACT FAST: SECURE YOUR Free 2 months Shipping!</div>
                    <div className="flex flex-col justify-items-center justify-center md:flex-row items-center p-4 border-b">
                        <img src={product.image} alt={product.name} className="lg:w-6/12 lg:h-32 w-8/12" />
                        <div className="md:ml-10 mt-6 md:mt-0">
                            <h1 className="text-lg font-bold text-gray-900">Hisjoy <span className="text-gray-500">Generic Cialis®</span></h1>
                            <p className="text-md font-semibold italic">20mg Generic Cialis®</p>
                            <p className="text-md italic">12 Individually-Packaged Tablets</p>
                            <p className="text-green-700 font-bold mt-2 flex items-center">✔ FDA Approved Treatment</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between p-4 bg-white rounded-lg">
                        {/* Pricing Info */}
                        <div className="text-center md:text-left">
                            <p className="text-red-500 text-md font-semibold">Avg Retail Price: $28.00 each</p>
                            <p className="text-gray-500 text-lg line-through">$1.99</p>
                            <p className="text-green-600 text-xl font-bold">56% OFF</p>
                            <div className="text-md font-bold text-white  py-2 px-2 rounded-lg mt-2 text-center lg:w-8/12 animate-[pulseBg_1.5s_infinite] transition-all duration-500 ease-in-out">
                                $4 <span className="text-md">each</span>
                            </div>
                        </div>

                        {/* Benefits List */}
                        <div className="mt-4 md:mt-0 md:ml-6 space-y-2 text-left text-sm">
                            <p className="text-green-700 font-semibold flex items-center">✔ U.S. DOCTORS</p>
                            <p className="text-green-700 font-semibold flex items-center">✔ LICENSED PHARMACY</p>
                            <p className="text-green-700 font-semibold flex items-center">✔ LOWEST PRICE GUARANTEED</p>
                        </div>

                        {/* Disclaimer */}
                    </div>

                </div>
                <DoctorSlotAlert />
              <div className="flex items-center justify-items-center justify-center mx-2">
              <div className="flex items-center justify-items-center justify-center bg-brand-secondary text-white px-4 py-3 rounded-lg md:w-9/12 text-center w-full md:mt-8 my-3">
                    <span className="text-[12px] md:text-lg font-bold">✓</span>
                    <span className="text-[13px] md:text-sm font-bold text-center">No video or phone call required!</span>
                </div>
              </div>
                <PaymentInfo />
                <div className="bg-white rounded-lg border border-gray-200 mx-2">
                    {/* Header */}
                    <div className="bg-brand-maroon text-white text-center font-bold text-lg py-3 rounded-t-lg">
                        Order Summary
                    </div>

                    {/* Order Details */}
                    <div className="p-5 text-gray-800">
                        {/* Online Doctor Visit */}
                        <div className="flex justify-between items-center">
                            <p>Online Doctor Visit</p>
                            <p>
                                <span className="line-through text-gray-500">$49</span>{" "}
                                <span className="text-green-600 font-bold">FREE</span>
                            </p>
                        </div>

                        {/* Generic Cialis */}
                        <div className="mt-3">
                            <div className="flex justify-between items-center">
                                <p>{product?.name}<sup>®</sup></p>
                                <p>
                                    <span className="line-through text-gray-500">$23.88</span>{" "}
                                    <span className="text-green-600 font-bold">$4</span>
                                </p>
                            </div>
                            <p className="text-xs text-gray-500">12 Tablets, 20mg</p>
                        </div>

                        {/* Shipping */}
                        <div className="flex justify-between items-center mt-3">
                            <p>Shipping</p>
                            <p>
                                <span className="line-through text-gray-500">$9.99</span>{" "}
                                <span className="text-green-600 font-bold">FREE</span>
                            </p>
                        </div>

                        {/* Coupon */}
                        <div className="flex justify-between items-center mt-3">
                            <p>Coupon RDR</p>
                            <p className="text-green-600 font-bold">- $10.00</p>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center mt-3 border-t border-gray-300 pt-3">
                            <p className="font-bold">Total</p>
                            <p className="text-indigo-900 font-bold">$13.88</p>
                        </div>

                        {/* Due Today */}
                        <div className="flex justify-between items-center mt-3 bg-brand-secondary p-2 rounded">
                            <p className="font-bold text-white">Due Today</p>
                            <p className="text-white font-bold">$0</p>
                        </div>

                        {/* Coupon Input */}
                        {/* <div className="mt-4 text-gray-500 italic text-sm">Coupon?</div> */}

                        {/* Limited Stock */}
                        <div className="flex items-center text-red-600 font-bold text-sm mt-2">
                            <FaBatteryQuarter className="text-red-600 mr-2" />
                            Limited Stock
                        </div>
                    </div>
                </div>
                <OffersBadge />
                <GuaranteeCard />
                <FastActingCard/>
                <SuccessCard/>
                <WhyChooseUs/>
                <CustomerReviews/>
                <SecurityInfoCard/>

            </div>
        </div>
    );
};
export default SingleProduct;

// export default SingleProduct;
// const SingleProduct = () => {
//     return (
//         <div className="flex items-center justify-center">
//             <UnderDevelopment />
//         </div>
//     )
// }

// export default SingleProduct;