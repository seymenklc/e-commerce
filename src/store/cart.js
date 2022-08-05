import create from "zustand";

export const useCartStore = create(set => ({
    cart: [],

    addToCart: (newProduct) => set(state => {
        newProduct.qty = 1;
        const product = state.cart.find(product => product.id === newProduct.id);
        if (product) {
            return {
                cart: state.cart.map(p => {
                    if (p.id === product.id) {
                        return { ...p, qty: p.qty + 1 };
                    }
                    return p;
                })
            };
        }
        return {
            cart: [...state.cart, newProduct]
        };
    }),
    increaseQuantity: (productId) => set(state => {
        const product = state.cart.find(p => p.id === productId);
        return {
            cart: state.cart.map(p => {
                if (product.id === p.id) {
                    return { ...p, qty: p.qty + 1 };
                }
                return p;
            })
        };
    }),
    decreaseQuantity: (productId) => set(state => {
        const product = state.cart.find(p => p.id === productId);
        return {
            cart: state.cart.map(p => {
                if (product.id === p.id) {
                    return { ...p, qty: p.qty - 1 };
                }
                return p;
            })
        };
    }),
    removeFromCart: (productId) => set(state => {
        return {
            cart: state.cart.filter(product => product.id !== productId)
        };
    })
}));