import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Static product data
const products = [
    { name: "Cialis", category: "cialis", image: "/images/cialis.png" },
    { name: "Viagra", category: "viagra", image: "/images/viagra.png" }
];

const ProductsItem = () => {
    const navigate = useNavigate();
    const [pulseIndex, setPulseIndex] = useState(0);

    // Toggle pulse animation between cards
    useEffect(() => {
        const interval = setInterval(() => {
            setPulseIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-black font-bold text-center text-2xl sm:text-2xl md:text-4xl leading-tight lg:leading-[42px] animate-fade-in-up mt-8 sm:mt-12 mb-6 sm:mb-8">
            Which Treatment <br />Would You Prefer?
        </h1>
    
        <div className="w-full max-w-6xl grid grid-cols-2 gap-4 sm:gap-6">
            {products.map((product, index) => (
                <div
                    key={product.name}
                    className={`cursor-pointer bg-white rounded-xl hover:bg-brand-maroon hover:text-white transition-all duration-300 flex flex-col items-center border-2 ${
                        pulseIndex === index ? "animate-pulse border-brand-primary" : "border-gray-200"
                    }`}
                    onClick={() => navigate(`/home/treatment/product/${product.name.toLowerCase()}`)}
                >
                    <img src={product.image} alt={product.name} className="w-72 md:w-full object-cover rounded-t-xl" />
                    <h3 className="text-[12px] sm:text-xl font-bold hover:text-white py-3">{product.name}</h3>
                </div>
            ))}
        </div>
    </div>
    
    );
};

export default ProductsItem;
