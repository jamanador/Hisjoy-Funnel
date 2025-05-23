import { useParams } from "react-router-dom";
import { Reviews } from "../../components/customer-reviews";
import DoctorSlotAlert from "../../components/DoctorSlotAlert";
import EstimatedDelivery from "../../components/EstimatedDelivery";
import FastActingCard from "../../components/FastActingCard";
import GuaranteeCard from "../../components/GuaranteeCard";
import { MarqueeBanner } from "../../components/MarqueeBanner";
import { OffersBadge } from "../../components/offers-badge";
import { ProductCard } from "../../components/ProductCard";
import SecurityInfoCard from "../../components/SecurityInfoCard";
import SuccessCard from "../../components/SuccessCard";
import WhyChooseUs from "../../components/WhyChooseUs ";
import categories from "../../config";
import PreviousCustomerOffer from "./PreviousCustomerOffer";

const SingleProduct = () => {
    const { category } = useParams<{ category: string }>();

    // Log the category parameter for debugging
    // console.log("Category parameter:", category);

    if (!category) {
        return (
            <div className="flex flex-col items-center p-6">
                <h1 className="text-xl text-red-500 font-bold mb-4">Error: No Category Specified</h1>
                <p>Please go back and choose a category to proceed.</p>
            </div>
        );
    }

    // Find the category object that matches the selected category (case-insensitive)
    const selectedCategory = categories.find(
        (cat) => cat.categoryName.toLowerCase() === category.toLowerCase()
    );

    if (!selectedCategory) {
        return (
            <div className="flex flex-col items-center p-6">
                <h1 className="text-xl text-red-500 font-bold mb-4">Error: Category Not Found</h1>
                <p>The category you are looking for does not exist.</p>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center">
            <MarqueeBanner text="✨- Fantastic News! You Are Eligible -🎈 " />
            <div className="mt-6 sm:mt-10">
                <h1 className="text-black font-bold text-center text-3xl md:text-4xl md:mt-8 md:mb-6 mt-4 mb-3">
                    Get Up to 2 Months FREE
                </h1>
                <div>
                    {/* Render each product in the selected category */}
                    <div className="mt-10 mb-5" id="productSection">
                        <h2 className=" text-2xl md:text-3xl font-bold mb-8 text-center md:mt-12 mt-10">Choose Your Package
                        </h2>
                        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 lg:gap-x-4 mx-auto gap-y-8 lg:gap-y-3">
                            {selectedCategory.products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </div>
                    </div>
                    <EstimatedDelivery />
                    <div className="max-w-xl mx-auto md:mt-12 mt-8">
                        <DoctorSlotAlert />
                        <div className="flex items-center justify-center mx-2">
                            <div className="flex items-center justify-center bg-brand-secondary text-white px-4 py-3 rounded-lg md:w-9/12 text-center w-full md:mt-8 my-3">
                                <span className="text-[12px] md:text-lg font-bold">✓</span>
                                <span className="text-[13px] md:text-sm font-bold text-center">No video or phone call required!</span>
                            </div>
                        </div>
                        <OffersBadge />
                        <GuaranteeCard />
                        <FastActingCard />
                        <SuccessCard />
                        <WhyChooseUs />
                        <Reviews />
                        <SecurityInfoCard />
                        <PreviousCustomerOffer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
