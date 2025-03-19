import ComparisonTable from "../../components/ComparisonTable";
import ProductsItem from "./Products";


const Treatment = () => {

    return (
        <div className="max-w-xl mx-auto" id="categorySection">
            <ProductsItem />
            <ComparisonTable />
        </div>
    );
};

export default Treatment;
