import { useFetchProducts } from "../hooks/useFetchProducts";
import Product from "./Product";

export default function Products({ selectedCategory }) {
    const { data, isLoading, error } = useFetchProducts('asc', selectedCategory);

    return (
        <div className="flex flex-wrap items-center justify-center gap-12 mt-6">
            {isLoading && <p className="text-center">Loading...</p>}
            {!isLoading && data.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
