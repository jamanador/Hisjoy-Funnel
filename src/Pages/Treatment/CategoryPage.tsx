import { useNavigate, useParams } from "react-router-dom";

// Static product data
const products = [
    { name: "Cialis", category: "cialis", image: "/images/cialis.png", description: "Cialis is used for ED treatment." },
    { name: "Viagra", category: "viagra", image: "/images/viagra.png", description: "Viagra helps with ED issues." }
];

const CategoryPage = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();

    // Filter products by category
    const filteredProducts = products.filter((p) => p.category === categoryName);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">Category: {categoryName}</h1>
            <div className="grid grid-cols-1 gap-4 mt-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.name}
                            className="cursor-pointer p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
                            onClick={() => navigate(`/home/treatment/product/${product.name.toLowerCase()}`)}
                        >
                            <img src={product.image} alt={product.name} className="w-32 h-20 mb-2" />
                            <h3 className="text-lg font-bold">{product.name}</h3>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No products found for this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
