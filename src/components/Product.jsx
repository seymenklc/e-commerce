import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';
import { useCartStore } from '../store/cart';

export default function Product({ product }) {
    const addToCart = useCartStore(state => state.addToCart);

    const strLen = 40;

    return (
        <div className="border border-red-400 p-4 w-56 h-80 rounded-lg flex flex-col items-center justify-between">
            <Link to={`/product/${product.id}`} className="flex items-start">
                <img
                    src={product.image}
                    alt={product.title}
                    className='max-h-36 w-36 object-scale-down'
                />
            </Link>
            <Link to={`/product/${product.id}`} className="flex items-center justify-center w-full h-24">
                <p className="text-center text">
                    {product.title.length > strLen
                        ? product.title.substring(0, strLen) + '...'
                        : product.title}
                </p>
            </Link>
            <div className='flex'>
                <button
                    onClick={() => addToCart(product)}
                    className='p-2 bg-red-400  rounded-l-md hover:bg-red-500'
                >
                    <CgShoppingCart className='h-5 w-5 text-zinc-50' />
                </button>
                <span className='bg-green-200 font-semibold p-2 rounded-r-md'>
                    ${product.price}
                </span>
            </div>
        </div>
    );
}