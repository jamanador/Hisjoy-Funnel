import { useParams } from "react-router-dom";
import { CustomerReviews } from "../../components/CustomerRivews";
import DoctorSlotAlert from "../../components/DoctorSlotAlert";
import FastActingCard from "../../components/FastActingCard";
import GuaranteeCard from "../../components/GuaranteeCard";
import { MarqueeBanner } from "../../components/MarqueeBanner";
import { OffersBadge } from "../../components/offers-badge";
import PaymentInfo from "../../components/PaymentInfo";
import { ProductCard } from "../../components/ProductCard";
import SecurityInfoCard from "../../components/SecurityInfoCard";
import SuccessCard from "../../components/SuccessCard";
import WhyChooseUs from "../../components/WhyChooseUs ";
import categories from "../../config";

const SingleProduct = () => {
    const { category } = useParams<{ category: string }>();

    // Log the category parameter for debugging
    console.log("Category parameter:", category);

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

    // Log the selected category for debugging
    console.log("Selected Category:", selectedCategory);

    if (!selectedCategory) {
        return (
            <div className="flex flex-col items-center p-6">
                <h1 className="text-xl text-red-500 font-bold mb-4">Error: Category Not Found</h1>
                <p>The category you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div>
            <MarqueeBanner text="✨- Fantastic News! You Are Eligible -🎈 " />
            <div className="max-w-xl mx-auto mt-10">
                <h3 className="text-black font-bold text-center text-2xl lg:leading-[40px] lg:text-3xl animate-fade-in-up">
                    Get up to 2 Months FREE <br /> (Instead of $10 discount)
                </h3>
                <div>
                    <DoctorSlotAlert />

                    <div className="flex items-center justify-center mx-2">
                        <div className="flex items-center justify-center bg-brand-secondary text-white px-4 py-3 rounded-lg md:w-9/12 text-center w-full md:mt-8 my-3">
                            <span className="text-[12px] md:text-lg font-bold">✓</span>
                            <span className="text-[13px] md:text-sm font-bold text-center">No video or phone call required!</span>
                        </div>
                    </div>

                    <PaymentInfo />

                    {/* Render each product in the selected category */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-center">Choose Your Pakages</h2>
                        <div className="w-10/12 mx-auto">
                            {selectedCategory.products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </div>
                    </div>

                    <OffersBadge />
                    <GuaranteeCard />
                    <FastActingCard />
                    <SuccessCard />
                    <WhyChooseUs />
                    <CustomerReviews />
                    <SecurityInfoCard />
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
