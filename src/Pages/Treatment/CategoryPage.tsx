import { useParams } from "react-router-dom";
import categories from "../../config";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  // Find the category object that matches the selected category (with finding case-insensitive)
  const selectedCategory = categories.find(
    (cat) => cat.categoryName.toLowerCase() === category?.toLowerCase()
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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{selectedCategory.categoryName}</h1>
      {selectedCategory.products.map((product, index) => (
        <div key={index} className="border p-4 mb-4 rounded-lg">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p>{product.description}</p>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-64 h-64 object-cover mt-2"
          />
          {/* Additional product details can be displayed here */}
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
