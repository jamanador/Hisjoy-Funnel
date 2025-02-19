import { Category } from "../config/types";

export const ProductCard: React.FC<{ product: Category['products'][0] }> = ({ product }) => {
    return (
        <div className="rounded-3xl product-card overflow-hidden shadow-sm bg-white mb-0 border border-blue-50 hover:border-blue-100 transition-all duration-1000 hover:cursor-pointer mx-4 md:mx-0">
            <div className="text-center my-4">
                <img className="w-11/12 h-full mx-auto" src={product.images[0]} alt={product.name} />
            </div>
            <div className="text-center mb-4">
                <h2 className="text-2xl font-extrabold mt-5">{product.name}</h2>
                <span className="text-green-500 font-semibold italic text-sm">Instant savings: ${product.trialPackage.instantSavings}</span>
            </div>
            <div className="text-center mb-4">
                <span className="text-4xl font-bold animate-pulse">${product.trialPackage.pricePerMonth}</span><br />
                <span className="font-bold text-black">{product.trialPackage.tablets} Tablets</span>
                <p className="text-sm text-gray-500 font-semibold">Regularly<span className=" text-red-400 font-semibold mx-1">${product.trialPackage.regularPrice}</span>Per Tablet</p>
            </div>
            <div className="flex flex-col items-center mb-4">
                <p className="text-gray-700 text-base font-semibold">
                    Doctor visit - <span className="line-through">${product.additionalInfo.doctorVisit.price}</span> - {product.additionalInfo.doctorVisit.isFree ? 'Free' : ''}
                </p>
                <p className="text-gray-700 text-base font-semibold">
                    Shipping - <span className="line-through">${product.additionalInfo.shipping.price}</span> - {product.additionalInfo.shipping.isFree ? 'Free' : ''}
                </p>
                <p className="text-gray-700 text-base font-semibold">Total: ${product.additionalInfo.total}</p>
            </div>
            <div className="text-center lg:mx-4 mx-2">
                <button className="bg-brand-maroon hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded w-full
                focus:outline-none focus:shadow-outline cursor-pointer" onClick={() => alert("Product added to cart!")}>
                    Add to Cart
                </button>
            </div>
            <div className="text-center mt-2 mb-4 text-sm text-gray-900">
                <p className="font-semibold">Total: ${product.additionalInfo.total} + FREE Shipping</p>
                <p className="italic font-medium">{product.additionalInfo.guarantee}</p>
            </div>
        </div>
    );
};
