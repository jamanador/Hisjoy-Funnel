import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../../config";

const ProductsItem = () => {
    const navigate = useNavigate();
    const [pulseIndex, setPulseIndex] = useState(0);

    const filteredCategories = categories.filter(
        (category) => category.categoryName === "Cialis" || category.categoryName === "Viagra"
    );

    useEffect(() => {
        if (filteredCategories.length === 0) return;
        const interval = setInterval(() => {
            setPulseIndex((prevIndex) => (prevIndex + 1) % filteredCategories.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [filteredCategories.length]);

    return (
        <div className="flex flex-col items-center justify-center w-full my-8">
            <h1 className="text-black font-bold text-center text-2xl md:text-4xl mt-8 mb-6">
                Which Treatment <br /> <span className="text-2xl">Would You Prefer?</span>
            </h1>
            <div className="w-full max-w-6xl grid grid-cols-2 gap-6">
                {filteredCategories.map((category, index) => (
                    <div
                        key={category.categoryName}
                        className={`cursor-pointer bg-white rounded-xl hover:bg-brand-maroon hover:text-white transition-all duration-300 flex flex-col items-center border-2 ${pulseIndex === index ? "animate-pulse border-brand-primary" : "border-gray-200"
                            }`}
                        onClick={() => navigate(`/home/treatment/processing/${category.categoryName.toLowerCase()}`)}
                    >
                        <img
                            src={category.products[0].images[0]}
                            alt={category.categoryName}
                            className="w-72 md:w-full object-cover rounded-t-xl"
                        />
                        <h3 className="text-xl font-bold py-3">{category.categoryName.toUpperCase()}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsItem;
