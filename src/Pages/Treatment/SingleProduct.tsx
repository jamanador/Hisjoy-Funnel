import { useParams } from "react-router-dom";
import { MarqueeBanner } from "../../components/MarqueeBanner";

// Static product data
const products = [
    { name: "Cialis", category: "cialis", image: "/images/cialis.png", description: "Cialis is used for ED treatment." },
    { name: "Viagra", category: "viagra", image: "/images/viagra.png", description: "Viagra helps with ED issues." }
];

const SingleProduct = () => {
    const { productName } = useParams();

    // Find the product based on the URL param
    const product = products.find((p) => p.name.toLowerCase() === productName?.toLowerCase());

    if (!product) {
        return <div className="flex items-center justify-center h-screen text-xl">Product not found.</div>;
    }

    return (
        <div className="">
            <MarqueeBanner text="Fantastic News: You’re Eligible!" />
            <div className="max-w-xl mx-auto flex flex-col items-center justify-center w-full p-6 border my-20">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                <img src={product.image} alt={product.name} className="w-40 h-28 mb-4" />
                <p className="text-lg text-gray-600">{product.description}</p>
            </div>
        </div>
    );
};

export default SingleProduct;
