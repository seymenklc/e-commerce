import create from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(persist(
    (set, get) => ({
        favorites: [],

        addToFavorites: (newProduct) => set(state => {
            const product = state.favorites.find(product => product.id === newProduct.id);
            if (product) {
                return { favorites: [...state.favorites] };
            };
            return { favorites: [...state.favorites, newProduct] };
        }),
        removeFromFavorites: (productId) => set(state => {
            return {
                favorites: state.favorites.filter(product => product.id !== productId)
            };
        })
    }),
    { name: 'favorites' }
));
