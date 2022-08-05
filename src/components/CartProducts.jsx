import { useCartStore } from '../store/cart';
import CartProduct from './CartProduct';

export default function CartProducts() {
    const cart = useCartStore(state => state.cart);

    return (
        <div className='flex flex-col gap-3'>
            {cart.map(product => (
                <CartProduct key={product.id} product={product} />
            ))}
        </div>
    );
}