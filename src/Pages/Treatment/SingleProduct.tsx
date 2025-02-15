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
        <div>
            <MarqueeBanner text="✨- Fantastic News! Your Eligible -🎈 " />
            <div className="max-w-xl mx-auto mt-10">
                <h3 className="text-black font-bold text-center text-xl lg:leading-[40px] lg:text-3xl animate-fade-in-up">
                    Get up to 2 Months FREE <br />(Instead of $10 discount)

                </h3>
                <div className="flex flex-col items-center justify-center p-6 border mt-6 rounded-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                    <img src={product.image} alt={product.name} className="w-40 h-28 mb-4" />
                    <p className="text-lg text-gray-600">{product.description}</p>
                </div>
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