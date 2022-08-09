import { useState, useEffect } from "react";
import products from '../api';

export const useFetchProducts = (sortVal, selectedCategory, productId) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    let sort = '';
    if (sortVal) {
        sort = '?sort=' + sortVal;
    }

    let category = '';
    if (selectedCategory) {
        category = `category/${selectedCategory}`;
    }


    const fetchProducts = async () => {
        let productData;
        try {
            setIsLoading(true);
            if (productId && location.pathname.includes('product')) {
                productData = await products.get(productId);
            } else {
                productData = await products.get(category?.concat(sort));
            }
            setData(productData.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [sortVal, selectedCategory]);

    return { data, isLoading, error };
};