import { useCartStore } from "../store/cart";
import { calcTotal } from '../utils/calcTotal';

export default function Checkout() {
    const cart = useCartStore(state => state.cart);
    const totalPrice = calcTotal(cart);

    return (
        <div className="p-3 border border-red-400 rounded-md flex flex-col gap-4 w-64 h-52">
            <div className="flex flex-col">
                <h6 className="text-lg">Total</h6>
                <h3 className="text-3xl">${totalPrice}</h3>
                <button
                    className="bg-red-400 mt-5 p-2 hover:bg-red-500
                rounded-lg text-zinc-50 text-lg font-semibold"
                >
                    Proceed
                </button>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Shipment</p>
                <div className="flex gap-2">
                    <span className="text-green-500">{totalPrice > 100 && 'Free'}</span>
                    <span className={totalPrice > 100 ? 'line-through text-zinc-500' : ''}>
                        $4.99
                    </span>
                </div>
            </div>
        </div>
    );
}