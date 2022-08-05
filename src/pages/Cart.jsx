import { useEffect } from "react";
import { useCartStore } from "../store/cart";
import { useNavigate } from "react-router-dom";
// components
import Checkout from "../components/Checkout";
import CartProducts from "../components/CartProducts";

export default function Cart() {
    const cart = useCartStore(state => state.cart);
    const navigate = useNavigate();

    useEffect(() => {
        if (cart.length < 1) navigate('/');
    }, [cart]);

    return (
        <div className="max-w-[800px] mx-auto p-5 flex gap-5 items-start justify-center">
            {cart.length > 0 && (
                <>
                    <CartProducts />
                    <Checkout />
                </>
            )}
        </div>
    );
}