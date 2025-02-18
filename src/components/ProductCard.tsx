import { Category } from "../config/types";

export const ProductCard: React.FC<{ product: Category['products'][0] }> = ({ product }) => {
    return (
        <div className="rounded overflow-hidden bg-white p-4 mb-4 border border-blue-50">
            <div className="text-center mb-4">
                <img className="w-full mx-auto" src={product.images[0]} alt={product.name} />
            </div>
            <div className="text-center mb-4">
                <span className="text-green-500 font-semibold">Instant savings: ${product.trialPackage.instantSavings}</span>
            </div>
            <div className="text-center mb-4">
                <span className="text-4xl font-bold">${product.trialPackage.pricePerMonth}</span>
                <span className="text-lg text-gray-500 line-through ml-2">${product.trialPackage.regularPrice}</span>
                <p className="text-sm text-gray-600">Per bottle</p>
            </div>
            <div className="flex flex-col items-center mb-4">
                <label className="inline-flex items-center mb-2">
                    <input type="radio" className="form-radio h-5 w-5 text-blue-600" name="purchaseOption" defaultChecked />
                    <span className="ml-2 text-gray-700">Subscribe & Save 20% - ${product.trialPackage.pricePerMonth} <span className="line-through text-gray-500">${product.trialPackage.regularPrice}</span></span>
                </label>
                <span className="text-gray-500 text-sm">Delivery every month</span>
                <label className="inline-flex items-center mt-2">
                    <input type="radio" className="form-radio h-5 w-5 text-blue-600" name="purchaseOption" />
                    <span className="ml-2 text-gray-700">One-time Purchase - ${product.trialPackage.regularPrice}</span>
                </label>
            </div>
            <div className="text-center">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full">
                    Add to Cart
                </button>
            </div>
            <div className="text-center mt-2 text-sm text-gray-600">
                <p>Total: ${product.trialPackage.pricePerMonth} + FREE Shipping</p>
                <p>90-Day Money Back Guarantee</p>
            </div>
        </div>
    );
};
