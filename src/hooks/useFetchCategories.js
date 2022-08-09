import { useEffect, useState } from "react";
import products from '../api';

export const useFetchCategories = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCategories = async () => {
        try {
            setIsLoading(true);
            const { data } = await products.get('/categories');
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return { data, isLoading, error };
};